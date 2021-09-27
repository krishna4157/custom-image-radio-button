# custom-image-radio-button
to get image or icon to replace the button when right or wrong answer is chosen

To use this dependency in your project, the following packages are needed. 
1. 'react'
2. 'react-native-gesture-handler'
3. 'react-native'
4. '@expo/vector-icons'

react-native link is not needed.

required Props and its datatypes :

getCancelIconIndex  : null or Integer
index               : null or Integer
getRightIconIndex   : null or Integer
value               : null or Integer of selected index
showWrongIcon       : boolean
showCorrectIcon     : boolean
option              : String 
radioButtonColor    : any Color String
optionSelectColor   : highlighted optionColor String
wrongAnsIcon        : any @expo/vector-icons
correctAnsIcon      : any @expo/vector-icons
onSelect            : func() 
                        . Option will be selected or highlighted from this method.
