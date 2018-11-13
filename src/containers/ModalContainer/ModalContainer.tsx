import * as React from "react";
import * as Immutable from "immutable";
import CreateChatRoom from "../../components/CreateChatRoom/CreateChatRoom";
import Styled from "./styles/Styled";

interface IModalContainerProps {
  chatRoomDetails?: string;
  chatRoomNameValue: any;
  handleChatRoomName: any;
  handleChatRoomSubmit: any;
  handleCloseModal: any;
  modalState: boolean;
  modalType: string;
}

interface IModalContainerState {
  modalIsOpen: boolean;
  modalType: string;
  chatRoomDetails: {
    name: string,
    members: Immutable.List<any>
  };
}

class ModalContainer extends React.Component<
  IModalContainerProps,
  IModalContainerState
> {
  constructor(props: IModalContainerProps) {
    super(props);

    this.state = {
      chatRoomDetails: {
        members: Immutable.List(),
        name: String("")
      },
      modalIsOpen: false,
      modalType: ""
    };
  }

  componentDidUpdate(prevProps: any) {
    /**
     * Checks the props to set the modal close or open state
     */
    const { modalState } = this.props;
    /**
     * if the props does not match state, set modal to open
     * @returns a boolean
     */
    if (modalState !== prevProps.modalState) {
      this.setState((prevState) => ({
        modalIsOpen: !prevState.modalIsOpen
      }));
    }
  }

  onKeyPress = (event: React.KeyboardEvent) => {
    /**
     * avoid the user to close modal by pressing enter
     *
     */
    if (event.which === 13) return event.preventDefault();
  };

  render() {
    const { modalIsOpen } = this.state;
    const { modalType, chatRoomNameValue } = this.props;
    const isEnabled = chatRoomNameValue.length > 0;

    return (
      <React.Fragment>
        {modalIsOpen && (
          <Styled.Section as="section" fluid={true} active={modalIsOpen}>
            {modalType === "newChatRoom" && (
              <CreateChatRoom
                onKeyPress={this.onKeyPress}
                closeComponent={this.props.handleCloseModal}
                isDisabled={!isEnabled}
                handleChange={this.props.handleChatRoomName}
                handleSubmit={this.props.handleChatRoomSubmit}
                value={this.props.chatRoomNameValue}
              />
            )}

            {modalType === "chatRoomDetails" && (
              <React.Fragment>
                <h1>{this.props.chatRoomDetails}</h1>
                <button onClick={this.props.handleCloseModal}>Close</button>
              </React.Fragment>
            )}
          </Styled.Section>
        )}
      </React.Fragment>
    );
  }
}

export default ModalContainer;
