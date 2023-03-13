import { Link } from "react-router-dom";
import hangit from "../../images/hangit.png";

export const NoMatch = () => {
  return (
    <div className="not-found-container">
      <div className="textContainer">
        <h2 className="sorry">Sorry</h2>
        <h4 className="sorry-text">we couldn't find that page</h4>
      </div>
      <Link className="back-btn" to="/">
        Back to home
      </Link>
      <img className="logo" src={hangit} alt="logo" />
    </div>
  );
};
