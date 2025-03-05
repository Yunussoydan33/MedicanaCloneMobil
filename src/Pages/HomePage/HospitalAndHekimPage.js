import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const buttons = [
    { title: 'Hastaneler', screen: 'HospitalsPage', image: require('../../Assets/hastaneler.png') },
    { title: 'Hekimler', screen: 'HekimlerPage', image: require('../../Assets/hekimler.png') },
  { title: 'Tıbbi Birimler', image: require('../../Assets/tıbbibirimler.png') },
  { title: 'En Yakın Medicana', image: require('../../Assets/enyakınmedicana.png') },
  { title: 'Radyoloji Sonuçları', image: require('../../Assets/radyoloji.png') },
];

export default function HospitalAndHekimPage({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image source={require('../../Assets/MedicanaCart.png')} style={styles.bannerImage} />
        <Text style={styles.title}>Medicana'yı Keşfedin</Text>
        <Text style={styles.description}>
          Medicana Sağlık Grubu, 1992 yılından bu yana toplumun her kesiminden hastaya yüksek kaliteli sağlık hizmeti sunmayı misyon edinmiş bir kuruluştur.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((btn, index) => (
            <TouchableOpacity key={index} style={styles.button} onPress={() => navigation.navigate(btn.screen)}>
  <Image source={btn.image} style={styles.buttonImage} />
  <Text style={styles.buttonText}>{btn.title}</Text>
</TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F6F8FC',
    flex: 1
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    width: '100%',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#042387',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonImage: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },
});