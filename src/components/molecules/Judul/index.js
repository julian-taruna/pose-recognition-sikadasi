import React from 'react';
import {Text, View, Image} from 'react-native';

const Judul = (props) => {
    return (
        <View>
            <View style={{marginHorizontal: 16, flexDirection: 'row'}}>
                <View style={{position: 'relative', flex: 1, paddingHorizontal: 16, paddingTop: 16, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green', borderTopLeftRadius: 16, borderTopRightRadius: 16}}>
                <Image style={{width: 41, height:41, position: 'absolute', top: 16, left:270}} source={require('../../../assets/icon/bn.png')} />
                <Image style={{width: 36, height:36, position: 'absolute', top: 16, left: 21}} source={require('../../../assets/icon/ipsi.png')} />
                <Text style={{fontSize: 36, color: 'white', marginTop: 3, fontWeight: 'bold'}}>SIKADASI</Text>
                </View>
            </View>
            <View style={{marginHorizontal: 16}}>
                <View style={{position: 'relative', flex: 1, paddingTop: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow', borderBottomLeftRadius: 16, borderBottomRightRadius: 16, paddingBottom: 27}}>
                <Text style={{fontSize: 16, color: 'black', marginTop: 3}}>- Sikap Dasar Silat -</Text>
                </View>
            </View>
        </View>
    )
  }
  
export default Judul;