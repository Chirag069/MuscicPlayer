import { PixelRatio } from 'react-native';
import { Dimensions } from 'react-native';

const { fontScale, width, height } = Dimensions.get("window");

export const screenWidth = width
export const screenHeight = height

export function fs(size) {
    return size / PixelRatio.roundToNearestPixel(fontScale)
}

export const vs = (size) => height * (size / height)
export const hs = (size) => width * (size / width)
