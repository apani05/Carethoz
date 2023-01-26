import React from "react";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Dimensions,View, Image,TouchableOpacity, Text, Button } from "react-native";
const DeviceWidth = Dimensions.get('window').width;

export default function StartPage({navigation}){
  
    //navigate to About page on button click
    const pressHandler =() => {
        navigation.navigate('MenuPage')
    }
    return(
        //text to be displayed
        <TouchableOpacity onPress={() => navigation.navigate('Menu')} >
          <Image
          style={{width: '100%', height: '100%'}}
          source={require("../assets/starter.gif")} />
        </TouchableOpacity>
    )
}