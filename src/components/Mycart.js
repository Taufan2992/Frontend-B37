import React from "react";
import bin from "../assets/image/bin.png";
import upload from "../assets/image/upload.png"

function Mycart() {
  return (
    <div>
      <div class="p-5">
        <div class="px-5 mb-3">
          <h3>My Cart</h3>
        </div>
        <div class="px-5">
          <p  className="mb-0 text-red">Review your order</p>
        </div>

        <div class="row">
          <div class="col-8 px-5">
            <hr />

            <div class="card mb-3" style={{ border: "none" }}>
              <div class="row g-0">
                <div class="col-md-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                    alt="Trendy Pants and Shoes"
                    class="rounded-start"
                    height={"100px"}
                    width={"100px"}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div class="col-md-10 row">
                  <div class="col-md-6">
                    <div class="card-body">
                      <p
                        class="card-title"
                        style={{ fontSize: "18px", fontWeight: "900" }}
                      >
                        Title
                      </p>

                      <p
                        class="card-text"
                        style={{ fontSize: "16px", fontWeight: "800" }}
                      >
                        Topping:
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="card-body">
                      <p
                        class="card-title"
                        style={{
                          fontSize: "18px",
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

            <div class="row">
              <div class=" col-8">
                <hr />

                <div class="d-flex justify-content-between">
                  <p class="d-flex">Subtotal</p>
                  <p class="d-flex">1000</p>
                </div>

                <div class="d-flex justify-content-between">
                  <p class="d-flex">Qty</p>
                  <p class="d-flex">1</p>
                </div>

                <hr />

                <div class="d-flex justify-content-between">
                  <p class="d-flex text-success">Total</p>
                  <p class="d-flex text-success">1000</p>
                </div>
              </div>

              <div class=" col-4">
                <label for="upload" style={{ float: "right" }} class="mt-4">
                  <input type="file" id="upload" hidden />
                  <img src={upload} style={{ float: "right" }}/>
                </label>
              </div>
            </div>
          </div>

          <div class=" col-4 px-5">
            <div class="mb-3">
              <input
                type="email"
                class="form-control mb-2 mt-3"
                id="name"
                placeholder="Name"
              />
              <input
                type="email"
                class="form-control mb-2"
                id="email"
                placeholder="Email"
              />
              <input
                type="email"
                class="form-control mb-2"
                id="phone"
                placeholder="Phone"
              />
              <input
                type="email"
                class="form-control mb-2"
                id="pos"
                placeholder="Pos Code"
              />

              <textarea
                class="form-control mb-2"
                id="address"
                rows="3"
                placeholder="Address"
              ></textarea>

              <button class="container btn btn-primary" type="button">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mycart;
