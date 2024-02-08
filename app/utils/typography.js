import { Platform } from "react-native"

export const typography = {
  /**
   * The Poppins-Bold font.
   */
  Poppins_Bold: Platform.select({ ios: "Poppins-Bold", android: "Poppins-Bold" }),

  /**
   * The Poppins-SemiBold font.
   */
  Poppins_SemiBold: Platform.select({ ios: "Poppins-SemiBold", android: "Poppins-SemiBold" }),

  /**
   * The Poppins-Medium font.
   */
  Poppins_Medium: Platform.select({ ios: "Poppins-Medium", android: "Poppins-Medium" }),

  /**
   * The Poppins-Regular font.
   */
  Poppins_Regular: Platform.select({ ios: "Poppins-Regular", android: "Poppins-Regular" }),

  /**
   * The Poppins-Light font.
   */
  Poppins_Light: Platform.select({ ios: "Poppins-Light", android: "Poppins-Light" }),

  /**
   * The Poppins-Black font.
   */
  Poppins_Black: Platform.select({ ios: "Poppins-Black", android: "Poppins-Black" }),

  /**
   * The Poppins-BlackItalic font.
   */
  Poppins_BlackItalic: Platform.select({ ios: "Poppins-BlackItalic", android: "Poppins-BlackItalic" }),

  /**
   * The Poppins-BoldItalic font.
   */
  Poppins_BoldItalic: Platform.select({ ios: "Poppins-BoldItalic", android: "Poppins-BoldItalic" }),

  /**
   * The Poppins-ExtraBold font.
   */
  Poppins_ExtraBold: Platform.select({ ios: "Poppins-ExtraBold", android: "Poppins-ExtraBold" }),

  /**
   * The Poppins-ExtraBoldItalic font.
   */
  Poppins_ExtraBoldItalic: Platform.select({ ios: "Poppins-ExtraBoldItalic", android: "Poppins-ExtraBoldItalic" }),

  /**
   * The Poppins-ExtraLight font.
   */
  Poppins_ExtraLight: Platform.select({ ios: "Poppins-ExtraLight", android: "Poppins-ExtraLight" }),

  /**
   * The Poppins-ExtraLightItalic font.
   */
  Poppins_ExtraLightItalic: Platform.select({ ios: "Poppins-ExtraLightItalic", android: "Poppins-ExtraLightItalic" }),

  /**
   * The Poppins-Italic font.
   */
  Poppins_Italic: Platform.select({ ios: "Poppins-Italic", android: "Poppins-Italic" }),

  /**
   * The Poppins-LightItalic font.
   */
  Poppins_LightItalic: Platform.select({ ios: "Poppins-LightItalic", android: "Poppins-LightItalic" }),

  /**
   * The Poppins-MediumItalic font.
   */
  Poppins_MediumItalic: Platform.select({ ios: "Poppins-MediumItalic", android: "Poppins-MediumItalic" }),

  /**
   * The Poppins-SemiBoldItalic font.
   */
  Poppins_SemiBoldItalic: Platform.select({ ios: "Poppins-SemiBoldItalic", android: "Poppins-SemiBoldItalic" }),

  /**
   * The Poppins-Thin font.
   */
  Poppins_Thin: Platform.select({ ios: "Poppins-Thin", android: "Poppins-Thin" }),

  /**
   * The Poppins-ThinItalic font.
   */
  Poppins_ThinItalic: Platform.select({ ios: "Poppins-ThinItalic", android: "Poppins-ThinItalic" }),
}
