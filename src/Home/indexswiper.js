import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

export default class IndexSwiper extends Component<Props>{
    render(){
        return(
            <Swiper style={styles.wrapper} height={240} autoplay
                    onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                    dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                    activeDot={<View style={{backgroundColor: 'yellow', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    paginationStyle={{
                        bottom: 23, left: null, right: 10
                    }}
                    loop>
                <View style={styles.slide} >
               
                    <Image resizeMode='stretch' style={styles.image} source={require('../../img/index/banner.png')} />
                </View>
                <View style={styles.slide}>
               
                    <Image resizeMode='stretch' style={styles.image} source={require('../../img/index/banner.png')} />
                </View>
                <View style={styles.slide} >
          
                    <Image resizeMode='stretch' style={styles.image} source={require('../../img/index/banner.png')} />
                </View>
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({

    wrapper: {
       
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        alignItems:'center'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        // paddingRight:200,
        // flex: 1
        width:"100%",
        height:"100%"
    },
})