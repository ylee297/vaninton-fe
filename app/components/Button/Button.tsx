import { Button as PaperButon } from 'react-native-paper';
import { Props } from 'react-native-paper/lib/typescript/components/Button/Button';
import { StyleSheet } from 'react-native';
import * as colors from '../../../assets/Colors';

export type ButtonProps = Props & {
    // add your custom props here
}

export const Button = ({children, ...rest}: ButtonProps) => {
    return (
        <PaperButon 
            style={styles.button}
            buttonColor={colors.PRIMARY} {...rest}>
            {children}
        </PaperButon>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
    }
})