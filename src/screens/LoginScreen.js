import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-gray-100 justify-center px-5">
      <View className="bg-white rounded-2xl p-6 shadow-md">
        
        <Text className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </Text>
        <Text className="text-center text-gray-500 mb-6">
          Login to continue
        </Text>

        <TextInput
          placeholder="Email"
          className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          className="border border-gray-300 rounded-xl px-4 py-3 mb-6"
          onChangeText={setPassword}
        />

        <TouchableOpacity
          className="bg-black py-4 rounded-xl mb-4"
          onPress={() => navigation.replace('Home')}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Login
          </Text>
        </TouchableOpacity>

        <Text
          className="text-center text-gray-500"
          onPress={() => navigation.navigate('Signup')}
        >
          Don’t have an account? <Text className="text-black font-semibold">Sign Up</Text>
        </Text>

      </View>
    </SafeAreaView>
  );
}
