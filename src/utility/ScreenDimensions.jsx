import { Dimensions, PixelRatio } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const normalize = (size, factor = 0.5) => 
  PixelRatio.roundToNearestPixel(moderateScale(size, factor));

const normalizeWidth = (size) => 
  PixelRatio.roundToNearestPixel(scale(size));

const normalizeHeight = (size) => 
  PixelRatio.roundToNearestPixel(verticalScale(size));

const widthPercentage = (size) => wp(size);
const heightPercentage = (size) => hp(size);

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export {
  normalize,
  normalizeWidth,
  normalizeHeight,
  widthPercentage,
  heightPercentage,
  screenWidth,
  screenHeight,
};
