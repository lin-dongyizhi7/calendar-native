import React, { ReactNode, useState } from 'react';
import { View } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { Appbar, Avatar, Divider, FAB, Menu, Text as PaperText } from 'react-native-paper';
import styles from './index.less';

interface CalendarLayoutProps {
  title: string;
  children: ReactNode;
  onAddPress?: () => void;
  showFloatingAdd?: boolean;
}

export default function CalendarLayout({ title, children, onAddPress, showFloatingAdd = false }: CalendarLayoutProps) {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);

  const closeMenu = () => setMenuVisible(false);
  const goTo = (path: string) => {
    closeMenu();
    navigate(path);
  };

  const handleAdd = () => {
    closeMenu();
    if (onAddPress) onAddPress();
    else navigate('/event-editor');
  };

  return (
    <View style={styles.container}>
      <Appbar.Header mode="center-aligned">
        <Appbar.Action icon="calendar-blank" onPress={() => navigate('/month')} />
        <Appbar.Content title={title} />
        <Appbar.Action icon="plus" onPress={handleAdd} />
        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="dots-vertical" onPress={() => setMenuVisible(true)} />}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8 }}>
            <Avatar.Text label="CN" size={36} style={{ marginRight: 12 }} />
            <View>
              <PaperText variant="titleMedium">可爱用户</PaperText>
              <PaperText variant="bodySmall" style={{ opacity: 0.7 }}>
                hello@calendar.dev
              </PaperText>
            </View>
          </View>
          <Divider />
          <Menu.Item leadingIcon="account-circle" title="个人信息" onPress={() => goTo('/profile')} />
          <Menu.Item leadingIcon="cog" title="设置" onPress={() => goTo('/settings')} />
          <Menu.Item leadingIcon="bell-plus" title="提醒中心" onPress={() => goTo('/settings')} />
          <Menu.Item leadingIcon="plus-circle" title="新建事项" onPress={handleAdd} />
        </Menu>
      </Appbar.Header>

      <View style={styles.content}>{children}</View>

      {showFloatingAdd ? (
        <View style={styles.fabWrapper}>
          <FAB icon="plus" onPress={handleAdd} label="新建事项" />
        </View>
      ) : null}
    </View>
  );
}

