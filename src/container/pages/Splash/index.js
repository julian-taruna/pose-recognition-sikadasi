import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
// import { useEffect } from 'react/cjs/react.production.min';

const Splash = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.replace(screen);
    }
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.replace('Home');
    //     }, 3000)
    // });
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green'}}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => handleGoTo('Home')}>
                <Text style={{fontSize: 27, color: 'white', fontWeight: 'bold'}}>SIKADASI</Text>
                <Image style={{height: 160, width: 160}} source={require('../../../assets/icon/bn.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Splash;