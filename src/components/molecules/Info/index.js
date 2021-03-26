import React from 'react';
import {Text, View, Image} from 'react-native';
import { Button } from '../../atoms';

const Judul = ({onPress}) => {
    return (
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
                </Text>
                <Button title="SELENGKAPNYA" onPress={onPress}/>
            </View>
        </View>
    )
  }
  
export default Judul;