import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#2ecc71',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    name: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 30,
    },

    logoutBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e74c3c',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
    },

    logoutText: {
        color: '#fff',
        marginLeft: 8,
        fontWeight: '600',
    },
});
