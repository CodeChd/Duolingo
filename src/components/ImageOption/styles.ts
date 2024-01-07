import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    optionContainer: {
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: "lightgrey",
        borderRadius: 10,

        width: "48%",
        height: "48%",
        alignItems: "center",
        padding: 10

    },
    optionImage: {
        width: "100%",
        height: "100%",
        flex: 1
    },
    optionText: {
        fontWeight: "bold"
    },
    selectedContainer: {
        backgroundColor: "DDF4FE",
        borderColor: "#81D5FE"
    },
    selectedText: {
        color: "#40BEF7",
        fontWeight: "bold"
 
    }
})


export default styles