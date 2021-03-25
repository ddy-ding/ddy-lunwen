/**
 * Created by DDY on 2019/4/18.
 */
import React, {PureComponent} from 'react';
import { View,
    Text,
    Platform,
    ImageBackground,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
    ScrollView,
    RefreshControl,
} from 'react-native'
import NavigationItem from '../widget/NavigationItem'
import color from '../widget/color'
import {Heading2,Paragraph }from '../widget/Text'
import screen from '../common/screen'
import px2dp from '../utils/px2dp';
import theme from '../config/theme';
import TextFix from '../common/TextFix'
import SpacingView from '../widget/SpacingView'

type Props = {

}
type State = {

}
class Cmiddle extends PureComponent<Props,State> {

      render() {
        return (
            <View>
                <ScrollView>
                    <View style={[styles.rowItem, {height: px2dp(140),marginTop: px2dp(32)}]}>
                        <TouchableOpacity style={styles.countItem}>
                            <Image
                                style={{height:px2dp(50),width:px2dp(50)}}
                                source={require('../images/center/icon-1.png')}
                            />
                            <TextFix style={{fontSize: px2dp(24), color: '#333333', marginTop: px2dp(12)}}>待付款</TextFix>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.countItem}>
                            <Image
                                style={{height:px2dp(50),width:px2dp(50)}}
                                source={require('../images/center/icon-3.png')}
                            />
                            <TextFix style={{fontSize: px2dp(24), color: '#333333', marginTop: px2dp(12)}}>待发货</TextFix>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.countItem}>
                            <Image
                                style={{height:px2dp(50),width:px2dp(50)}}
                                source={require('../images/center/icon-9.png')}
                            />
                            <TextFix style={{fontSize: px2dp(24), color: '#333333', marginTop: px2dp(12)}}>待收货</TextFix>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.countItem}>
                            <Image
                                style={{height:px2dp(50),width:px2dp(50)}}
                                source={require('../images/center/icon-2.png')}
                            />
                            <TextFix style={{fontSize: px2dp(24), color: '#333333', marginTop: px2dp(12)}}>未评价</TextFix>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.countItem}>
                            <Image
                                style={{height:px2dp(50),width:px2dp(50)}}
                                source={require('../images/center/icon-7.png')}
                            />
                            <TextFix style={{fontSize: px2dp(24), color: '#333333', marginTop: px2dp(12)}}>全部订单</TextFix>
                        </TouchableOpacity>
                    </View>

                    {/*-------------------------------------这是下部-------------------------------------*/}

                    <TouchableOpacity style={[styles.rowItem, styles.topBorder, {height: px2dp(120)}]}>
                        <Image
                            style={{height:px2dp(65),width:px2dp(65)}}
                            source={require('../images/center/icon_mine_balance.png')}
                        />
                        <TextFix style={{fontSize: px2dp(32), color: '#333333', flex: 1}}>账户余额</TextFix>
                        <TextFix>￥95872385 ></TextFix>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rowItem, styles.topBorder, {height: px2dp(120)}]}>
                        <Image
                            style={{height:px2dp(65),width:px2dp(65)}}
                            source={require('../images/center/icon_mine_voucher.png')}
                        />
                        <TextFix style={{fontSize: px2dp(32), color: '#333333', flex: 1}}>抵用券</TextFix>
                        <TextFix>63 ></TextFix>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rowItem, styles.topBorder, {height: px2dp(120)}]}>
                        <Image
                            style={{height:px2dp(65),width:px2dp(65)}}
                            source={require('../images/center/icon_mine_wallet.png')}
                        />
                        <TextFix style={{fontSize: px2dp(32), color: '#333333', flex: 1}}>我的钱包</TextFix>
                        <TextFix>办信用卡 ></TextFix>
                    </TouchableOpacity>
                    <SpacingView/>
                    <TouchableOpacity style={[styles.rowItem, styles.topBorder, {height: px2dp(120)}]}>
                        <Image
                            style={{height:px2dp(65),width:px2dp(65)}}
                            source={require('../images/center/icon_mine_aboutmeituan.png')}
                        />
                        <TextFix style={{fontSize: px2dp(32), color: '#333333', flex: 1}}>好友动态</TextFix>
                        <TextFix>></TextFix>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rowItem, styles.topBorder, {height: px2dp(120)}]}>
                        <Image
                            style={{height:px2dp(65),width:px2dp(65)}}
                            source={require('../images/center/icon_mine_friends.png')}
                        />
                        <TextFix style={{fontSize: px2dp(32), color: '#333333', flex: 1}}>我的地址</TextFix>
                        <TextFix>></TextFix>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.rowItem, styles.topBorder, {height: px2dp(120)}]}>
                        <Image
                            style={{height:px2dp(65),width:px2dp(65)}}
                            source={require('../images/center/icon_mine_collection.png')}
                        />
                        <TextFix style={{fontSize: px2dp(32), color: '#333333', flex: 1}}>我的收藏</TextFix>
                        <TextFix>></TextFix>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rowItem, styles.topBorder, {height: px2dp(120)}]}>
                        <Image
                            style={{height:px2dp(65),width:px2dp(65)}}
                            source={require('../images/center/icon_mine_membercenter.png')}
                        />
                        <TextFix style={{fontSize: px2dp(32), color: '#333333', flex: 1}}>会员中心</TextFix>
                        <TextFix>v15 ></TextFix>
                    </TouchableOpacity>
                    <SpacingView/>
                    <TouchableOpacity style={[styles.rowItem, styles.topBorder, {height: px2dp(120)}]}>
                        <Image
                            style={{height:px2dp(65),width:px2dp(65)}}
                            source={require('../images/center/icon_mine_member.png')}
                        />
                        <TextFix style={{fontSize: px2dp(32), color: '#333333', flex: 1}}>积分商城</TextFix>
                        <TextFix>好礼已上线 ></TextFix>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rowItem, styles.topBorder, {height: px2dp(120)}]}>
                        <Image
                            style={{height:px2dp(65),width:px2dp(65)}}
                            source={require('../images/center/icon_mine_aboutmeituan.png')}
                        />
                        <TextFix style={{fontSize: px2dp(32), color: '#333333', flex: 1}}>品牌故事</TextFix>
                        <TextFix>></TextFix>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rowItem, styles.topBorder, {height: px2dp(120)}]}>
                        <Image
                            style={{height:px2dp(65),width:px2dp(65)}}
                            source={require('../images/center/icon_mine_customerService.png')}
                        />
                        <TextFix style={{fontSize: px2dp(32), color: '#333333', flex: 1}}>客服与帮助</TextFix>
                        <TextFix>></TextFix>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rowItem, styles.topBorder, {height: px2dp(120)}]}>
                        <Image
                            style={{height:px2dp(65),width:px2dp(65)}}
                            source={require('../images/center/icon_mine_comment.png')}
                        />
                        <TextFix style={{fontSize: px2dp(32), color: '#333333', flex: 1}}>意见反馈</TextFix>
                        <TextFix>></TextFix>
                    </TouchableOpacity>
                </ScrollView>

            </View>
        )
    }
    constructor(props){
        super(props);
        this.state = {}
    }

}
const  styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',

    },
    countItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    roundButton: {
        height: px2dp(36),
        width: px2dp(120),
        borderRadius: px2dp(18),
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: px2dp(16)
    },
    rowItem: {
        marginHorizontal: px2dp(24),
        flexDirection: 'row',
        alignItems: 'center'
    },
    topBorder: {
        borderTopWidth: px2dp(1),
        borderTopColor: '#f5f5f5'
    }


})

export default Cmiddle