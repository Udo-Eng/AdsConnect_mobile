import { Dimensions } from "react-native";


const {width,height}  = Dimensions.get("screen");


export const COLORS = {
    primaryColor: "#1877f2",
    darkBlue : "#074698",
    LogColor: "#032550",
    cursorColor: "#000000",
    inputLabel: "#545950",
    inputBorder:"#BDBDBD",
    inputErrorColor:"#a31717",
}

export const SIZES = {
    width : width,
    height: height,
}


const theme = {COLORS,SIZES};

export default  theme;