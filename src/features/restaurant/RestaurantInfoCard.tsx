import React from "react";
import { Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Entypo } from "@expo/vector-icons";
import OpenSvg from "../../../assets/open";
import {
  InfoView,
  RestaurantRatingView,
  StyledCardCover,
  StyledClosedText,
  StyledParagraph,
  StyledRating,
  StyledTitle,
} from "./restaurantStyles";
import { StyledIcon, StyledRow } from "../styles";

const RestaurantInfoCard = ({ restuarant }) => {
  const {
    name,
    icon,
    photos: [],
    vicinity,
    rating,
    opening_hours,
    business_status,
  } = restuarant;
  const ratedStar = (value: number) => {
    let rated = value > 5 ? 5 : value <= 0 ? 0 : value;
    return Array.from(new Array(Math.floor(rated)));
  };

  const unRatedStar = (rating: number) => {
    const diff = 5 - Math.floor(rating);
    const unrated = diff <= 0 ? 0 : diff >= 5 ? 5 : diff;
    return Array.from(new Array(Math.floor(unrated)));
  };

  return (
    <Card>
      <StyledCardCover source={{ uri: "https://picsum.photos/700" }} />
      <InfoView>
        <StyledTitle>{name}</StyledTitle>
        <RestaurantRatingView $justify="space-between">
          <StyledRating>
            {ratedStar(rating).map((_, index) => (
              <Entypo key={index} name="star" size={20} color="gold" />
            ))}
            {unRatedStar(rating).map((_, index) => (
              <Entypo key={index} name="star" size={20} color="grey" />
            ))}
          </StyledRating>
          <StyledRow>
            {business_status && business_status === 'CLOSED_TEMPORARILY' && (
              <StyledClosedText>CLOSED_TEMPORARILY</StyledClosedText>
            )}
            {opening_hours && opening_hours.open_now && (
              <SvgXml xml={OpenSvg} width={20} height={20} />
            )}
            {icon && <StyledIcon source={{ uri: icon }} />}
          </StyledRow>
        </RestaurantRatingView>
        <StyledParagraph>{vicinity}</StyledParagraph>
      </InfoView>
    </Card>
  );
};

export default RestaurantInfoCard;