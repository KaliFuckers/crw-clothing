import "./custom-button.styles.scss";

const CustomButton = ({ children, type, onClick, isGoogleSignIn }) => (
  <button
    className={` ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default CustomButton;
