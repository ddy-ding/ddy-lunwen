import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,TouchableNativeFeedback,ImageBackground} from 'react-native';


export default class Indexcontcent extends Component<Props>{
    render(){
        return(
            <View>
                <View style={{flexDirection: 'row', alignSelf:"center"}}>
                    <View style={styles.Topleftline}>
                        <View style={{width:10,height:10,backgroundColor:"#fa6f57",marginTop:3,alignSelf:"flex-end"}}></View>
                    </View>
                    <Text style={{fontSize:14,paddingLeft:10,paddingRight:10,}}>传统工艺</Text>
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
                    <Text style={{fontSize:8,alignSelf:"center",marginTop:5,marginBottom:5}}>针线倦拈，帘帏低卷，别般风味</Text>
                    <Image resizeMode='stretch' style={{width:250,height:80,alignSelf:"center"}} source={require('../../img/index/cT_4.png')} />
                </View>
                <View style={{flexDirection: 'row',height:140,width:250,alignSelf:"center",marginTop:30,justifyContent:"space-around"}}>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                        <Image resizeMode='stretch' style={{width:90,height:140}} source={require('../../img/index/cl_1.png')} />
                    </TouchableNativeFeedback>
                    <Text style={{width:10,fontSize:8,lineHeight:10,alignSelf:"flex-end"}}>私人订制系列</Text>
                    <View style={styles.contpacebox}>
                        <Text style={[styles.contpace,{borderBottomWidth:1,borderStyle:"solid",borderColor:"#cecece"}]}>￥3000</Text>
                        <Text style={styles.contpace}>套餐价</Text>
                    </View>
                    <View style={{flexDirection: 'row',marginTop:15}}>
                        <View style={{flexDirection: 'row'}}>       
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>给织人生之华章.......</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>试着心有灵犀于彩色云之间</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>织锦着色彩斑斓的图案</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>一笑，付诸于人生这一条绣布上</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>一针一线来回在手指间穿越，沾花</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>的力量，认真地做一回人生的绣娘</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>是否，拥有足够的勇气，怀揣足够</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>我们，貌似时代的宠儿</Text>
                        </View>
                         <View style={{height:100,width:20,borderLeftColor:"#cecece",borderLeftWidth:1,borderStyle:"solid",alignItems:"center"}}>
                            <Text style={{fontSize:14,width:15,lineHeight:15}}>传统工艺</Text>
                            <View style={{width:10,height:10,backgroundColor:"#fa6f57",borderRadius:50}}></View>
                        </View>

                    </View>

                </View>
                <View style={{flexDirection: 'row',alignSelf:"center",marginTop:10,justifyContent: 'space-between',position:"relative"}}>
                    
                        <View style={{width:78,height:160}}>
                            <ImageBackground source={require('../../img/index/p3.3.jpg') } style={{width:78,height:104}}>
                                <View style={{width:78,height:104,backgroundColor:"rgba(0,0,0,0.5)"}}></View>
                            </ImageBackground>
                            <View style={{position:"absolute",top:5,left:5,height:50,justifyContent:"space-between"}}>
                                <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                                    <View style={{width:15,height:15,backgroundColor:"white",borderRadius:50,borderColor:"#fa6f57"}}>
                                        <Text style={{fontSize:5,lineHeight:15,textAlign:"center"}}>新品</Text>
                                    </View>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                                    <View style={{width:15,height:15,backgroundColor:"#fa6f57",borderRadius:50,borderColor:"#fa6f57"}}>
                                        <Image resizeMode='stretch' style={{width:8,height:8,alignSelf:"center",marginTop:3}} source={require('../../img/index/search.png')} />
                                    </View>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                                    <View style={{width:15,height:15,backgroundColor:"#fa6f57",borderRadius:50,borderColor:"#fa6f57"}}>
                                        <Image resizeMode='stretch' style={{width:8,height:8,alignSelf:"center",marginTop:3}} source={require('../../img/index/shop.png')} />
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            
                            <View>
                                <Text style={{fontSize:8,textAlign:"center"}}>俏雅静旗袍</Text>
                                <View style={{flexDirection: 'row',alignSelf:"center"}}>
                                  <Text style={{fontSize:8,textDecorationLine:"line-through"}}>2980元</Text>  
                                  <Text style={{fontSize:8,marginLeft:5,color:"red"}}>2700元</Text>  
                                </View>
                                <View  style={{flexDirection: 'row',alignSelf:"center"}}>
                                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                                        <Text style={{fontSize:6}}>+加入购物车</Text>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                                        <Text style={{fontSize:6,marginLeft:5}}>+加入收藏夹</Text>
                                    </TouchableNativeFeedback>
                                </View>
                            </View>
                        </View>
                        
                
                        <View style={{width:78,height:160,marginLeft:5}}>
                        <ImageBackground source={require('../../img/index/p3.3.jpg') } style={{width:78,height:104}}>
                            <View style={{width:78,height:104,backgroundColor:"rgba(0,0,0,0.5)"}}></View>
                        </ImageBackground>
                        <View style={{position:"absolute",top:5,left:5,height:50,justifyContent:"space-between"}}>
                            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                                <View style={{width:15,height:15,backgroundColor:"white",borderRadius:50,borderColor:"#fa6f57"}}>
                                    <Text style={{fontSize:5,lineHeight:15,textAlign:"center"}}>新品</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                                <View style={{width:15,height:15,backgroundColor:"#fa6f57",borderRadius:50,borderColor:"#fa6f57"}}>
                                    <Image resizeMode='stretch' style={{width:8,height:8,alignSelf:"center",marginTop:3}} source={require('../../img/index/search.png')} />
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                                <View style={{width:15,height:15,backgroundColor:"#fa6f57",borderRadius:50,borderColor:"#fa6f57"}}>
                                    <Image resizeMode='stretch' style={{width:8,height:8,alignSelf:"center",marginTop:3}} source={require('../../img/index/shop.png')} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        
                        <View>
                            <Text style={{fontSize:8,textAlign:"center"}}>俏雅静旗袍</Text>
                            <View style={{flexDirection: 'row',alignSelf:"center"}}>
                              <Text style={{fontSize:8,textDecorationLine:"line-through"}}>2980元</Text>  
                              <Text style={{fontSize:8,marginLeft:5,color:"red"}}>2700元</Text>  
                            </View>
                            <View  style={{flexDirection: 'row',alignSelf:"center"}}>
                                <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                                    <Text style={{fontSize:6}}>+加入购物车</Text>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                                    <Text style={{fontSize:6,marginLeft:5}}>+加入收藏夹</Text>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </View>
                    <View style={{width:78,height:160,marginLeft:5}}>
                            <ImageBackground source={require('../../img/index/p3.3.jpg') } style={{width:78,height:104}}>
                                <View style={{width:78,height:104,backgroundColor:"rgba(0,0,0,0.5)"}}></View>
                            </ImageBackground>
                            <View style={{position:"absolute",top:5,left:5,height:50,justifyContent:"space-between"}}>
                                <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                                    <View style={{width:15,height:15,backgroundColor:"white",borderRadius:50,borderColor:"#fa6f57"}}>
                                        <Text style={{fontSize:5,lineHeight:15,textAlign:"center"}}>新品</Text>
                                    </View>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                                    <View style={{width:15,height:15,backgroundColor:"#fa6f57",borderRadius:50,borderColor:"#fa6f57"}}>
                                        <Image resizeMode='stretch' style={{width:8,height:8,alignSelf:"center",marginTop:3}} source={require('../../img/index/search.png')} />
                                    </View>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                                    <View style={{width:15,height:15,backgroundColor:"#fa6f57",borderRadius:50,borderColor:"#fa6f57"}}>
                                        <Image resizeMode='stretch' style={{width:8,height:8,alignSelf:"center",marginTop:3}} source={require('../../img/index/shop.png')} />
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            
                            <View>
                                <Text style={{fontSize:8,textAlign:"center"}}>俏雅静旗袍</Text>
                                <View style={{flexDirection: 'row',alignSelf:"center"}}>
                                  <Text style={{fontSize:8,textDecorationLine:"line-through"}}>2980元</Text>  
                                  <Text style={{fontSize:8,marginLeft:5,color:"red"}}>2700元</Text>  
                                </View>
                                <View  style={{flexDirection: 'row',alignSelf:"center"}}>
                                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                                        <Text style={{fontSize:6}}>+加入购物车</Text>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                                        <Text style={{fontSize:6,marginLeft:5}}>+加入收藏夹</Text>
                                    </TouchableNativeFeedback>
                                </View>
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
    contpacebox:{
        width:30,
        height:30,
        borderStyle:"solid",
        borderRadius:50,
        borderColor:"#fa6f57",
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:15,
        marginRight:10
    },
    contpace:{
        fontSize:6
        
    }
})