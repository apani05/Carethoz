import React from "react";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Dimensions,View, Image,ScrollView,ImageBackground,TouchableOpacity, Text, Button } from "react-native";
const DeviceWidth = Dimensions.get('window').width;
const image = { uri: "https://i.ibb.co/bd5sb6n/bg2.png" };

export default function FindingCarePage({navigation}){
    //navigate to About page on button click
    return(
        //text to be displayed
        <View style={{flex: 1, marginTop: 50}}>
          <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    <Text style={{textAlign: "center", margin: 15, fontSize: 20, fontWeight: "600"}}>Finding Care</Text> 
    <View>
    <Image source ={require("../assets/findCare.png")} style={{width: DeviceWidth, height: DeviceWidth*0.55,margin:1, borderRadius: 20}}></Image>

    </View>
    <View style={{flexDirection: 'row'}}>
                    <View>
                <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.aplaceformom.com/')} style={{width:DeviceWidth*0.28,height: DeviceWidth*0.28,margin:10,backgroundColor: 'lightgrey', borderWidth:1, borderColor: 'grey',}}
              >
                <Image source ={require("../assets/apfm.png")} style={{width: DeviceWidth*0.27, height: DeviceWidth*0.27,margin:1}}></Image>
              </TouchableOpacity>
                </View>
                <View>
                <Text style={{paddingLeft:10,width:DeviceWidth*0.65,fontSize: 20,fontFamily: 'Arial',fontWeight: 'bold',height: DeviceWidth*0.10,marginTop:10,backgroundColor: 'white'}}
              >A Place for Mom</Text>
              <Text style={{paddingLeft:10,width:DeviceWidth*0.65,fontSize: 12,fontFamily: 'Arial',height: DeviceWidth*0.18,backgroundColor: 'white'}}
              >A Place for Mom is a care referral service. The company provides personal and assistance to families in the search of senior care options. </Text>
              
                </View>
            
            
              
        </View>
        <View style={{flexDirection: 'row'}}>
                <View>
                <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.care.com/')} style={{width:DeviceWidth*0.28,height: DeviceWidth*0.28,margin:10,backgroundColor: 'lightgrey', borderWidth:1, borderColor: 'grey',}}
              >
                <Image source ={require("../assets/careCom.jpeg")} style={{width: DeviceWidth*0.27, height: DeviceWidth*0.27, margin: 1}}></Image>
              </TouchableOpacity>
                </View>
                <View>
              <Text style={{paddingLeft:10,width:DeviceWidth*0.65,fontSize: 20,fontFamily: 'Arial',fontWeight: 'bold',height: DeviceWidth*0.10,marginTop:10,backgroundColor: 'white'}}
              >Care.com</Text>
              <Text style={{paddingLeft:10,width:DeviceWidth*0.65,fontSize: 12,fontFamily: 'Arial',height: DeviceWidth*0.18,backgroundColor: 'white'}}
              >Care.com is an online marketplace for childcare, senior care, special needs care, tutoring, pet care, and housekeeping through membership in a two-sided marketplace. </Text>
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
