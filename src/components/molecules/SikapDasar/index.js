import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const SikapDasar = ({title, img, onPress}) => {
  return (
    <View style={{width: `${100/3}%`}}>
      <TouchableOpacity onPress={onPress}>
        <View style={{width: 80, height: 80, borderWidth: 3, borderColor: '#EFEFEF', borderRadius: 18, marginHorizontal: 16, justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 45, height:45}} source={img} />
        </View>
        <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SikapDasar;