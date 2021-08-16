import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, Dimensions, FlatList, Picker} from 'react-native';

export default Home = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.covid19india.org/data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (

    <View style={{ flex: 1, padding: 16 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( 
            <View>
                <View style={styles.picker}>
                    <Text style={{fontSize: 32, fontWeight:'bold',marginTop: 30, color: 'black'}}>Covid19 Metrics</Text>
                    <Text style={{fontSize: 24, fontWeight:'400', color: 'white', marginTop: 80}}>India</Text>
                </View>
                <View style={styles.value}>
                <FlatList data={data.statewise} keyExtractor={({ state }) => state} renderItem={({ item }) => (
                    <Text>{item.state + '. ' + item.confirmed}</Text> )} />
                </View>
            </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    picker: {
        alignItems: 'center',
        width: '100%',
        height: Dimensions.get('window').height * 0.5,
        backgroundColor: 'grey'
    },
    value: {
        width: '100%',
        height: Dimensions.get('window').height * 0.5,
        backgroundColor: 'white'
    },
    container: {
        flexDirection: 'row',
        flex: 1,
    }
})