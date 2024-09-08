import { StyleSheet } from "react-native";

export const stylesGlobal = StyleSheet.create({   
    container: {
        width: '100%',
        padding: 20,
        flex: 1,
        backgroundColor: '#efd9f1'
    },
    title: {
        fontSize: 20,
        color: '#000'
    },
    text: {
        fontSize: 16,
        color: '#000'
    },
    textDone: {
        fontSize: 16,
        color: '#6f6f6f',
        textDecorationLine: 'line-through'
    },
    whiteText: {
        fontSize: 16,
        color: '#fff'
    },
    textInput: {
        borderColor: '#ccc',
        borderWidth: 0.5,
        width: '60%',
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: '#fff'
    },
    inputContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    addButton: {
        width: '35%',
        backgroundColor: '#a30e8f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingVertical: 5
    },
    scrollContainer: {
        marginTop: 20,
        flex:1
    },
    itemContainer: {
        borderColor: '#ccc',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 6,

        borderRadius: 5,
        backgroundColor: '#fff',
        // Shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        // Elevation for Android
        elevation: 3,
        paddingHorizontal: 10,
        paddingVertical: 15

    },
    removeButton: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 10
    },
    noTasksText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#6f6f6f'
    },
});
