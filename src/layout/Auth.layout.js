import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import NyatetLogo from "../assets/svg/NyatetLogo";
const Auth = ({ navigation }) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <NyatetLogo />
      </LogoWrapper>
      <FormWrapper>
        <Title>Login</Title>
        <InputWrapper>
          <InputTitle>Username</InputTitle>
          <StyledInput placeholder="Username" placeholderTextColor="#C4C4C4" />
        </InputWrapper>

        <InputWrapper>
          <InputTitle>Password</InputTitle>
          <StyledInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#C4C4C4"
          />
        </InputWrapper>
        <LoginButton activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <LoginText>Login</LoginText>
        </LoginButton>
        <LabelText>Belum Punya Akun ?</LabelText>
        <RegisterButton
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Register")}
        >
          <RegisterText>Register</RegisterText>
        </RegisterButton>
        <StatusBar style="auto" />
      </FormWrapper>
    </Wrapper>
  );
};

export default Auth;

const Wrapper = styled.View`
  flex: 1;
  background-color: #eaeaea;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.View`
  background-color: #fafafa;
  padding: 30px;
  border-top-left-radius: 50px;
  flex: 3;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const InputWrapper = styled.View`
  background: #ffffff;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #f6f6f6;
  padding: 15px;
  width: 100%;
`;

const StyledInput = styled.TextInput`
  font-family: DMSans;
`;

const InputTitle = styled.Text`
  font-family: "DMSans-Medium";
  font-size: 20px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-family: "DMSans-Medium";
  color: #000000;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const LoginText = styled.Text`
  font-family: "DMSans-Medium";
  font-size: 15px;
  color: #ffffff;
`;

const RegisterText = styled.Text`
  font-family: "DMSans-Medium";
  font-size: 15px;
  color: #000000;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #2e3a59;
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  border-top-right-radius: 0px;
  width: 100%;
  align-items: center;
`;

const LabelText = styled.Text`
  font-family: DMSans;
  font-size: 15px;
  text-align: center;
  color: #c4c4c4;
  font-style: italic;
`;

const RegisterButton = styled.TouchableOpacity`
  background-color: #eaeaea;
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  border-top-right-radius: 0px;
  width: 100%;
  align-items: center;
`;
