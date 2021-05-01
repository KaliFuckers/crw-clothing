import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./menu-items.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <p className="title">{title.toUpperCase()}</p>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default withRouter(MenuItem);
