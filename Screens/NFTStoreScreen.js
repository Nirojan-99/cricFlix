import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import NFTasset from '../Components/NFTasset';
import {nftData} from '../Data/Data';
import NFT from '../Components/NFT';

export default function NFTStoreScreen() {
  return (
    // <SafeAreaView className="flex-1 h-full">
    <View className="flex-1  bg-[#0C2159] h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 h-full">
        {/* title */}
        <View className="mx-6 mt-6">
          <Text className="font-extrabold text-white text-4xl ">
            Become A Owner
          </Text>
          <Text className="text-white font-normal text-lg">
            Of The Most Popular{' '}
            <Text className="text-red-600 font-extrabold"> NFT</Text> Items
          </Text>
        </View>
        <View className="flex-row flex-wrap items-stretch justify-around space-x-1 w-full my-7">
          {nftData.map((item, index) => {
            return <NFT key={index} data={item} />;
          })}
          {nftData.map((item, index) => {
            return <NFT key={index} data={item} />;
          })}
        </View>
      </ScrollView>
    </View>
    // </SafeAreaView>
  );
}
