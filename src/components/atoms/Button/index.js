import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({title, onPress}) => {
    return (
        <TouchableOpacity 
            style={{
                backgroundColor: '#61A756', 
                padding: 11, 
                alignSelf: 'flex-end', 
                borderRadius: 7, 
                marginBottom: 16
            }} onPress={onPress}>
            <Text 
                style={{
                    fontWeight: 'bold', 
                    fontSize: 16, 
                    color: 'white', 
                    textAlign: 'center'
                }}>
                    {title}
            </Text>
        </TouchableOpacity>
    )
  }
  
export default Button;