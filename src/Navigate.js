import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Pages/HomeScreen'; // Dosya yolunu kendi yapına göre ayarla
import LoginPage from '../Src/Pages/LoginPage/LoginPage'; // Dosya yolunu kendi yapına göre ayarla
import SignupPage from '../Src/Pages/SignUp/SignupPage'; // Dosya yolunu kendi yapına göre ayarla
import Verify from '../Src/Pages/SignUp/Verify'; // Dosya yolunu kendi yapına göre ayarla
import Password from '../Src/Pages/SignUp/Password'; // Dosya yolunu kendi yapına göre ayarla
import HomePage from '../Src/Pages/HomePage/HomePage'; // Dosya yolunu kendi yapına göre ayarla
import WhichPage from '../Src/Pages/SignUp/WhichPage'; // Dosya yolunu kendi yapına göre ayarla
import AutPage from '../Src/Pages/SignUp/AutPage'; // Dosya yolunu kendi yapına göre ayarla
import OtpPage from '../Src/Pages/SignUp/OtpPage'; // Dosya yolunu kendi yapına göre ayarla

import ProfiliDuzenlePage from '../Src/Pages/HomePage/ProfiliDuzenlePage'; // Dosya yolunu kendi yapına göre ayarla
import DoctorSearchPage from '../Src/Pages/HomePage/DoctorSearchPage'; // Dosya yolunu kendi yapına göre ayarla
import SaglıkDosyam from '../Src/Pages/HomePage/SaglıkDosyam'; // Dosya yolunu kendi yapına göre ayarla
import ProfilPage from '../Src/Pages/HomePage/ProfilPage'; // Dosya yolunu kendi yapına göre ayarla
import HospitalAndHekimPage from '../Src/Pages/HomePage/HospitalAndHekimPage'; // Dosya yolunu kendi yapına göre ayarla
import HospitalsPage from '../Src/Pages/HomePage/HospitalsPage'; // Dosya yolunu kendi yapına göre ayarla
import HospitalInfoPage from '../Src/Pages/HomePage/HospitalInfoPage'; // Dosya yolunu kendi yapına göre ayarla
import HekimlerPage from '../Src/Pages/HomePage/HekimlerPage'; // Dosya yolunu kendi yapına göre ayarla
import DoctorInfoPage from '../Src/Pages/HomePage/DoctorInfoPage'; // Dosya yolunu kendi yapına göre ayarla
import MedicineControlPage from '../Src/Pages/HomePage/MedicineControlPage'; // Dosya yolunu kendi yapına göre ayarla
import YakınlarımPage from '../Src/Pages/HomePage/YakınlarımPage'; // Dosya yolunu kendi yapına göre ayarla

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
      />
       <Stack.Screen 
          name="LoginPage" 
          component={LoginPage} 
          options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
          />
          <Stack.Screen 
          name="YakınlarımPage" 
          component={YakınlarımPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
          <Stack.Screen 
          name="MedicineControlPage" 
          component={MedicineControlPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
           <Stack.Screen 
          name="HekimlerPage" 
          component={HekimlerPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
           <Stack.Screen 
          name="DoctorInfoPage" 
          component={DoctorInfoPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
          <Stack.Screen 
          name="HospitalInfoPage" 
          component={HospitalInfoPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
         <Stack.Screen 
          name="SignupPage" 
          component={SignupPage} 
          options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
        />
         <Stack.Screen 
          name="HospitalsPage" 
          component={HospitalsPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
        />
         <Stack.Screen 
          name="Verify" 
          component={Verify} 
          options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
          />
         <Stack.Screen 
          name="Password" 
          component={Password} 
          options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
        />
         <Stack.Screen 
          name="HomePage" 
          component={HomePage} 
          options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
        />
         <Stack.Screen 
          name="WhichPage" 
          component={WhichPage} 
          options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
        />
         <Stack.Screen 
          name="ProfiliDuzenlePage" 
          component={ProfiliDuzenlePage} 
          options={{ title: 'Profili Düzenle' }} // LoginPage başlığını "Giriş Yap" yaptık
        />
        <Stack.Screen 
          name="DoctorSearchPage" 
          component={DoctorSearchPage} 
          options={{ title: 'Doktor Ara' }} // LoginPage başlığını "Giriş Yap" yaptık
        />
        <Stack.Screen 
          name="SaglıkDosyam" 
          component={SaglıkDosyam} 
          options={{ title: 'Sağlık Dosyam' }} // LoginPage başlığını "Giriş Yap" yaptık
        />
        <Stack.Screen 
          name="ProfilPage" 
          component={ProfilPage} 
          options={{ title: 'Profilim' }} // LoginPage başlığını "Giriş Yap" yaptık
          />
            <Stack.Screen 
          name="AutPage" 
          component={AutPage} 
          options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
          />
           <Stack.Screen 
          name="HospitalAndHekimPage" 
          component={HospitalAndHekimPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
           <Stack.Screen 
          name="OtpPage" 
          component={OtpPage} 
          options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
          />
    </Stack.Navigator>
  );
}
