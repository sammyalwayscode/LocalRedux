import React, { useEffect } from "react";
import Logo from "../Img/looo.jpg";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { totalValue } from "../Global/Action";

function Header() {
  const data = useSelector((state) => state.myReducer.cart);
  const dataValue = useSelector((state) => state.myReducer.totalValuePrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalValue());
  }, [data]);

  return (
    <HeaderMain>
      {/* #040404 */}
      <SubHeader>
        <HeaderLogo img src={Logo} alt="Logo" />
        <Link to="/">
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Home
          </div>
        </Link>
        <Link to="/cart">
          <div style={{ display: "flex" }}>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Cart
            </div>
            <span
              style={{
                height: "20px",
                width: "20px",
                backgroundColor: "#fff",
                color: "#000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                fontWeight: "600",
              }}
            >
              {data.length}
            </span>
          </div>
        </Link>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          Cost : <strong>${Math.ceil(dataValue)} </strong>
        </div>
      </SubHeader>
    </HeaderMain>
  );
}

export default Header;

const HeaderMain = styled.div`
  height: 60px;
  width: 100%;
  background-color: #262626;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const SubHeader = styled.div`
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const HeaderLogo = styled.img`
  width: 60px;
`;
