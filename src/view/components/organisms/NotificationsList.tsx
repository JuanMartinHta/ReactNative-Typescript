/* eslint-disable import/prefer-default-export */
import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Touchable, Text } from '../atoms';
import { NotificationData } from '../Types';

interface Props {
  data: NotificationData[]
  onPressItem: () => void
}

const NotificationList: React.FC<Props> = ({ data, onPressItem }: Props) => (
  <FlatList
    data={data}
    renderItem={({ item }) => (
      <Touchable onPress={onPressItem} type="card" style={notificationCardStyle.card}>
        <View>
          <Text text={item.title} />
          <Text text={item.date} />
        </View>
      </Touchable>
    )}
    keyExtractor={(item) => item.id}
  />
);

const notificationCardStyle = StyleSheet.create({
  card: {
    borderRadius: 4,
    elevation: 2,
    padding: 16
  }
});

export { NotificationList };
