// PlatformButton.js
import logo from "../components/logos";
function PlatformButton({ platform }) {

  return (
    <div className="platform-buttons">
      <a className="button" href={platform} target="_blank" rel="noreferrer">
        <img src={logo.platform} alt={`${platform} Icon`} />
        <span>{platform}</span>
      </a>
    </div>
  );
}

export default PlatformButton;