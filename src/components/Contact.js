import React, { Component } from "react";

import FeedBackground from "../images/Feed_bg.jpg";
import Bg from "../images/bg.png";
import errorSign from "../images/Error.png";
import CheckIcon from "../images/check_icon.png";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      errors: {
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        message: false,
        validation: false,
        validated: false
      }
    };
  }

  /*handle changes input fields */
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /*handle form submit */
  handleSubmit = event => {
    this.setState({
      errors: this.validate(
        this.state.firstName,
        this.state.lastName,
        this.state.email,
        this.state.message,
        this.state.validated
      )
    });
    event.preventDefault();
  };

  /*validation method */
  validate = (firstName, lastName, email, message) => {
    const errors = {
      firstName: firstName.length === 0,
      lastName: lastName.length === 0,
      email: email.length === 0,
      message: message.length === 0
    };

    Object.entries(errors).filter(element => {
      return element[1] !== false;
    }).length === 0
      ? (errors.validated = true)
      : (errors.validation = true);

    return errors;
  };

  render() {
    const background = {
      backgroundImage: `url(${FeedBackground})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };

    const layOver = {
      backgroundImage: `url(${Bg})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
      errors
    } = this.state;

    return (
      <div className="contact-container" style={background}>
        <h2 className="contact-title">We would love to hear from you</h2>
        {errors.validation ? (
          <div className="error-message">
            <img src={errorSign} className="error-image" />
            <span className="error-text">
              Please complete the form and try again
            </span>
          </div>
        ) : (
          ""
        )}
        {errors.validated ? (
          <div className="contact-send">
            <img src={CheckIcon} className="error-image" />
            <span>thank you, we have reveived your message.</span>
          </div>
        ) : (
          <div className="contact">
            <form
              className="form-container"
              style={layOver}
              onSubmit={this.handleSubmit}
            >
              <div className="input-container">
                <input
                  className="input-contact"
                  type="text"
                  placeholder="First Name"
                  value={this.state.firstName}
                  name="firstName"
                  onChange={this.handleChange}
                />
                {errors.firstName ? (
                  <p className="error-label">We need your first name.</p>
                ) : (
                  ""
                )}
              </div>
              <div className="input-container">
                <input
                  className="input-contact"
                  type="text"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  name="lastName"
                  onChange={this.handleChange}
                />
                {errors.lastName ? (
                  <p className="error-label">We need your last name.</p>
                ) : (
                  ""
                )}
              </div>
              <div className="input-container">
                <input
                  className="input-contact"
                  type="text"
                  placeholder="Your e-mail address"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleChange}
                />
                {errors.email ? (
                  <p className="error-label">
                    Please use a valid e-mail address.
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="input-container">
                <input
                  className="input-contact"
                  type="text"
                  placeholder="Your phone number (optional)"
                  value={this.state.phoneNumber}
                  name="phoneNumber"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  className="message-box-contact"
                  type="text"
                  placeholder="Your message...."
                  value={this.state.message}
                  name="message"
                  onChange={this.handleChange}
                />
                {errors.message ? (
                  <p className="error-label">
                    Sorry, your message can't be empty.
                  </p>
                ) : (
                  ""
                )}
              </div>
              <input type="submit" className="submit-contact" value="Send" />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Contact;
