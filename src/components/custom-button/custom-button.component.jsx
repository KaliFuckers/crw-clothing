import "./custom-button.styles.scss";
import { CustomButtoncontainer } from "./custom-button.styles";

const CustomButton = ({ children, otherProps }) => {
  return (
    <CustomButtoncontainer {...otherProps}>{children}</CustomButtoncontainer>
  );
};

export default CustomButton;
