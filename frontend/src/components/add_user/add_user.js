import React, { Component } from "react";
import "./add_user.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { FormControlLabel, Select, MenuItem } from "@material-ui/core";

const initialState = {
  name: "",
  password: "",
  cnic: "",
  username: "",
  Gender: "",
  mobileNumber: "",
  email: "",
  address: "",
  country: "",

  nameerror: "",
  passworderror: "",
  cnicerror: "",
  usernameerror: "",
  Gendererror: "",
  emailerror: "",
  mobileNumbererror: "",
  addresserror: "",
  countryerror: "",
};

class add_user extends React.Component {
  state = initialState;

  onChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  validate = () => {
    let nameerror = "";
    let passworderror = "";
    let cnicerror = "";
    let usernameerror = "";
    let Gendererror = "";
    let emailerror = "";
    let mobileNumbererror = "";
    let addresserror = "";
    let countryerror = "";

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!this.state.name) {
      nameerror = "Please Enter User's Name";
    }

    if (!this.state.password) {
      passworderror = "Please Enter User's Password";
    } else if (this.state.password.length < 4) {
      passworderror = "Password should not be less then 4 numbers";
    } else if (this.state.password.length > 10) {
      passworderror = "Password should not be more than 10 numbers";
    }

    if (!this.state.cnic) {
      cnicerror = "Please Enter User's Cnic";
    } else if (this.state.cnic.length != 13) {
      cnicerror = "cnic should contain 13 numbers";
    }
    if (!this.state.Gender) {
      Gendererror = "Please Enter User's Gender";
    }

    if (!this.state.name) {
      usernameerror = "Please Enter User's User Name";
    }

    if (!this.state.email) {
      emailerror = "Please Enter User's Email";
    } else if (!regex.test(this.state.email)) {
      emailerror = "This is not correct email";
    }
    if (!this.state.name) {
      mobileNumbererror = "Please Enter User's Mobile Number #";
    }

    if (!this.state.country) {
      countryerror = "Please Enter Country Name";
    }

    if (!this.state.address) {
      addresserror = "Please Enter User's Address";
    }

