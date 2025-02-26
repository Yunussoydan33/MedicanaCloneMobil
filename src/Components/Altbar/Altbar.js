import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Altbar = ({ onHomePress, onFastActionsPress, onAppointmentPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.tab, styles.leftTab]} onPress={onHomePress}>
        <FontAwesome name="home" size={24} color="#002D72" />
        <Text style={styles.label}>Ana Sayfa</Text>
      </TouchableOpacity>
      
      <View style={styles.fastActionWrapper}>
        <TouchableOpacity style={styles.fastAction} onPress={onFastActionsPress}>
          <View style={styles.fastActionCircle}>
            <FontAwesome name="chevron-up" size={40} color="white" style={styles.baner}/>
            <FontAwesome name="chevron-up" size={40} color="#00C8E0" style={styles.innerIcon} />
          </View>
        </TouchableOpacity>
        <Text style={styles.fastActionLabel}>Hızlı İşlemler</Text>
      </View>
      
      <TouchableOpacity style={[styles.tab, styles.rightTab]} onPress={onAppointmentPress}>
        <FontAwesome name="calendar" size={24} color="#002D72" />
        <Text style={styles.label}>Randevu Al</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    position: 'relative',
  },
  tab: {
    alignItems: 'center',
    flex: 1,
  },
  leftTab: {
    marginLeft: -60,
  },
  rightTab: {
    marginRight: -60,
  },
  label: {
    fontSize: 14,
    color: '#002D72',
    marginTop: 6,
  },
  fastActionWrapper: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -35 }],
    alignItems: 'center',
  },
  fastAction: {
    alignItems: 'center',
  },
  fastActionCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#002D72',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#DAE2EE',
    position: 'absolute',
    top: -55,
    right: -55,
  },
  innerIcon: {
    position: 'absolute',
    bottom: 5,
  },
  baner: {
    position: 'absolute',
    bottom: 20,
  },
  fastActionLabel: {
    fontSize: 14,
    color: '#002D72',
    marginTop: 30,
    right: -15,
  },
});

export default Altbar;
