import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  // Switch,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const menuItems = [
  'Главное',
  'Поступления',
  'Отгрузка',
  'Перемещения',
  'Списания',
  'НСИ',
  'Администрирование',
  'Профиль',
  'Выход из системы',
];

const Sidebar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(true);

  const backgroundColor = '#111113';
  const textColor = '#FFF';

  return (
    <View style={[styles.sidebar, { height: 60, backgroundColor }]}>     
      <View style={styles.avatarSection}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.avatar}
        />
       
          <View>
            <Text style={[styles.name, { color: textColor }]}>Musayev A.</Text>
            <Text style={{ color: 'gray', fontSize: 12 }}>Administrator</Text>
          </View>
       
      </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {menuItems.map((item, index) => (
                <TouchableOpacity key={index} style={styles.menuItem}>
                    {/* <View style={[styles.dot, { backgroundColor: '#8b5cf6' }]} /> */}
                    {open && <Text style={[styles.menuText, { color: textColor }]}>{item}</Text>}
                </TouchableOpacity>
                ))}
            </View>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  sidebar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    marginLeft: 20,
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  burger: {
    width: 24,
    height: 18,
    justifyContent: 'space-between',
  },
  line: {
    height: 2,
    width: 24,
    borderRadius: 1,
  },
  avatarSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '12%',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginHorizontal: 15,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
  },
  menuItem: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    // gap: 10,
    borderColor: '#43484e',
    borderWidth: 1.2,
    borderRadius: 4,
    margin: 6,
  },
  dot: {
    width: 6,
    height: "100%",
    borderRadius: 1.2,
  },
  menuText: {
    fontSize: 14,
    padding: 6,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
});