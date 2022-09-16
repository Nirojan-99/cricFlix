import React, {useEffect, useLayoutEffect, useState} from 'react';
import Live from '../Components/Live';
import {useNavigation, useRoute} from '@react-navigation/native';
import Fixture from '../Components/Fixture';

export default function FixturesScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const [live, setLive] = useState(false);

  useEffect(() => {
    setLive(route?.params?.live);
  }, [navigation,route]);

  if (live === true) {
    return <Live />;
  } else {
    return <Fixture />;
  }
}
