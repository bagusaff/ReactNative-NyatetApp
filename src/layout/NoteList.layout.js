import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import NoteCard from "../components/NoteCard";
import ActionButton from "react-native-action-button";
const NoteList = ({ navigation }) => {
  return (
    <Wrapper>
      <HeaderTitle>Catatanku</HeaderTitle>
      <SearchBar placeholder="Search"></SearchBar>
      <FilterWrapper>
        <FilterButton activeOpacity={0.9}>
          <FilterText>Semua</FilterText>
        </FilterButton>
        <FilterButton activeOpacity={0.9}>
          <FilterText>Semua</FilterText>
        </FilterButton>
        <FilterButton activeOpacity={0.9}>
          <FilterText>Semua</FilterText>
        </FilterButton>
      </FilterWrapper>
      <ScrollView
        style={{ width: "100%", marginTop: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <NotesWrapper>
          <NoteCard onPress={() => navigation.navigate("CreateNote")} />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </NotesWrapper>
      </ScrollView>
      <ActionButton
        buttonColor="#2E3A59"
        onPress={() => {
          navigation.navigate("CreateNote");
        }}
      />
    </Wrapper>
  );
};

export default NoteList;

const Wrapper = styled.View`
  padding-horizontal: 15px;
  padding-top: 50px;
  flex: 1;
  background-color: #fff;
`;

const HeaderTitle = styled.Text`
  font-family: DMSans-Bold;
  font-size: 20px;
  color: #000000;
  padding-bottom: 10px;
`;

const SearchBar = styled.TextInput`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  width: 100%;
  padding-left: 15px;
  padding-vertical: 7px;
  color: #000;
`;

const FilterWrapper = styled.View`
  padding-top: 10px;
  flex-direction: row;
`;

const FilterButton = styled.TouchableOpacity`
  background: #2e3a59;
  border-radius: 20px;
  padding-vertical: 7px;
  padding-horizontal: 12px;
  margin-right: 10px;
`;

const FilterText = styled.Text`
  font-family: DMSans-Medium;
  font-size: 14px;
  color: #ffffff;
`;

const NotesWrapper = styled.View`
  padding-top: 15px;
`;
