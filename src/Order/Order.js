/**
 * Created by DDY on 2019/4/18.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native'
type Props = {

}
type State = {

}
class Order extends Component<Props,State> {
    render() {
        return (
            <View style="{{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}">
                <Text>春上新</Text>
            </View>
        )
    }
}
const  styles = StyleSheet.create({

})

export default  Order