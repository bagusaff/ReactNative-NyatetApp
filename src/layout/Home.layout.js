import React, { useState, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Animated,
} from "react-native";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import DetailSpentCard from "../components/DetailSpentCard";
import Paginator from "../components/Paginator";
import TransactionCard from "../components/TransactionCard";

const Home = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const navHooks = useNavigation();

  const viewableCardChanged = useRef(({ viewableCard }) => {
    setCurrentIndex(viewableCard[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Wrapper>
        <HeaderWrapper>
          <Icon
            name="reorder-three"
            color="#000"
            size={40}
            style={{ marginRight: 25 }}
            onPress={() => navHooks.openDrawer()}
          />
          <UserWrapper>
            <UserName>Ardhian Yuliandra Hanum</UserName>
            <UserEmail>ardhian.hanum@gmail.com</UserEmail>
          </UserWrapper>
        </HeaderWrapper>
        <ContentWrapper>
          <LabelInfoWrapper>
            <LabelInfo>
              <LabelTitleWrapper>
                <LabelTitle>Total Pemasukan</LabelTitle>
                <Image
                  source={require("../assets/income.png")}
                  style={{ width: 15, height: 15 }}
                />
              </LabelTitleWrapper>
              <TotalAmount>Rp.5.000.000</TotalAmount>
            </LabelInfo>
            <LabelInfo>
              <LabelTitleWrapper>
                <LabelTitle>Total Pengeluaran</LabelTitle>
                <Image
                  source={require("../assets/outcome.png")}
                  style={{ width: 15, height: 15 }}
                />
              </LabelTitleWrapper>
              <TotalAmount>Rp.4.000.000</TotalAmount>
            </LabelInfo>
          </LabelInfoWrapper>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ width: "200%" }}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={100}
            decelerationRate="fast"
            pagingEnabled
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            scrollEventThrottle={24}
            onViewableItemsChanged={viewableCardChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          >
            <DetailSpentCard />
            <DetailSpentCard />
          </ScrollView>
          <DetailCardWrapper>
            <SeeMoreText>Lihat Selengkapnya</SeeMoreText>
            <Paginator scrollX={scrollX} />
          </DetailCardWrapper>

          <TransactionWrapper>
            <TransactionTitleWrapper>
              <TransactionTitle>Transaksi Terakhir</TransactionTitle>
              <SeeMoreText>Lihat Semua</SeeMoreText>
            </TransactionTitleWrapper>
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
          </TransactionWrapper>
        </ContentWrapper>
        <StatusBar style="auto" />
      </Wrapper>
    </ScrollView>
  );
};

export default Home;

const Wrapper = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderWrapper = styled.View`
  background-color: #eaeaea;
  padding-top: 15px;
  padding-bottom: 30px;
  padding-horizontal: 15px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: 150px;
`;

const UserWrapper = styled.View``;

const UserName = styled.Text`
  font-family: DMSans-Bold;
  font-size: 16px;
  color: #000000;
`;
const UserEmail = styled.Text`
  font-family: DMSans-Bold;
  font-size: 13px;
  color: #7c7c7c;
`;

const ContentWrapper = styled.View`
  /* padding-horizontal: 15px; */
  width: 100%;
`;

const LabelInfoWrapper = styled.View`
  flex-direction: row;
  top: -40px;
  margin-horizontal: 15px;
  justify-content: space-between;
`;

const LabelInfo = styled.View`
  padding: 10px;
  border-radius: 5px;
  border: 1px;
  border-color: #f6f6f6;
  width: 48%;
  background-color: #ffffff;
  shadow-opacity: 0.5;
  elevation: 3;
`;

const LabelTitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const LabelTitle = styled.Text`
  font-family: DMSans;
  color: #7c7c7c;
  font-size: 14px;
`;

const TotalAmount = styled.Text`
  font-family: "DMSans-Medium";
  font-style: normal;
  font-size: 20px;
  color: #000000;
`;

const DetailCardWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 15px;
  align-items: center;
  padding-vertical: 5px;
`;

const SeeMoreText = styled.Text`
  font-family: DMSans-Bold;
  font-style: normal;
  font-size: 14px;
  color: #7c7c7c;
`;

const TransactionWrapper = styled.View`
  padding: 15px;
`;

const TransactionTitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 5px;
`;

const TransactionTitle = styled.Text`
  font-family: DMSans;
  font-size: 20px;
  color: #000000;
`;
