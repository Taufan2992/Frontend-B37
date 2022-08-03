import React from "react";
import bin from "../assets/image/bin.png";
import upload from "../assets/image/upload.png"
import Navbaruser from "../assets/Navbaruser";

function Mycart() {
  return (
    <div>

    <Navbaruser/>

      <div className="p-5 mx-5">
        <div className="px-5 mb-3 text-red">
          <h3>My Cart</h3>
        </div>
        <div className="px-5">
          <p  className="mb-0 text-red">Review your order</p>
        </div>

        <div className="row">
          <div className="col-8 px-5">
            <hr />

            <div className="card mb-3 scroll" style={{ border: "none" }}>
              <div className="row g-0 mb-2">
                <div className="col-md-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                    alt="Trendy Pants and Shoes"
                    className="rounded"
                    height={"100px"}
                    width={"100px"}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-10 row">
                  <div className="col-md-9">
                    <div className="card-body px-0">
                      <p
                        className="card-title text-red"
                        style={{ fontSize: "18px", fontWeight: "900" }}
                      >
                        Title
                      </p>

                      <p
                        className="card-text"
                        style={{ fontSize: "16px", fontWeight: "800", color:"#974A4A" }}
                      >
                        Topping :
                        <span 
                        className="text-red ms-1"
                        style={{fontSize:"14px", fontWeight: "100"}}>
                          Bill Berry Boba
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="card-body px-0">
                      <p
                        className="card-title text-red"
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          textAlign: "right",
                        }}
                      >
                        Rp. 15.000
                      </p>

                      <img src={bin} alt="" style={{ float: "right" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                    alt="Trendy Pants and Shoes"
                    className="rounded"
                    height={"100px"}
                    width={"100px"}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-10 row">
                  <div className="col-md-9">
                    <div className="card-body px-0">
                      <p
                        className="card-title text-red"
                        style={{ fontSize: "18px", fontWeight: "900" }}
                      >
                        Title
                      </p>

                      <p
                        className="card-text"
                        style={{ fontSize: "16px", fontWeight: "800", color:"#974A4A" }}
                      >
                        Topping :
                        <span 
                        className="text-red ms-1"
                        style={{fontSize:"14px", fontWeight: "100"}}>
                          Bill Berry Boba
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="card-body px-0">
                      <p
                        className="card-title text-red"
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          textAlign: "right",
                        }}
                      >
                        Rp. 15.000
                      </p>

                      <img src={bin} alt="" style={{ float: "right" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="row">
              <div className="col-8 text-red">
                <hr />

                <div className="d-flex justify-content-between">
                  <p className="d-flex">Subtotal</p>
                  <p className="d-flex">1000</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="d-flex">Qty</p>
                  <p className="d-flex">1</p>
                </div>

                <hr />

                <div className="d-flex justify-content-between">
                  <p className="d-flex">Total</p>
                  <p className="d-flex">1000</p>
                </div>
              </div>

              <div className=" col-4">
                <label for="upload" style={{ float: "right" }} className="mt-4">
                  <input type="file" id="upload" hidden />
                  <img src={upload} style={{ float: "right" }}/>
                </label>
              </div>
            </div>
          </div>

          <div className=" col-4 px-5">
            <div className="mb-3">
              <input
                type="email"
                className="form-control mb-3 mt-3 border-red border-3 inputbg-red"
                id="placeholdertext"
                placeholder="Name"
              />
              <input
                type="email"
                className="form-control mb-3 border-red border-3 inputbg-red"
                id="placeholdertext"
                placeholder="Email"
              />
              <input
                type="email"
                className="form-control mb-3 border-red border-3 inputbg-red"
                id="placeholdertext"
                placeholder="Phone"
              />
              <input
                type="email"
                className="form-control mb-3 border-red border-3 inputbg-red"
                id="placeholdertext"
                placeholder="Pos Code"
              />

              <textarea
                className="form-control mb-5 border-red border-3 inputbg-red"
                id="placeholdertext"
                rows="4"
                placeholder="Address"
              ></textarea>

              <button 
              className="container btn btn-primary bg-red border-0" 
              type="button">
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mycart;
