import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 8,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
        flex:1
    },
    eventImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        backgroundColor: '#EEEEEE',
    },
    cardContent: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    cardHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    titleText: {
        flex: 1,
        fontSize: 16,
        fontWeight: '600',
        color: '#333333',
        marginRight: 8,
    },
    dateTimeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
    },
    dateText: {
        fontSize: 12,
        color: '#4CAF50',
        fontWeight: '500',
    },
    locationText: {
        fontSize: 12,
        color: '#AAAAAA',
    },
    priceText: {
        fontSize: 12,
        color: '#888888',
        marginTop: 2,
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    tagBadge: {
        backgroundColor: '#F0F0F0',
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginRight: 6,
        marginBottom: 4,
    },
    tagText: {
        fontSize: 10,
        color: '#555555',
        fontWeight: '500',
    },
    actionsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        minWidth: 50,
    },
    iconButton: {
        marginLeft: 12,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})