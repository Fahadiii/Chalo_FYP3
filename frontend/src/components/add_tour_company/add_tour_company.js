import React from "react";
import "./add_tour_company.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const initialState = {
  name: "",
  companySector: "",
  companyLongLat: "",
  companyWebsite: "",
  companyFacebook: "",
  companyInsta: "",
  phone: "",
  companyWhatsapp: "",
  companyLandline: "",
  email: "",
  address: "",
  country: "",
  companyRegDateTime: "",
  companyRegStatus: "",

  nameerror: "",
  companySectorerror: "",
  companyLongLatError: "",
  companyWebsiteError: "",
  companyFacebookError: "",
  companyInstaError: "",
  emailerror: "",
  phoneerror: "",
  companyWhatsapperror: "",
  companyLandlineerror: "",
  addresserror: "",
  countryerror: "",
  companyRegDateTimeerror: "",
  companyRegStatuserror: "",
};

class add_tour_company extends React.Component {
  state = initialState;

  onChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  validate = () => {
    let nameerror = "";
    let companyWebsiteError = "";
    let companyFacebookError = "";
    let companyInstaError = "";
    let emailerror = "";
    let phoneerror = "";
    let companyWhatsapperror = "";
    let companyLandlineerror = "";
    let companySectorerror = "";
    let addresserror = "";
    let countryerror = "";
    let companyLongLatError = "";
    let companyRegDateTimeerror = "";
    let companyRegStatuserror = "";

    if (!this.state.name) {
      nameerror = "Please Enter Tour Company's Name";
    }

    if (!this.state.companyWebsite) {
      companyWebsiteError = "Please Enter Tour Company's Website";
    }

    if (!this.state.gender) {
      companyFacebookError = "Please Enter Tour Company's FaceBook ID";
    }

    if (!this.state.name) {
      companyInstaError = "Please Enter Tour Company's Instagram ID";
    }

    if (!this.state.email) {
      emailerror = "Please Enter Tour Company's Email";
    }

    if (!this.state.name) {
      phoneerror = "Please Enter Tour Company Mobile #";
    }

    if (!this.state.name) {
      companyWhatsapperror = "Please Enter Tour Company Whatsapp #";
    }

    if (!this.state.name) {
      companyLandlineerror = "Please Enter Tour Company Landline #";
    }

    if (!this.state.country) {
      countryerror = "Please Enter Country Name";
    }

    if (!this.state.name) {
      companySectorerror = "Please Enter Tour Company's companySector";
    }
    if (!this.state.address) {
      addresserror = "Please Enter Tour Company's Address";
    }

    if (!this.state.gender) {
      companyLongLatError =
        "Please Enter Physical Location of Tour Company (Longitude,Latitude)";
    }

    if (!this.state.gender) {
      companyRegDateTimeerror = "Please Enter Registration Date,Time";
    }

    if (!this.state.gender) {
      companyRegStatuserror = "Please Enter Tour Company Status";
    }

    if (
      nameerror ||
      companyWebsiteError ||
      companyFacebookError ||
      companyInstaError ||
      emailerror ||
      phoneerror ||
      companyWhatsapperror ||
      companyLandlineerror ||
      companySectorerror ||
      addresserror ||
      countryerror ||
      companyLongLatError ||
      companyRegDateTimeerror ||
      companyRegStatuserror
    ) {
      this.setState({
        nameerror,
        companyWebsiteError,
        companyFacebookError,
        companyInstaError,
        emailerror,
        phoneerror,
        companyWhatsapperror,
        companyLandlineerror,
        companySectorerror,
        addresserror,
        countryerror,
        companyLongLatError,
        companyRegDateTimeerror,
        companyRegStatuserror,
      });
      return false;
    }
    swal("Guest Details Added Successfully!", "No warnings! ", "success");
    return true;
  };

  onSubmitHandler = (e) => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.name);
      console.log(this.state.companyWebsite);
      console.log(this.state.companyFacebook);
      console.log(this.state.companyInsta);
      console.log(this.state.phone);
      console.log(this.state.companyWhatsapp);
      console.log(this.state.companyLandline);
      console.log(this.state.companySector);
      console.log(this.state.companyLongLat);
      console.log(this.state.companyRegDateTime);
      console.log(this.state.companyRegStatus);
      console.log(this.state.email);
      console.log(this.state.address);
      console.log(this.state.country);

      //clear form
      this.setState(initialState);
    }

    if (
      this.state.name == null &&
      this.state.companyWebsite == null &&
      this.state.companyFacebook == null &&
      this.state.companyInsta == null &&
      this.state.phone == null &&
      this.state.companyWhatsapp == null &&
      this.state.companyLandline == null &&
      this.state.companySector == null &&
      this.state.companyLongLat == null &&
      this.state.companyRegDateTime == null &&
      this.state.companyRegStatus == null &&
      this.state.email == null &&
      this.state.phone == null &&
      this.state.address == null &&
      this.state.country == null
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
        companyInsta: this.state.companyInsta,
        companyWebsite: this.state.companyWebsite,
        companyFacebook: this.state.companyFacebook,
        phone: this.state.phone,
        companyWhatsapp: this.state.companyWhatsapp,
        companyLandline: this.state.companyLandline,
        companySector: this.state.companySector,
        companyLongLat: this.state.companyLongLat,
        companyRegDateTime: this.state.companyRegDateTime,
        companyRegStatus: this.state.companyRegStatus,
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
      companyWebsite: "",
      companyFacebook: "",
      companyInsta: "",
      phone: "",
      companyWhatsapp: "",
      companyLandline: "",
      email: "",
      companySector: "",
      address: "",
      country: "",
      companyLongLat: "",
      companyRegDateTime: "",
      companyregStatus: "",
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

            <h1 className="o"> Tour Company Registration</h1>
            <br></br>
            <br></br>
            <br></br>
          </div>

          <div className="container text-center mt-3">
            <form onSubmit={this.onSubmitHandler}>
              <div className="form-group">
                <label className="text-left">
                  <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Company
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
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Website
                </label>
                <input
                  name="companyWebsite"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Website"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.companyWebsite}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.companyWebsiteError}
                </div>
              </div>

              <div className="form-group">
                <label className="text-left">
                  <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Facebook
                </label>
                <input
                  name="companyFacebook"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Chalo!"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.companyFacebook}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.companyFacebookError}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-male" aria-hidden="true"></i>&nbsp;Instagram
                </label>
                <input
                  name="companyInsta"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Chalo!"
                  className="form-control"
                  value={this.state.companyInsta}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.companyInstaError}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;Mobile
                  Number
                </label>
                <input
                  name="phone"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="With the country code (Eg: 9477711188)"
                  className="form-control"
                  value={this.state.phone}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.phoneerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  &nbsp;Company's Whatsapp #
                </label>
                <input
                  name="companyWhatsapp"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="With the country code (Eg: +92 123 4567598)"
                  className="form-control"
                  value={this.state.companyWhatsapp}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.companyWhatsapperror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;Landline #
                </label>
                <input
                  name="companyLandline"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="With the country code (Eg: 051 123456)"
                  className="form-control"
                  value={this.state.companyLandline}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.companyLandlineerror}
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
                  name="companySector"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Sector"
                  className="form-control"
                  value={this.state.companySector}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.companySectorerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-address-card" aria-hidden="true"></i>
                  &nbsp; Company Address
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
                  name="companyLongLat"
                  onChange={this.onChangeHandler}
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.companyLongLat}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.companyLongLatError}
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

export default add_tour_company;
