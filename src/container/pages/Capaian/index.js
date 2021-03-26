import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import SnP from '../../../components/molecules/SnP';

const Capaian = ({navigation}) => {
    
  const handleGoTo = screen => {
    navigation.navigate(screen);
}
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SnP />
      <View style={{flex: 1,top: 250, fontSize: 16, alignItems: 'center'}}>
        <Text> Segera Hadir </Text>
        <Text> Page Capaian </Text>
      </View>
      <View style={{height: 63, backgroundColor: 'green', flexDirection: 'row', borderTopLeftRadius: 16, borderTopRightRadius: 16}}>
        <NavBarIcon title="HOME" img={require('../../../assets/icon/home.png')} onPress={() => handleGoTo('Home')}/>
        <NavBarIcon title="COBA" img={require('../../../assets/icon/power.png')} onPress={() => handleGoTo('Model')}/>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => handleGoTo('Capaian')}>
          <Image style={{width: 21, height:21}} source={require('../../../assets/icon/skill.png')} />
          <Text style={{fontSize: 12, fontWeight: 'bold', color: 'white', marginTop: 5}}>Capaian</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Capaian;