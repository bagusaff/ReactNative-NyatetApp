import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";

let ScreenHeight = Dimensions.get("window").height;
const Profile = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Wrapper>
        <TitleWrapper>
          <Title>Halaman Profil</Title>
          <Icon.Button
            name="log-out-outline"
            backgroundColor="#2e3a59"
            color="#fff"
            style={{ paddingHorizontal: 15, paddingVertical: 5 }}
          >
            Logout
          </Icon.Button>
        </TitleWrapper>
        <HeaderWrapper>
          <ProfileImage source={require("../assets/profile_pic.png")} />
          <UserInfoWrapper>
            <HeaderLabel>Ardhian Yuliandra Hanum</HeaderLabel>
            <EmailLabel>ardhian@gmail.com</EmailLabel>
          </UserInfoWrapper>
        </HeaderWrapper>
        <EditProfileWrapper>
          <HeaderLabel>Edit Profil</HeaderLabel>
          <FormLabel>Nama</FormLabel>
          <StyledInput
            value="Ardhian Yuliandra Hanum"
            placeholder="Nama"
            placeholderTextColor="#C4C4C4"
            style={{
              borderWidth: 1,
              padding: 5,
              borderRadius: 5,
              borderColor: "#E0E0E0",
              color: "#000",
            }}
          />
          <FormLabel>Username</FormLabel>
          <StyledInput
            value="ardhianyh"
            placeholder="Username"
            placeholderTextColor="#C4C4C4"
            style={{
              borderWidth: 1,
              padding: 5,
              borderRadius: 5,
              borderColor: "#E0E0E0",
              color: "#000",
            }}
          />
          <FormLabel>Email</FormLabel>
          <StyledInput
            value="ardhian@gmail.com"
            placeholder="Email"
            placeholderTextColor="#C4C4C4"
            style={{
              borderWidth: 1,
              padding: 5,
              borderRadius: 5,
              borderColor: "#E0E0E0",
              color: "#000",
            }}
          />
          <StyledButton activeOpacity={0.9}>
            <TextButton>Update Profile</TextButton>
          </StyledButton>
        </EditProfileWrapper>
        <EditProfileWrapper>
          <HeaderLabel>Ganti Password</HeaderLabel>
          <PasswordFormWrapper>
            <InnerFormWrapper>
              <FormLabel>Password Lama</FormLabel>
              <StyledInput
                secureTextEntry={true}
                placeholder="Password Lama"
                placeholderTextColor="#C4C4C4"
                style={{
                  borderWidth: 1,
                  padding: 5,
                  borderRadius: 5,
                  borderColor: "#E0E0E0",
                  color: "#000",
                }}
              />
            </InnerFormWrapper>
            <InnerFormWrapper>
              <FormLabel>Password Baru</FormLabel>
              <StyledInput
                secureTextEntry={true}
                placeholder="Password Baru"
                placeholderTextColor="#C4C4C4"
                style={{
                  borderWidth: 1,
                  padding: 5,
                  borderRadius: 5,
                  borderColor: "#E0E0E0",
                  color: "#000",
                }}
              />
            </InnerFormWrapper>
          </PasswordFormWrapper>
          <StyledButton activeOpacity={0.9}>
            <TextButton>Update Password</TextButton>
          </StyledButton>
        </EditProfileWrapper>
      </Wrapper>
    </ScrollView>
  );
};

export default Profile;

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  background-color: white;
  height: ${ScreenHeight};
  padding-top: 30px;
  padding-horizontal: 15px;
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 20px;
`;

const Title = styled.Text`
  font-family: DMSans-Bold;
  font-size: 18px;
  color: #000000;
`;

const HeaderWrapper = styled.View`
  elevation: 3;
  background: #ffffff;
  border-radius: 5px;
  padding: 10px;
  flex-direction: row;
  align-items: flex-start;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const UserInfoWrapper = styled.View`
  flex-direction: column;
  padding-horizontal: 15px;
`;

const HeaderLabel = styled.Text`
  font-family: DMSans;
  font-size: 18px;
  color: #000000;
`;

const EmailLabel = styled.Text`
  font-family: DMSans;
  font-size: 14px;
  color: #5b5b5b;
`;

const EditProfileWrapper = styled.View`
  elevation: 3;
  background: #ffffff;
  border-radius: 5px;
  margin-top: 20px;
  padding-horizontal: 15px;
  padding-top: 15px;
  padding-bottom: 20px;
`;

const FormLabel = styled.Text`
  font-family: DMSans;
  font-size: 16px;
  color: #000000;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const StyledInput = styled.TextInput`
  font-family: DMSans;
`;

const StyledButton = styled.TouchableOpacity`
  background: #2e3a59;
  border-radius: 4px;
  margin-top: 20px;
  padding-vertical: 8px;
  width: 100%;
  align-items: center;
`;

const TextButton = styled.Text`
  font-family: DMSans;
  font-size: 15px;
  color: #ffffff;
`;

const PasswordFormWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const InnerFormWrapper = styled.View`
  flex-direction: column;
  flex: 1;
  padding-right: 15px;
`;
