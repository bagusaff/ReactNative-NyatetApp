import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Ionicons";
const Register = ({ navigation }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Icon
          name="arrow-back-outline"
          size={30}
          color="#000"
          onPress={() => navigation.goBack()}
        />
        <HeaderText>Register</HeaderText>
        {/* life hacks LOL! */}
        <Icon name="arrow-back-outline" size={30} color="#eaeaea" />
      </HeaderWrapper>
      <FormWrapper>
        <InputWrapper>
          <InputTitle>Full Name</InputTitle>
          <StyledInput placeholder="Full Name" placeholderTextColor="#C4C4C4" />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Email</InputTitle>
          <StyledInput
            placeholder="Email"
            autoCompleteType="email"
            keyboardType="email-address"
            placeholderTextColor="#C4C4C4"
          />
        </InputWrapper>
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
        <InputWrapper>
          <InputTitle>Confirm Password</InputTitle>
          <StyledInput
            secureTextEntry={true}
            placeholder="Re-enter Password"
            placeholderTextColor="#C4C4C4"
          />
        </InputWrapper>

        <RegisterButton
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Home")}
        >
          <RegisterText>Register</RegisterText>
        </RegisterButton>
      </FormWrapper>
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.View`
  flex: 1;
  background-color: #eaeaea;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderWrapper = styled.View`
  padding-vertical: 30px;
  padding-horizontal: 20px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FormWrapper = styled.View`
  background-color: #fafafa;
  padding-vertical: 30px;
  padding-horizontal: 20px;
  border-top-left-radius: 50px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderText = styled.Text`
  font-family: DMSans-Medium;
  font-size: 30px;
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

const RegisterButton = styled.TouchableOpacity`
  background-color: #2e3a59;
  margin: 20px;
  padding: 15px;
  border-radius: 10px;
  border-top-right-radius: 0px;
  width: 100%;
  align-items: center;
`;

const RegisterText = styled.Text`
  font-family: "DMSans-Medium";
  font-size: 15px;
  color: #ffffff;
`;
