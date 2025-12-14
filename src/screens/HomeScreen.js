import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-5">

      <View className="mt-6">
        <Text className="text-2xl font-bold text-gray-800">
          Device Dashboard
        </Text>
        <Text className="text-gray-500 mt-1">
          Control volume from web
        </Text>
      </View>

      <View className="bg-white rounded-2xl p-6 shadow-md mt-6">
        <Text className="text-lg font-semibold text-gray-800 mb-2">
          Connected Device
        </Text>

        <Text className="text-gray-500 mb-4">
          Waiting for commands from web dashboard
        </Text>

        <View className="flex-row justify-between">
          <TouchableOpacity className="bg-gray-200 px-4 py-3 rounded-xl">
            <Text className="font-semibold">Mute</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-black px-6 py-3 rounded-xl">
            <Text className="text-white font-semibold">Test Volume</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
}
