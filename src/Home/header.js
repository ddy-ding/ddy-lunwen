import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ImageBackground,TextInput,Dimensions,TouchableNativeFeedback} from 'react-native';
var width = Dimensions.get('window').width;
export default class Header extends Component<Props>{
    render(){
        return(
            <View style={styles.searchbox}>
            <ImageBackground source={require('../../img/index/p1.png')} style={styles.search}>
             </ImageBackground>
             <View style={styles.searchmark}>
             
                <View style={{alignSelf:"center",flexDirection:"row",marginLeft:40}}>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                         <View style={{width:20,height:20,borderWidth:1,borderColor:"rgba(255,255,255,0.3)",borderRightWidth:0}}>
                            <Image source={require('../../img/index/headsearch.png')} style={{width:15,height:15,marginTop:2,alignSelf:"center"}}/>
                         </View>           
                    </TouchableNativeFeedback>
                    
                    <TextInput  placeholder="点击查找" placeholderTextColor="rgba(255,255,255,.8)"  style={styles.searchinput}/> 
                </View>
               
             </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    searchbox:{
        width: width, 
        height: 50,
        backgroundColor:"rgba(0,0,0,1)",
        position: "relative",
    },
    search:{
        width: width, 
        height: 50,
    },
    searchmark:{
        position:"absolute",
        height:50,
        width: width, 
        backgroundColor:"rgba(0,0,0,0.2)",
        flexDirection: 'row',
    },
    searchinput:{
        width:width-100,
        // alignSelf:"center",
        // marginTop:15,
        height:20,
        // borderRadius:10,
        borderColor:"rgba(255,255,255,0.3)",
        borderWidth:1,
        alignSelf:"center",
        padding:0,
        fontSize:8,
        color:"white",
        borderLeftWidth:0
    }
})




