import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

export default function FixureCard() {
  return (
    <View className="shadow-lg rounded-lg p-3 px-4 bg-white mr-6 w-[310px]">
      <View className="flex-row space-x-7 mt-2">
        <Text className="font-bold text-red-500">LIVE </Text>
        <Text className="font-bold text-black">T20</Text>
        <Text className="font-bold text-black">Dhaka</Text>
      </View>
      <View className="mt-4 flex-row items-center space-x-2">
        <Image
          className="w-8 h-8 resize "
          style={{resizeMode: 'contain'}}
          source={{
            uri: 'https://live.staticflickr.com/2052/2294634746_838b570b51_z.jpg',
          }}
        />
        <Text className="text-black flex-1 font-bold">SL</Text>
        <Text className="text-black font-bold">122/8</Text>
      </View>
      <View className="mt-4 flex-row items-center space-x-2 font-bold">
        <Image
          className="w-8 h-8  resize "
          style={{resizeMode: 'contain'}}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png',
          }}
        />
        <Text className="text-black flex-1 font-bold">BDESH</Text>
        <Text className="text-gray-500 text-[10px] flex-1">
          (8.5/20 ov. target 123)
        </Text>
        <Text className="text-black font-bold">54/5</Text>
      </View>
      <Text className="font-bold text-black my-3 text-[12px]">
        Australia need 75 runs in 67 balls. RRR: 6.71
      </Text>
      <View className="flex-row items-center justify-between my-4">
        <TouchableOpacity className="border-2 border-[#00278D] px-3 py-1 rounded-xl">
          <Text className="text-[#00278D] font-bold">Match Report</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border-2 border-[#FF0000] bg-[#FF0000] px-3 py-1 rounded-xl">
          <Text className="text-[#fff] font-bold">Watch Live</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
