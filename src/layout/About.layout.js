import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import WelcomeIcon from "../assets/svg/WelcomeIcon";

const About = () => {
  return (
    <Wrapper>
      <View style={{ alignItems: "center" }}>
        <WelcomeIcon />
        <Body>
          <HeaderText>Tentang Kami</HeaderText>
          <BodyText>
            Nyatet adalah aplikasi yang dikembangkan oleh Tim Rembux Developer.
            Semua unsur yang terdapat di dalam aplikasi ini merupakan aset yang
            legal dilindungi hak cipta.
          </BodyText>
          <CreditHeader>Design By</CreditHeader>
          <CreditText>Ardhian Yuliandra Hanum</CreditText>
          <CreditHeader>Developed By</CreditHeader>
          <CreditText>Ardhian Yuliandra Hanum</CreditText>
          <CreditText>&</CreditText>
          <CreditText>Bagus Amrullah Fikri Fajri</CreditText>
        </Body>
      </View>
      <CreditFooter>© Copyright Rembux 2021</CreditFooter>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.View`
  padding-horizontal: 15px;
  padding-top: 50px;
  padding-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  background-color: white;
`;

const Body = styled.View`
  width: 400px;
  align-items: center;
`;
const HeaderText = styled.Text`
  font-size: 16px;
  font-family: DMSans-Medium;
  padding-bottom: 10px;
`;
const CreditHeader = styled.Text`
  font-size: 16px;
  font-family: DMSans-Medium;
  padding-bottom: 5px;
`;

const BodyText = styled.Text`
  font-size: 14px;
  font-family: DMSans;
  text-align: center;
  padding-bottom: 10px;
`;

const CreditText = styled.Text`
  font-size: 14px;
  font-family: DMSans;
  text-align: justify;
`;
const CreditFooter = styled.Text`
  font-size: 14px;
  font-family: DMSans-Bold;
  text-align: justify;
  font-style: italic;
  color: #bababa;
`;
