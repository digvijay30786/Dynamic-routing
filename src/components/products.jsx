import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Products() {
  const [apidata, setApidata] = useState([]);
  axios({
    method: "get",
    url: "https://fakestoreapi.com/products"
  }).then(({ data }) => {
    setApidata(data);
  });
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        <li style={{ margin: "20px" }}>
          0. Not Exist | <b>INR 200</b> |{" "}
          <Link to="/products/7000">More Details</Link>
        </li>
        {apidata.map((e, i) => {
          const link = `/products/${e.id}`;
          return (
            <li keys={e.id} style={{ margin: "20px" }}>
              {i + 1}. {e.title} | <b>INR {e.price}</b> |{" "}
              <Link to={link}>More Details</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
