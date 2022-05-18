import React, { useState } from "react";
const data = [
  {
    id: 1,
    name: "Patel",
    email: "p@gmail.com",
    phone: "8141217888",
    img: "https://media.istockphoto.com/photos/young-beautiful-woman-holding-a-bouquet-of-flowers-picture-id1357538784",
  },
  {
    id: 2,
    name: "Harsh",
    email: "h@gmail.com",
    phone: "8165555353",
    img: "https://media.istockphoto.com/photos/attractive-girl-with-brown-hair-walks-out-of-corporate-building-for-picture-id1349414698",
  },
  {
    id: 3,
    name: "Sunny",
    email: "s@gmail.com",
    phone: "8141217883",
    img: "https://media.istockphoto.com/photos/shot-of-an-attractive-young-woman-standing-alone-in-the-studio-picture-id1344913377",
  },
  {
    id: 4,
    name: "Bunny",
    email: "b@gmail.com",
    phone: "8141217884",
    img: "https://media.istockphoto.com/photos/beautiful-woman-with-perfect-makeup-picture-id1333957748",
  },
  {
    id: 5,
    name: "Deepak",
    email: "d@gmail.com",
    phone: "8181873745",
    img: "https://media.istockphoto.com/photos/portrait-beautiful-young-woman-with-clean-fresh-skin-picture-id1329622588",
  },
  {
    id: 6,
    name: "Vikash",
    email: "v@gmail.com",
    phone: "8141217886",
    img: "https://media.istockphoto.com/photos/portrait-of-young-afro-woman-with-bright-makeup-picture-id1331637318",
  },
];

export default function Contact() {
  const [list, setList] = useState(data);
  return (
    <div className="App">
      <h1>Harsh contact list.</h1>
      {list.map((item) => {
        // <div key={item.id}>
        return (
          <>
            <ContactCard
              id={item.id}
              phone={item.phone}
              email={item.email}
              name={item.name}
              img={item.img}
            />
          </>
        );
      })}
    </div>
  );
}
const ContactCard = ({ id, name, phone, email, img }) => {
  return (
    <div>
      {name}
      {phone}
      {email}
      {img}
    </div>
  );
};
