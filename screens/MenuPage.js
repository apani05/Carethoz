import React from "react";
import {Dimensions, Image, View, Text, Button,Pressable,TouchableOpacity,ImageBackground, ScrollView, StyleSheet} from "react-native";
import MarqueeText from 'react-native-marquee';
import * as WebBrowser from 'expo-web-browser';
import { Linking } from "react-native";

const {width} = Dimensions.get("window");
const whatsappNo='+1-425-340-1798'
const whatsappMsg="Hi there, Try the Carethoz Application and get rewarded. My referal code is #14253401798"
const height = width * 0.6;

const images =[
    'https://i.ibb.co/FWHkTTc/Screenshot-2022-12-02-143048.jpg',
    'https://i.ibb.co/vcDMzPx/HEalth-Tips.png',
    'https://i.ibb.co/v4nfrwR/Transportation.png',
    'https://i.ibb.co/M88Jsdj/rover.png',
    'https://i.ibb.co/vBG9R9c/ams.png'
]
const links =[
  'www.care.com','www.chewy.com','www.uber.com','www.rover.com','www.amazon.com'
]
const image = { uri: "https://i.ibb.co/vQfGpYN/bg4.png" };

export default function tutorialScreen({navigation}){
    
    //navigate to About page on button click
    return (
        <View style={styles.container}>
        <ImageBackground source={image} style={styles.imagebg}>
        <View style={{
            flex: 1,
            alignItems: 'center',
            marginTop: 50
          }}>
                <Image source={require("../assets/carethoz.png")} style={{width: 300, height: 80}}/>
                <View style={styles.container2}>

                <ScrollView 
                pagingEnabled 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={styles.scroll}>
                {
                    images.map((image, index) => (
                      <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.rover.com/')}>

                        <Image 
                        key={index}
                        source={{uri: image}}
                        style={styles.image}
                        />
                        </TouchableOpacity>

                        
                    ))
                }

            </ScrollView>  

            <View style={styles.pagination}>
                {
                    images.map((i,k) => (
                        <Text key={k} style={styles.pagingText}>•</Text>
                    ))
                }
                
            </View>
            </View>
                <View>
                  <Text style={{fontSize: 18, fontWeight: "400"}}> Services with Care </Text>
                </View>

            
            <View style={{
              flexDirection: 'row',
              backgroundColor: "#FFFFFF",
              padding: 3}}>
                
              <View>
              <TouchableOpacity onPress={() => navigation.navigate('Care')} style={{width: width*0.22, height: width*0.31, marginBottom:5, backgroundColor: 'white', borderRadius:10}} >
                <Image source ={require("../assets/fc.png")}
      style={{width: width*0.22, height: width*0.22}}/>
       <Text style={{fontSize: 14,alignSelf:"center", textAlign: "center", fontFamily: "Menlo-Bold"}}>
                Finding Care
            </Text>
                </TouchableOpacity>
              
      <TouchableOpacity onPress={() => navigation.navigate('Finance')} style={{width: width*0.22, height: width*0.31, marginBottom:5, marginRight: 5,backgroundColor: 'white', borderRadius:10}}>
              <Image source ={require("../assets/finance.png")}
      style={{width: width*0.22, height: width*0.22}}/>
       <Text style={{fontSize: 14,alignSelf:"center", textAlign: "center", fontFamily: "Menlo-Bold"}}>
                Finance
            </Text>
              </TouchableOpacity>
              
             
                
                
                
              </View>





              <View>
              <TouchableOpacity onPress={() => navigation.navigate('RealEstate')} style={{width: width*0.22, height: width*0.31,marginBottom:5, marginRight: 5,backgroundColor: 'white', borderRadius:10}}
              >
                <Image source ={require("../assets/rs.png")}
      style={{width: width*0.22, height: width*0.22}}/>
            <Text style={{fontSize: 14,alignSelf:"center", textAlign: "center", fontFamily: "Menlo-Bold"}}>
                Real Estate
            </Text>
      </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('PetCare')} style={{width: width*0.22, height: width*0.31, marginBottom:5, backgroundColor: 'white', borderRadius:10}} >
              <Image source ={require("../assets/pc.png")}
      style={{width: width*0.22, height: width*0.22}}/>
       <Text style={{fontSize: 14,alignSelf:"center", textAlign: "center", fontFamily: "Menlo-Bold"}}>
                Pet Care
            </Text>
                    </TouchableOpacity>
                
              </View>
              <View>
              <TouchableOpacity onPress={() => navigation.navigate('HomeDelivery')} style={{width: width*0.22, height: width*0.31, marginBottom:5, marginRight: 5,backgroundColor: 'white', borderRadius:10}}>
              <Image source ={require("../assets/hd.png")}
      style={{width: width*0.22, height: width*0.22}}/>
       <Text style={{fontSize: 14,alignSelf:"center", textAlign: "center", fontFamily: "Menlo-Bold"}}>
                Home Delivery
            </Text>
              </TouchableOpacity>
              
                    <TouchableOpacity onPress={() => navigation.navigate('Legal')} style={{width: width*0.22, height: width*0.31, marginBottom:5,backgroundColor: 'white', borderRadius:10}}>
              <Image source ={require("../assets/legal.png")}
      style={{width: width*0.22, height: width*0.22}}/>
       <Text style={{fontSize: 14,alignSelf:"center", textAlign: "center", fontFamily: "Menlo-Bold"}}>
                Legal
            </Text>
              </TouchableOpacity>
              </View>
              
              <View>
              <TouchableOpacity onPress={() => navigation.navigate('Maintainence')} style={{width: width*0.22, height: width*0.31, marginBottom:5, backgroundColor: 'white', borderRadius:10}} >
              <Image source ={require("../assets/hu.png")}
      style={{width: width*0.22, height: width*0.22}}/>
       <Text style={{fontSize: 14,alignSelf:"center", textAlign: "center", fontFamily: "Menlo-Bold"}}>
                Home Upkeep
            </Text>
                    </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Transport')} style={{width: width*0.22, height: width*0.31, marginBottom:5, backgroundColor: 'white', borderRadius:10}} >
              <Image source ={require("../assets/sc.png")}
      style={{width: width*0.22, height: width*0.22}}/>
       <Text style={{fontSize: 14,alignSelf:"center", justifyContent:"center", textAlign: "center", fontFamily: "Menlo-Bold"}}>
                Mobility
            </Text>
                    </TouchableOpacity>
               
              </View>


              
            </View> 
            
                <Pressable style={styles.button} onPress={() => Linking.openURL('tel:+1-206-353-1889')}>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: "500"}}>Call Support</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => Linking.openURL(`whatsapp://send?phone=${whatsappNo}&text=${whatsappMsg}`)}>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: "500"}}>Refer your buddy!</Text>
                </Pressable>
              </View>
              
              
        </ImageBackground>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    imagebg: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    container2: {marginTop:20, width, height},
    scroll: {width, height},
    image: {width, height, resizeMode: 'contain', borderRadius: 50},
    pagination: {position:'absolute', bottom:0, alignSelf:'center', flexDirection:'row'},
    pagingText: {color:'white', fontSize: 50},
    tagline:{fontSize: 20, padding: 5},
    marqueekadesign:{justifyContent:'center'},
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 26,
        marginTop: 10,
        borderRadius: 12,
        elevation: 3,
        backgroundColor: '#8C39A5',
      }
  });

  /*
  <Pressable style={styles.button} onPress={() => WebBrowser.openBrowserAsync('https://docs.google.com/forms/d/1kd47sDZFQ3iSYzx36DboJK65xJZytMBS1hOwAq1eGzY/edit')}>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: "500"}}>Start your Journey</Text>
                </Pressable>
  */