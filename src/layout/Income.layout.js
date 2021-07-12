import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";
import CategoryTransactionCard from "../components/CategoryTransactionCard";
import DetailSpentCard from "../components/DetailSpentCard";
import TransactionCard from "../components/TransactionCard";
const Income = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderTitle>Pengeluaran</HeaderTitle>
        <Icon name="caret-down-outline" size={20} color="#000000" />
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
            <TransactionTitle>Transaksi Pengeluaran</TransactionTitle>
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
  justify-content: center;
  padding-vertical: 30px;
  flex-direction: row;
  align-items: flex-end;
`;

const HeaderTitle = styled.Text`
  font-family: DMSans-Bold;
  font-size: 18px;
  text-align: center;
  color: #000000;
  padding-right: 10px;
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
