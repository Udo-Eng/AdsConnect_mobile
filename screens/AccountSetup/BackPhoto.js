import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ImagePreview from "../../components/Image/ImagePreview";
import { COLORS } from "../../constants/theme";

function BackPhoto({ navigation }) {
  const [imagePreview, setImagePreview] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.statusBarContainer}>
        <View style={styles.statusBar}></View>
      </View>
      <View>
        <Text style={styles.headerTitle}>Complete Account Set Up</Text>
        <Text style={styles.title}>Scan School ID</Text>
        <Text style={styles.cameraView}>Back</Text>
        <ImagePreview
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
        />
        {imagePreview && (
          <Button
            title="Next"
            onPress={() => navigation.navigate("Final Setup")}
          />
        )}
      </View>
    </View>
  );
}

export default BackPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  statusBarContainer: {
    width: "100%",
    backgroundColor: "#dceafc",
    height: 8,
    marginBottom: 36,
  },
  statusBar: {
    width: "75%",
    height: "100%",
    backgroundColor: COLORS.primaryColor,
  },
  headerTitle: {
    color: COLORS.LogColor,
    fontSize: 24,
    marginVertical: 36,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 36,
    color: COLORS.primaryColor,
    fontSize: 16,
  },
  cameraView: {
    color: COLORS.darkBlue,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 8,
  },
});
