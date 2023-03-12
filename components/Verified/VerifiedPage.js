import {View, Text, StyleSheet} from 'react-native';
import { COLORS } from '../../constants';
import PrimaryButton from '../UI/PrimaryButton';

function VerifiedPage({firstText, secondText, thirdText, btnStyle}) {
    return(
        <View style={styles.container}>
            <View style={styles.headerDesign}></View>
            <View>
                <Text style={styles.headerTitle}>{firstText}</Text>
                <Text style={styles.text}>{secondText}</Text>
                <Text style={styles.text}>{thirdText}</Text>
            </View>
            <PrimaryButton btnStyle={styles.btn}>Next</PrimaryButton>
        </View>
    )
}

export default VerifiedPage;

const styles = StyleSheet.create({
    container: {flex: 1},
    headerDesign: {
        height: 270,
        backgroundColor: '#dceafc',
    },
    headerTitle: {
        color: COLORS.darkBlue,
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 15
    },
    text: {
        color: COLORS.darkBlue,
        fontSize: 14,
        textAlign: 'center',
    },
    btn: {
        marginTop: 330
    }
})