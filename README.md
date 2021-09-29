# custom-image-radio-button

![](https://i.imgur.com/a6t7dsT.gif)

custom-image-radio-button is a plugin to create seperate radio buttons without using radio groups thus increasing flexibility to use any where in the component. in this component we can also set custom images for right option and wrong option if needed by passing params. 

## Getting started

`$ npm install custom-image-radio-button --save`

`$ yarn add custom-image-radio-button`

To use this dependency in your project, the following packages are needed. 
1. 'react'
2. 'react-native-gesture-handler'
3. 'react-native'
4. '@expo/vector-icons'

### Mostly automatic installation


## Usage (Example of custom-image-radio-button )
```javascript



import React, {Component} from 'react';
import RadioButton from 'custom-image-radio-button';
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
/*
    npm install custom-image-radio-button
*/

export default class App extends Component{
    constructor(props){
        super();
    }
    render(){
        var s = [1,2,3,4,5];
        return (
       <View>
  {s.map((value, index) => { return (<RadioButton wrongAnsIcon={<MaterialIcons name="cancel" size={15}  color={'red'} />} getCancelIconIndex={0} getRightIconIndex={1} correctAnsIcon={<MaterialIcons name="cancel" size={15}  color={'green'} />} optionSelectColor={'yellow'} radioButtonColor={'green'}  index={this.state.selectedIndex} onSelect={()=>{
              //update value on tap by setting state
              //option will be highlighted when index and value are equal
            //   this.setState({
            //     selectedIndex : index
            //   })
            }} key={index} value={index} option ={value} showWrongIcon ={true} showCorrectIcon={true} getRightIconIndex={1}/>)})}
</View>
        );
    }
}


// TODO: What to do with the module?
RadioButton;
```

# required Props and its datatypes :

required Props and its datatypes :

1.  getCancelIconIndex  : null or Integer

2.  index               : null or Integer

3.  getRightIconIndex   : null or Integer

4.  value               : null or Integer of selected index

5.  showWrongIcon       : boolean

6.  showCorrectIcon     : boolean

7.  option              : String 

8.  radioButtonColor    : any Color String

9.  optionSelectColor   : highlighted optionColor String

10. wrongAnsIcon        : any @expo/vector-icons

11. correctAnsIcon      : any @expo/vector-icons

12. onSelect            : func() 

                            . Option will be selected or highlighted from this method.


# Credit goes to : 

1. 'react'
2. 'react-native-gesture-handler'
3. 'react-native'
4. '@expo/vector-icons'

# Contribution :

if you like my work 😀 u can contribute using
vpa : krishna.santho08@okaxis

it will be a great support to me ☺.


