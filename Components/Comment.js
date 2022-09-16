import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Avatar} from '@rneui/base';
import {
  HandThumbDownIcon,
  HandThumbUpIcon,
} from 'react-native-heroicons/outline';

export default function Comment({data}) {
 
  return (
    <View className="px-5 bg-white my-1 shadow-xl w-full py-2">
      <View className="flex-row items-start justify-between space-x-3">
        <Avatar
          size={45}
          rounded
          source={{
            uri: 'https://m.media-amazon.com/images/M/MV5BZWJlODhlMzctOTU0Yi00MTUwLTkxODYtMDNjNTQxYTI2YTE1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
          }}
        />
        <View className="flex-col flex-1">
          <Text className="text-gray-400">{data.user}</Text>
          <Text className="text-black">{data.comment}</Text>
          <View className="flex-row items-center justify-between  pr-5 mt-3">
            <Text className="text-gray-300">
              {data.date}
              <Text>{data.edited && `(edited)`}</Text>
            </Text>
            {/* like btn */}
            <View className="flex-row items-center justify-between space-x-5">
              <View className="flex-row items-center justify-between space-x-1">
                <TouchableOpacity>
                  <HandThumbUpIcon color={'#333'} size={25} />
                </TouchableOpacity>
                <Text className="text-black">{data.likes}</Text>
              </View>
              <View className="flex-row items-center justify-between space-x-1">
                <TouchableOpacity>
                  <HandThumbDownIcon color={'#333'} size={25} />
                </TouchableOpacity>
                <Text className="text-black">{data.dislike}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
