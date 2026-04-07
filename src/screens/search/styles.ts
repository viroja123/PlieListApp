import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        elevation: 2,
    },
    input: {
        flex: 1,
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 12,
        overflow: 'hidden',
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 150,
        backgroundColor:'gray'
    },
    content: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
    },
    heart: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
});
