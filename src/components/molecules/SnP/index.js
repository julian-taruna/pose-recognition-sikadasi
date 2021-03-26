import React from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';

const SnP = (props) => {
    return (
    <View style={{marginHorizontal: 16, marginVertical: 16, flexDirection: 'row'}}>
        {/* Search Bar */}
        <View style={{position: 'relative', flex: 1}}>
            <Image style={{width: 21, height:21, position: 'absolute', top: 12, left: 14}} source={require('../../../assets/icon/search.png')} />
            <TextInput placeholder="Apa yang ingin dipelajari?" style={{borderWidth: 1, borderColor:'black', borderRadius: 21, height: 45, fontSize: 13, paddingLeft: 45, paddingRight: 21, marginRight: 16}}/>
        </View>
        {/* Profile */}
        <View>
            <TouchableOpacity>
            <Image style={{width: 36, height:36, alignItems: 'center', justifyContent: 'center', top: 7,}} source={require('../../../assets/icon/profile.png')} />
            </TouchableOpacity>
        </View>
    </View>
    )
  }
  
export default SnP;