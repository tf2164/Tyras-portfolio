import React from 'react';

class SectionNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  showSection(index) {
    this.setState({ currentIndex: index });
  }

  goToNextSection() {
    const { currentIndex } = this.state;
    const { sections } = this.props;

    if (currentIndex < sections.length - 1) {
      this.setState({ currentIndex: currentIndex + 1 });
    }
  }

  render() {
    const { currentIndex } = this.state;
    const { sections } = this.props;

    return (
      <div>
        {sections.map((section, index) => (
          <div key={index} className={currentIndex === index ? 'section active' : 'section'}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
        <button onClick={() => this.goToNextSection()}>Next</button>
      </div>
    );
  }
}

export default SectionNavigation;
