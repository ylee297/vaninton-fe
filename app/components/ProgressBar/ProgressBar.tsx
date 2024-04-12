import { ProgressBar as PaperProgressBar, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Props } from 'react-native-paper/lib/typescript/components/ProgressBar';
import Colors from '../../../assets/Colors';



export type ProgressBarProps = Props & {
    // add your custom props here
    total: number,
    current: number,
}

export const ProgressBar = ({total, current, ...rest}: ProgressBarProps) => {
    return (
        <View>
            <PaperProgressBar style={styles.progressBar} color={rest.color ?? '#B5BFFF'} {...rest} />
            <Text style={styles.text}>{`${current}/${total}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBar: {
        width: "100%",
        height: 29,
        borderRadius: 5,
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderColor: Colors.LIGHTGREY,
    },
    text: {
        fontSize: 16,
        color: Colors.GREY,
        position: 'absolute',
        right: 0,
        padding: 5,
        paddingRight: 10
    }
})