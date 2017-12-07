import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import axios from 'axios';

export default class AssetExample extends Component {
  constructor(props) {
    super(props);

    let name = '';
    let logo = '';
    let price = '';
    let up = true;
    let color = styles.up;

    if (this.props.ticker === 'btc') {
      name = 'Bitcoin';
      logo = require('../assets/btc.png');
    } else if (this.props.ticker === 'eth') {
      name = 'Ether';
      logo = require('../assets/eth.png');
    } else if (this.props.ticker === 'ltc') {
      name = 'Litecoin';
      logo = require('../assets/ltc.png');
    } else if (this.props.ticker === 'dash') {
      name = 'Dash';
      logo = require('../assets/dash.png');
    } else if (this.props.ticker === 'doge') {
      name = 'Dogecoin';
      logo = require('../assets/doge.png');
    } else if (this.props.ticker === 'xrp') {
      name = 'Ripple';
      logo = require('../assets/xrp.png');
    } else if (this.props.ticker === 'xmr') {
      name = 'Monero';
      logo = require('../assets/xmr.png');
    } else if (this.props.ticker === 'zec') {
      name = 'Zcash';
      logo = require('../assets/zec.png');
    } else {
      name = 'Bitcoin';
      logo = require('../assets/btc.png');
    }

    this.state = {
      name: name,
      logo: logo,
      price: price,
      api : "API",
      up : up,
      color : color
    };
  }

  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/').then(res => {
      let index = 0;
      let price = 0;
      let status = true;
      let color = styles.up;

      switch(this.props.ticker) {
        case "btc":
            index = 0;
            break;
        case "eth":
            index = 1;
            break;
        case "xrp":
            index = 5;
            break;
        case "dash":
            index = 6;
            break;
        case "ltc":
            index = 7;
            break;
         case "xmr":
            index = 9;
            break;
         case "zec":
            index = 19;
            break;
         case "doge":
            index = 42;
            break;
        default:
            index = 0;
      }

      if(res.data[index].percent_change_1h > 0){
        status = true;
        color = styles.up;
      } else {
        status = false;
        color = styles.down;
      }

      price = res.data[index].price_usd;

      this.setState({
        price: price,
        up: status,
        color: color
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={this.state.logo} />
        <Text style={styles.short}> {this.state.name} </Text>
        <Text style={this.state.color}>{'$' + this.state.price}</Text>;
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    margin: 15,
    marginTop: 5,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    flex: 1,
  },
  icon: {
    backgroundColor: '#FFF',
    height: 50,
    width: 50,
    padding: 2,
    justifyContent: 'flex-start',
  },
  short: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    justifyContent: 'space-around',
    margin: 12.5,
  },
  up: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#77e59d',
    margin: 12.5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  down: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6666',
    margin: 12.5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'right',
  }
});
