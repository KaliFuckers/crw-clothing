import "./form-input.styles.scss";
import PropTypes from "prop-types";

const FormInput = ({ handleChange, type, label, name, required, value }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      name={name}
      type={type}
      value={value}
      required={required ? required : null}
    />
    {label ? (
      <label className={`${value.length ? "shrink" : ""} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  // name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
};

FormInput.defaultPropTypes = {
  required: true,
};

export default FormInput;
