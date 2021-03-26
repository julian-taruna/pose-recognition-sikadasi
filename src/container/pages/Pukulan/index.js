import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import SnP from '../../../components/molecules/SnP';

const Pukulan = ({navigation}) => {
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
                  <Image style={{height: 300, width: '100%', borderRadius: 9}} source={require('../../../assets/img/ular.jpg')} />
                  <View style={{width: '100%', height: '100%', position: 'absolute',borderRadius: 9, top: 0, left: 0}}></View>
                  <Image style={{height: 36, width: 36, left: 280, top: 250, position: 'absolute'}} source={require('../../../assets/icon/bn.png')} />
              </View>
              <View>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>Jurus Satu "Ular Menyebrang Sungai"</Text>
                  <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11}}>
                  Jurus Satu (Ular Menyebrang Sungai), sikap dasar dengan membuka kaki kedepan dengan kaki depan di tekuk dan kaki belakang dalam posisi lurus dengan tangan yang kakinya ditekuk memukul kedepan dan tangan yang satunya mengepal di samping perut.                  </Text>
              </View>
          </View>
          <View style={{marginHorizontal: 16, marginVertical: 16}}>
              <View style={{marginBottom: 16, position: 'relative'}}>
                  <Image style={{height: 300, width: '100%', borderRadius: 9}} source={require('../../../assets/img/jalan.jpg')} />
                  <View style={{width: '100%', height: '100%', position: 'absolute',borderRadius: 9, top: 0, left: 0}}></View>
                  <Image style={{height: 36, width: 36, left: 280, top: 250, position: 'absolute'}} source={require('../../../assets/icon/bn.png')} />
              </View>
              <View>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>Jurus Dua "Menghadang Jalan"</Text>
                  <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11}}>
                  Jurus Dua (Menghadang Jalan), sikap dasar dengan membuka kaki kedepan dengan kaki depan di tekuk dan kaki belakang dalam posisi lurus dengan tangan yang kakinya lurus memukul kedepan dan tangan yang satunya mengepal di samping perut.  </Text>            
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

export default Pukulan;