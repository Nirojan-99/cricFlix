import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import {Image} from 'react-native';
import {StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {curatedData, highlightData, liveData, nftData} from '../Data/Data';
import LiveMatch from '../Components/LiveMatch';
import NFTasset from '../Components/NFTasset';
import CuratedMatch from '../Components/CuratedMatch';
import HighlightMatch from '../Components/HighlightMatch';
import PodcastMatch from '../Components/PodcastMatch';

export default function HomeScreen({navigation, route}) {
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* container */}
        <View className="flex-1">
          {/* live sec */}
          <View className="relative flex-1 bg-black">
            <Image
              className="w-full h-[360px]"
              source={require('../assets/home_first.png')}
            />
            <View className="absolute top-10 px-12 ">
              <Text className="text-[34px] text-white font-semibold">
                LIMITLESS
              </Text>
              <Text className="text-[50px] text-white font-extrabold">
                CRICKET
              </Text>
              <Text className="text-[50px] text-white font-extrabold">
                STREAMING
              </Text>
              <Text className="text-[16px] text-white font-bold">
                Ready to watch Cricket
                <Text className="font-extralight"> live streaming?</Text>
              </Text>
              {/* btn */}
              <View className="mt-2 flex-row items-center">
                <TouchableOpacity
                  onPress={() => navigation.jumpTo('Fixtures', {live: true})}
                  className="z-10"
                  activeOpacity={0.9}>
                  <Image source={require('../assets/play_btn.png')} />
                </TouchableOpacity>
                <View className="-ml-10 rounded-full bg-slate-300  p-3  z-0">
                  <Text className="pl-10 font-bold text-black">
                    STREAMING NOW
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* live matches sec */}
          <View className="">
            {/* title sec */}
            <View className="mx-5 my-8">
              <Text className="text-[#0C2159] font-extrabold text-3xl">
                Live
                <Text className="font-normal"> Matches</Text>
              </Text>
              <Text className="text-[#0C2159]">The Matches streaming now</Text>
            </View>
            {/* details sec */}
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{
                marginLeft: 12,
                marginBottom: 32,
                paddingRight: 10,
              }}>
              {liveData.map((item, index) => {
                return <LiveMatch key={index} data={item} />;
              })}
            </ScrollView>
            {/* nft ad sec */}
            <View className="bg-[#031952]">
              {/* title sec */}
              <View className="mx-4 mt-3">
                <Text className="font-extrabold text-2xl text-white">
                  Become A Owner
                </Text>
                <Text className="font-normal text-xl ">
                  Of The Most Popular
                  <Text className="text-red-600 font-extrabold"> NFT</Text>{' '}
                  Items
                </Text>
              </View>
              {/* scroll */}
              <ScrollView
                contentContainerStyle={{
                  marginLeft: 16,
                  marginBottom: 32,
                  marginTop: 28,
                  paddingRight: 16,
                }}
                showsHorizontalScrollIndicator={false}
                horizontal>
                {nftData.map((item, index) => {
                  return <NFTasset key={index} data={item} />;
                })}
              </ScrollView>
            </View>
            {/* curated matches */}
            <View>
              {/* title sec */}
              <View className="mx-3 my-8">
                <Text className="font-extrabold text-2xl text-[#0C2159]">
                  CURATED <Text className="font-normal">Matches</Text>
                </Text>
                <Text className="font-normal text-sm text-[#0C2159]">
                  The Matches played during the past 3 days
                </Text>
              </View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{
                  marginLeft: 16,
                  marginBottom: 32,
                  paddingRight: 16,
                }}>
                {curatedData.map((item, index) => {
                  return <CuratedMatch data={item} key={index} />;
                })}
              </ScrollView>
              {/* view all btn */}
              <View className="flex-row  justify-center mb-5">
                <TouchableOpacity
                  activeOpacity={0.6}
                  className="px-10 py-3 border border-[#00278D] rounded-full">
                  <Text className="text-[#00278D] font-bold  ">View All</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* highlight sec */}
            <View>
              {/* title sec */}
              <View className="mx-3 my-8">
                <Text className="font-extrabold text-3xl text-[#0C2159]">
                  HIGHLIGHTS <Text className="font-normal">Videos</Text>
                </Text>
                <Text className="font-normal text-[16px] text-[#0C2159]">
                  The hilights of the Matches
                </Text>
              </View>
              {/*  */}
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{
                  marginLeft: 16,
                  marginBottom: 32,
                  paddingRight: 16,
                }}>
                {highlightData.map((item, index) => {
                  return <HighlightMatch key={index} data={item} />;
                })}
              </ScrollView>
              {/* view all btn */}
              <View className="flex-row  justify-center mb-5">
                <TouchableOpacity
                  activeOpacity={0.6}
                  className="px-10 py-3 border border-[#00278D] rounded-full">
                  <Text className="text-[#00278D] font-bold  ">View All</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* bottom sec */}
            <View className="bg-[#00278D] relative">
              <Image
                className="w-full h-[950px] opacity-30"
                style={{resizeMode: 'stretch'}}
                source={require('../assets/home_first.png')}
              />
              <View className="absolute top-0 right-0 left-0">
                <View className="mt-5 px-5 mr-5">
                  <Text className="text-3xl text-white font-bold">It's </Text>
                  <Text className="text-5xl text-white font-bold">
                    All About
                  </Text>
                  <Text className="text-5xl text-white font-bold">
                    CRICKET!
                  </Text>
                  <Text className="text-white text-sm font-normal my-3">
                    Sharing experts thoughts about Cricket and what need to be
                    done to achieve a best cricketting experience
                  </Text>
                  <View className="mt-8">
                    <Text className="text-4xl text-white font-bold m-0 p-0">
                      PODCASTS
                    </Text>
                    <Text className="text-white text-sm font-normal my-3">
                      Listen to the most significant Podcasts
                    </Text>
                  </View>
                </View>
                {/* scroll */}
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  contentContainerStyle={{
                    marginLeft: 16,
                    marginBottom: 32,
                    paddingRight: 16,
                    marginVertical: 20,
                  }}>
                  {highlightData.map((item, index) => {
                    return <PodcastMatch key={index} data={item} />;
                  })}
                </ScrollView>
                {/* view all btn */}
                <View className="flex-row  justify-center mb-5">
                  <TouchableOpacity
                    activeOpacity={0.6}
                    className="px-10 py-3 border border-[#fff] rounded-full">
                    <Text className="text-[#fff] font-bold  ">View All</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View className="flex-1"></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
