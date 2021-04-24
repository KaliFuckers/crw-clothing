import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  // type,
  // onClick,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    // type={type}
    // onClick={onClick}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
