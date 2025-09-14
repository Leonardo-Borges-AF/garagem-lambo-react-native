import React, { useEffect, useState } from "react";
import { View, Image, Text, Button } from "react-native";
import logo from "../../../assets/logo.png";
import { styles } from "./styles";
import { Divider } from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import { BuyButton } from "../BuyButton";
import { CarModel } from "./props";
import { handleNextItem, handlePreviusItem, loadCarData } from "./actoins";

export function CardView() {
  const [carData, setCarData] = useState<CarModel | null>(null);

  useEffect(() => {
    (async () => {
      await loadCarData(3, setCarData);
    })();
  }, []);
  const renderLogoBox = () => {
    return (
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.imageLogo} />
      </View>
    );
  };
  const renderCarDetails = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.carBrand}>Lamborghini</Text>
        <Text style={styles.carName}>{carData?.carName}</Text>
      </View>
    );
  };
  const renderCarImage = () => {
    return (
      <Image
        style={styles.image}
        source={{
          uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`,
        }}
      />
    );
  };

  const renderPriceControls = () => {
    return (
      <View style={styles.PriceLabelContainer}>
        <Button
          title="<"
          color={"#01a6b3"}
          onPress={() => handlePreviusItem(carData, setCarData)}
        ></Button>
        <Text style={styles.PriceLabel}>{carData?.price}</Text>
        <Button
          title=">"
          color={"#01a6b3"}
          onPress={() => handleNextItem(carData, setCarData)}
        ></Button>
      </View>
    );
  };

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
      <Divider />
      <BuyButton />
      {renderPriceControls()}
    </View>
  );
}
