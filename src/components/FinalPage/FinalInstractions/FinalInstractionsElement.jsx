import "./FinalInstractions";

const FinalInstractionsElement = ({ text, highlightWord, pic }) => {
  const renderTextWithHighlight = (text, highlightWord) => {
    const regex = new RegExp(`(${highlightWord})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="FinalInstractionsElement">
        <div className="FinalInstractionsElement__pic">{pic}</div>
        <div className="FinalInstractionsElement__text">
        <p>{renderTextWithHighlight(text, highlightWord)}</p>
        </div>


    </div>
  );
};

export default FinalInstractionsElement;
