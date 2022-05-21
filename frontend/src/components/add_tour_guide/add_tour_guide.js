import React from "react";
import "./add_tour_guide.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const initialState = {
  name: "",
  cnic: "",
  dob: "",
  gender: "",
  mobile: "",
  whatsapp: "",
  landline: "",
  email: "",
  sector: "",
  address: "",
  country: "",
  longlat: "",
  regDateTime: "",
  regStatus: "",

  nameerror: "",
  cnicerror: "",
  doberror: "",
  gendererror: "",
  emailerror: "",
  mobileerror: "",
  whatsapperror: "",
  landlineerror: "",
  sectorerror: "",
  addresserror: "",
  countryerror: "",
  longLaterror: "",
  regDateTimeerror: "",
  regStatuserror: "",
};

class add_tour_guide extends React.Component {
  state = initialState;

  onChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  validate = () => {
    let nameerror = "";
    let cnicerror = "";
    let doberror = "";
    let gendererror = "";
    let emailerror = "";
    let mobileerror = "";
    let whatsapperror = "";
    let landlineerror = "";
    let sectorerror = "";
    let addresserror = "";
    let countryerror = "";
    let longLaterror = "";
    let regDateTimeerror = "";
    let regStatuserror = "";

    if (!this.state.name) {
      nameerror = "Please Enter Tour Guide's Name";
    }

    if (!this.state.name) {
      cnicerror = "Please Enter Tour Guide's Cnic";
    }

    if (!this.state.gender) {
      gendererror = "Please Enter Tour Guide's Gender";
    }

    if (!this.state.name) {
      doberror = "Please Enter Tour Guide's Date Of Birth";
    }

    if (!this.state.email) {
      emailerror = "Please Enter Tour Guide Email";
    }

    if (!this.state.name) {
      mobileerror = "Please Enter Tour Guide Mobile #";
    }

    if (!this.state.name) {
      whatsapperror = "Please Enter Tour Guide Whatsapp #";
    }

    if (!this.state.name) {
      landlineerror = "Please Enter Tour Guide Landline #";
    }

    if (!this.state.country) {
      countryerror = "Please Enter Country Name";
    }

    if (!this.state.name) {
      sectorerror = "Please Enter Tour Guide's Sector";
    }
    if (!this.state.address) {
      addresserror = "Please Enter Tour Guide's Address";
    }

    if (!this.state.gender) {
      longLaterror =
        "Please Enter Physical Location of Tour Guide (Longitude,Latitude)";
    }

    if (!this.state.gender) {
      regDateTimeerror = "Please Enter Registration Date,Time";
    }

    if (!this.state.gender) {
      regStatuserror = "Please Enter Tour Guide Status";
    }

    if (
      nameerror ||
      cnicerror ||
      doberror ||
      gendererror ||
      emailerror ||
      mobileerror ||
      whatsapperror ||
      landlineerror ||
      sectorerror ||
      addresserror ||
      countryerror ||
      longLaterror ||
      regDateTimeerror ||
      regStatuserror
    ) {
      this.setState({
        nameerror,
        cnicerror,
        doberror,
        gendererror,
        emailerror,
        mobileerror,
        whatsapperror,
        landlineerror,
        sectorerror,
        addresserror,
        countryerror,
        longLaterror,
        regDateTimeerror,
        regStatuserror,
      });
      return false;
    }
    swal("Tour Guide Registered Successfully!", "No warnings! ", "success");
    return true;
  };

  onSubmitHandler = (e) => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.name);
      console.log(this.state.cnic);
      console.log(this.state.dob);
      console.log(this.state.mobile);
      console.log(this.state.whatsapp);
      console.log(this.state.landline);
      console.log(this.state.sector);
      console.log(this.state.longLat);
      console.log(this.state.regDateTime);
      console.log(this.state.regStatus);
      console.log(this.state.email);
      console.log(this.state.address);
      console.log(this.state.country);
      console.log(this.state.gender);

      //clear form
      this.setState(initialState);
    }

    if (
      this.state.name == null &&
      this.state.cnic == null &&
      this.state.dob == null &&
      this.state.mobile == null &&
      this.state.whatsapp == null &&
      this.state.landline == null &&
      this.state.sector == null &&
      this.state.longLat == null &&
      this.state.regDateTime == null &&
      this.state.regStatus == null &&
      this.state.email == null &&
      this.state.phone == null &&
      this.state.address == null &&
      this.state.country == null &&
      this.state.gender == null
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
        email: this.state.email,
        address: this.state.address,
        country: this.state.country,
        gender: this.state.gender,
        cnic: this.state.cnic,
        dob: this.state.dob,
        mobile: this.state.mobile,
        whatsapp: this.state.whatsapp,
        landline: this.state.landline,
        sector: this.state.sector,
        longLat: this.state.longLat,
        regDateTime: this.state.regDateTime,
        regStatus: this.state.regStatus,
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
      cnic: "",
      dob: "",
      gender: "",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      sector: "",
      address: "",
      country: "",
      longlat: "",
      regDateTime: "",
      regStatus: "",
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

            <h1 className="o"> Tour Guide Registration</h1>
            <br></br>
            <br></br>
            <br></br>
          </div>

          <div className="container text-center mt-3">
            <form onSubmit={this.onSubmitHandler}>
              <div className="form-group">
                <label className="text-left">
                  <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Tour Guide
                  Name
                </label>
                <input
                  name="name"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="User Name"
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
                  <i class="fa fa-user" aria-hidden="true"></i>&nbsp;DATE OF
                  BIRTH
                </label>
                <input
                  name="dob"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Eg: dd/mm/yyyy"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.dob}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.doberror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-male" aria-hidden="true"></i>&nbsp;Gender
                </label>
                <input
                  name="gender"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Female / Male"
                  className="form-control"
                  value={this.state.gender}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.gendererror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;Mobile #
                </label>
                <input
                  name="mobile"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="With the country code (Eg: +92 123 4567598)"
                  className="form-control"
                  value={this.state.mobile}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.mobileerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;Whatsapp #
                </label>
                <input
                  name="whatsapp"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="With the country code (Eg: +92 123 4567598)"
                  className="form-control"
                  value={this.state.whatsapp}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.whatsapperror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;Landline #
                </label>
                <input
                  name="landline"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="With the country code (Eg: 051 123456)"
                  className="form-control"
                  value={this.state.landline}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.landlineerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;Email
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
                  <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;Sector
                </label>
                <input
                  name="sector"
                  onChange={this.onChangeHandler}
                  type="email"
                  placeholder="Sector"
                  className="form-control"
                  value={this.state.sector}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.sectorerror}
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
                <input
                  name="country"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Country"
                  className="form-control"
                  value={this.state.country}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.countryerror}
                </div>
              </div>

              <div className="form-group">
                <label className="text-left">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  &nbsp;Longitude,Latitude
                </label>
                <input
                  name="longlat"
                  onChange={this.onChangeHandler}
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.longlat}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.longlaterror}
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

export default add_tour_guide;
