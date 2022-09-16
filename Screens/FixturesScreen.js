import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Live from '../Components/Live';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';

export default function FixturesScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const [live, setLive] = useState(false);



  if (live === true) {
    return <Live />;
  } else {
    return <View>{/* <Live /> */}</View>;
  }
}
