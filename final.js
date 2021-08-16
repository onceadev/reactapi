import React, { Component } from 'react';

import {StyleSheet, View,Picker, ActivityIndicator, Text, Dimensions} from 'react-native';

export default class DummyTwo extends Component {

 constructor(props)
 {

   super(props);

   this.state = { 

    data: [{
      active: '0',
      confirmed: '0',
      recovered: '0',
      deaths: '0',
    }],

   isLoading: true,

   PickerValueHolder : '0'

  }
 }

 componentDidMount() {

      return fetch('http://61.16.11.91:8081/api/IFMSMaster/GetCategoryById?Category=Aircon')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
        })
        .catch((error) => {
          console.error(error);
        });
    }

    pickerChange = (index) =>  {
      let item = this.state.dataSource[index];
      this.setState({
        data: [{
          active: item.active,
          confirmed: item.confirmed,
          recovered: item.recovered,
          deaths: item.deaths
        }]
      })
      // console.log(this.state.data[0].active)
    }

 render() {

   return (

    <View><Text>Hello</Text></View>

   );
 }
}
