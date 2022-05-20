import React, { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Form from "./Form";

export const RestaurantDetails = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let data1 = await fetch("http://localhost:8080/data");
    data1 = await data1.json();
    // console.log(data1)
    setData([...data1, ...data]);
    return data1;
  };
  // console.log(data)
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Form />
      <div className="AlldataDiv">
        <div className="AllButtonDiv">
          <Button getData={getData} setData={setData} data={data} />
        </div>

        <div className="AllDataDiv">
          <Card data={data} />
        </div>
      </div>
    </div>
  );
};
