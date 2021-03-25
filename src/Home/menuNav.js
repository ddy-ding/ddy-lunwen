import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableNativeFeedback,Image} from 'react-native';


export default class MenuNav extends Component<Props>{
    render() {
        return (
          <View style={styles.wrapper}>
            <TouchableNativeFeedback  background={TouchableNativeFeedback.SelectableBackground()} onPress={()=>alert("点击了")}>
                <View>
                    <Image resizeMode='stretch' style={styles.image} source={require('../../img/index/menulogo1.png')} />
                    <Text style={styles.navtxt}>旗袍</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback  background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
            <View><Image resizeMode='stretch' style={styles.image} source={require('../../img/index/menulogo2.png')} />
            <Text style={styles.navtxt}>丝巾</Text></View>
            
            </TouchableNativeFeedback>
            
            <TouchableNativeFeedback  background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
            <View><Image resizeMode='stretch' style={styles.image} source={require('../../img/index/menulogo3.png')} />
            <Text style={styles.navtxt}>手工刺绣</Text></View>
            
            </TouchableNativeFeedback>
            <TouchableNativeFeedback  background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
            <View><Image resizeMode='stretch' style={styles.image} source={require('../../img/index/menulogo4.png')} />
            <Text style={styles.navtxt}>送礼臻品</Text></View>
            
            </TouchableNativeFeedback>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    wrapper:{
        // width:"90%",
        flexDirection: 'row',
        // justifyContent: 'space-between',
        justifyContent: 'space-around',
    },
    image:{
        width:50,
        height:50
    },
    navtxt:{
        fontSize:12,
        width:50,
        textAlign:"center"
    }
})