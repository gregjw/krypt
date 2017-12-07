import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import CurrencyTicker from './components/CurrencyTicker.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.innercontainer}>
          <Text style={styles.header}>Krypt</Text>

          <Text style={styles.paragraph}>
            Cryptocurrency tracker
          </Text>

          <CurrencyTicker ticker="btc" />
          <CurrencyTicker ticker="xrp" />
          <CurrencyTicker ticker="eth" />
          <CurrencyTicker ticker="ltc" />
          <CurrencyTicker ticker="dash" />
          <CurrencyTicker ticker="doge" />
          <CurrencyTicker ticker="zec" />
          <CurrencyTicker ticker="xmr" />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    paddingBottom: 0
  },
  innercontainer: {
    backgroundColor: '#000',
    paddingBottom: 250
  },
  header : {
    margin: 18,
    marginBottom: 5,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff'
  },
  paragraph: {
    marginLeft: 18,
    marginBottom: 30,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff'
  }
});
