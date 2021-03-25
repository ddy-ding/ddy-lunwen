import React, { PureComponent } from 'react'
import { createStackNavigator, createBottomTabNavigator, createAppContainer, TabBarBottom } from 'react-navigation'
import Index from './Home/Home'
import Cart from './Cart/Cart'
import Classification from './Classification/Classification'
import Centers from './Centers/Centers'
import Order from './Order/Order'
import TabBarItem from './widget/TabBarItem'
import Color from './widget/color'
import Goods from './detail/goods'
//引入登陆界面
import LoginScene from './Centers/loginScene';
//引入注册界面
import RegisterScene from './Centers/registerScene';


import {StyleSheet,
    View,
    Image,
    Text
}from 'react-native'


const Tab = createBottomTabNavigator(//BottomTabNavigator这个是用两个参数，第一个参数是定义每个场景的，第二个参数是定义tabbur的
    {
        Home: {
            screen:createStackNavigator({ Home:Index }),
            navigationOptions:() =>({
                tabBarLabel:"首页",
                tabBarIcon:({focused,tintColor})=>(
                    <TabBarItem
                        tintColor={tintColor}
                        focused = {focused}
                        normalImage={require('./images/ic_tab_home.png')}
                        selectedImage={require('./images/ic_tab_home_press.png')}
                    />
                )
            }),
        },
        Classification: {
            screen: createStackNavigator({ Classification: Classification }),
            navigationOptions:() =>({
                tabBarLabel:"分类",
                tabBarIcon:({focused,tintColor})=>(
                    <TabBarItem
                        tintColor={tintColor}
                        focused = {focused}
                        normalImage={require('./images/ic_tab_order.png')}
                        selectedImage={require('./images/ic_tab_order_press.png')}
                    />
                )
            }),
        },
        Order: {
            screen: Order,
            navigationOptions:() =>({
                tabBarLabel:" ",
                tabBarIcon:({focused,tintColor})=>(
                    <TabBarItem
                        tintColor={tintColor}
                        focused = {focused}
                        normalImage={require('./images/ic_tab_new3.png')}
                        selectedImage={require('./images/ic_tab_new3.png')}
                    />
                )
            }),
        },
        Cart: {

            screen: createStackNavigator({ Classification: Cart }),
            navigationOptions:() =>({
                tabBarLabel:"购物车",
                tabBarIcon:({focused,tintColor})=>(
                    <TabBarItem
                        tintColor={tintColor}
                        focused = {focused}
                        normalImage={require('./images/ic_tab_cart.png')}
                        selectedImage={require('./images/ic_tab_cart_press.png')}
                    />
                )
            }),
        },
        Centers: {
            screen: createStackNavigator({ Classification: Centers }),
            navigationOptions:() =>({
                tabBarLabel:"个人",
                tabBarIcon:({focused,tintColor})=>(
                    <TabBarItem
                        tintColor={tintColor}
                        focused = {focused}
                        normalImage={require('./images/ic_tab_center.png')}
                        selectedImage={require('./images/ic_tab_center_press.png')}
                    />
                )
            })
        },
    },
    {
        tabBarComponent: TabBarBottom,//tabbar要使用的组建
        tabBarPosition: 'bottom',//其实安卓的也是bottom
        lazy: true,//表示app启动的时候，是否需将四个页面都加载了，lazy是点击加载
        animationEnabled: true,
        swipeEnabled: true,//是否横向切换
        tabBarOptions: {
            activeTintColor: Color.primary,
            inactiveTintColor:Color.gray,
            style: { backgroundColor: '#ffffff' },//这边的颜色我设置了两种类型的图片
        },
    }
)
Tab.navigationOptions =  {
    header: null
}

//创建AppNavigator 的实例
// const AppNavigator = createStackNavigator({
//     Tab: { screen: Tab },
//     Web: { screen: WebScene },//类WebScene
//     GroupPurchase: { screen: GroupPurchaseScene },
//
// })//两个参数 一个是页面的配置参数 另个一个是导航栏另外的一个配置
const Pages = createStackNavigator({
    'Tab':{
        screen:Tab
    },
    'Goods':{
        screen:Goods
    },
    'MloginScreen':{
        screen:LoginScene,
    },
    'MregisterScene':{
        screen: RegisterScene,
    },
    'Home':{
        screen:Index,
    }
},{
    // initialRouteName:'OrderDetail',
    //这里做了一个页面跳转的动画
    transitionConfig: () => ({
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [layout.initWidth, 0, 0]
            });
            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
                outputRange: [0, 1, 1, 0.3, 0]
            });
            return { opacity, transform: [{ translateX }] };
        }
    }),
})

const styles = StyleSheet.create({

})
const Appcontainer = createAppContainer(Pages)
export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Appcontainer onNavigationStateChange={this.listenChange.bind(this)}/>
        ) 
    }

    //监听路由的跳转
    listenChange(state1, state2, action) {

    }
}

