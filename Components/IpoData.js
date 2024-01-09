import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const IpoData = ({ displayedIpoData }) => {

    //jsx code for rendering item inside flatlist
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>Company Name:</Text>
                <Text style={styles.tableData}>{item.companyName}</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>Symbol:</Text>
                <Text style={styles.tableData}>{item.symbol}</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>Status:</Text>
                <Text style={styles.tableData}>{item.status}</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>Filed Date:</Text>
                <Text style={styles.tableData}>{item.filedDate}</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>Offering Date:</Text>
                <Text style={styles.tableData}>{item.offeringDate}</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>Price Range:</Text>
                <Text style={styles.tableData}>{item.priceRangeLow} - {item.priceRangeHigh}</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>Shares:</Text>
                <Text style={styles.tableData}>{item.shares}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedIpoData}
                renderItem={renderItem}
                keyExtractor={(item) => item.symbol}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    refreshButton: {
        fontSize: 16,
        color: 'blue',
    },
    itemContainer: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 2,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    tableLabel: {
        fontWeight: 'bold',
    },
    tableData: {
        flex: 1,
        marginLeft: 10,
    },
    companyName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    info: {
        fontSize: 16,
        color: '#555',
        marginBottom: 3,
    },
});


export default IpoData;
