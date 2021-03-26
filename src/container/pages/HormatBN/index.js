import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import SnP from '../../../components/molecules/SnP';

const HormatBN = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
}
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SnP />
      <View style={{flex: 1,top: 250, fontSize: 16, alignItems: 'center'}}>
        <Text> Segera Hadir </Text>
        <Text> Page Hormat Bakti Negara </Text>
      </View>
      <View style={{height: 63, backgroundColor: 'green', flexDirection: 'row', borderTopLeftRadius: 16, borderTopRightRadius: 16}}>
          <NavBarIcon title="HOME" img={require('../../../assets/icon/home.png')} onPress={() => handleGoTo('Home')}/>
          <NavBarIcon title="COBA" img={require('../../../assets/icon/power.png')} onPress={() => handleGoTo('Model')}/>
          <NavBarIcon title="CAPAIAN" img={require('../../../assets/icon/skill.png')} onPress={() => handleGoTo('Capaian')}/>
      </View>
    </View>
  );
}

export default HormatBN;