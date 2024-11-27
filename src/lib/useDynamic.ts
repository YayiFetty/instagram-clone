// import { useWindowDimensions } from 'react-native';

// const useDynamicLayout = () => {
//   const { width } = useWindowDimensions();

//   // Dynamically adjust values based on the screen width
//   const iconSize = width > 360 ? 22 : 25; // If width is less than 360, use 22, otherwise use 25
//   const padding = width > 360 ? 10 : 15; // Adjust padding based on screen width
//   const margin = width > 360 ? 8 : 12;   // Adjust margin based on screen width
//     const widthS = width > 360 ? width*0.1 : width*0.3;
//   return {
//     iconSize,
//     padding,
//     margin,
//     widthS
//   };
// };

// export default useDynamicLayout;



import { useWindowDimensions, Platform } from 'react-native';

const useDynamicLayout = () => {
  const { width, height } = useWindowDimensions();

  // Categorize device types
  const isSmallDevice = width < 360;
  const isMediumDevice = width >= 360 && width < 768;
  const isLargeDevice = width >= 768 && width < 1024;
  const isTabletOrLaptop = width >= 1024;

  // Responsive icon sizing
  const iconSize = isSmallDevice 
    ? 20 
    : isMediumDevice 
      ? 22 
      : isLargeDevice 
        ? 24 
        : 26;

  // Adaptive padding and margins
  const padding = isSmallDevice 
    ? 8 
    : isMediumDevice 
      ? 10 
      : isLargeDevice 
        ? 12 
        : 15;

  const margin = isSmallDevice 
    ? 6 
    : isMediumDevice 
      ? 8 
      : isLargeDevice 
        ? 10 
        : 12;

  // Width calculations with more granular breakpoints
  const widthS = isSmallDevice 
    ? width * 0.3 
    : isMediumDevice 
      ? width * 0.2 
      : isLargeDevice 
        ? width * 0.15 
        : width * 0.1;

  // Platform-specific adjustments
  const isPlatformSpecific = {
    isIOS: Platform.OS === 'ios',
    isAndroid: Platform.OS === 'android',
    isWeb: Platform.OS === 'web',
  };

  // Orientation detection
  const isLandscape = width > height;

  return {
    // Dimensional values
    width,
    height,
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
    isTabletOrLaptop,
    isLandscape,

    // Responsive values
    iconSize,
    padding,
    margin,
    widthS,

    // Platform info
    ...isPlatformSpecific,
  };
};

export default useDynamicLayout;