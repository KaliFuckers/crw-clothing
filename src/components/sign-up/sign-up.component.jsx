import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { connect } from "react-redux";
import { emailSignUpStart } from "../../redux/user/user.actions";
import React, { Component } from "react";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword, displayName, email } = this.state;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    if (displayName.length < 3) {
      alert("Full Name is not valid");
      return;
    }
    if (email.length < 3) {
      alert("Invalid Email");
      return;
    }
    if (password.length < 3 || confirmPassword.length < 3) {
      alert("Invalid password o invalid confirm password");
      return;
    }

    try {
      // const {
      //   user,
      // } = await FirebaseService.auth.createUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      // await FirebaseService.createUserProfileDocument(user, {
      //   displayName,
      // });
      await this.props.emailSignUp(
        this.state.email,
        this.state.password,
        this.state.displayName
      );

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            label="Full Name"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            label="Email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            label="Password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <CustomButton otherProps={{ type: "submit" }}>Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailSignUp: (email, password, displayName) =>
    dispatch(emailSignUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);