    if (
      nameerror ||
      passworderror ||
      cnicerror ||
      usernameerror ||
      Gendererror ||
      emailerror ||
      mobileNumbererror ||
      addresserror ||
      countryerror
    ) {
      this.setState({
        nameerror,
        passworderror,
        cnicerror,
        usernameerror,
        Gendererror,
        emailerror,
        mobileNumbererror,
        addresserror,
        countryerror,
      });
      return false;
    }
    swal("User Registered Successfully!", "No warnings! ", "success");
    return true;
  };

  onSubmitHandler = (e) => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.name);
      console.log(this.state.password);
      console.log(this.state.cnic);
      console.log(this.state.username);
      console.log(this.state.mobileNumber);
      console.log(this.state.email);
      console.log(this.state.address);
      console.log(this.state.country);
      console.log(this.state.Gender);

      //clear form
      this.setState(initialState);
    }

    if (
      this.state.name == null &&
      this.state.password == null &&
      this.state.cnic == null &&
      this.state.username == null &&
      this.state.mobileNumber == null &&
      this.state.email == null &&
      this.state.phone == null &&
      this.state.address == null &&
      this.state.country == null &&
      this.state.Gender == null
    ) {
      return alert("Cannot submit empty fields");
    }
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        name: this.state.password,
        email: this.state.email,
        address: this.state.address,
        country: this.state.country,
        Gender: this.state.Gender,
        cnic: this.state.cnic,
        username: this.state.username,
        mobileNumber: this.state.mobileNumber,
      }),
    })
      .then(function (callback) {
        console.log(callback.json());
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
    this.setState({
      name: "",
      password: "",
      cnic: "",
      username: "",
      Gender: "",
      mobileNumber: "",
      email: "",
      address: "",
      country: "",
    });
  };

  state = {
    flagImg:
      "https://raw.githubusercontent.com/MeRahulAhire/intl-tel-code-select/master/phone_icon.png",
    countryCodeValue: "",
    phone: "",
  };
  selectCountryHandler = (e) => {
    this.setState({ countryCodeValue: e.target.value });
  };
  phoneHandler = (e) => {
    this.setState({ phone: e.target.value });
  };
  countryFlagHandler = () => {
    const select = document.querySelector("#country");
    this.setState({
      flagImg: `https://flagpedia.net/data/flags/h80/${select.selectedOptions[0].dataset.countrycode.toLowerCase()}.webp`,
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.formSubmitHandler}>
          <div className="container text-center">
            <br></br>
            <br></br>
            <br></br>

            <h1 className="o"> User Registration</h1>
            <br></br>
            <br></br>
            <br></br>
          </div>

          <div className="container text-center mt-3">
            <form onSubmit={this.onSubmitHandler}>
              <div className="form-group">
                <label className="text-left">
                  <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Name
                </label>
                <input
                  name="name"
                  onChange={this.onChangeHandler}
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.name}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.nameerror}
                </div>
              </div>

              <div className="form-group">
                <label className="text-left">
                  <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Password
                </label>
                <input
                  name="password"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Password"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.password}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.passworderror}
                </div>
              </div>

              <div className="form-group">
                <label className="text-left">
                  <i class="fa fa-user" aria-hidden="true"></i>&nbsp;CNIC
                </label>
                <input
                  name="cnic"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Eg: 38431-5643567-1"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.cnic}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.cnicerror}
                </div>
              </div>

              <div className="form-group">
                <label className="text-left">
                  <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Username
                </label>
                <input
                  name="username"
                  onChange={this.onChangeHandler}
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.username}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.usernameerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-male" aria-hidden="true"></i>&nbsp;Gender
                </label>
                <RadioGroup
                  name="Gender"
                  onChange={this.onChangeHandler}
                  value={this.state.Gender}
                  required
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>

                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.Gendererror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  &nbsp;MobileNumber #
                </label>
                {/* <input
                  name="mobileNumber"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="With the country code (Eg: +92 123 4567598)"
                  className="form-control"
                  value={this.state.mobileNumber}
                  required
                /> */}

                <div className="container">
                  <div className="tel-box">
                    <div
                      className="select-box"
                      onChange={this.countryFlagHandler}
                    >
                      <img
                        src={this.state.flagImg}
                        alt="country-flag"
                        id="img"
                        className="flag-img"
                      />
                      <select
                        id="country"
                        onChange={this.selectCountryHandler}
                        defaultValue={this.state.countryCodeValue}
                      >
                        <option value="" hidden>
                          Select Country
                        </option>
                        <option data-countryCode="IN" value="91">
                          India (+91)
                        </option>
                        <option data-countryCode="PK" value="92">
                          Pakistan (+92)
                        </option>
                        <option data-countryCode="US" value="1">
                          United States (+1)
                        </option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      placeholder="945 678 0391"
                      className="tel"
                      onChange={this.phoneHandler}
                      defaultValue={this.state.phone}
                    />
                  </div>
                  <div className="output">
                    <span className="result">
                      +{this.state.countryCodeValue}
                      {this.state.phone}
                    </span>
                  </div>
                </div>

                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.mobileNumbererror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp; User
                  Email
                </label>
                <input
                  name="email"
                  onChange={this.onChangeHandler}
                  type="email"
                  placeholder="User Email"
                  className="form-control"
                  value={this.state.email}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.emailerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-address-card" aria-hidden="true"></i>
                  &nbsp;Address
                </label>
                <input
                  name="address"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Address"
                  className="form-control"
                  value={this.state.address}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.addresserror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-globe" aria-hidden="true"></i>&nbsp;Country
                </label>
                <br></br>
                <Select
                  name="country"
                  onChange={this.onChangeHandler}
                  value={this.state.country}
                  required
                  displayEmpty
                >
                  <MenuItem value=" " disabled>
                    Choose Country
                  </MenuItem>
                  <MenuItem value={1}>Pakistan</MenuItem>
                  <MenuItem value={2}>USA</MenuItem>
                  <MenuItem value={3}>India</MenuItem>
                  <MenuItem value={4}>China</MenuItem>
                  <MenuItem value={5}>England</MenuItem>
                </Select>
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.countryerror}
                </div>
              </div>

              <br></br>
              <br></br>
              <div className="form-group">
                <button
                  className="btn btn-danger"
                  onClick={this.onSubmitHandler}
                >
                  <i className="fa fa-send"></i>&nbsp; Submit
                </button>
                <Link to="/home">
                  <button className="btn btn-info ml-2">
                    <i className="fa fa-arrow-left"></i>&nbsp; Back to Home Page
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </form>
      </div>
    );
  }
}

export default add_user;
