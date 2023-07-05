import { StyleSheet } from "react-native";

const colors = {
    primary: '#EDF1D6',
    secondary: '#9DC08B',
    tertiary: '#609966',
    dark: '#40513B',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#9DA3B4',
    error: '#D0421B',
    warning: '#E1C340',
    success: '#A5DC86',
    info: '#40C5E1',
};

const text = {
    title: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    regular: {
        fontSize: 20,
    },
    secondary: {
        fontSize: 15,
    },
    button: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
};

const shadows = {
    shadowColor: colors.black,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
};

const corners = {
    borderRadius: 10,
};

const globalStyles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        top: 10
    },
    rowContainer: {
        flexDirection: "row",
        gap: 20,
        paddingHorizontal: 10,
        paddingBottom: 10,
        paddingTop: 10,
        justifyContent: "center",
        alignItems: "flex-end",
        width: "100%",
    },
    input: {
        width: 250,
        height: 35,
        borderBottomColor: colors.gray,
        borderBottomWidth: 3,
        color: colors.black,
        ...text.secondary,
    },
    button: {
        backgroundColor: colors.secondary,
        padding: 10,
        ...shadows,
        ...corners,
    },
    buttonText: {
        color: colors.white,
        ...text.button,
    },
    textTitle: {
        ...text.title,
    },
    textSubtitle: {
        ...text.subtitle,
    },
    textRegular: {
        ...text.regular,
    },
});

export default globalStyles;
export { colors, text };
