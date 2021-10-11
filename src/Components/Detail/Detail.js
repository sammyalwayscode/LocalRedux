import React from "react";
import styled from "styled-components";
import test from "../Img/aaa (1).jpg";
import { Button } from "antd";
import { addToCart } from "../Global/Action";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const data = useSelector((state) => state.myReducer.details);
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <ImageDiv src={data.img} />
        <TextDetail>
          <DetaiklText>
            <TitleTag> {data.name} </TitleTag>
            Mobile app development is the act or process by which a mobile app
            is developed for mobile devices, such as personal digital
            assistants, enterprise digital assistants or mobile phones. These
            applications can be pre-installed on phones during manufacturing
            platforms, or delivered as web applications using server-side or
            client-side processing
          </DetaiklText>
          <ButtonPart>
            <Button
              onClick={() => {
                dispatch(addToCart(data));
              }}
            >
              Add To Cart
            </Button>
          </ButtonPart>
        </TextDetail>
      </Wrapper>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #040404;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 1000px;
  min-width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
const ImageDiv = styled.img`
  width: 400px;
  min-width: 300px;
  height: 400px;
  object-fit: cover;
`;
const TextDetail = styled.div`
  color: #cfcfcf;
  width: 400px;
  min-width: 300px;
`;
const TitleTag = styled.div`
  font-size: large;
  font-weight: bold;
  color: #22ace9;
`;
const DetaiklText = styled.div``;
const ButtonPart = styled.div``;
