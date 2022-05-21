import React from "react";
import "./add_package.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const initialState = {
  PKG_title: "",
  pkgstart: "",
  pkgEnd: "",
  PKG_pricing: "",
  PKG_ToCity_ID: "",
  PKG_fromCity_ID: "",

  PKG_titleError: "",
  pkgstartError: "",
  pkgEndError: "",
  PKG_pricingError: "",
  PKG_ToCity_IDError: "",
  PKG_fromCity_IDError: "",
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
    let PKG_titleError = "";
    let pkgstartError = "";
    let pkgEndError = "";
    let PKG_pricingError = "";
    let PKG_ToCity_IDError = "";
    let PKG_fromCity_IDError = "";

    if (!this.state.name) {
      PKG_titleError = "Please Enter Package's Name";
    }

    if (!this.state.pkgstart) {
      pkgstartError = "Please Enter Package start Date";
    }

    if (!this.state.pkgEnd) {
      pkgEndError = "Please Enter Package's end date";
    }

    if (!this.state.PKG_pricing) {
      PKG_pricingError = "Please Enter Package's Price";
    }

    if (!this.state.PKG_ToCity_ID) {
      PKG_ToCity_IDError = "Please enter the city where you will go";
    }

    if (!this.state.PKG_fromCity_ID) {
      PKG_fromCity_IDError = "Please Enter the city from where you will go";
    }

    if (
      PKG_titleError ||
      pkgstartError ||
      pkgEndError ||
      PKG_pricingError ||
      PKG_ToCity_IDError ||
      PKG_fromCity_IDError
    ) {
      this.setState({
        PKG_titleError,
        pkgstartError,
        pkgEndError,
        PKG_pricingError,
        PKG_ToCity_IDError,
        PKG_fromCity_IDError,
      });
      return false;
    }
    swal("Package Details Added Successfully!", "No warnings! ", "success");
    return true;
  };

  onSubmitHandler = (e) => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.PKG_title);
      console.log(this.state.pkgstart);
      console.log(this.state.pkgEnd);
      console.log(this.state.PKG_pricing);
      console.log(this.state.PKG_ToCity_ID);
      console.log(this.state.PKG_fromCity_ID);

      //clear form
      this.setState(initialState);
    }

    if (
      this.state.PKG_title == null &&
      this.state.pkgstart == null &&
      this.state.pkgEnd == null &&
      this.state.PKG_pricing == null &&
      this.state.PKG_ToCity_ID == null &&
      this.state.PKG_fromCity_ID == null
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
        name: this.state.PKG_title,
        email: this.state.pkgstart,
        address: this.state.pkgEnd,
        country: this.state.PKG_pricing,
        companyInsta: this.state.PKG_ToCity_ID,
        companyWebsite: this.state.PKG_fromCity_ID,
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
      PKG_title: "",
      pkgstart: "",
      pkgEnd: "",
      PKG_pricing: "",
      PKG_ToCity_ID: "",
      PKG_fromCity_ID: "",
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

            <h1 className="o"> Tour Package Registration</h1>
            <br></br>
            <br></br>
            <br></br>
          </div>

          <div className="container text-center mt-3">
            <form onSubmit={this.onSubmitHandler}>
              <div className="form-group">
                <label className="text-left">
                  <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Package
                  Title
                </label>
                <input
                  name="PKG_title"
                  onChange={this.onChangeHandler}
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.PKG_title}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.PKG_titleError}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Package
                  Start Date
                </label>
                <input
                  name="pkgstart"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="yyyy/mm/dd"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.pkgstart}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.pkgstartError}
                </div>
              </div>

              <div className="form-group">
                <label className="text-left">
                  <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Package End
                  Date
                </label>
                <input
                  name="pkgEnd"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="yyyy/mm/dd"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.pkgEnd}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.pkgEndError}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-male" aria-hidden="true"></i>&nbsp;Package
                  Price
                </label>
                <input
                  name="PKG_pricing"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Chalo!"
                  className="form-control"
                  value={this.state.PKG_pricing}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.PKG_pricingError}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;From City
                </label>
                <input
                  name="PKG_ToCity_ID"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="With the country code (Eg: 9477711188)"
                  className="form-control"
                  value={this.state.PKG_ToCity_ID}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.PKG_ToCity_IDError}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  &nbsp;To City
                </label>
                <input
                  name="PKG_fromCity_ID"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="With the country code (Eg: +92 123 4567598)"
                  className="form-control"
                  value={this.state.PKG_fromCity_ID}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.PKG_fromCity_IDError}
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
