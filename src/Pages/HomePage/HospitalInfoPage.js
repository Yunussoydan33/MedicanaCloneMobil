import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';

const menuItems = [
  { title: 'Genel Bilgiler', icon: require('../../Assets/hastaneler.png') },
  { title: 'Odalar', icon: require('../../Assets/odalar.png') },
  { title: 'Hekimler', icon: require('../../Assets/hekimler.png') },
  { title: 'Tıbbi Birimler', icon: require('../../Assets/tıbbibirimler.png') },
  { title: 'Medikal Teknolojiler', icon: require('../../Assets/medikarteknolojiler.png') },
  { title: 'Sunulan Hizmetler', icon: require('../../Assets/sunulanhizmetler.png') },
];

export default function HospitalInfoPage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Image source={require('../../Assets/MedicanaKadıkoy.png')} style={styles.headerImage} />
        <View style={styles.textContainer}>
         
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome5 name="phone" size={24} color="#19A7CE" />
            <Text style={styles.buttonText}>Hastaneyi Ara</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="photo-library" size={24} color="#19A7CE" />
            <Text style={styles.buttonText}>Fotoğraf Galerisi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Entypo name="location-pin" size={24} color="#19A7CE" />
            <Text style={styles.buttonText}>Yol Tarifi Al</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="event" size={24} color="#19A7CE" />
            <Text style={styles.buttonText}>Randevu Al</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menuCard}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Image source={item.icon} style={styles.menuIcon} />
            <Text style={styles.menuText}>{item.title}</Text>
            <Entypo name="chevron-right" size={24} color="#19A7CE" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingBottom: 20,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 20,
  },
  headerImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textContainer: {
    padding: 15,
    alignItems: 'center',
  },
  hospitalName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#042387',
    textAlign: 'center',
  },
  hospitalAddress: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  button: {
    width: '45%',
    backgroundColor: '#E0F7FA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#042387',
    marginTop: 5,
  },
  menuCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
    flex: 1,
  },
});