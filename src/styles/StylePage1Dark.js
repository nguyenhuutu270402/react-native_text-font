import { StyleSheet } from "react-native";
import { FONTS } from "./Theme";
const stylesDark = StyleSheet.create({
    text0: {
        fontSize: 20,
        textTransform: "uppercase",
        color: "white",

    },
    text1: {
        fontFamily: FONTS.font400,
        fontSize: 20,
        textTransform: "uppercase",
        color: "white",

    },
    text2: {
        fontFamily: FONTS.font400Italic,
        fontSize: 20,
        textTransform: "lowercase",
        color: "white",

    },
    text3: {
        fontFamily: FONTS.font200,
        fontSize: 20,
        textTransform: "capitalize",
        color: "white",

    },
    text4: {
        fontFamily: FONTS.font200Italic,
        fontSize: 20,
        textTransform: "capitalize",
        color: "white",

    },
    text5: {
        fontFamily: FONTS.font600,
        fontSize: 20,
        textTransform: "capitalize",
        color: "white",

    },
    text6: {
        fontFamily: FONTS.font600Italic,
        fontSize: 20,
        textTransform: "capitalize",
        color: "white",

    },
    text7: {
        fontFamily: "EduNS",
        fontSize: 20,
        textTransform: "capitalize",
        color: "white",

    },
    text8: {
        fontFamily: "Fasthand",
        fontSize: 20,
        textTransform: "capitalize",
        color: "white",
    },
    container: {
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#333',
    },
});
export default stylesDark;