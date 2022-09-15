import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

//icons
import {PlayIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

export default function LiveMatch({data}) {
  const navigation = useNavigation();

  return (
    <View className="rounded-md pb-2 mr-5 bg-white shadow-xl w-80">
      <Image
        style={{resizeMode: 'contain'}}
        source={{uri: data.image}}
        className="w-full h-44 rounded-t-md"
      />
      {/* live btn */}
      <View className="items-center justify-between">
        <TouchableOpacity
          onPress={() => navigation.jumpTo('Fixtures', {live: true})}
          activeOpacity={0.6}
          className="-mt-5 rounded-full  bg-red-600 py-2 px-3">
          <View className="px-2 flex-row justify-around">
            <PlayIcon size={20} color="white" />
            <Text className="font-bold ml-3 text-white">Live</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* data */}
      <View className="p-3">
        <Text className="text-black font-bold text-lg text-clip text-center">
          {data.match}
        </Text>
        <View className="flex-row items-center justify-between mt-5 mb-2">
          <Text className="text-gray-400">{data.views}</Text>
          <Text className="text-gray-400">{data.date}</Text>
        </View>
      </View>
    </View>
  );
}
