import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 12,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 150,
        backgroundColor:'grey'
    },
    content: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
    },
    date: {
        fontSize: 12,
        color: '#777',
        marginTop: 4,
    },
    removeBtn: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
