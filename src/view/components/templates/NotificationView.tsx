/* eslint-disable import/prefer-default-export */
import React from 'react';
import { View } from 'react-native';

import { NotificationList } from '../organisms';
import { Text } from '../atoms';
import { Button } from '../molecules';
import { NotificationData } from '../Types';

interface Props {
  data: NotificationData[]
  onPressItem: () => void,
  onPressRefresh: () => void
}

const NotificationView: React.FC<Props> = ({ data, onPressItem, onPressRefresh }: Props) => (
  <View>
    <Text text="Notificaciones" typography="header" />
    <NotificationList data={data} onPressItem={onPressItem} />
    <Button text="Refrescar" onPress={onPressRefresh} />
  </View>
);

export { NotificationView };
