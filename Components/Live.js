import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  FlatList,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Video from 'react-native-video';
import {useNavigation, useRoute} from '@react-navigation/native';
import {PlayCircleIcon} from 'react-native-heroicons/solid';
import {Avatar, Input} from '@rneui/base';
import {comments} from '../Data/Data';
import Comment from './Comment';

export default function Live() {
  const [controls, setControls] = useState(true);
  const [paused, setPaused] = useState(true);
  const [showVideo, setShowVdo] = useState(true);

  //state
  const [comment, setComment] = useState('');
  const [data, setData] = useState(comments);

  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    if (route?.params.live === true) {
      navigation.setOptions({
        tabBarLabel: 'Live',
        tabBarIcon: () => {
          return <PlayCircleIcon color={'red'} size={22} />;
        },
      });
    }
  }, [navigation, route]);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setShowVdo(false);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setShowVdo(true);
    });
  }, []);

  const addComment = () => {
    setData(pre => {
      let array = [
        {
          user: 'Nirojan',
          comment: comment,
          likes: 0,
          dislike: 0,
          edited: false,
          date: '1 sec ago',
        },
        ...pre,
      ];

      return array;
    });

    setComment('');
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="height">
        <View className="flex-col h-full">
          <View className="">
            {showVideo && (
              <Video
                posterResizeMode="cover"
                poster="https://c.ndtvimg.com/2020-04/np151oi_virat-kohli-sarfaraz-ahmed-afp_625x300_08_April_20.jpg"
                onPress={() => setControls(pre => !pre)}
                controls={controls}
                source={require('../assets/vdo.mp4')}
                paused={paused}
                repeat={true}
                className="w-full h-60 bg-gray-400"
                playInBackground={false}
              />
            )}

            {/* vdo details */}
            <View className="shadow-sm w-full bg-white">
              <View className="flex-row items-center justify-between mt-3 px-5">
                <Text className="font-bold text-sm text-black">1st T20 I</Text>
                <Text className="font-bold text-sm text-black">
                  <Text className=" text-red-600">Live</Text> | BDESH vs
                  AUSTRALIA 2021
                </Text>
              </View>
              <View className="flex-row items-center justify-between mb-1 mt-1 px-5">
                <Text className="font-normal text-sm text-gray-500">
                  100K views
                </Text>
                <PlayCircleIcon color={'#333'} size={30} />
                <Text className="font-normal text-sm text-gray-500">
                  02 Aug 202
                </Text>
              </View>
            </View>
            {/* add comment */}
            <View className="my-1 mt-2 shadow-lg py-5 px-5 flex-row items-center justify-center bg-white">
              <Avatar
                size={45}
                rounded
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXtSo6a3BXZCcy95fd1zIt_ErRgecaAQYD6Q&usqp=CAU',
                }}
              />
              {/* <Input ty className="border border-gray-400" /> */}
              <TextInput
                onSubmitEditing={addComment}
                value={comment}
                onChangeText={text => setComment(text)}
                cursorColor={'#333'}
                placeholderTextColor="gray"
                placeholder="Add a public comment"
                className="border border-gray-400 flex-1 mx-2 rounded-3xl p-2 text-black placeholder:text-black"
              />
            </View>
          </View>
          {/* comments */}
          <ScrollView className="">
            {data.map((item, index) => {
              return <Comment key={index} data={item} />;
            })}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
