import {View, Button, Alert, StyleSheet, Image} from 'react-native';
import {launchCameraAsync, useCameraPermissions, PermissionStatus} from 'expo-image-picker';

function ImagePreview({imagePreview, setImagePreview}) {
    const [useCameraInfo, requestPermission] = useCameraPermissions();

    async function verifyPermission() {
        if (useCameraInfo.status === PermissionStatus.UNDETERMINED) {
            const request = await requestPermission();
            return request.granted;
        }
        if (useCameraInfo.status === PermissionStatus.DENIED) {
            Alert.alert('Permission Not Granted', 'You need to grant permission to take photo')
            return false;
        }
        return true;
    }

    async function takeImageHandler() {
        const hasPermission = await verifyPermission();

        if (!hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        });
        setImagePreview(image.assets[0].uri);
        console.log(image)
    }


    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: imagePreview}}/>
            </View>
            <Button title='Take Photo' onPress={takeImageHandler}/>
        </View>
    )
}

export default ImagePreview;

const styles = StyleSheet.create({
    container: {
        width: 381,
        height: 302,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#4c99fc',
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    }
})