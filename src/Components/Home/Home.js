import React, { useEffect } from "react";
import test from "../Img/aaa (1).jpg";
import styled from "styled-components";
import { Button } from "antd";
import userData from "../Global/DataBase.json";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addToCart, viewDetail } from "../Global/Action";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const fileData = useSelector((state) => state.myReducer.products);

  useEffect(() => {
    dispatch(addProduct(userData));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        height: "100%",
        backgroundColor: "#040404",
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {userData?.map((props) => (
        <CardMain key={props.id}>
          <SubCard>
            <div
              style={{
                fontWeight: "bold",
                color: "#22ACE9",
                padding: "5px",
              }}
            >
              Men's Cloating
            </div>
            <Link to={`/detail/${props.id}`}>
              <ImageCont
                onClick={() => {
                  dispatch(viewDetail(props));
                }}
                src={props.img}
                alt="Img"
              />
            </Link>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#CFCFCF",
                padding: "5px",
              }}
            >
              {" "}
              i Phone 12 Pro Max{" "}
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#CFCFCF",
                textAlign: "center",
                padding: "5px",
              }}
            >
              Mobile app development is the act or process by which a mobile app
              is developed for mobile devices, such as personal digital
              assistants
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "22px",
                color: "#22ACE9",
                padding: "5px",
              }}
            >
              ${props.price}
            </div>
            <Button
              onClick={() => {
                dispatch(addToCart(props));
              }}
              style={{ width: "150px", marginBottom: "15px" }}
            >
              Add To Cart
            </Button>
          </SubCard>
        </CardMain>
      ))}
    </div>
  );
};

export default Home;

const CardMain = styled.div`
  height: 500px;
  width: 280px;
  background-color: #272727;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubCard = styled.div`
  width: 265px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
const ImageCont = styled.img`
  width: 252px;
  height: 236px;
  object-fit: cover;
  background-color: black;
`;
