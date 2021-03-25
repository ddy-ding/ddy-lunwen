/**
 * Created by DDY on 2019/4/18.
 */
/**
 * Created by DDY on 2019/4/18.
 */
import React, {PureComponent} from 'react';
import {
    AppRegistry,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    ListView,
    View,
    Image,
    Text
} from 'react-native'
import Header from './header';
import IndexSwiper from './indexswiper';
import Indexmenu from './indexmenu';
import MenuNav from './menuNav';
import IndexcontTop from './indexcontTop';
import Indexcontcent from './indexcontcent';
import Indexcontcentbtm from './indexcontcentbtm';
import Indexcontbottom from './indexcontbottom';
type Props = {

}
type State = {

}
class Home extends PureComponent<Props,State> {
    static navigationOptions = () =>({
        headerTitle:(
            < TouchableOpacity style={styles.cont}>
                <View>
                    <Header></Header>
                </View>
            </ TouchableOpacity>
        ),
        headerStyle:{height:50}
    })
    render() {
        return (
            <View style={styles.cont}>
                <ScrollView style={styles.scrollStyle} horizontal={false}>

                    <View style={styles.wrapper} >
                        <IndexSwiper></IndexSwiper>
                    </View>
                    <View style={styles.menustyle}>
                        <Indexmenu></Indexmenu>
                    </View>
                    <View style={{height:80}}>
                        <MenuNav></MenuNav>
                    </View>
                    <View>
                        <IndexcontTop></IndexcontTop>
                    </View>
                    <View>
                        <Indexcontcent></Indexcontcent>
                    </View>
                    <View>
                        <Indexcontcentbtm></Indexcontcentbtm>
                    </View>
                    <View style={{marginTop:30}}>
                        <Indexcontbottom></Indexcontbottom>
                    </View>
                </ScrollView>

            </View>
        )
    }
}
const  styles = StyleSheet.create({
    cont:{
        flex:1
    },
    scrollStyle:{
        // height:800
    },
    wrapper:{
        // flex:1
        height:200
    },
    menustyle:{
        height:160,

    }
})

export default  Home