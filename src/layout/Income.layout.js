import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";
import ModalDropdown from "react-native-modal-dropdown";

import CategoryTransactionCard from "../components/CategoryTransactionCard";
import DetailSpentCard from "../components/DetailSpentCard";
import TransactionCard from "../components/TransactionCard";
const Income = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <Wrapper>
      <HeaderWrapper>
        <ModalDropdown
          dropdownStyle={{
            width: windowWidth / 2,
            height: 85,
            marginTop: -20,
            paddingHorizontal: 10,
          }}
          dropdownTextStyle={{
            fontFamily: "DMSans-Medium",
            fontSize: 16,
            color: "#000",
          }}
          dropdownTextHighlightStyle={{ color: "#000" }}
          isFullWidth={true}
          options={["Pemasukan", "Pengeluaran"]}
          onSelect={(index, option) => {
            if (option === "Pemasukan") {
              navigation.navigate("Income");
            } else if (option === "Pengeluaran") {
              navigation.navigate("Outcome");
            }
          }}
        >
          <HeaderTitleWrapper>
            <HeaderTitle>Pemasukan</HeaderTitle>
            <Icon name="caret-down-outline" size={20} color="#000000" />
          </HeaderTitleWrapper>
        </ModalDropdown>

        <AddIcon
          activeOpacity={0.8}
          onPress={() => navigation.navigate("SelectCategory")}
        >
          <Icon name="add-outline" size={25} />
        </AddIcon>
      </HeaderWrapper>
      <FilterWrapper>
        <FilterButton activeOpacity={0.9}>
          <FilterText>Hari Ini</FilterText>
        </FilterButton>
        <FilterButton activeOpacity={0.9}>
          <FilterText>Bulan Ini</FilterText>
        </FilterButton>
        <FilterButton activeOpacity={0.9}>
          <FilterText>Tahun Ini</FilterText>
        </FilterButton>
      </FilterWrapper>
      <ContentWrapper>
        <DetailSpentCardWrapper>
          <DetailSpentCard />
        </DetailSpentCardWrapper>
        <ScrollWrapper>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CategoryTransactionCard />
            <CategoryTransactionCard />
            <CategoryTransactionCard />
            <CategoryTransactionCard />
          </ScrollView>
        </ScrollWrapper>

        <ScrollView showsVerticalScrollIndicator={false}>
          <TransactionWrapper>
            <TransactionTitle>Transaksi Pemasukan</TransactionTitle>
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
          </TransactionWrapper>
        </ScrollView>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Income;

const Wrapper = styled.View`
  width: 100%;
  background-color: #ffffff;
  flex: 1;
`;

const HeaderWrapper = styled.View`
  justify-content: space-between;
  padding-vertical: 30px;
  padding-horizontal: 15px;
  flex-direction: row;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  font-family: DMSans-Bold;
  font-size: 18px;
  text-align: center;
  color: #000000;
  padding-right: 5px;
`;

const AddIcon = styled.TouchableOpacity`
  background: #eaeaea;
  padding: 10px;
  border-radius: 60px;
`;

const HeaderTitleWrapper = styled.View`
  flex-direction: row;
`;

const FilterWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-horizontal: 15px;
`;

const FilterButton = styled.TouchableOpacity`
  width: 32%;
  padding-vertical: 5px;
  background: #2e3a59;
  border-radius: 3px;
`;

const FilterText = styled.Text`
  font-family: DMSans-Bold;
  font-size: 15px;
  color: #ffffff;
  text-align: center;
`;

const ScrollWrapper = styled.View`
  flex-direction: row;
  padding-horizontal: 15px;
`;

const ContentWrapper = styled.View`
  flex: 1;
`;

const DetailSpentCardWrapper = styled.View`
  max-height: 225px;
  height: 100%;
  padding-right: 30px;
`;

const TransactionWrapper = styled.View`
  padding-top: 20px;
  padding-horizontal: 15px;
`;

const TransactionTitle = styled.Text`
  font-family: DMSans;
  font-size: 15px;
  color: #000000;
  padding-bottom: 10px;
`;
