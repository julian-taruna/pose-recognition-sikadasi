import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const NavBarIcon = ({title, img, onPress}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={{alignItems: 'center'}} onPress={onPress}>
            <Image style={{width: 27, height:27}} source={img} />
            <Text style={{fontSize: 9, color: 'white', marginTop: 5}}>{title}</Text>
          </TouchableOpacity>
        </View>
    )
  }
  
export default NavBarIcon;