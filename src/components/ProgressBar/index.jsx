import "./index.css";

const ProgressBar = ({ progress, color }) => {
  const styleObject = {
    width: `${progress}%`,
    backgroundColor: color || "red",
    height: 30,
    borderRadius: 20,
  };
  return (
    <div className="container">
      <div className="progress-bar">
        <div style={styleObject}>{`${progress}%`}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
