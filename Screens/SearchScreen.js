import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function SearchScreen() {
  return (
    <View className=" flex-1">
      <View className="mx-5 mt-14">
        <Text className="text-[#031952] text-center">
          <Text className="font-bold">SEARCH </Text>
          for Fixtures, Videos, Podcast or NFT
        </Text>
        <TextInput
          className="border-b border-[#031952] mt-3 mx-5 text-gray-600 font-bold"
          placeholder="Search for"
          placeholderTextColor={'#333'}
        />
      </View>
    </View>
  );
}
