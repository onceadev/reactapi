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

      return fetch('https://api.covid19india.org/data.json')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson.statewise
          });
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

   if (this.state.isLoading) {
     return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
     );
   }

   return (

    // <View style={styles.MainContainer}>

    //       <Picker
    //         selectedValue={this.state.PickerValueHolder}
    //         onValueChange={(itemValue, itemIndex) => this.pickerChange(itemIndex)}
    //         >
    //           {this.state.dataSource.map((i, index) => (<Picker.Item label={i.state} value={i.state}/>))}
    //       </Picker>
    //       <Text>Active: {this.state.data[0].active}</Text>
    //       <Text>Confirmed: {this.state.data[0].confirmed}</Text>
    //       <Text>Recovered: {this.state.data[0].recovered}</Text>
    //       <Text>Deaths: {this.state.data[0].deaths}</Text>
    // </View>
        <View>
              <View style={styles.picker}><View style= {{alignItems: 'center'}}>
              <Text style={{fontSize: 32, fontWeight:'600',marginTop: 30, color: 'black'}}>Covid19 Metrics</Text>
              <Text style={{fontSize: 24, color: 'black', marginTop: 30, marginBottom: 30,}}>India</Text>
              </View>
              <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
                <Text style={{color: 'black', fontSize: 22, flex: 1, marginTop: 20}}>States</Text>
                <Picker style={{ height: 100, width: 200, flex: 1 }}
              selectedValue={this.state.PickerValueHolder}
              onValueChange={(itemValue, itemIndex) => this.pickerChange(itemIndex)}
                >
                {this.state.dataSource.map((i, index) => (<Picker.Item label={i.state} value={i.state}/>))}
            </Picker>
              </View>
              </View>
              <View style={styles.value}>
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', fontSize: 22, flex: 1}}>Active</Text>
                <Text style={{color: 'black', fontSize: 22, flex: 1}}>{this.state.data[0].active}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', fontSize: 22, flex: 1}}>Confirmed</Text>
                <Text style={{color: 'black', fontSize: 22, flex: 1}}>{this.state.data[0].confirmed}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', fontSize: 22, flex: 1}}>Recovered</Text>
                <Text style={{color: 'black', fontSize: 22, flex: 1}}>{this.state.data[0].recovered}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', fontSize: 22, flex: 1}}>Deaths</Text>
                <Text style={{color: 'black', fontSize: 22, flex: 1}}>{this.state.data[0].deaths}</Text>
                </View>
              </View>
          </View>

   );
 }
}

const styles = StyleSheet.create({
    picker: {
        width: '100%',
        height: Dimensions.get('window').height * 0.5,
        backgroundColor: 'grey',
        alignItems: 'center'
    },
    value: {
        padding: 10,
        width: '100%',
        height: Dimensions.get('window').height * 0.5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.4,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Dimensions.get('window').width * 0.04,
        margin: 10
    }
})
