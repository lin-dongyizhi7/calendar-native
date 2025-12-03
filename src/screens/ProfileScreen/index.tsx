import React from 'react';
import { View } from 'react-native';
import { Avatar, Card, List, Text } from 'react-native-paper';
import { useTheme } from '../../theme/ThemeContext';

export default function ProfileScreen() {
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: theme.colors.background }}>
      <Card>
        <Card.Title
          title="可爱用户"
          subtitle="hello@calendar.dev"
          left={() => <Avatar.Text label="CN" size={48} />}
        />
        <Card.Content>
          <Text style={{ marginBottom: 8 }}>保持可爱，保持记录生活。</Text>
        </Card.Content>
      </Card>

      <Card style={{ marginTop: 16 }}>
        <List.Item title="同步账号" description="未绑定" left={props => <List.Icon {...props} icon="account-sync" />} />
        <List.Item title="提醒偏好" description="默认提前30分钟" left={props => <List.Icon {...props} icon="bell" />} />
        <List.Item title="应用版本" description="v1.0.0" left={props => <List.Icon {...props} icon="information" />} />
      </Card>
    </View>
  );
}

