import { useParams } from "react-router-dom";
import Recat, { useState, useEffect } from "react";
import axios from "axios";
export default function ProductsItems() {
  const { id } = useParams();
  const [single, setSingle] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [isloading, setLoadng] = useState(false);
  useEffect(() => {
    setLoadng(false);
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${id}`
    })
      .then(function ({ data }) {
        if (data != null) {
          setIsTrue(true);
          console.log(data);
          setSingle(data);
        } else {
          setIsTrue(false);
        }
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoadng(true);
      });
  }, []);

  return isloading ? (
    isTrue ? (
      <div style={{ textAlign: "center" }}>
        <img src={single.image} width="150px" />
        <h3>Title : {single.title}</h3>
        <h3>Description</h3>
        <p>{single.description}</p>
        <h3>Price</h3>
        <p>{single.price}</p>
      </div>
    ) : (
      <h1 style={{ textAlign: "center" }}>ID Does Not Exist !</h1>
    )
  ) : (
    <h1 style={{ textAlign: "center" }}>Fetch the Data on server.....</h1>
  );
}
