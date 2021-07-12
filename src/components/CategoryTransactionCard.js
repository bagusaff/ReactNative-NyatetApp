import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
const CategoryTransactionCard = () => {
  return (
    <Wrapper>
      <Image
        source={require("../assets/icons/hadiah.png")}
        style={{ width: 30, height: 30, marginRight: 10 }}
      />
      <DescriptionWrapper>
        <DescriptionTitle>Hadiah</DescriptionTitle>
        <DescriptionAmount>700.000</DescriptionAmount>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default CategoryTransactionCard;

const Wrapper = styled.View`
  margin-right: 10px;
  margin-top: 10px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px;
  height: 50px;
  flex-direction: row;
  align-items: center;
`;

const DescriptionWrapper = styled.View`
  flex-direction: column;
`;

const DescriptionTitle = styled.Text`
  font-family: DMSans;
  font-size: 12px;
  color: #495959;
`;

const DescriptionAmount = styled.Text`
  font-family: DMSans-Bold;
  font-size: 14px;
  color: #000000;
`;
