import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

const Home = ({ navigation }) => {
  return (
    <StyledView>
      <Text>Home Component 2</Text>
      <LoginButton
        activeOpacity={0.9}
        onPress={() => navigation.navigate("Auth")}
      >
        <LoginText>Go to Auth</LoginText>
      </LoginButton>
      <StatusBar style="auto" />
    </StyledView>
  );
};

export default Home;

const StyledView = styled.View`
  flex: 1;
  background-color: #f6f6f6;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #2e3a59;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border-top-right-radius: 0px;
  width: 100%;
  align-items: center;
`;

const LoginText = styled.Text`
  color: #fff;
`;
