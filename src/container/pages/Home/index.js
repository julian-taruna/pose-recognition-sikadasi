import React from 'react';
import {View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';

import SnP from '../../../components/molecules/SnP';
import Judul from '../../../components/molecules/Judul';
import Info from '../../../components/molecules/Info';
import SikapDasar from '../../../components/molecules/SikapDasar';
import NavBarIcon from '../../../components/molecules/NavBarIcon';

const Home = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
}
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
          <SnP />
          <ScrollView>
          <Judul />
          {/* Main Menu */}
          <View style={{marginHorizontal: 16, marginTop: 16, flexDirection: 'row', flexWrap: 'wrap'}}>
            <View style={{justifyContent: 'center', flexDirection: 'row', width: '100%', marginBottom: 18}}>
            <SikapDasar title="HORMAT BN" img={require('../../../assets/icon/learn.png')} onPress={() => handleGoTo('HormatBN')}/>
            <SikapDasar title="S SEMPURNA" img={require('../../../assets/icon/learn.png')} onPress={() => handleGoTo('SikapSempurna')}/>
            <SikapDasar title="JANGKAR" img={require('../../../assets/icon/learn.png')} onPress={() => handleGoTo('Jangkar')}/>
          </View>
          <View style={{justifyContent: 'center', flexDirection: 'row', width: '100%', marginBottom: 18}}>
            <SikapDasar title="PUKULAN" img={require('../../../assets/icon/learn.png')} onPress={() => handleGoTo('Pukulan')}/>
            <SikapDasar title="TENDANGAN" img={require('../../../assets/icon/learn.png')} onPress={() => handleGoTo('Tendangan')}/>
            <SikapDasar title="LAINNYA" img={require('../../../assets/icon/learn.png')} onPress={() => handleGoTo('Lainnya')}/>
            </View>
          </View>
          <View style={{height: 9, backgroundColor: '#F2F2F2'}} />
          <Info onPress={() => handleGoTo('DetailInfo')}/>
          </ScrollView>
      </View>
      <View style={{height: 63, backgroundColor: 'green', flexDirection: 'row', borderTopLeftRadius: 16, borderTopRightRadius: 16}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={{alignItems: 'center'}} onPress={() => handleGoTo('Home')}>
            <Image style={{width: 21, height:21}} source={require('../../../assets/icon/home.png')} />
            <Text style={{fontSize: 12, fontWeight: 'bold', color: 'white', marginTop: 5}}>Home</Text>
          </TouchableOpacity>
        </View>
        <NavBarIcon title="COBA" img={require('../../../assets/icon/power.png')} onPress={() => handleGoTo('Model')}/>
        <NavBarIcon title="CAPAIAN" img={require('../../../assets/icon/skill.png')} onPress={() => handleGoTo('Capaian')}/>
      </View>
    </View>
  );
} 

export default Home;