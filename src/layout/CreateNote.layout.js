import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";

const CreateNote = ({ navigation }) => {
  return (
    <Wrapper>
      <View>
        <HeaderWrapper>
          <Icon
            name="arrow-back-outline"
            size={25}
            onPress={() => navigation.goBack()}
          />
          <Icon name="trash-outline" size={25} />
        </HeaderWrapper>
        <Title placeholder="Tambah Judul" />
        <Tag placeholder="Tambah Tag" />
        <Body
          multiline={true}
          numberOfLines={30}
          textAlignVertical="top"
          placeholder="Tambah Isi Catatan"
          lineHeight={16}
        />
      </View>
      <SubmitButton activeOpacity={0.8}>
        <SubmitText>Simpan Catatan</SubmitText>
      </SubmitButton>
    </Wrapper>
  );
};

export default CreateNote;

const Wrapper = styled.View`
  padding-horizontal: 15px;
  padding-top: 50px;
  padding-bottom: 20px;
  flex: 1;
  background-color: #fff;
  justify-content: space-between;
`;

const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const Title = styled.TextInput`
  font-family: DMSans-Medium;
  font-size: 25px;
  color: #000000;
  margin-left: 5px;
`;

const Tag = styled.TextInput`
  font-family: DMSans;
  font-style: italic;
  padding-top: 10px;
  font-size: 12px;
  color: #a5a5a5;
  margin-left: 5px;
`;

const Body = styled.TextInput`
  margin-left: 5px;
  padding-top: 15px;
  font-family: DMSans;
  font-size: 14px;
  color: #000000;
  align-items: stretch;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  background: #2e3a59;
  border-radius: 5px;
  padding-vertical: 10px;
`;

const SubmitText = styled.Text`
  font-family: DMSans-Bold;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;
