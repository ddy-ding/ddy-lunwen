/**
 * Created by DDY on 2019/4/18.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
    FlatList,
    ScrollView,
    TouchableNativeFeedback,
    Modal,
    TextInput
} from 'react-native'
import index from '@babel/template';
import { directive } from '@babel/types';
import px from '../utils/px'
type Props = {

}
type State = {

}
const width = Dimensions.get('window').width;
class Goods extends Component<Props,State> {
    constructor(props){
        super(props);
        const {navigation} = this.props;
        
        this.state = {
            priceBoxStatus:false,
            headerimg : null,
            name :  null,
            price :  null,
            detailimg : null,
            changeprice:null,
        }
    }
    static navigationOptions = () =>({
        headerTitle:(
                <View style={styles.titlebox}>
                  <Text style={styles.titleTop}>详情页</Text>  
                </View>
        ),
        headerTintColor:"#fff",
        headerStyle:{height:30,backgroundColor: '#fa6f57'}
    })
    //详情图片
    renderDetail(){
        return(
   
               <FlatList
                data={this.state.detailimg}
                renderItem={({item}) => <Image  style={styles.detailimgstyle} source={{uri:item}} />}
                />
        )
    }
    //底部
    renderFoot(){
        return(
            <View style={{position:'absolute',flexDirection:'row',bottom:0}}>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                        <View style={styles.cart}>
                            <Image style={styles.cartimg}  source={require('../../img/icon/shopgray.png')}/>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={() => this.openbuy()}>
                        <Text style={styles.buy}>立即购买</Text>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}   onPress={() => this.sharePage()}>
                        <Text style={styles.share}>分享商品</Text>
                    </TouchableNativeFeedback>
            </View>
        )
    }

    renderModal(){
        return(
            <Modal
              animationType="none"
                transparent={true}
                visible={this.state.priceBoxStatus}
                onRequestClose={() => null}>
                <View style={styles.warp}>
                    <TouchableOpacity activeOpacity={0.9}
                        style={{ width: px(750), flex: 1 }} onPress={() => this.setState({ priceBoxStatus: false })}>
                    </TouchableOpacity>
                    <View style={styles.box}>
                        <View style={styles.detail}>
                            {/* 小图 */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', margin: px(10) }}>
                                <Image style={styles.coverImage}
                                    source={{
                                        uri: this.state.headerimg
                                    }}
                                    resizeMode="cover"
                                    resizeMethod="resize">
                                </Image>
                            </View>
                            {/* 价格 */}
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text allowFontScaling={false} style={{ fontSize: px(35), color: '#252426' }}>
                                        ￥{this.state.buyNumber >= 2 ? Number(this.state.changeprice).toFixed(2) : Number(this.state.price).toFixed(2)}
                                    </Text>
                                  
                                </View>
                                <Text allowFontScaling={false} style={{ fontSize: px(28), color: '#d0648f', marginTop: px(13) }}>
                                    购买有奖励
                                </Text>
                            </View>
                            {/* 关闭按钮 */}
                            <TouchableOpacity activeOpacity={0.9} onPress={() => this.setState({ priceBoxStatus: false })}>
                                <View style={styles.closeImageBox}>
                                    <Image style={styles.closeImage}
                                        source={require('../../img/icon/close.png')}
                                        resizeMode="cover"
                                        resizeMethod="resize">
                                    </Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.other}>
                            <View style={styles.spuCartMain}>
                                {/*数量选择器*/}
                                <View style={styles.quantityBox}>
                                    <Text allowFontScaling={false} style={styles.quantity}>数量</Text>
                                    {
                                        this.state.limitStock < 10 &&
                                        <Text allowFontScaling={false} style={{ fontSize: px(24), color: '#858385', marginRight: px(45) }}>库存{this.state.limitStock}件</Text>
                                    }
                                    <View style={styles.quantityMain}>
                                        <TouchableOpacity activeOpacity={0.8} onPress={this.reduce.bind(this)}>
                                            <View style={styles.reduce}>
                                                <Text style={styles.reduceText}> - </Text>
                                            </View>
                                        </TouchableOpacity>
                                        <View style={styles.quantityInputBox}>
                                            <TextInput
                                                style={styles.quantityInput}
                                                value={String(this.state.buyNumber)}
                                                autoFocus={false}
                                                underlineColorAndroid="transparent"
                                                keyboardType="numeric"
                                                onChangeText={this.changeNumber.bind(this)}>
                                            </TextInput>
                                        </View>
                                        <TouchableOpacity activeOpacity={0.8} onPress={this.plus.bind(this)}>
                                            <View style={styles.plus}>
                                                <Text
                                                    style={styles.plusText}> + </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {/*购买按钮*/}
                                {
                                    this.state.isBuyLimit == 1 &&
                                    <View style={styles.tipLimitBuy}>
                                        <Text style={styles.tipLimitBuyTip} allowFontScaling={false}>{this.state.buyLimitMsg}</Text>
                                    </View>

                                }
                                {this.state.limitStock == 0
                                    ? <TouchableOpacity style={styles.spuQuantityBtnBox}>
                                        <View style={[styles.footerBuy, styles.footerBuy1, { width: px(750) }]}>
                                            <Text allowFontScaling={false} style={[styles.footerBuyTxt, styles.footerBuy1Txt]}>
                                                已抢光
                                                </Text>
                                        </View>
                                    </TouchableOpacity> : <View style={styles.spuQuantityBtnBox}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={this.addCartFn.bind(this)}>
                                            <View
                                                style={[styles.quantityBtn, styles.quantityBtnColor2]}>
                                                <Text allowFontScaling={false} style={styles.quantityBtnText}>加入购物车</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={this.goSubmit.bind(this)}>
                                            <View
                                                style={[styles.quantityBtn, styles.quantityBtnColor1]}>
                                                <Text allowFontScaling={false} style={styles.quantityBtnText}>立即购买</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
    //数量增加
    plus() {
        if (this.state.isBuyLimit == 1 && this.state.buyNumber >= this.state.buyLimitNum) {
            toast(`该商品为限购商品,${this.state.buyLimitMsg}`);
            return;
        }
        if (this.state.buyNumber >= this.state.limitStock) {
            toast(`库存仅剩${this.state.limitStock}件`);
            return;
        }
        let qty = this.state.buyNumber || 1;
        if (isNaN(qty)) qty = 1;
        this.setState({
            buyNumber: ++qty
        })
        this.setState({changeprice:this.state.price*qty})
    }
    // 数量减少
    reduce() {
        if (this.state.buyNumber == 1) return;
        let buyNumber = Number(this.state.buyNumber) || 2;
        if (isNaN(buyNumber)) buyNumber = 2;
        this.setState({ buyNumber: --buyNumber })
        this.setState({changeprice:this.state.price*buyNumber})
    }
    changeNumber(num) {
        num = Number(num);
        if (isNaN(num)) num = 1;
        if (num > this.state.limitStock) {
            num = 1
            toast(`库存不足`);
        }
        this.setState({
            buyNumber: num
        });
    }
    // 生命周期函数
    componentDidMount() {
        this.getDetail()
    }
    getDetail(){
        const {navigation} = this.props;
        this.setState({
            headerimg : navigation.getParam("goodsheader"),
            name :  navigation.getParam("goodsname"),
            price :  navigation.getParam("goodsprice"),
            detailimg : navigation.getParam("goodsdetail"),
            limitStock:30,
            buyNumber: 1,
            isBuyLimit:10,
            
        })
        
    }
    //进入购物车的方法
    goCart() { }
    //立即购买
    goSubmit() { }
    // 加入购物车
    addCartFn() { }

    // 立即购买
    openbuy() {
        this.setState({ priceBoxStatus: true })
    }
    //分享商品
    sharePage() { }
    render() {
        return (
            <View style="{{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}">
                <ScrollView>
                   <Image style={styles.goodstyle} source={{uri:this.state.headerimg}}/>
                    <View style={styles.namebox}>
                        <Text style={styles.namestyle}>{this.state.name}</Text>
                    </View>
                    <View style={styles.pricebox}>
                        <Text style={{paddingLeft:width*0.05,fontSize:25,color:'#fa6f57'}}>￥{this.state.price}</Text>
                        <Text style={{paddingLeft:width*0.05}}>2.8折</Text>
                        <Text style={{textDecorationLine:'line-through',paddingLeft:width*0.05}}>￥389.00</Text>
                    </View> 
                    <View style={styles.Taxation}>
                        <Text style={{paddingLeft:width*0.05}}>税费￥12.85</Text>
                        <Text>海购政策</Text>
                    </View>
                    {this.renderDetail()}
                </ScrollView>
                {this.renderFoot()}
                {this.renderModal()}
            </View>
        )
    }
}
const  styles = StyleSheet.create({
    titleTop:{
        width:width*0.65,
        textAlign: 'center',
        color:"white"
    },
    goodstyle:{
        width:width,
        height:width
    },
    namebox:{
        paddingTop: 10,
        width:width,
    },
    namestyle:{
        paddingLeft: width*0.05,
        paddingRight:width*0.05
    },
    pricebox:{
        flexDirection: 'row',
    },
    Taxation:{
        flexDirection: 'row',
    },
    detailimgstyle:{
        width:width,
        height:600
    },
    cart:{
        width:width*0.2,
        // lineHeight:40,
        height:40,
        backgroundColor:'#fff',

    
    },
    cartimg:{
        width:20,
        height:20,
        alignSelf: 'center',
        // justifyContent:'center'
        marginTop:10
    },
    buy:{
        width:width*0.4,
        lineHeight:40,
        backgroundColor:'#fa6f57',
        textAlign:'center',
        color:'white'
    },
    share:{
        width:width*0.4,
        lineHeight:40,
        backgroundColor:'#d0648f',
        textAlign:'center',
        color:'white'
    },
    warp: {
        flex: 1,
        backgroundColor: 'rgba(36, 37, 38, 0.5)'
    },
    box: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: px(750),
    },
    detail: {
        width: px(750),
        paddingLeft: px(26),
        paddingRight: px(30),
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: px(143),
        justifyContent: 'space-between',
        paddingTop: px(10)
    },
    closeImageBox: {
        width: px(50),
        height: px(50),
        marginTop: px(29),
        alignItems: 'flex-end'
    },
    coverImage: {
        width: px(200),
        height: px(200),
        borderRadius: px(10)
    },
    closeImage: {
        width: px(22),
        height: px(22),
    },
    other: {
        width: px(750),
        height: px(282),
        backgroundColor: '#fff',
        flexDirection: 'column',
        paddingTop: px(33)
    },
    spuCartMain: {
        flex: 1
    },
    quantityBox: {
        paddingHorizontal: px(30),
        flexDirection: 'row',
        height: px(80),
        alignItems: 'center'
    },
    quantity: {
        fontSize: px(30),
        flex: 1
    },
    quantityMain: {
        width: px(198),
        height: px(58),
        borderWidth: px(1),
        borderColor: '#e5e5e5',
        flexDirection: 'row',
        overflow: 'hidden',
        borderRadius: px(10)
    },
    reduce: {
        width: px(58),
        height: px(58),
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: px(1),
        borderRightColor: '#e5e5e5'
    },
    reduceText: {
        fontSize: px(28),
        color: '#252426',
    },
    quantityInputBox: {
        flex: 1,
        backgroundColor: '#fff',
        borderRightWidth: px(1),
        borderRightColor: '#e5e5e5'
    },
    quantityInput: {
        flex: 1,
        textAlign: 'center',
        padding: 0,
        fontSize: px(28)
    },
    plus: {
        width: px(58),
        height: px(58),
        alignItems: 'center',
        justifyContent: 'center'
    },
    plusText: {
        fontSize: px(28),
        color: '#252426',
    },
    tipLimitBuy: {
        //height:px(63),
        paddingTop: px(18),
        paddingBottom: px(18),
        alignItems: 'flex-end',
        paddingRight: px(30)
    },
    tipLimitBuyTip: {
        color: '#ed3f58',
        fontSize: px(22)
    },
    spuQuantityBtnBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    quantityBtnBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    quantityBtn: {
        width: px(375),
        height: px(90),
        alignItems: 'center',
        justifyContent: 'center'
    },
    quantityBtnText: {
        fontSize: px(30),
        color: '#fff'
    },
    quantityBtnColor1: {
        backgroundColor: '#d0648f'
    },
    quantityBtnDisabled: {
        color: '#ddd'
    },
    quantityBtnColor2: {
        backgroundColor: '#e7895c'
    },
})

export default  Goods