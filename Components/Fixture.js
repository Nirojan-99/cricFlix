import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import FixureCard from './FixureCard';
import {HomeIcon, MagnifyingGlassIcon} from 'react-native-heroicons/solid';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CalendarIcon} from 'react-native-heroicons/solid';
import {useRef} from 'react';

export default function Fixture() {
  const [selectedIndex, setSelctedIndex] = useState(-1);

  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarLabel: 'Fixtures',
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: 'gray',
      tabBarActiveBackgroundColor: '#001038',
      tabBarInactiveBackgroundColor: '#001038',
      tabBarIcon: ({focused, color, size}) => {
        return <CalendarIcon color={color} size={22} />;
      },
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/* title */}
          <View className="mt-8 mx-5">
            <Text className="text-[#031952] font-extrabold text-3xl">
              Match
              <Text className="font-normal"> Fixtures</Text>
            </Text>
            <Text className="font-normal text-[#031952]">
              The Fixtures of the matches to be played
            </Text>
            <Text className="text-[#031952] text-xl mt-11 font-bold">
              August 2021
            </Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{margin: 20, paddingRight: 40}}>
            <View className="flex-row">
              {date.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setSelctedIndex(index)}
                    className="">
                    <View
                      key={index}
                      className={`flex-col rounded-md items-center justify-center border-2 w-20 border-[#031952]  py-3 mr-3 ${
                        selectedIndex === index && 'bg-[#031952]'
                      }`}>
                      <Text
                        className={` text-[#031952] font-bold text-center text-2xl ${
                          selectedIndex === index && 'text-white'
                        }`}>
                        {index + 1}
                      </Text>
                      <Text
                        className={` text-[#031952] font-bold text-center text-lg  ${
                          selectedIndex === index && 'text-white'
                        }`}>
                        {item.week}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
          {/* card */}
          <ScrollView
            contentContainerStyle={{margin: 20, paddingRight: 40}}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4].map((item, index) => {
              return <FixureCard key={index} />;
            })}
          </ScrollView>
          {/* bottom */}
          <View className="bg-[#031952] pt-10 mt-4">
            <Text className="font-extrabold text-3xl text-white text-center pb-4">
              Match Report
            </Text>
            <View className="flex-col mx-12 my-4">
              <Text className="font-bold text-white text-lg">
                BANGLADESH VS AUSTRALIA
              </Text>
              <Text className="font-normal text-white ">5TH T20I, MIRPUR</Text>
              {/*  */}
              <View className="mt-4 flex-row items-center space-x-2">
                <Image
                  className="w-8 h-8 resize "
                  style={{resizeMode: 'contain'}}
                  source={{
                    uri: 'https://live.staticflickr.com/2052/2294634746_838b570b51_z.jpg',
                  }}
                />
                <Text className="text-white flex-1 font-bold">SL</Text>
                <Text className="text-white font-bold">122/8</Text>
              </View>
              <View className="mt-4 flex-row items-center space-x-2 font-bold">
                <Image
                  className="w-8 h-8  resize "
                  style={{resizeMode: 'contain'}}
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png',
                  }}
                />
                <Text className="text-white flex-1 font-bold">BDESH</Text>
                <Text className="text-slate-300 text-[10px] flex-1">
                  (8.5/20 ov. target 123)
                </Text>
                <Text className="text-white font-bold">54/5</Text>
              </View>

              <Image
                className="w-full h-36 mt-8 rounded-md"
                style={{resizeMode: 'stretch'}}
                source={{
                  uri: 'https://resources.pulse.icc-cricket.com/ICC/photo/2017/01/31/dc7c3191-8b09-4ae6-bb80-d41608e9014f/Australia.jpg',
                }}
              />
              <Text className="text-white mt-3">
                It was a nightmarish end to a tough tour for Australia. As if
                losing the series wasn't enough, in the final T20I, they lost 8
                for 24 to collapse to 62 all out in a chase of 123. This was
                their lowest total across limited-overs cricket. It meant
                Bangladesh took the series 4-1 in Dhaka.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const date = [
  {
    week: 'Mon',
  },
  {
    week: 'Tue',
  },
  {
    week: 'Wed',
  },
  {
    week: 'Thu',
  },
  {
    week: 'Fri',
  },
  {
    week: 'Sat',
  },
  {
    week: 'Sun',
  },
];
