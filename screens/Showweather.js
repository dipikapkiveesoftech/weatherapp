import React, { useState } from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity,Option,PixelRatio, Switch, StatusBar} from 'react-native';
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal';
import CityPicker from 'react-native-city-picker';
import DeviceInfo from 'react-native-device-info';
import { Value } from 'react-native-reanimated';
import { Card, Divider } from 'react-native-elements';

const NORTH_AMERICA = ['CA', 'MX', 'US'];

export default class Showweather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cca2: 'US',
            latitude: 0,
            longitude: 0,
            forecast: [],
            error:'',
            city:''
          };
	};

    
    getWeather(){

        // Construct the API url to call
        //let url = 'api.openweathermap.org/data/2.5/weather?lat=' + this.state.latitude + '&lon=&appid={your api key}' + this.state.longitude + '&units=metric&appid=YOUR API KEY HERE';
        let url = 'api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&appid=439d4b804bc8187953eb36d2a8c26a02';
        // Call the API, and set the state of the weather forecast
        fetch(url)
        .then(response => response.json())
        .then(data => {
           // this.setState((prevState, props) => ({
             //   forecast: data
            //}));
             {this.state.data &&
                <Text style={styles.data}>
                    {JSON.stringify(this.state.data)}
                </Text>
                }
        
        })
    }
    
	render() {
       
		return (

			<View style={styles.container}>
                <Text style={styles.welcome}>
                Welcome to Country Picker !
                </Text>
                <CountryPicker
                onSelect={(value)=> this.setState({country: value})}
                cca2={this.state.cca2}
                translation='eng'
                withFlag='true'
                withAlphaFilter='true'
                />
               
                <Text style={styles.instructions}>
                press on the flag
                </Text>
                {this.state.country &&
                <Text style={styles.data}>
                    {JSON.stringify(this.state.country.name)}
                </Text>
                }
                
                
                <Card containerStyle={styles.card}>

                </Card>
            </View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    card:{
        backgroundColor:'rgba(56, 172, 236, 1)',
        borderWidth:0,
        borderRadius:20
    },
    instructions: {
      fontSize: 12,
      textAlign: 'center',
      color: '#888',
      marginBottom: 5,
    },
    data: {
      padding: 15,
      marginTop: 10,
      backgroundColor: '#ddd',
      borderColor: '#888',
      borderWidth: 1 / PixelRatio.get(),
      color: '#777'
    }
  });
