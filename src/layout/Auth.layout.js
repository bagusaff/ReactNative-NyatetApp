import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

const Auth = ({ route, navigation }) => {
  const { id, productName } = route.params;
  return (
    <StyledView>
      <Text>Auth Component</Text>
      <Text>{JSON.stringify(id)}</Text>
      <Text>{productName}</Text>
      <BackButton onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </BackButton>
      <StatusBar style="auto" />
    </StyledView>
  );
};

export default Auth;

const StyledView = styled.View`
  flex: 1;
  background-color: #f6f6f6;
  align-items: center;
  justify-content: center;
`;

const BackButton = styled.TouchableOpacity`
  background-color: #2e3a59;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border-top-right-radius: 0px;
  width: 100%;
  align-items: center;
`;
