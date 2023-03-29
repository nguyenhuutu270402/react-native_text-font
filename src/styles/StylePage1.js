import { StyleSheet } from "react-native";
import { FONTS } from "./Theme";
const stylesLight = StyleSheet.create({
    text0: {
        fontSize: 20,
        textTransform: "uppercase",
    },
    text1: {
        fontFamily: FONTS.font400,
        fontSize: 20,
        textTransform: "uppercase",
    },
    text2: {
        fontFamily: FONTS.font400Italic,
        fontSize: 20,
        textTransform: "lowercase",
    },
    text3: {
        fontFamily: FONTS.font200,
        fontSize: 20,
        textTransform: "capitalize",
    },
    text4: {
        fontFamily: FONTS.font200Italic,
        fontSize: 20,
        textTransform: "capitalize",
    },
    text5: {
        fontFamily: FONTS.font600,
        fontSize: 20,
        textTransform: "capitalize",
    },
    text6: {
        fontFamily: FONTS.font600Italic,
        fontSize: 20,
        textTransform: "capitalize",
    },
    text7: {
        fontFamily: "EduNS",
        fontSize: 20,
        textTransform: "capitalize",
    },
    text8: {
        fontFamily: "Fasthand",
        fontSize: 20,
        textTransform: "capitalize",
    },
    container: {
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
    },
});
export default stylesLight;