import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const NoteCard = ({ onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Wrapper>
        <TitleWrapper>
          <NoteTitle>Judul Catatan</NoteTitle>
          <NoteTag>Kuliah</NoteTag>
        </TitleWrapper>
        <NoteBody numberOfLines={3} ellipsizeMode="tail">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book printer took a galley of
          type and scrambled it to make a type specimen book printer took a
          galley of type and scrambled it to make a type specimen book printer
          took a galley of type and scrambled it to make a type specimen book
        </NoteBody>
      </Wrapper>
    </TouchableOpacity>
  );
};

export default NoteCard;

const Wrapper = styled.View`
  background: #ffffff;
  border-radius: 4px;
  border: 1.5px solid #f6f6f6;
  shadow-opacity: 0.5;
  shadow-radius: 2;
  elevation: 1;
  height: 100px;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  overflow: hidden;
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
`;

const NoteTitle = styled.Text`
  font-family: DMSans-Medium;
  font-size: 15px;
  color: #000000;
`;

const NoteTag = styled.Text`
  font-family: DMSans-Medium;
  font-size: 10px;
  color: #ffffff;
  background: #2e3a59;
  border-radius: 10px;
  padding-vertical: 5px;
  padding-horizontal: 10px;
`;

const NoteBody = styled.Text`
  font-family: DMSans;
  font-size: 14px;
  color: #000000;
  text-align: left;
`;
