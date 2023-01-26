import React from "react";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Dimensions,View, Image,ScrollView,ImageBackground,TouchableOpacity, Text, Button } from "react-native";
const DeviceWidth = Dimensions.get('window').width;
const image = { uri: "https://i.ibb.co/bd5sb6n/bg2.png" };

export default function LegalPage({navigation}){
    //navigate to About page on button click
    return(
        //text to be displayed
        <View style={{flex: 1, marginTop: 50}}>
          <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    <Text style={{textAlign: "center", margin: 15, fontSize: 20, fontWeight: "600"}}>Legal Services</Text> 
    <View>
    <Image source ={require("../assets/leg.png")} style={{width: DeviceWidth, height: DeviceWidth*0.55,margin:1, borderRadius: 20}}></Image>

    </View>
    <View style={{flexDirection: 'row'}}>
                <View>
                <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.lawdepot.com/')} style={{width:DeviceWidth*0.28,height: DeviceWidth*0.28,margin:10,backgroundColor: 'lightgrey', borderWidth:1, borderColor: 'grey',}}
              >
                <Image source ={require("../assets/ldepot.png")} style={{width: DeviceWidth*0.27, height: DeviceWidth*0.27,margin:1}}></Image>
              </TouchableOpacity>
                </View>
                <View>
                
                <Text style={{paddingLeft:10,width:DeviceWidth*0.65,fontSize: 20,fontFamily: 'Arial',fontWeight: 'bold',height: DeviceWidth*0.10,marginTop:10,backgroundColor: 'white'}}
              >Law Depot</Text>
              <Text style={{paddingLeft:10,width:DeviceWidth*0.65,fontSize: 12,fontFamily: 'Arial',height: DeviceWidth*0.18,backgroundColor: 'white'}}
              >Law Depot offers more than 150 templates, suitable for use in all 50 states across a range of legal issue taking care of Seniors and Adults at every step.</Text>
              
              </View>
            
            
              
        </View>
    </ImageBackground>
  </View>
            
            
        
        
            
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  
});
