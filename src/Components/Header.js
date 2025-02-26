import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

export default function Header({ onNotificationPress, onMenuPress }) {
  return (
    <View style={styles.headerContainer}>
      {/* Bildirim Butonu */}
      <TouchableOpacity onPress={onNotificationPress} style={styles.iconButton}>
        <FontAwesome name="bell" size={30} color="#002E6E" />
      </TouchableOpacity>

      {/* Logo */}
      <Image source={require('../Assets/Medicana.png')} style={styles.logo} />

      {/* Menü Butonu */}
      <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
        <Entypo name="menu" size={40} color="#002E6E" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 0,
  },
  logo: {
    height: 40,
    width: Dimensions.get('window').width * 0.4, // Logonun genişliğini dinamik ayarladım
    resizeMode: 'contain',
    marginTop: 30,
  },
  iconButton: {
    padding: 10,
    marginTop: 30,

  },
});
