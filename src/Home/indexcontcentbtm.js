import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,TouchableNativeFeedback,ImageBackground} from 'react-native';


export default class Indexcontcentbtm extends Component<Props>{
    render(){
        return(
            <View>
                <View>
                    <View style={{flexDirection: 'row', alignSelf:"center"}}>
                        <View style={styles.Topleftline}>
                            <View style={{width:10,height:10,backgroundColor:"#fa6f57",marginTop:3,alignSelf:"flex-end"}}></View>
                        </View>
                        <Text style={{fontSize:14,paddingLeft:10,paddingRight:10,}}>丝巾情缘</Text>
                        <View style={{width: 80,height:16,borderBottomWidth:1,borderColor:"#cecece",flexDirection:"row"}}>
                            <View style={{width:10,height:10,backgroundColor:"#fa6f57",marginTop:3}}></View>
                            <View style={{marginLeft:40}}>
                                <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                                    <Text style={{fontSize:10}}>更多>></Text>
                                </TouchableNativeFeedback>    
                            </View>
                        </View> 
                    </View>
                    <View>
                        <Text style={{fontSize:8,alignSelf:"center",marginTop:5,marginBottom:5}}>云如丝巾，随风轻飘</Text>
                        <Image resizeMode='stretch' style={{width:250,height:80,alignSelf:"center"}} source={require('../../img/index/cT_3.png')} />
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                
                    <View>
                        <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")} >
                            <Image resizeMode='stretch' style={{width:166,height:156}} source={require('../../img/index/p5_1.png')} />
                        </TouchableNativeFeedback>
                        <View style={{alignSelf:"center",marginLeft:20}}>
                            <Text style={{fontSize:14}}>
                                典雅艺术方巾
                            </Text>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{fontSize:14}}>￥399</Text>
                                <View style={{width:40,height:12,borderWidth:1,marginLeft:5,marginTop:3}}>
                                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")} >
                                        <Text style={{fontSize:8,textAlign:"center",lineHeight:11}}>Click in</Text>
                                    </TouchableNativeFeedback>
                                </View>
                            </View>
                        </View>
                        <Image resizeMode='stretch' style={{width:100,height:107}} source={require('../../img/index/bglogo2.png')} />
                    </View>
                    <View style={{marginTop:20}}>
                        
                        <View style={{flexDirection: 'row'}}>
                            
                                <View style={{width:100,paddingLeft:10}}>
                                    <Text style={{fontSize:14}}>夏季焕新</Text>
                                    <Text style={{fontSize:6,height:40}}>不要以为它只是一个物件，不要以为它不情，不要以为谁都能选择它，不要以为谁穿上她都会韵致倍生，它的语言，它的风情，只有</Text> 
                                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")} >
                                        <View style={{width:40,height:15,backgroundColor:"#fa6f57"}}>
                                            <Text style={{fontSize:8,color:"white",textAlign:"center",lineHeight:15}}>立即查看</Text>
                                        </View>
                                    </TouchableNativeFeedback> 
                                </View>
                                <Image resizeMode='stretch' style={{width:55,height:73}} source={require('../../img/index/bglogo1.png')} />
                              
                        </View>
                        <View style={{marginTop:5}}>
                            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")} >
                                <Image resizeMode='stretch' style={{width:119,height:181}} source={require('../../img/index/p5_2.png')} />
                            </TouchableNativeFeedback>
                            <View style={{marginLeft:20}}>
                            <Text style={{fontSize:14}}>
                                典雅艺术方巾
                            </Text>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{fontSize:14}}>￥399</Text>
                                <View style={{width:40,height:12,borderWidth:1,marginLeft:5,marginTop:3}}>
                                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")} >
                                        <Text style={{fontSize:8,textAlign:"center",lineHeight:11}}>Click in</Text>
                                    </TouchableNativeFeedback>
                                </View>
                            </View>
                        </View>
                        </View>
                    </View>
                    
                </View>
                <View style={{flexDirection:"row",marginLeft:25}}>
                    <View>
                        <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")} >
                            <Image resizeMode='stretch' style={{width:105,height:129}} source={require('../../img/index/p5_3.png')} />
                        </TouchableNativeFeedback>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:14}}>
                                典雅艺术方巾
                            </Text>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{fontSize:14}}>￥399</Text>
                                
                                    <View style={{width:40,height:12,borderWidth:1,marginLeft:5,marginTop:3}}>
                                        <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")} >
                                            <Text style={{fontSize:8,textAlign:"center",lineHeight:11}}>Click in</Text>
                                        </TouchableNativeFeedback>
                                    </View>

                                
                                
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:"row"}}>

                        <View style={{width:110,justifyContent:"center",marginLeft:10}}>

                        
                                <Text style={{color:"black"}}>"雅典艺术"的构成</Text>
                               <Text style={{fontSize:10}}>安安静静地去享受独处</Text> 
                               <Text style={{fontSize:10}}>无忧无虑地去感受艺术</Text>
                               <Text style={{fontSize:10}}>这也是一种生活的仪式感</Text> 
                              
                        </View>
                        <View style={{width:105,height:107,position:"absolute",left:90,top:40}}>
                            <Image resizeMode='stretch' style={{width:105,height:107}} source={require('../../img/index/bglogo3.png')} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Topleftline:{
        width: 80,
        height:16,
        borderBottomWidth:1,
        borderColor:"#cecece"
    },
})