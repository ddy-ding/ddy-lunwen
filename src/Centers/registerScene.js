import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Image,
    ToastAndroid,
    View,
    Text,
    Alert
} from 'react-native';
import px from '../utils/px2dp';
import screen from '../common/screen'
import DismissKeyboard from 'dismissKeyboard';
import theme from '../config/theme2';

export default class RegisterScene extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            header:null,
            // headerLeft: <View/>,
            // headerRight: <View/>
        }
    };
    constructor(props) {
        super(props);
        const {navigation} = props;
        const {params = {status: 0}} = navigation.state;
        this.state = {
            username:"",
            password:"",
            confirmPassword:'',
            status:"",
            token:""

        };


    }


    username = '';  //保存用户名
    password = '';  //保存密码
    confirmPassword = '';  //保存确认密码

    /**
     * 当用户名输入框值改变时，保存改变的值
     * @param  {[String]} newUsername [输入的用户名]
     */
    onUsernameChanged = (newUsername) => {
        console.log(newUsername);//运行后可以在输入框随意输入内容并且查看log验证！
        this.state.username = newUsername;
    };

    /**
     * 当密码输入框值改变时，保存改变的值
     * @param  {[String]} newUsername [输入的密码]
     */
    onPasswordChanged = (newPassword) => {
        console.log(newPassword);//运行后可以在输入框随意输入内容并且查看log验证！
        this.state.password = newPassword;
    };

    /**
     * 当确认密码输入框值改变时，保存改变的值
     * @param  {[String]} newUsername [输入的确认密码]
     */
    onConfirmPasswordChanged = (newConfirmPassword) => {
        console.log(newConfirmPassword);//运行后可以在输入框随意输入内容并且查看log验证！
        this.state.confirmPassword = newConfirmPassword;
    }

    /**
     * 点击空白处使输入框失去焦点
     */
    blurTextInput = () => {
        this.refs.username.blur();
        this.refs.password.blur();
        this.refs.confirmPassword.blur();
    }
   Login = () => {
        const { navigate } = this.props.navigation;  //获取navigation的navigate方法
        navigate('MloginScreen');  //跳转到注册过的Register界面
    }

    /**
     * 注册按钮，根据输入的内容判断注册是否成功
     */
    register = () => {
        let dataForm ={
            "username": this.state.username,
            "password": this.state.password,
            /*"confirmPassword":this.state.confirmPassword*/
        };

        var url = 'http://247qj51426.wicp.vip/user/insert';

        var opts = {
            method:"POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataForm)

        };

        if (dataForm.password == this.state.confirmPassword){
            fetch(url, opts)
                .then((response) =>{
                    console.log(response);
                    return response.json();
                })
                .then((json) => {
                    Alert.alert("注册成功","返回登陆",[{text: '确定', onPress: () => { this.props.navigation.navigate('MloginScreen')}}])  //给弹出的提示框添加事件
                })
                .catch((e) => {
                    console.log(e);
                })
        }else{
            ToastAndroid.show('输入密码不匹配',ToastAndroid.SHORT);
        }
    }
    //
    //     if (this.username != '' && this.password != '') {
    //         if (this.username != 'Admin') {
    //             if (this.password === this.confirmPassword) {
    //
    //
    //                 Alert.alert("注册成功","返回登陆",[{text: '确定', onPress: () => { this.props.navigation.navigate('MloginScreen')}}])  //给弹出的提示框添加事件
    //             } else {
    //                 Alert.alert("注册失败","密码与确认密码不同");
    //             }
    //         } else {
    //             Alert.alert("注册失败","此用户名已经被注册");
    //         }
    //     } else {
    //         Alert.alert("注册失败","用户名或密码不能为空");
    //     }
    // };

    /**
     * 渲染图形界面
     * @return {[type]} [返回所渲染的界面]
     */
    render() {
        return (
            <TouchableOpacity
                activeOpacity={1.0}  //设置背景被点击时，透明度不变
                onPress={this.blurTextInput}  //添加点击事件
                style={styles.container}>
                <View style={styles.container}>
                    <ScrollView keyboardShouldPersistTaps={'handled'}>
                        <KeyboardAvoidingView behavior={'position'}>
                            <Image
                                source={require('../images/register/header.png')}
                                style={{ width:screen.width, height: px(350),}} />
                            <View style={styles.left}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Image
                                    source={require('../images/register/return.png')}
                                    style={{ width:px(30), height: px(54),marginLeft:px(50)}}/>
                                </TouchableOpacity>
                                <Text style={styles.mTxt}>注册账户</Text>
                            </View>
                    <View
                    style={[styles.inputBox,{ marginBottom: px(80) }]}>
                    <Image source={require('../images/register/user.png')}
                           style={{width:px(55),height:px(35)}}></Image>
                    <TextInput
                        ref="username"  //添加描述
                        onChangeText={this.onUsernameChanged}  //添加值改变事件
                        style={styles.input}
                        autoCapitalize='none'  //设置首字母不自动大写
                        underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                        placeholderTextColor={'#ccc'}  //设置占位符颜色
                        placeholder={'用户名'}  //设置占位符
                    />
                </View>
                <View
                    style={[styles.inputBox,{ marginBottom: px(80) }]}>
                    <Image source={require('../images/register/mima.png')}
                           style={{width:px(50),height:px(40)}}></Image>
                    <TextInput
                        ref="password"  //添加描述
                        onChangeText={this.onPasswordChanged}  //添加值改变事件
                        style={styles.input}
                        secureTextEntry={true}  //设置为密码输入框
                        autoCapitalize='none'  //设置首字母不自动大写
                        underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                        placeholderTextColor={'#ccc'}  //设置占位符颜色
                        placeholder={'密码'}  //设置占位符
                    />
                </View>
                <View
                    style={[styles.inputBox,{ marginBottom: px(80) }]}>
                    <Image source={require('../images/register/mima.png')}
                           style={{width:px(50),height:px(40)}}></Image>
                    <TextInput
                        ref="confirmPassword"  //添加描述
                        onChangeText={this.onConfirmPasswordChanged}  //添加值改变事件
                        style={styles.input}
                        secureTextEntry={true}  //设置为密码输入框
                        autoCapitalize='none'  //设置首字母不自动大写
                        underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                        placeholderTextColor={'#ccc'}  //设置占位符颜色
                        placeholder={'确认密码'}  //设置占位符
                    />
                </View>
                <TouchableOpacity
                    disabled={this.state.waiting}
                    onPress={this.register}  //添加点击事件
                    style={styles.button}>
                    <Text
                        style={styles.btText}>注册</Text>
                </TouchableOpacity>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#d0648f',
        marginTop: 20,
        alignSelf:"center",
    },
    btText: {
        color: '#fff',
        fontSize: 20,
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
        borderBottomColor: '#d9b878',
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
    left:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:80
    },
    mTxt:{
         alignSelf:"center",
         alignItems: 'center',
         marginRight:px(300),


    },



});