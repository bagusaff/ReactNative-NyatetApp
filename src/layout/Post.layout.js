import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";
const Post = ({ navigation, route }) => {
  const { type, title, image } = route.params;
  const [date, setDate] = useState(new Date(null));
  const [show, setShow] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  return (
    <Wrapper>
      <HeaderWrapper>
        <Icon
          name="arrow-back-outline"
          size={25}
          color="#000000"
          onPress={() => navigation.goBack()}
        />
        <HeaderTitle>Tambahkan {type}</HeaderTitle>
        <Icon name="arrow-back-outline" size={25} color="#eaeaea" />
      </HeaderWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <Image
            source={image}
            style={{ width: 60, height: 60, marginRight: 15 }}
          />
          <Title>{title}</Title>
        </TitleWrapper>
        <FormLabel>Catatan</FormLabel>
        <StyledInput
          placeholder="Catatan"
          placeholderTextColor="#C4C4C4"
          style={{
            borderWidth: 1,
            padding: 5,
            borderRadius: 5,
            borderColor: "#E0E0E0",
            color: "#000",
          }}
        />
        <FormLabel>Nominal</FormLabel>
        <StyledInput
          placeholder="Nominal"
          placeholderTextColor="#C4C4C4"
          keyboardType="numeric"
          style={{
            borderWidth: 1,
            padding: 5,
            borderRadius: 5,
            borderColor: "#E0E0E0",
            color: "#000",
          }}
        />
        <FormLabel>Tanggal Transaksi</FormLabel>
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={{
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "#E0E0E0",
            color: "#000",
          }}
        >
          <Text
            style={{
              color: "#c4c4c4",
              paddingVertical: 7,
              paddingHorizontal: 5,
            }}
          >
            {date == null ? "Pilih Tanggal" : JSON.stringify(date)}
          </Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            onChange={onChangeDate}
            mode="date"
          />
        )}
        <StyledButton activeOpacity={0.9}>
          <TextButton> Simpan Transaksi </TextButton>
        </StyledButton>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Post;

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
`;

const HeaderWrapper = styled.View`
  padding-horizontal: 15px;
  padding-top: 25px;
  padding-bottom: 20px;
  background-color: #eaeaea;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderTitle = styled.Text`
  font-family: DMSans-Bold;
  font-size: 18px;
  color: #000000;
`;

const ContentWrapper = styled.View`
  align-self: center;
  justify-content: center;
  padding: 50px;
  width: 100%;
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-family: DMSans;
  font-size: 25px;
  color: #000000;
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
  font-family: DMSans-Bold;
  font-size: 15px;
  color: #ffffff;
`;
