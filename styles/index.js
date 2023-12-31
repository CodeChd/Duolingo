import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: { flex: 1, alignItems: "center",  justifyContent: "center", padding: 10 },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    optionsContainer: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        alignContent: "space-between"
    },

})