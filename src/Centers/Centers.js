/**
 * Created by DDY on 2019/4/18.
 */
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
    RefreshControl
} from 'react-native'
import NavigationItem from '../widget/NavigationItem'
import Color from '../widget/color'
import Cmiddle from './Cmiddle'
import screen from '../common/screen'
import px2dp from '../utils/px2dp';
import theme from '../config/theme';
import TextFix from '../common/TextFix'
import LoginScene from './loginScene';
//引入注册界面
import RegisterScene from './registerScene';

type Props = {
}
type State = {
}
class Centers extends PureComponent<Props,State> {
    static navigationOptions = ({ navigation }: any) =>({
        headerTitle:(
            <View style={styles.container}>
                    <ImageBackground
                        source={Platform.OS === 'ios' ? require('../images/center/bgimg.png') : require('../images/center/bgimg.png')}
                        style={styles.imgTabBar}>
                        <View style={{flexDirection: 'row-reverse'}}>
                            <TouchableOpacity style={{paddingTop: px2dp(16)}} onPress={() =>navigation.navigate('MloginScreen',{})}>
                                <NavigationItem
                                    icon={require('../images/center/icon-login.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingTop: px2dp(16),marginRight:-10}} onPress={() =>navigation.navigate('MregisterScene')}>
                                <NavigationItem
                                    icon={require('../images/center/icon-add.png')}
                                    onPress={() => {
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: px2dp(24)}}>
                            <Image source={require('../images/center/avatar.png')}
                                   style={{height: px2dp(120), width: px2dp(120), borderRadius: px2dp(50),marginTop:px2dp(40)}}/>
                            <View style={{marginLeft: px2dp(32), marginTop:px2dp(30)}}>
                            <TextFix style={{fontSize: px2dp(34), color: '#333333'}}>DDY云云</TextFix>
                            <View style={styles.roundButton}>
                                <TextFix style={{fontSize: px2dp(18), color: '#fff'}}>每日签到</TextFix>
                            </View>
                        </View>
                        </View>
                        <View style={styles.countView}>
                            <View style={styles.countItem}>
                                <Image source={require('../images/center/icon-8.png')}/>
                                <TextFix style={{fontSize: px2dp(25), color: '#333333'}}>我的收藏</TextFix>
                                <TextFix style={{fontSize: px2dp(25), color: '#333333'}}>20</TextFix>
                            </View>
                            <View style={styles.countItem}>
                                <Image source={require('../images/center/icon-4.png')}/>
                                <TextFix style={{fontSize: px2dp(30), color: '#333333'}}>关注店铺</TextFix>
                                <TextFix style={{fontSize: px2dp(25), color: '#333333', marginTop: px2dp(8)}}></TextFix>
                            </View>
                            <View style={styles.countItem}>
                                <Image source={require('../images/center/icon-6.png')}/>
                                <TextFix style={{fontSize: px2dp(25), color: '#333333'}}>浏览足迹</TextFix>
                                <TextFix style={{fontSize: px2dp(25), color: '#333333'}}>210</TextFix>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
        ),
        headerStyle: {
            height: px2dp(322),
            elevation: 0,
            borderBottomWidth: 0,
        },
    })
    render() {
        return (
                <View style={styles.container}>
                    <Cmiddle></Cmiddle>
                </View>
        )
    }
}
const  styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    imgTabBar:{
        width:screen.width,
        height: px2dp(322),
        padding:10,
    },
    countView: {
        marginTop:px2dp(45),//React Native中使用的尺寸单位是dp(一种基于屏幕密度的抽象单位。在每英寸160点的显示器上，1dp = 1px),而设计师使用的是px, 这两种尺寸如何换算呢？官方提供了PixelRatio:
        marginHorizontal: px2dp(24),//水平间距，即左边距和右边距
        height: px2dp(140),
        backgroundColor: '#fff',
        borderRadius: px2dp(12),
        flexDirection: 'row',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowColor: '#999999',
        elevation: 4
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



})

// export default  Centers//export default 必须写，导出，外部才可以访问
export default  Centers
