import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import SnP from '../../../components/molecules/SnP';

const DetailsScreen = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
}
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SnP />
      <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
        <ScrollView>
          <View style={{marginHorizontal: 16, marginVertical: 16}}>
              <View style={{marginBottom: 16, position: 'relative'}}>
                  <Image style={{height: 200, width: '100%', borderRadius: 9}} source={require('../../../assets/img/1.png')} />
                  <View style={{width: '100%', height: '100%', position: 'absolute',borderRadius: 9, top: 0, left: 0, backgroundColor: 'black', opacity: 0.2}}></View>
                  <Image style={{height: 36, width: 36, left: 280, top: 150, position: 'absolute'}} source={require('../../../assets/icon/bn.png')} />
              </View>
              <View>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>Perguruan Bakti Negara</Text>
                  <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11}}>
                    Perguruan Bakti Negara merupakan salah satu perguruan Pencak Silat yang berasal dari Provisi Bali.
                    Sikap dasar pencak silat sendiri merupakan sikap-sikap statis yang dapat dilakukan untuk melatih kekuatan otot-otot, sebelum melakukan gerak dinamis sehingga pijakan kaki dapat menjadi kokoh. Pembentukan sikap merupakan dasar dari pembentukan gerak yang meliputi sikap jasmaniah dan sikap rohani. 
                    Sikap dasar dari pencak silat itu semuanya sama, namun karena begitu banyaknya aliran pencak silat di Indonesia, sikap dasar dari setiap perguruan pun memiliki namanya masing-masing. Pada perguruan pencak silat PSPS Bakti Negara sendiri ada beberapa sikap dasar seperti, Sikap Sempurna, Jangkar Kodok, Jangkar Kuda, dan masih banyak sikap dasar lainnya.                  </Text>
              </View>
          </View>         
        </ScrollView>
      </View>
      <View style={{height: 63, backgroundColor: 'green', flexDirection: 'row', borderTopLeftRadius: 16, borderTopRightRadius: 16}}>
          <NavBarIcon title="HOME" img={require('../../../assets/icon/home.png')} onPress={() => handleGoTo('Home')}/>
          <NavBarIcon title="COBA" img={require('../../../assets/icon/power.png')} onPress={() => handleGoTo('Model')}/>
          <NavBarIcon title="CAPAIAN" img={require('../../../assets/icon/skill.png')} onPress={() => handleGoTo('Capaian')}/>
      </View>
    </View>
  );
}

export default DetailsScreen;