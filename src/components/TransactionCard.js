import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const TransactionCard = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <LeftWrapper>
          <Title>Netflix</Title>
          <Date>Senin,26 April 2021</Date>
        </LeftWrapper>
        <RightWrapper>
          <Amount>-150.000</Amount>
          <Category>Tagihan</Category>
        </RightWrapper>
      </TextWrapper>
    </Wrapper>
  );
};

export default TransactionCard;

const Wrapper = styled.View`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  background-color: white;
  margin-vertical: 5px;
`;

const TextWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const LeftWrapper = styled.View``;

const RightWrapper = styled.View``;

const Title = styled.Text`
  font-size: 16px;
  font-family: DMSans;
  color: #000000;
`;

const Date = styled.Text`
  font-size: 14px;
  color: #7c7c7c;
  font-family: DMSans;
`;

const Amount = styled.Text`
  font-family: DMSans;
  font-size: 18px;
  color: #ea2f2f;
`;

const Category = styled.Text`
  font-family: DMSans;
  font-size: 14px;
  text-align: right;
  color: #7c7c7c;
`;
