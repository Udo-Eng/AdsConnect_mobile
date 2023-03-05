import { TextInput, View, Text, StyleSheet, Pressable ,Image} from "react-native";
import {useState}  from "react";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { COLORS } from "../../constants";



const PasswordInput = ({
  label,
  textInputConfig,
  LabelStyle,
  inputStyle,
  invalid,
}) => {

    //register password state for toggle visible eye or not
    const [displayPassword,setDisplayPassword]  = useState(false);
    
    // Set up the styles for the Label
    const inputLabelStyle = [
        styles.inputLabel,
        LabelStyle,
        invalid ? styles.labelError : null,
    ];
    
    const toggleDisplayPasswordandler = () => {
        setDisplayPassword((prevState) => !prevState );
    }
    
    // function to display the eye 
    function displayEyeOff(){
        return <Pressable onPress={toggleDisplayPasswordandler}><Ionicons name="eye-off" size={24} color="#074698" /></Pressable>
    }


    // function to display off eye
    function displayEye(){
        return <Pressable onPress={toggleDisplayPasswordandler}><AntDesign name="eye" size={20} color={COLORS.darkBlue} /></Pressable>;
    }


    let eyeIcon = displayPassword ?  displayEye() : displayEyeOff;  
  
  
    // Setting the input style 
  const defaultInputStyle = [styles.input, inputStyle];


  // Setting the default container Style
  const defaultContainerStyle = [
    styles.inputContainer,
    invalid ? styles.inputError : null,
  ];


let inputConfig =   {
    autoCapitalize: "none",
    autoCorrect: false,
    secureTextEntry: true,
    cursorColor: "#00000",
    ...textInputConfig
  }

  return (
    <View style={styles.inputOuterContainer}>
      <Text style={inputLabelStyle}>{label}</Text>
      <View style={defaultContainerStyle}>
        <TextInput style={defaultInputStyle} {...inputConfig}  cursorColor="#000000"/>
        {eyeIcon()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputOuterContainer: {
    width: "100%",
    marginTop: 12,
  },
  inputContainer: {
    borderColor: "#BDBDBD",
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    flexDirection: "row",
  },
  inputLabel: {
    opacity: 0.7,
    color: "#545950",
  },
  input: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: 5,
  },
  inputError: {
    fontSize: 14,
    backgroundColor: "#d49b9b",
  },
  labelError: {
    color: "#a31717",
  },
});

export default PasswordInput;
