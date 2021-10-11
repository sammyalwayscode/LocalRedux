import React from "react";
import test from "../Img/aaa (1).jpg";
import styled from "styled-components";
import { Button } from "antd";

import {
  handleQTY,
  addToCart,
  removeFromCart,
  viewDetail,
} from "../Global/Action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const data = useSelector((state) => state.myReducer.cart);
  const dispatch = useDispatch();
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
      {data?.map((props) => (
        <CardMain>
          <SubCard>
            <AmtDiv>
              <Button
                onClick={() => {
                  dispatch(addToCart(props));
                }}
              >
                +
              </Button>
              <div
                style={{
                  fontWeight: "bold",
                  color: "#22ACE9",
                  padding: "5px",
                }}
              >
                {props.QTY}
              </div>
              <Button
                onClick={() => {
                  dispatch(handleQTY(props));
                  if (props.QTY === 1) {
                    dispatch(removeFromCart(props));
                  }
                }}
              >
                -
              </Button>
            </AmtDiv>
            <Link to={`/detail/${props.id}`}>
              <ImageCont
                src={props.img}
                alt="Img"
                onClick={() => {
                  dispatch(viewDetail(props));
                }}
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
              {props.name}
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
              ${Math.ceil(props.price * props.QTY)}
            </div>
            <Button
              onClick={() => {
                dispatch(removeFromCart(props));
              }}
              style={{ width: "150px", marginBottom: "15px" }}
            >
              Remove From Cart
            </Button>
          </SubCard>
        </CardMain>
      ))}
    </div>
  );
};

export default Cart;

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

const AmtDiv = styled.div`
  display: flex;
`;
