import { fetchGetCarData } from "../../api/getCar";
import { CarModel } from "./props";

export const loadCarData = async (
  id: number,
  setCardata: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  const response = await fetchGetCarData(id);
  try {
    if (response) {
      setCardata(response);
      return response;
    }
  } catch (error) {
    console.log(error);
    setCardata(null);
  }
};

export const handlePreviusItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  let response = null;
  try {
    if (carData && carData.id > 1) {
      response = await fetchGetCarData(carData.id - 1);
    }
    if (response) {
      setCarData(response);
    }
  } catch (error) {
    setCarData(null);
  }
};

export const handleNextItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  let response = null;
  try {
    if (carData && carData.id < 10) {
      response = await fetchGetCarData(carData.id + 1);
    }
    if (response) {
      setCarData(response);
    }
  } catch (error) {
    setCarData(null);
  }
};
