import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import { Income, Outcome } from "../data/Category.data";
const SelectCategory = ({ navigation }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Wrapper>
      <HeaderWrapper>
        <Icon
          name="arrow-back-outline"
          size={25}
          color="#000000"
          onPress={() => navigation.goBack()}
        />
        <HeaderTitle>Pilih Kategori </HeaderTitle>
        <Icon name="arrow-back-outline" size={25} color="#eaeaea" />
      </HeaderWrapper>
      <ContentWrapper>
        <FilterButtonWrapper>
          <FilterButton
            activeOpacity={0.8}
            onPress={() => setIsSelected(false)}
            isSelected={isSelected}
          >
            <ButtonTitle isSelected={isSelected}>Pemasukan</ButtonTitle>
            <Image
              source={require("../assets/income.png")}
              style={{ width: 15, height: 15 }}
            />
          </FilterButton>
          <FilterButton
            activeOpacity={0.8}
            onPress={() => setIsSelected(true)}
            isSelected={!isSelected}
          >
            <ButtonTitle isSelected={!isSelected}>Pengeluaran</ButtonTitle>
            <Image
              source={require("../assets/outcome.png")}
              style={{ width: 15, height: 15 }}
            />
          </FilterButton>
        </FilterButtonWrapper>
        <FilterWrapper>
          {!isSelected
            ? Income.map((data, index) => (
                <FilterIconWrapper key={index}>
                  <FilterIcon
                    onPress={() =>
                      navigation.push("Post", {
                        type: "Pemasukan",
                        title: data.name,
                        image: data.image,
                      })
                    }
                  >
                    <Image
                      source={data.image}
                      style={{ width: 40, height: 40 }}
                    />
                  </FilterIcon>
                  <FilterTitle>{data.name}</FilterTitle>
                </FilterIconWrapper>
              ))
            : Outcome.map((data, index) => (
                <FilterIconWrapper key={index}>
                  <FilterIcon
                    onPress={() =>
                      navigation.push("Post", {
                        type: "Pengeluaran",
                        title: data.name,
                        image: data.image,
                      })
                    }
                  >
                    <Image
                      source={data.image}
                      style={{ width: 40, height: 40, resizeMode: "contain" }}
                    />
                  </FilterIcon>
                  <FilterTitle>{data.name}</FilterTitle>
                </FilterIconWrapper>
              ))}
        </FilterWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default SelectCategory;

const Wrapper = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const HeaderWrapper = styled.View`
  background-color: #eaeaea;
  width: 100%;
  padding-horizontal: 15px;
  padding-top: 25px;
  padding-bottom: 50px;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderTitle = styled.Text`
  font-family: DMSans-Bold;
  font-size: 18px;
  color: #000000;
`;

const ContentWrapper = styled.View`
  padding-horizontal: 15px;
`;

const FilterButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  top: -20px;
  /* margin-horizontal: 15px; */
`;

const FilterButton = styled.TouchableOpacity`
  background-color: ${({ isSelected }) => (isSelected ? "white" : "#2E3A59")};
  elevation: 3;
  border-radius: 5px;
  padding-vertical: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 48%;
`;

const ButtonTitle = styled.Text`
  font-family: DMSans-Bold;
  font-size: 15px;
  color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  margin-right: 20px;
`;

const FilterWrapper = styled.View`
  padding-vertical: 10px;
  flex-wrap: wrap;
  flex-direction: row;
`;

const FilterIconWrapper = styled.View`
  margin-bottom: 20px;
  margin-right: 30px;
`;

const FilterIcon = styled.TouchableOpacity`
  padding: 8px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const FilterTitle = styled.Text`
  font-family: DMSans-Bold;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  color: #000000;
`;
