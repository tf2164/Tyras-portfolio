class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for your search",
      {
        widget: "javascriptLinks",
      }
    );
    this.updateChatbotState(message);
  };

  // Add new handlers for other learning options:
  handleReactList = () => {
    const message = this.createChatBotMessage(
      "Here are some great React resources for you!",
      {
        widget: "reactLinks",
      }
    );
    this.updateChatbotState(message);
  };

  handleNodeList = () => {
    const message = this.createChatBotMessage(
      "Check out these Node.js resources.",
      {
        widget: "nodeLinks",
      }
    );
    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;