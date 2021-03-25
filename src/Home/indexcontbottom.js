import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,TouchableNativeFeedback,ImageBackground} from 'react-native';


export default class Indexcontbottom extends Component<Props>{
    render(){
        return(
            <View>
                <View style={{flexDirection: 'row', alignSelf:"center"}}>
                    <View style={styles.Topleftline}>
                        <View style={{width:10,height:10,backgroundColor:"#fa6f57",marginTop:3,alignSelf:"flex-end"}}></View>
                    </View>
                    <Text style={{fontSize:14,paddingLeft:10,paddingRight:10,}}>关于我们</Text>
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
                    <Text style={{fontSize:8,alignSelf:"center",marginTop:5,marginBottom:5}}>花间锦绣 花之国 绣之韵</Text>
                    <Image resizeMode='stretch' style={{width:250,height:80,alignSelf:"center"}} source={require('../../img/index/cT_4.png')} />
                </View>
                <View style={{flexDirection: 'row',height:140,width:250,alignSelf:"center",marginTop:30,justifyContent:"space-around"}}>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                        <Image resizeMode='stretch' style={{width:90,height:140}} source={require('../../img/index/p6_1.png')} />
                    </TouchableNativeFeedback>
                    <Text style={{width:10,fontSize:8,lineHeight:10,alignSelf:"flex-end"}}>品牌故事</Text>
                    
                    <View style={{flexDirection: 'row',marginTop:15}}>
                        <View style={{flexDirection: 'row'}}>       
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>丝绸因此建立......</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>后人为了纪念二人"花间锦绣"</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>二人死后，天空出现"鹊桥"异状</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>善人们生活，无奈楚王心生妒忌拆散二人</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>二人一起把自己的耕织技术交给人们改</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>李锦绣，她与花倾落两个早已生死相许</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>据史料记载，战国时期有一位美女丽人叫</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>正式契合丝绸之韵花间锦绣，丝绸故事凄美</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>的烟雨朦胧方可见花那头</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>其的唯美之处在于一步一步上去拨开它</Text>
                            <Text style={{width:10,fontSize:6,lineHeight:8}}>"花间锦绣"源于战国时期</Text>
                        </View>
                         <View style={{height:100,width:20,borderLeftColor:"#cecece",borderLeftWidth:1,borderStyle:"solid",alignItems:"center"}}>
                            <Text style={{fontSize:14,width:15,lineHeight:15}}>花间锦绣</Text>
                            <View style={{width:10,height:10,backgroundColor:"#fa6f57",borderRadius:50}}></View>
                        </View>

                    </View>

                </View>
                <View style={{flexDirection: 'row',alignSelf:"center",marginTop:10,justifyContent: 'space-around',width:250}}>
                    
                        <View style={{width:80}}>
                            <View style={{flexDirection: 'row'}}>
                            <Image resizeMode='stretch' style={{width:11,height:10}} source={require('../../img/index/flower.png')} />
                               <Text style={{fontSize:6,marginLeft:10}}>温馨提示</Text> 
                            </View>
                           
                           <Text style={{fontSize:6}}>亲，购买以后如果发现有品质问题，请及时联系在线客服，我们会给您满意的答案</Text>
                        </View>
                        <View style={{width:80}}>

                        <View style={{flexDirection: 'row'}}>
                            <Image resizeMode='stretch' style={{width:11,height:10}} source={require('../../img/index/heart.png')} />
                               <Text style={{fontSize:6,marginLeft:10}}>关于退换货</Text> 
                            </View>
                           <Text style={{fontSize:6}}>请您在收获时务必认真检查，确认没有问题再签收，如有质量问题，本店承担运费调换</Text>
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