import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

export default class Indexmenu extends Component<Props>{
    render(){
        return(
            <View style={styles.menubox}>
               <View style={styles.flexbox}>
                    <View style={styles.menuleft}>
                        <View style={styles.menuleftbox}>
                            <Text style={styles.menuheadtxt}>
                                花之国
                                
                            </Text>
                            <View style={styles.menuheadtxthr}></View>
                        </View>
                    </View>
                    <View style={styles.menulogo}>
                        <Image resizeMode='stretch' style={styles.imagelogo} source={require('../../img/index/indexlogo.png')} />
                    </View>
                    <View style={styles.menuright}>
                        <View style={styles.menurightbox}>
                            <Text style={styles.menuheadtxt}>
                                绣之韵
                            </Text>
                            <View style={styles.menuheadtxthr}></View>
                        </View>
                    </View>
                </View> 
                <View style={styles.menucent}>
                    <Text style={styles.menucenttxt}>
                                关/注/我/们/记/录/美/好
                    </Text>
                </View>
                <View style={styles.hr}></View>
                <View style={styles.menucent}>
                    <Text style={styles.menubottomtxt}>
                                何必顾及流云叨扰  韶华悄悄你不来我不老
                    </Text>
                    <Text style={styles.menubottomtxt}>
                                遇见你是我一生最甜蜜的美好
                    </Text>
                </View>
            </View>
            
           
        )
    }
}

const styles = StyleSheet.create({
    flexbox:{
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:80
    },
    menuleft:{
        width:100,
        height:40,
        backgroundColor:"#fa6f57",
      
    },
    menuright:{
        width:100,
        height:40,
        backgroundColor:"#fa6f57",
        
    },
    menuleftbox:{
        width:50,
        height:36,
        backgroundColor:"#ffffff",
        marginLeft:48,
        marginTop:2
    },
    menurightbox:{
        width:50,
        height:36,
        backgroundColor:"#ffffff",
        marginLeft:2,
        marginTop:2
    },
    menuheadtxt:{
   
        fontSize:12,
        // flex:1,
        textAlign:"center",
        lineHeight:20,
    },
    menuheadtxthr:{
        width:'80%',
        height:1,
        backgroundColor:"#cecece",
        alignSelf:"center",
    },
    imagelogo:{
        width:50,
        height:60,
        alignSelf:"center",
        marginTop:10
    },
    menucenttxt:{
        fontSize:10,
        textAlign:"center",
        letterSpacing:2
    },
    hr:{
        width:'80%',
        height:1,
        backgroundColor:"#cecece",
        alignSelf:"center",
        marginTop:10,
        marginBottom:10
    },
    menubottomtxt:{
    
        fontSize:8,
        textAlign:"center",
        marginBottom:5
    }
})