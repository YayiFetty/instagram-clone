import { useWindowDimensions } from 'react-native';

const useDynamicLayout = () => {
  const { width } = useWindowDimensions();

  // Dynamically adjust values based on the screen width
  const iconSize = width < 460 ? 22 : 25; // If width is less than 360, use 22, otherwise use 25
  const padding = width < 460 ? 10 : 15; // Adjust padding based on screen width
  const margin = width < 460 ? 8 : 12;   // Adjust margin based on screen width
    const widthS = width < 460 ? width*0.3 : width*0.12;
  return {
    iconSize,
    padding,
    margin,
    widthS
  };
};

export default useDynamicLayout;
