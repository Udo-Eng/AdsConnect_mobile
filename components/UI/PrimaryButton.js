import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const PrimaryButton = ({ children, onPress, textStyle, btnStyle,btnContainer }) => {
  const defaultTextStyle = [styles.buttonText, textStyle];
  const defaultButtonStyle = [styles.buttonStyle, btnStyle];
  return (
    <View style={btnContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={defaultButtonStyle}>
          <Text style={defaultTextStyle}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: SIZES.width < 400 ? 320 : 350,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderVertical: 16,
    borderColor: COLORS.primaryColor,
    backgroundColor: COLORS.primaryColor,
    borderRadius: 4,
  },
  buttonText: {
    color: COLORS.backgroundColor,
    textAlign: "center",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
