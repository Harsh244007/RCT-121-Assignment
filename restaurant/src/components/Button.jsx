import React from "react";

const Button = ({ getData, setData }) => {
  const handleFilter = async (stars) => {
    let fetchedData = await getData();

    let filtered = fetchedData.filter((e) => {
      return e.rating >= stars;
    });
    console.log(filtered);
    setData(filtered);
  };
  const handlePayment = async (type) => {
    let fetchedData = await getData();

    let filtered = fetchedData.filter((e) => {
      return e.paymentMethods === type;
    });
    setData(filtered);
  };

  const handleSort = async (type) => {
    let fetchedData = await getData();

    if (type === 0) {
      let sorted = fetchedData.sort((a, b) => {
        return a.minPrice - b.minPrice;
      });
      let newData = [...sorted];
      setData(newData);
    } else {
      let sorted = fetchedData.sort((a, b) => {
        return b.minPrice - a.minPrice;
      });
      let newData = [...sorted];
      setData(newData);
    }
  };

  return (
    <div>
      <div className="allBtns">
        <div className="btnDiv">
          <h3 style={{ textDecoration: "underline", color: "#49bce3" }}>
            Sort As Per Cost:
          </h3>
          <button
            className="oneBtn"
            onClick={() => {
              handleSort(0);
            }}
          >
            Low to High
          </button>
          <br />
          <button
            className="twoBtn"
            onClick={() => {
              handleSort(1);
            }}
          >
            High to Low
          </button>
        </div>
        <div className="btnDiv">
          <h3 style={{ textDecoration: "underline", color: "#564523" }}>
            Sort As Per Rating:
          </h3>
          <button
            className="oneBtn"
            onClick={() => {
              handleFilter(1);
            }}
          >
            1 Star
          </button>
          <br />
          <button
            className="twoBtn"
            onClick={() => {
              handleFilter(2);
            }}
          >
            2 Star
          </button>
          <br />
          <button
            className="threeBtn"
            onClick={() => {
              handleFilter(3);
            }}
          >
            3 Star
          </button>
          <br />
          <button
            className="fourBtn"
            onClick={() => {
              handleFilter(4);
            }}
          >
            4 Star
          </button>
        </div>

        <div className="btnDiv">
          <h3 style={{ textDecoration: "underline", color: "#881bb7" }}>
            Sort As Per Payment Methods:
          </h3>
          <button
            className="oneBtn"
            onClick={() => {
              handlePayment("Accepts card payments only");
            }}
          >
            Card
          </button>
          <br />
          <button
            className="twoBtn"
            onClick={() => {
              handlePayment("Accepts COD payments only");
            }}
          >
            COD
          </button>
          <br />
          <button
            className="threeBtn"
            onClick={() => {
              handlePayment("Accepts card and COD payments");
            }}
          >
            All
          </button>
        </div>
      </div>
    </div>
  );
};
export default Button;
