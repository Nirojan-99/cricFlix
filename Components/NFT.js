import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

export default function NFT({data}) {
  return (
    <View className="rounded-md shadow-md w-44 px- border-gray-600 border flex  py-4 mb-4">
      <Text className="text-center font-bold text-lg text-white">
        {data.item}
      </Text>
      <View className="items-center relative mt-3">
        <Image
          className="h-20 w-20 "
          source={require(`../assets/${'cap'}.png`)}
        />
        <Text className="text-white absolute top-0 right-2">{data.price}</Text>
      </View>
      <View className="mx-5">
        <Text className="text-white text-center">{data.description}</Text>
      </View>
      <View className="flex-row items-center justify-center mt-4">
        <TouchableOpacity className="bg-[#9EFF00] px-7 py-2 rounded-full">
          <Text className="text-black font-bold">Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
