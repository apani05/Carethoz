import React from "react";
import {Dimensions, Image, View, Text, Button,TouchableOpacity, ScrollView, StyleSheet} from "react-native";
const {width} = Dimensions.get("window");
const height = width * 0.6;
const images =[
    'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7551597/pexels-photo-7551597.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4148965/pexels-photo-4148965.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7728089/pexels-photo-7728089.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7551597/pexels-photo-7551597.jpeg?auto=compress&cs=tinysrgb&w=600'
]
export default function tutorialScreen({navigation}){
    
    //navigate to About page on button click
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
          }}>
            <View>
                <Image source={require("../assets/carethoz.png")} style={{width: 300, height: 80}}/>
              </View>
            <View style={styles.container}>
                <ScrollView 
                pagingEnabled 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={styles.scroll}>
                {
                    images.map((image, index) => (
                        <Image 
                        key={index}
                        source={{uri: image}}
                        style={styles.image}
                />
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
              
          </View>
    );
}
const styles = StyleSheet.create({
    container: {marginTop:20, width, height},
    scroll: {width, height},
    image: {width, height, resizeMode: 'cover'},
    pagination: {position:'absolute', bottom:0, alignSelf:'center', flexDirection:'row'},
    pagingText: {color:'white', fontSize: 50},
})