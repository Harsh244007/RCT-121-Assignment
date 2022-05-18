import React from "react";

function Contact(props) {
  const data = [
    {
      id: 1,
      name: "Patel",
      email: "p@gmail.com",
      phone: "8141217888",
    },
    {
      id: 2,
      name: "Harsh",
      email: "h@gmail.com",
      phone: "8165555353",
    },
    {
      id: 3,
      name: "Sunny",
      email: "s@gmail.com",
      phone: "8141217883",
    },
    {
      id: 4,
      name: "Bunny",
      email: "b@gmail.com",
      phone: "8141217884",
    },
    {
      id: 5,
      name: "Deepak",
      email: "d@gmail.com",
      phone: "8181873745",
    },
    {
      id: 6,
      name: "Vikash",
      email: "v@gmail.com",
      phone: "8141217886",
    },
  ];

  const D1 = data.map((item) => <div>{item.id}</div>);
  return (
    <div key={props.id} style={{ display: "flex" }}>
      <D1 />
    </div>
  );
}
export default Contact;
