import "./LearningOptions.css";

const LearningOptions = (props) => {


  const handleResume = () => {
    // Direct link to your resume PDF in the public folder
    const pdfPath = "/Tyra Fair swe intern.pdf";
    window.open(pdfPath, "_blank");
  };
  const handleLinkedIn = () => {
    props.actionProvider.createChatBotMessage(
      "LinkedIn: https://www.linkedin.com/in/your-linkedin-username\nName: Tyra Fair\nTitle: SWE Intern"
    );
  };

  const options = [
    {
      text: "LinkedIn",
      handler: handleLinkedIn,
      id: 1,
    },
    { text: "Resume", handler: handleResume, id: 2 },
    { text: "Portfolio Projects", handler: () => {}, id: 3 },
    { text: "Passion Projects", handler: () => {}, id: 4 },
    // { text: "Interview prep", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
