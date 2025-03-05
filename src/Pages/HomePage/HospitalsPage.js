import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const hospitals = Array.from({ length: 20 }, (_, index) => ({
  id: index.toString(),
  name: `Medicana ${['Airport Medical Center', 'Ataköy', 'Ataşehir', 'Avcılar', 'Bahçelievler', 'Bursa'][index % 6]}`,
  address: `Örnek Adres ${index + 1}, İstanbul`,
  image: require('../../Assets/Hospital1.png'), // Örnek resim
}));

export default function HospitalsPage({ navigation }) {
  const [search, setSearch] = useState('');

  const filteredHospitals = hospitals.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hastane seçiniz</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Hastane ara"
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationButtonText}>Konumdan Bul</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          data={filteredHospitals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.hospitalCard} onPress={() => navigation.navigate('HospitalInfoPage', { hospital: item })}>
              <Image source={item.image} style={styles.hospitalImage} />
              <View style={styles.hospitalInfo}>
                <Text style={styles.hospitalName}>{item.name}</Text>
                <Text style={styles.hospitalAddress}>{item.address}</Text>
              </View>
              <Text style={styles.arrow}>&gt;</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContentContainer}
        />
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Geri</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
  },
  header: {
    backgroundColor: '#042387',
    padding: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  locationButton: {
    backgroundColor: '#19A7CE',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  locationButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cardContainer: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  listContentContainer: {
    paddingBottom: 20,
  },
  hospitalCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center',
  },
  hospitalImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  hospitalInfo: {
    flex: 1,
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },
  hospitalAddress: {
    fontSize: 12,
    color: '#333',
  },
  arrow: {
    fontSize: 18,
    color: '#19A7CE',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },
});