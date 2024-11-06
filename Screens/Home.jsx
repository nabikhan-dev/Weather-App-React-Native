import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
// import { API_KEY } from "../constants";


function Home() {

    return (
      <View className="bg-blue-950 flex-1 ">
        <StatusBar style="light" />
        <SafeAreaView className="flex-1 flex mt-10  ">
          <View className="flex mx-4 relative z-50 " style={{ height: "7%" }}>
            <View className="flex-row  rounded-full border border-gray-500 bg-transparent ">
              <TextInput
                placeholder="Search city"
                className="pl-6 h-14 text-base text-white"
                placeholderTextColor={"lightgray"}
              />
            </View>
          </View>
          {/* Forecast section */}
          <View
            className="flex-1 mx-4 justify-around items-center  mt-8 ">
            <Text className="  text-white text-2xl font-bold ">
             Pakistan &nbsp;
              <Text className=" text-slate-300 text-lg font-semibold ">
                 Peshawer
              </Text>
            </Text>

          <KeyboardAvoidingView className="flex-1">
            <ScrollView className="flex-1" bounces={false}>
              {/* Weather Image */}
              <View className="flex-row justify-center">
                <Image
                  source={require("../assets/Images/partlycloudy.png")}
                  className="w-52 h-52 mt-5"
                />
              </View>
              {/* Temperature and weather status*/}

              <View className=" space-y-5">
                <Text className="text-6xl font-bold text-white text-center ml-4 mt-5">
                34&deg;
                </Text>
                <Text className="text-xl  text-white text-center ">
                  Partly Cloudy
                </Text>
              </View>

              {/* Other States */}
              <View className="flex-row  justify-between  flex-1 mt-6">
                <View className="flex-row  space-x-2 items-center">
                  <Image
                    source={require("../assets/Images/wind.png")}
                    className="w-6 h-6"
                  />
                  <Text className="font-semibold text-white text-base">
                     24%
                  </Text>
                </View>
                <View className="flex-row  space-x-2 items-center">
                  <Image
                    source={require("../assets/Images/drop.png")}
                    className="w-6 h-6"
                  />
                  <Text className="font-semibold text-white text-base">
                   23%
                  </Text>
                </View>
                <View className="flex-row  space-x-2 items-center">
                  <Image
                    source={require("../assets/Images/sun white.png")}
                    className="w-6 h-6"
                  />
                  <Text className="font-semibold text-white text-base">
                    5:33AM
                  </Text>
                </View>
              </View>
              <View className=" space-y-2  mt-6 ">
                <View className="flex-row items-center  space-x-2 ">
                  <AntDesign name="calendar" size={22} color="white" />
                  <Text className="text-white font-semibold text-2lg">
                    Daily forecast
                  </Text>
                </View>
                <ScrollView
                  horizontal
                  contentContainerStyle={{ paddingHorizontal: 15 }}
                  showsHorizontalScrollIndicator={false}
                >
                  <View className="flex justify-center items-center  w-24 rounded-3xl py-4 space-y-1 mr-4  bg-blue-400 p-4">
                    <Image
                      source={require("../assets/Images/heavyrain.png")}
                      className="w-11 h-11"
                    />
                    <Text className="text-white"> Monday</Text>
                    <Text className="text-white text-xl font-semibold">
                      23&#176;
                    </Text>
                  </View>
                  <View className="flex justify-center items-center  w-24 rounded-3xl py-4 space-y-1 mr-4 bg-blue-400 p-4">
                    <Image
                      source={require("../assets/Images/heavyrain.png")}
                      className="w-11 h-11"
                    />
                    <Text className="text-white"> Monday</Text>
                    <Text className="text-white text-xl font-semibold">
                      23&#176;
                    </Text>
                  </View>
                  <View className="flex justify-center items-center  w-24 rounded-3xl py-4 space-y-1 mr-4 bg-blue-400 p-4">
                    <Image
                      source={require("../assets/Images/heavyrain.png")}
                      className="w-11 h-11"
                    />
                    <Text className="text-white"> Monday</Text>
                    <Text className="text-white text-xl font-semibold">
                      23&#176;
                    </Text>
                  </View>
                  <View className="flex justify-center items-center  w-24 rounded-3xl py-4 space-y-1 mr-4 bg-blue-400 p-4">
                    <Image
                      source={require("../assets/Images/heavyrain.png")}
                      className="w-11 h-11"
                    />
                    <Text className="text-white"> Monday</Text>
                    <Text className="text-white text-xl font-semibold">
                      23&#176;
                    </Text>
                  </View>
                  <View className="flex justify-center items-center  w-24 rounded-3xl py-4 space-y-1 mr-4 bg-blue-400 p-4">
                    <Image
                      source={require("../assets/Images/heavyrain.png")}
                      className="w-11 h-11"
                    />
                    <Text className="text-white"> Monday</Text>
                    <Text className="text-white text-xl font-semibold">
                      23&#176;
                    </Text>
                  </View>
                  <View className="flex justify-center items-center  w-24 rounded-3xl py-4 space-y-1 mr-4 bg-blue-400 p-4">
                    <Image
                      source={require("../assets/Images/heavyrain.png")}
                      className="w-11 h-11"
                    />
                    <Text className="text-white"> Monday</Text>
                    <Text className="text-white text-xl font-semibold">
                      23&#176;
                    </Text>
                  </View>
                  <View className="flex justify-center items-center  w-24 rounded-3xl py-4 space-y-1 mr-4 bg-blue-400 p-4">
                    <Image
                      source={require("../assets/Images/heavyrain.png")}
                      className="w-11 h-11"
                    />
                    <Text className="text-white"> Monday</Text>
                    <Text className="text-white text-xl font-semibold">
                      23&#176;
                    </Text>
                  </View>
                </ScrollView>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </View>
  );
}
export default Home;
