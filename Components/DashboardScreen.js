import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import IpoData from './IpoData';
import CurrencyExchange from './CurrencyExchange';

const DashboardScreen = ({ navigation }) => {
    //useStates for managing the states related to IpoData
    const [allIPOsData, setAllIPOsData] = useState([]);
    const [displayedIpoData, setDisplayedIpoData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [showIpoData, setShowIpoData] = useState(true);
    //useStates for managing the states related to currencyExchange
    const [currencyExchangeData, setcurrencyExchangeData] = useState([]);
    const [displayedcurrencyExchange, setDisplayedcurrencyExchange] = useState([]);
    // const [showcurrencyExchange, setShowcurrencyExchange] = useState(true);
    useEffect(() => {
        // Fetch data only on the initial mount
        fetchIPOsData();
    }, []);

    const fetchIPOsData = async () => {
        try {
            setRefreshing(true);
            const IEX_CLOUD_API_KEY = 'sk_13a1e42c54e74cecb6ed31feec6a8667';
            const upcomingIPOsApiUrl = `https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=${IEX_CLOUD_API_KEY}`;

            const upcomingIPOsAPIResponse = await axios.get(upcomingIPOsApiUrl);
            console.log("upcomingIPOsAPIResponse --> ", upcomingIPOsAPIResponse.data);
            const iposData = upcomingIPOsAPIResponse.data;
            setAllIPOsData(iposData);
            setDisplayedIpoData(iposData);
        } catch (error) {
            console.error('Error fetching IPOs DATA:', error);
        } finally {
            setRefreshing(false);
        }
    };

    const fetchCurrencyExchange = async () => {
        try {
            setRefreshing(true);
            const IEX_CLOUD_API_KEY = 'sk_13a1e42c54e74cecb6ed31feec6a8667';
            const currencyExchangeApiUrl = `https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=${IEX_CLOUD_API_KEY}`;

            const currencyExchangeDataResponse = await axios.get(currencyExchangeApiUrl);
            console.log("upcomingIPOsAPIResponse --> ", currencyExchangeDataResponse.data);
            const currencyExchange = currencyExchangeDataResponse.data;
            setcurrencyExchangeData(currencyExchange);
            setDisplayedcurrencyExchange(currencyExchange);
        } catch (error) {
            console.error('Error fetching IPOs DATA:', error);
        } finally {
            setRefreshing(false);
        }
    };

    const handleRefresh = () => {
        if (!refreshing) {
            if (showIpoData) {
                fetchIPOsData();
            } else {
                fetchCurrencyExchange();
            }
        }
    };

    // handling toggle view to switch between ipoData and CurrencyExchange
    const handleToggleView = () => {
        setShowIpoData(!showIpoData);
        setRefreshing(true);
        if (!showIpoData) {
            // If switching to Currency Exchange view, fetch Currency Exchange data
            fetchCurrencyExchange();
        } else {
            // If switching to IPO Data view, fetch IPO data
            fetchIPOsData();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    {showIpoData ? 'IPO Dashboard' : 'Currency Exchange'}
                </Text>
                <TouchableOpacity onPress={handleRefresh}>
                    <Text style={styles.refreshButton}>Refresh</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleToggleView}>
                    <Text style={styles.toggleButton}>
                        {showIpoData ? 'Currency Exchange' : 'IPO Data'}
                    </Text>
                </TouchableOpacity>
            </View>
            {showIpoData ? (
                <IpoData displayedIpoData={displayedIpoData} />
            ) : (
                <CurrencyExchange displayedCurrencyExchange={currencyExchangeData} />
            )}
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


export default DashboardScreen;
