import React from 'react';
import { View } from 'react-native';
import { NotificationView } from '../../../components';

const Home: React.FC = () => (
  <View style={{ flex: 1 }}>
    <NotificationView
      data={[{ id: '1', title: 'title', date: 'date' }]}
      onPressItem={() => { }}
      onPressRefresh={() => { }}
    />
  </View>
);

export default Home;
