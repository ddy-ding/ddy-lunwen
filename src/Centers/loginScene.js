import React, { Component } from 'react';
import {
    TouchableOpacity,
    ImageBackground,
    Platform,
    StyleSheet,
    TextInput,
    ScrollView,
    ToastAndroid,
    KeyboardAvoidingView,
    View,
    Image,
    Text,
    Alert,
    Button
} from 'react-native';
import px from '../utils/px2dp';
import screen from '../common/screen'
import DismissKeyboard from 'dismissKeyboard';
import theme from '../config/theme2';

export default class login extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            header:null,
            headerLeft: <View/>,
            headerRight: <View/>
        }
    };
    constructor(props) {
        super(props);
        const {navigation} = props;
        const {params = {status: 0}} = navigation.state;
        this.state = {
            username :"",  //保存用户名
            password :"",
            status: "",

        };
    }

    username = '';  //保存用户名
    password = '';  //保存密码

    /**
     * 当用户名输入框值改变时，保存改变的值
     * @param  {[type]} newUsername [输入的用户名]
     */
    onUsernameChanged = (newUsername) => {
        console.log(newUsername);//运行后可以在输入框随意输入内容并且查看log验证！
        this.state.username = newUsername;
    };

    /**
     * 当密码输入框值改变时，保存改变的值
     * @param  {[type]} newUsername [输入的密码]
     */
    onPasswordChanged = (newPassword) => {
        console.log(newPassword);//运行后可以在输入框随意输入内容并且查看log验证！
        this.state.password = newPassword;
    };

    /**
     * 点击空白处使输入框失去焦点
     */
    blurTextInput = () => {
        this.refs.username.blur();
        this.refs.password.blur();
    }

    /**
     * 登陆按钮，点击时验证输入的用户名和密码是否正确，正确时进入主页面，否则弹出提示
     */
    login =()=>{
        let dataForm ={
            "username": this.state.username,
            "password": this.state.password
        };

        var url = 'http://247qj51426.wicp.vip/user/login?username='+dataForm.username+'&&password='+dataForm.password+'';
        var opts = {
            method:"GET",
        };
        fetch(url, opts)
            .then((response) =>{
                console.log(response);

                return response.json();
                this.refs.username.blur();
                this.refs.password.blur();
                const { navigate } = this.props.navigation;  //获取navigation的navigate方法
                navigate('Home');  //跳转到注册过的Home界面',ToastAndroid.SHORT);
            })
            .then((json) => {

                this.refs.username.blur();
                this.refs.password.blur();
                const { navigate } = this.props.navigation;  //获取navigation的navigate方法
                navigate('Home');  //跳转到注册过的Home界面',ToastAndroid.SHORT);
            })
            .catch((e) => {
                console.log(e);
            })
    }
    // login = () => {
    //     // if (this.username == 'Admin' && this.password == '123') {
    //     //     this.refs.username.blur();
    //     // 	this.refs.password.blur();
    //     //     const { navigate } = this.props.navigation;  //获取navigation的navigate方法
    //     //     navigate('Home');  //跳转到注册过的Home界面
    //     // } else {
    //     //     Alert.alert("登陆失败","用户名或密码不正确");  //弹出提示框
    //     //
    //     // }
    // };

    /**
     * 注册按钮，点击进入注册界面
     */
    register = () => {
        const { navigate } = this.props.navigation;  //获取navigation的navigate方法
        navigate('MregisterScene');  //跳转到注册过的Register界面
    }
    Home = () => {
        const { navigate } = this.props.navigation;  //获取navigation的navigate方法
        navigate('Home');  //跳转到注册过的Home界面
    }

    /**
     * 渲染图形界面
     * @return {[type]} [返回所渲染的界面]
     */
    render() {
        return (
            <TouchableOpacity  //用可点击的组件作为背景
            	activeOpacity={1.0}  //设置背景被点击时的透明度改变值
            	onPress={this.blurTextInput}  //添加点击事件
                style={styles.container}>
                <View style={styles.container}>
                    <ScrollView keyboardShouldPersistTaps={'handled'}>
                        <KeyboardAvoidingView behavior={'position'}>
                <ImageBackground
                    source={Platform.OS === 'ios' ? require('../images/login/bg.png') : require('../images/login/bg.png')}
                    style={styles.bgImg}
                >
                    <Image
                        source={require('../images/login/icon.png')}
                        style={{ width: px(110), height: px(300), marginTop: px(70), marginLeft: px(300), marginBottom: px(100) }} />
                <View
                    style={[styles.inputBox,{ marginBottom: px(12) }]}>
                    <Image source={require('../images/login/xinjian.png')}
                           style={{width:px(50),height:px(35)}}></Image>
                    <TextInput
                    	ref="username"  //设置描述
                        onChangeText={this.onUsernameChanged}  //添加值改变事件
                        style={styles.input}
                        autoCapitalize='none'  //设置首字母不自动大写
                        underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                        placeholderTextColor={'#fff'}  //设置占位符颜色
                        placeholder={'用户名'}  //设置占位符

                    />
                </View>
                <View
                    style={styles.inputBox}>
                    <Image source={require('../images/login/mima.png')}
                        style={{width:px(50),height:px(45)}}></Image>
                    <TextInput
                    	ref="password"  //设置描述
                        onChangeText={this.onPasswordChanged}  //添加值改变事件
                        style={styles.input}
                        autoCapitalize='none'  //设置首字母不自动大写
                        underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                        secureTextEntry={true}  //设置为密码输入框
                        placeholderTextColor={'#fff'}  //设置占位符颜色
                        placeholder={'密码'}  //设置占位符
                    />
                </View>
                    <View style={styles.thirdbox}>
                        <Text style={{color:'#fff'}}>第三方账户登录</Text>
                        <View style={styles.thirditems}>
                            <TouchableOpacity style={styles.thirditem}>
                                <Image
                                    source={require('../images/login/QQ.png')}
                                    style={{width:px(95),height:px(95),borderRadius:30}}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.thirditem}>
                                <Image
                                    source={require('../images/login/weChat.png')}
                                    style={{width:px(95),height:px(95),borderRadius:30}}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.thirditem}>
                                <Image
                                    source={require('../images/login/weibo.png')}
                                    style={{width:px(95),height:px(95),borderRadius:30}}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>

                <TouchableOpacity
                    onPress={this.login} //添加点击事件
                    activeOpacity={0.8}>
                    <View style={[styles.btn, { backgroundColor: '#d0648f' }]}>
                        <Text allowFontScaling={false} style={{ fontSize: px(30), color: '#fff' }}>
                            登录</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.register}  //添加点击事件
                    activeOpacity={0.8}>
                    <View style={styles.resgter}>
                        <Text style={{color:'#fff'}}>还没有账户？马上注册</Text>
                    </View>
                </TouchableOpacity>
                </ImageBackground>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </TouchableOpacity>
        );
    }
}

/**
 * 设置界面的布局样式
 * @type {[StyleSheet]}
 */
const styles = StyleSheet.create({
    ...theme.base,
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        fontSize: px(26),
        width: theme.window.width - 120,
        paddingRight: 10,
        paddingBottom: 8,
        paddingTop: 8,
        paddingLeft: 6,
    },
    inputBox: {

        width: px(580),
        height: px(80),
        borderBottomWidth: px(1),
        borderBottomColor: '#e5e5e5',
        paddingLeft: px(12),
        paddingRight: px(12),
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf:"center",
    },
     btn: {
        width: px(580),
        height: px(80),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: px(40),
        alignSelf:"center",
        marginTop:px(40)
    },
    bgImg:{
        width:screen.width,
        height:screen.height,
    },
    tool:{
        flexDirection: 'row',
        flexDirection:'row-reverse'
    },
    thirdbox:{

        marginTop:px(80),
        flexDirection:'column',
        alignItems:'center'
    },
    thirditems:{
        flexDirection:'row',
        width:theme.window.width * 0.6,
        justifyContent:'space-between',
        marginTop:10
    },
    resgter:{
        color:'#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:30
    }
});