import {Alert} from 'react-native';
import Snackbar from 'react-native-snackbar';

const showAlert = (
  title,
  message,
  positiveText = 'Ok',
  negativeText = 'Cancel',
  onPositivePress,
  onNegativePress,
  isSingleAction,
) => {
  if (isSingleAction)
    Alert.alert(title, message, [
      {text: positiveText, onPress: () => onPositivePress()},
    ]);
  else
    Alert.alert(title, message, [
      {text: positiveText, onPress: () => onPositivePress()},
      {text: negativeText, onPress: () => onNegativePress()},
    ]);
};
/**
 * Shows error messages using snackbar
 *
 * @param {string} error
 */
const showToast = (message, durationMillis = 3000) => {
  Snackbar.show({
    text: message,
    // duration: Snackbar.LENGTH_LONG,
    duration: durationMillis,
    backgroundColor: 'rgba(0,0,0,0.9)',
    textColor: 'white',
  });
};

export default {
  showAlert,
  showToast,
};
