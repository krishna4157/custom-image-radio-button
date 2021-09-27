# custom-image-radio-button
to get image or icon to replace the button when right or wrong answer is chosen

To use this dependency in your project, the following packages are needed. 
1. 'react'
2. 'react-native-gesture-handler'
3. 'react-native'
4. '@expo/vector-icons'

react-native link is not needed.

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
