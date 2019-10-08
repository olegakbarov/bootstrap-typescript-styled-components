import * as React from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  TransitionComponent: any // TODO
  hidden: boolean
  transition: number
  visible: number
  delay: number
  duration: number
  timingFunc: string
  noInitialEnter: boolean
  innerRef?: any
  noEnter: boolean
  noExit: boolean
  hideOnExit: boolean
}

interface IState {
  initiallyVisible: boolean
  status: string
}

const getDelay = ({ delay }: IProps) => delay || 0;
const getDuration = ({ duration }: IProps) => duration || 500;
const getTimingFunction = ({ timingFunc }: IProps) => timingFunc || 'ease-out';
const getStatusChangeDelay = (props: IProps) => getDelay(props) + getDuration(props);

// TransitionFade is default transition component using
// opacity and visibility.
export const TransitionFade = styled.div`
  ${(props: IProps) => (
    props.hidden ? css`
      display: none;
    ` : null)}

  ${(props: IProps) =>
    (props.transition ?
      css`
      transition: visibility ${getDuration}ms ${getTimingFunction} ${getDelay}ms,
        opacity ${getDuration}ms ${getTimingFunction} ${getDelay}ms;
      ` : '')}

  ${(props) =>
    (props.visible
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `)}
`;

export enum TransitionState {
  UNMOUNTED = 'unmounted',
  ENTERING = 'entering',
  ENTERED = 'entered',
  EXITING = 'exiting',
  EXITED = 'exited',
}

type Cancellable = { cancel: () => void } 
type Callback = () => void

export class TransitionWithoutForwardingRef extends React.Component<IProps, IState> {
  static defaultProps = {
    transition: TransitionFade
  }

  refTransition: any
  nextCallback: any // TODO! this is actually -> null | Cancellable | Callback

  constructor(props: IProps) {
    super(props);
    this.state = {
      status: TransitionState.UNMOUNTED,
      initiallyVisible: !props.hidden,
    };
    this.refTransition = this.props.innerRef || React.createRef();
    this.nextCallback = null;
  }

  componentDidMount() {
    const { initiallyVisible } = this.state;
    const { noInitialEnter } = this.props;

    if (initiallyVisible) {
      if (noInitialEnter) {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({ status: TransitionState.ENTERED });
      } else {
        this.forceUpdate();

        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({ status: TransitionState.ENTERING }, () => {
          this.setNextCallback(
            () => this.setState({ status: TransitionState.ENTERED }),
            getStatusChangeDelay(this.props),
          );
        });
      }
    } else {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ status: TransitionState.EXITED });
    }
  }

  componentDidUpdate(prevProps) {
    const { noEnter, noExit, hideOnExit } = this.props;

    let nextStatus: string | null = null;
    let nextStatusCallback: null | Callback = null;
    if (prevProps !== this.props) {
      const { status } = this.state;

      if (this.props.hidden) {
        if (status === TransitionState.ENTERING || status === TransitionState.ENTERED) {
          if (noExit) {
            nextStatus = TransitionState.EXITED;
          } else {
            nextStatus = TransitionState.EXITING;
            nextStatusCallback = () => this.setState({ status: TransitionState.EXITED });
          }
        }
      } else if (status === TransitionState.EXITING || status === TransitionState.EXITED) {
        if (noEnter) {
          nextStatus = TransitionState.ENTERED;
        } else if (hideOnExit) {
          // If we were hidden (display: none), then we should first render
          // component with normal display.

          // This special case renders components without hidden, then renders
          // it with as visible, and after transition it will update status
          // to ENTERED.

          // eslint-disable-next-line react/no-did-update-set-state
          this.setState({ status: TransitionState.UNMOUNTED }, () => {
            this.setNextCallback(() => this.setState({ status: TransitionState.ENTERING }, () => {
              this.setNextCallback(
                () => this.setState({ status: TransitionState.ENTERED }),
                getStatusChangeDelay(this.props),
              );
            }), 0);
          });
          return;
        } else {
          nextStatus = TransitionState.ENTERING;
          nextStatusCallback = () => this.setState({ status: TransitionState.ENTERED });
        }
      }
    }
    if (nextStatus != null) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ status: nextStatus }, () => {
        this.setNextCallback(nextStatusCallback, getStatusChangeDelay(this.props));
      });
    }
  }

  componentWillUnmount() {
    if (this.nextCallback != null) {
      this.nextCallback.cancel();
    }
  }

  setNextCallback(callback: Callback | null, delay: number) {
    // This method helps to avoid multiple simultaneous callbacks. 
    // It clears already set callbacks and schedules new one.

    if (this.nextCallback != null) {
      if (this.nextCallback.cancel) {
        this.nextCallback.cancel();
      }
    }

    let active = true;

    this.nextCallback = () => {
      if (!active) { return; }

      active = false;
      this.nextCallback = null;

      if (callback != null) {
        callback();
      }
    };

    if (this.nextCallback) {
      this.nextCallback.cancel = () => {
        active = false;
      };
    }

    setTimeout(this.nextCallback, delay);

    return this.nextCallback;
  }

  forceUpdate() {
    // Force repaint for transitions to work

    // eslint-disable-next-line no-unused-expressions
    this.refTransition.current && this.refTransition.current.scrollTop;
  }

  render() {
    const {
      innerRef,
      TransitionComponent,
      children,
      noExit,
      noEnter,
      noInitialEnter,
      hideOnExit,
      ...transitionProps
    } = this.props;

    const { status } = this.state;

    delete transitionProps.hidden; /* We can't use `hidden` as it just hides element */

    transitionProps.hidden = status === TransitionState.EXITED && hideOnExit;
    transitionProps.visible = (status === TransitionState.ENTERING || status === TransitionState.ENTERED) ? 1 : 0;
    transitionProps.transition =
      ((status === TransitionState.ENTERING || status === TransitionState.ENTERED) && !noEnter) ||
      ((status === TransitionState.EXITING || status === TransitionState.EXITED) && !noExit)
        ? 1
        : 0;

    return (
      <TransitionComponent ref={this.refTransition} {...transitionProps}>
        {children}
      </TransitionComponent>
    );
  }
}

export const Transition = React.forwardRef<HTMLElement, IProps>((props: IProps, ref: React.Ref<HTMLElement>) => (
  <TransitionWithoutForwardingRef innerRef={ref} {...props} />
));
