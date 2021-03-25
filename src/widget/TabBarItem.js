/**
 * Created by DDY on 2019/4/21.
 */
import React,{PureComponent}from 'react'
import {Image}from 'react-native'

type Props = {//Props是外部可以传进来的属性

    normalImage:any,//一般这里是设置图片样式的
    selectedImage:any,//这个类型用到的是facrbook的flow类型的静态检查系统
    focused:boolean,//focused 是布尔类型，如果选中则是tintColor，如果没有选中则用selectedImage
    tintColor:any,
}

class TabBarItem extends PureComponent<Props,State>{
    render(){
        // let selectedImage = this.props.selectedImage ? this.props.selectedImage:this.props.normalImage
        let {normalImage,selectedImage,focused,tintColor}= this.props
        return(
            <Image//images是需要从外部传资源进来
                source={focused
                ? selectedImage:normalImage
                }
                style = {{width:25,height:25}}
            />
         )
    }
}
export default TabBarItem