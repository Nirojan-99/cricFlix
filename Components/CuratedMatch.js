import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

//icons
import {PlayIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

export default function CuratedMatch({data}) {
  const navigation = useNavigation();

  return (
    <View className="rounded-md pb-2 mr-5 bg-white shadow-xl w-80">
      <Image
        style={{resizeMode: 'contain'}}
        source={{uri: data.image}}
        className="w-full h-44 rounded-t-md"
      />
      {/* live btn */}
      <View className="items-center">
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.6}
          className="-mt-5 rounded-full  bg-[#9EFF00] py-[3px] ">
          <View className="px-[3px] flex-row justify-around items-center">
            <View className="bg-[#84D400] p-2 rounded-full">
              <PlayIcon size={20} color="white" />
            </View>
            <Text className="font-extrabold mx-3 text-black">01.34</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* data */}
      <View className="p-3">
        <Text className="text-black font-bold text-lg text-clip text-center">
          {data.match}
        </Text>
        <View className="flex-row items-center justify-between mt-5 mb-2">
          <Text className="text-gray-400 font-bold">{data.views}</Text>
          <Text className="text-gray-400 font-bold">{data.date}</Text>
        </View>
      </View>
    </View>
  );
}
