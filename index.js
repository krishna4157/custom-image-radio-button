import React, { Component } from 'react';

import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function CustomRadioButton({attempts,getCancelIconIndex,index,option,onSelect,showWrongIcon,value,wrongColor,rightColor,radioButtonColor}) {

    return (
      <TouchableOpacity onPress={()=> {
          
      onSelect(index,value)}} style={{padding:2}} activeOpacity={1} >
        <View style={{borderRadius:30,borderColor:'grey',flexDirection:'row',padding:5,backgroundColor: value ==index ? Colors.optionSelect : 'white' }}>
        <View style={{justifyContent:'center'}}>
        
        {value ==index  ? 
        getCancelIconIndex  == index && 
        showWrongIcon ? 
        <MaterialIcons name="cancel" size={15}  color={attempts ==0 ? wrongColor : rightColor} /> :
         <MaterialIcons name="radio-button-checked" size={15} color={radioButtonColor}  />
    :
      <MaterialIcons name="radio-button-unchecked" size={15} color={radioButtonColor}  />    
    }    
        </View>
        <Text style={{marginLeft:10}}>{option}</Text>
          <View />
        </View>
      </TouchableOpacity>
    );
  }