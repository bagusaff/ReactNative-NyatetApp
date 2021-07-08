import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { PieChart } from "react-native-svg-charts";

const data = [
  {
    key: 1,
    amount: 50,
    svg: { fill: "#600080" },
  },
  {
    key: 2,
    amount: 50,
    svg: { fill: "#9900cc" },
  },
  {
    key: 3,
    amount: 40,
    svg: { fill: "#c61aff" },
  },
  {
    key: 4,
    amount: 95,
    svg: { fill: "red" },
  },
  {
    key: 5,
    amount: 35,
    svg: { fill: "#ecb3ff" },
  },
];

const Labels = ({ slices, height, width }) => {
  return slices.map((slice, index) => {
    const { labelCentroid, pieCentroid, data } = slice;
    return (
      <Text
        key={index}
        x={pieCentroid[0]}
        y={pieCentroid[1]}
        fill={"white"}
        textAnchor={"middle"}
        alignmentBaseline={"middle"}
        fontSize={24}
        stroke={"black"}
        strokeWidth={0.2}
      >
        {data.amount}
      </Text>
    );
  });
};

const DetailSpentCard = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <LabelTitle>Detail Pengeluaran</LabelTitle>
        <LabelDate>1 Jan 2021 - 05 Jul 2021</LabelDate>
      </LeftWrapper>
      <RightWrapper>
        <PieChart
          style={{ height: 200 }}
          valueAccessor={({ item }) => item.amount}
          data={data}
          spacing={1}
          outerRadius={"90%"}
        ></PieChart>
      </RightWrapper>
    </Wrapper>
  );
};

export default DetailSpentCard;

const Wrapper = styled.View`
  border-radius: 5px;
  background-color: #fff;
  padding: 10px;
  width: 100%;
  shadow-opacity: 0.22;
  shadow-radius: 2.22;
  elevation: 3;
  flex-direction: row;
  margin-bottom: 5px;
  margin-horizontal: 15px;
  flex: 1;
`;

const LeftWrapper = styled.View`
  flex-direction: column;
  flex: 1;
`;
const RightWrapper = styled.View`
  flex: 1;
`;

const LabelTitle = styled.Text`
  font-family: DMSans-Bold;
  font-size: 18px;
  color: #000000;
`;

const LabelDate = styled.Text`
  font-family: DMSans-Bold;
  font-size: 14px;
  color: #7c7c7c;
`;
