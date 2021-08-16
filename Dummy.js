// import React, { useState, useEffect } from 'react'
// import { View, Text, ScrollView, Dimensions, StyleSheet} from 'react-native'


// const Home = () => {
//     const [loaded, setLoaded] = useState(false)
//     const [err, setErr] = useState('')
//     const [total, setTotal] = useState({})
//     const [statesData, setStatesData] = useState([])

//     // useEffect(() => {
//     //     fetch('https://api.covid19india.org/data.json')
//     //         .then(response => response.json())
//     //         .then(responsejson => {
//     //                     setTotal(responsejson.statewise)
//     //                     setLoaded(true)
//     //                     total['confirmed'] = response.statewise[i].confirmed
//     //                     total['death'] = response.statewise[i].death
//     //                     total['active'] = response.statewise[i].active
//     //                     total['recovered'] = response.statewise[i].recovered
//     //         })
//     //     .catch(err => setErr(err))
//     // }, [])

//     useEffect(() => {
//         fetch('https://api.covid19india.org/data.json')
//         .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//     if(err) {
//         return (
//             <View>
//                 <Text>{err}</Text>
//             </View>
//         )
//     } //Shows Error if there is a problem

//     else if(!loaded) {
//         return (
//             <View>
//                 <Text>LOADING...</Text>
//             </View>
//         ) 
//     } //Shows loading When getting Data

//     else {
//         return (
//             <ScrollView>
//                 <View style={styles.box}>
//                     <View style={[styles.container, {backgroundColor: 'red'}]}>
//                     <Text style={styles.name}> Confirmed </Text>
//                     <Text style={styles.value}>{total.confirmed}</Text>
//                     </View>
//                     <View style={styles.container}>
//                     <Text style={styles.name}> Deaths </Text>
//                     <Text style={styles.value}>{total.deaths}</Text>
//                     </View>
//                 </View>
//                 <View style={styles.box}>
//                 <View style={[styles.container, {backgroundColor: 'orange'}]}>
//                     <Text style={styles.name}> Active </Text>
//                     <Text style={styles.value}>{total.active}</Text>
//                     </View >
//                     <View style={[styles.container, {backgroundColor: 'green'}]}>
//                     <Text style={styles.name}> Recovered </Text>
//                     <Text style={styles.value}>{total.recovered}</Text>
//                     </View>
//                     {/* <Picker label='Data' data={data} /> */}
//                 </View>
//                 <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
//                             <Text style={styles.tableHead}>STATES</Text>
//                             <View style={{height: 15, borderRadius: 4, backgroundColor: 'red', flex: 1, marginRight: 10}}></View>
//                             <View style={{height: 15, borderRadius: 4, backgroundColor: 'pink', flex: 1, marginRight: 10}}></View>
//                             <View style={{height: 15, borderRadius: 4, backgroundColor: 'orange', flex: 1, marginRight: 10}}></View>
//                             <View style={{height: 15, borderRadius: 4, backgroundColor: 'green', flex: 1, marginRight: 10}}></View>
//                         </View>
//                 {
//                     statesData.map((item,i) => {
//                         return (
//                             <View>
//                                 <View style={{flexDirection: 'row',height: 25,marginBottom: 5}} key={i}> 
//                                         <Text style={styles.tableCont}>{item.state}</Text>
//                                         <View style={{flex: 1, marginRight: 10}}><Text style={{textAlign: 'center',fontSize: 20}}>{item.confirmed}</Text></View>
//                                         <View style={{flex: 1, marginRight: 10}}><Text style={{textAlign: 'center',fontSize: 20}}>{item.deaths}</Text></View>
//                                         <View style={{flex: 1, marginRight: 10}}><Text style={{textAlign: 'center',fontSize: 20}}>{item.active}</Text></View>
//                                         <View style={{flex: 1, marginRight: 10}}><Text style={{textAlign: 'center',fontSize: 20}}>{item.recovered}</Text></View>
//                             </View> 
//                             </View> 
//                         )
//                     })
//                 }  
//             </ScrollView>
//             <ScrollView>
//                 <View style={styles.top}>
//                 <Text>{total.active}</Text>
//                 <Text>{total.confirmed}</Text>
//                 <Text>{total.deaths}</Text>
//                 <Text>{total.recovered}</Text>
//                 </View>
//             </ScrollView>
//         )
//     }
// }
// export default Home;

// const styles = StyleSheet.create({
//     top: {
//         width: '100%',
//         height: '50%',
//         backgroundColor: 'grey'
//     },
//     container: {
//         margin: 20,
//         borderRadius: Dimensions.get("window").width * 0.04,
//         width: Dimensions.get("window").width * 0.4,
//         height: Dimensions.get("window").width * 0.4,
//         backgroundColor: 'pink',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },

//     box: {
//         flexDirection: 'row',
//         width: '100%'
//     },
//     name: {
//         color: 'white',
//         fontSize: 24,
//         fontWeight: 'bold'
//     },
//     value: {
//         color: 'black',
//         fontSize: 16,
//         fontWeight: "500"
//     },
//     innercontainer:{
//         flexDirection: 'row',
//         height: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 5
//     },
//     tableCont : {
//         textAlign: 'center',
//         fontSize: 20,
//         flex: 3
//     },
//     tableHead : {
//         fontWeight: 'bold',
//         textAlign: 'center',
//         fontSize: 20,
//         flex: 3
//     },
// })

import React, { Component } from 'react';

import {StyleSheet, View, Picker, ActivityIndicator, Button, Alert} from 'react-native';

export default class Project extends Component {
 
 constructor(props)
 {

   super(props);

   this.state = { 

   isLoading: true,

   PickerValueHolder : 'All'

  }
 }

 componentDidMount() {
   
      return fetch('https://data.covid19india.org/data.json')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    GetPickerSelectedItemValue=()=>{

      Alert.alert(this.state.PickerValueHolder);

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

    <View style={styles.MainContainer}>

          <Picker
            selectedValue={this.state.PickerValueHolder}

            onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >

            { this.state.dataSource.map((item, key)=>(
            <Picker.Item label={item.fruit_name} value={item.fruit_name} key={key} />)
            )}
    
          </Picker>

          <Button title="Click Here To Get Picker Selected Item Value" onPress={ this.GetPickerSelectedItemValue } />

    </View>
           
   );
 }
}

const styles = StyleSheet.create({

MainContainer :{

justifyContent: 'center',
flex:1,
margin: 10
}

});