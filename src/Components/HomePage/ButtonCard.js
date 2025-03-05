import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';

const buttons = [
  { title: 'Randevular', image: require('../../Assets/randevular.png'), width: '48%', height: 90 },
  { title: 'Sağlık Dosyam', image: require('../../Assets/saglıkdosyam.png'), width: '48%', height: 90 },
  { title: 'Hastaneler ve Hekimler', image: require('../../Assets/hastaneler.png'), width: '100%', height: 90 },
  { title: 'İlaç Takibi', image: require('../../Assets/ilactakibi.png'), width: '48%', height: 70 },
  { title: 'Yakınlarım', image: require('../../Assets/yakınlarım.png'), width: '48%', height: 70 },
  { title: 'Sağlık Rehberi', image: require('../../Assets/saglıkrehberi.png'), width: '100%', height: 80 },
  { title: 'En Yakın Medicana', image: require('../../Assets/enyakınmedicana.png'), width: '100%', height: 60 },
];

export default function ButtonCard() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {buttons.map((btn, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.card, { width: btn.width, height: btn.height }]}
          onPress={() => {
            if (btn.title === 'Randevular') {
              setModalVisible(true);
            } else if (btn.title === 'Sağlık Dosyam') {
              navigation.navigate('SaglıkDosyam');
            } else if (btn.title === 'Hastaneler ve Hekimler') {
              navigation.navigate('HospitalAndHekimPage');
            } else if (btn.title === 'İlaç Takibi') {
              navigation.navigate('MedicineControlPage');
            } else if (btn.title === 'En Yakın Medicana') {
              setModalVisible(true);
            } else if (btn.title === 'Yakınlarım') {
              navigation.navigate('YakınlarımPage'); // YENİ YÖNLENDİRME
            }
          }}
        >
          <Image source={btn.image} style={styles.image} />
          <Text style={styles.text}>{btn.title}</Text>
        </TouchableOpacity>
      ))}

      {/* Alert Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <BlurView style={styles.blurView} blurType="light" blurAmount={20} />
          <View style={styles.modalContainer}>
            <Image source={require('../../Assets/Allert.png')} style={styles.alertImage} />
            <Text style={styles.modalText}>
              Konumunuz kapalı. Lütfen cihaz ayarlarınızdan konumunuzu açınız.
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Tamam</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    marginBottom: 10,
  },
  image: {
    width: 34,
    height: 34,
    marginRight: 10,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },
  modalBackground: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  blurView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '90%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 10,
  },
  alertImage: {
    width: 90,
    height: 80,
    marginBottom: 15,
  },
  modalText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#042387',
    padding: 12,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
