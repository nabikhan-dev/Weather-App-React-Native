import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useNavigation } from '@react-navigation/native';



export default function MySplashScreen() {
    const navigation = useNavigation();

    const handlePress = () => {
      navigation.navigate('Home'); 
    };
  
  return (
    <View className="bg-blue-950 flex-1 relative ">
      <View className=" flex-1 justify-center items-center">
        <Image
          source={require('../assets/splashLogo.png')}
          style={{ width: '60%', height: '30%' }}   
        />
        <Text className="text-3xl text-white">Weather App</Text>
        <TouchableOpacity className="mt-40 border border-gray-400 rounded-full py-4 px-10 "  onPress={handlePress}>
        <Text  className="text-white"> Get Started </Text>
     </TouchableOpacity>
      </View>
    </View>
  );
}
