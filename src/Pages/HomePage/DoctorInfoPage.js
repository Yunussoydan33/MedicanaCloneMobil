import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function DoctorInfoPage({ route }) {
  const { doctor } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Image source={require('../../Assets/yunus.png')} style={styles.doctorImage} />
          <View style={styles.textContainer}>
            <Text style={styles.doctorTitle}>Dr.</Text>   
            <Text style={styles.doctorName} numberOfLines={2} ellipsizeMode="tail">{doctor.name}</Text>
            <View style={styles.tagContainer}>
              <Text style={styles.hospitalTag} numberOfLines={2} ellipsizeMode="tail">{doctor.hospital}</Text>
              <Text style={styles.specialtyTag} numberOfLines={2} ellipsizeMode="tail">{doctor.specialty}</Text>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.blueButton}>
            <Image source={require('../../Assets/hekimozgecmisi.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Hekim Özgeçmişi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.whiteButton}>
            <Image source={require('../../Assets/akademikyayınlar.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Akademik Yayınlar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.whiteButton}>
            <Image source={require('../../Assets/saglıkrehberi.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Sağlık Rehberi Yazıları</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.detailsCard}>
  <Text style={styles.sectionTitle}>Hekim Özgeçmişi</Text>
  <Text style={styles.subTitle}>Mezun Olduğu Tıp Fakültesi ve Yılı</Text>
  <Text style={styles.infoText}>{doctor.university || 'Bilgi girilmedi'}</Text>
  <Text style={styles.subTitle}>Uzmanlık Aldığı Yer ve Yılı</Text>
  <Text style={styles.infoText}>{doctor.specialization || 'Bilgi girilmedi'}</Text>
  <Text style={styles.subTitle}>Mesleki Deneyim</Text>
  {(doctor.experiences || []).map((experience, index) => (
    <Text key={index} style={styles.infoText}>{experience}</Text>
  ))}
  <Text style={styles.subTitle}>E-posta</Text>
  <Text style={styles.infoText}>{doctor.email || 'Bilgi girilmedi'}</Text>
  <Text style={styles.subTitle}>Telefon</Text>
  <Text style={styles.infoText}>{doctor.phone || 'Bilgi girilmedi'}</Text>
</View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F8FC',
    padding: 10,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: '95%',
    maxWidth: 500,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  detailsCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: '95%',
    maxWidth: 500,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    flexShrink: 1,
  },
  doctorTitle: {
    fontSize: 16,
    color: '#333',
  },
  doctorName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#042387',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  hospitalTag: {
    backgroundColor: '#E0E7FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginRight: 5,
    color: '#042387',
    fontWeight: 'bold',
    fontSize: 12,
    flexShrink: 1,
  },
  specialtyTag: {
    backgroundColor: '#E0E7FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    color: '#042387',
    fontWeight: 'bold',
    fontSize: 12,
    flexShrink: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  blueButton: {
    backgroundColor: '#042387',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '30%',
  },
  whiteButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '30%',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#042387',
    textAlign: 'center',
    marginTop: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
  },
});