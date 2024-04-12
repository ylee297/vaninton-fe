import { Card, Text } from "react-native-paper"
import { Location } from "../../constants/types";
import { StyleSheet, View } from "react-native";
import Colors from "../../../assets/Colors";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { format } from 'date-fns/format';

export type SessionCardProps = {
    date: Date;
    start: number;
    end: number;
    place: Location;
    totalCost: number;
    totalMember: number;
    currentMemeber: number;
}

export const SessionCard = ({date, place, totalCost, start, end, totalMember, currentMemeber}: SessionCardProps) => {
    return (
        <Card style={styles.card}>
            <Text style={styles.header} >{format(date, 'LLLL dd, yyyy (iii)')}</Text>
            <View style={styles.row}>
                <Text style={styles.rowName}>Date: </Text>
                <Text style={styles.rowValue}>{format(new Date(start), 'p')} - {format(new Date(end), 'p')}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.rowName}>Place: </Text>
                <Text style={styles.rowValue}>{Location[place]}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.rowName}>Total Cost: </Text>
                <Text style={styles.rowValue}>{totalCost}</Text>
            </View>
            <Text style={styles.rowName}>Received fee</Text>
            <ProgressBar progress={currentMemeber/totalMember} total={totalMember} current={currentMemeber}/>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.WHITE,
        borderColor: Colors.LIGHTGREY,
        padding: 20,
        maxWidth: 500,
    },
    header: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: "600",
        color: Colors.PRIMARY,
        marginBottom: 20,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    rowName: {
        fontSize: 14,
        color: Colors.GREY,
        lineHeight: 21,
    },
    rowValue: {
        fontSize: 14,
        color: Colors.BLACK,
        lineHeight: 21,
    }
});