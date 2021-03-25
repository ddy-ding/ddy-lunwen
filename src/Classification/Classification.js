/**
 * Created by DDY on 2019/4/18.
 */
/**
 * Created by DDY on 2019/4/18.
 */
import React, {PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
    TouchableNativeFeedback,
    ScrollView,
    TouchableOpacity,
    FlatList,
    SectionList,
} from 'react-native'
import { createStackNavigator, createAppContainer} from 'react-navigation';
type Props = {

}
type State = {

}
const CateData = require('./shopdata.json')
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
class Classification extends PureComponent<Props,State> {

    constructor(props) {
        super(props)
        this._flatList = null
        this._sectionList = null
        this.state = {
          selectedRootCate: 0
        }
      }

    static navigationOptions = ({navigation}) => ({
        headerTitle: (
            <View style={styles.titlebox}>
                <Text style={styles.titlecolor}>分类</Text>
            </View>
            
        ),
        headerLeft: (
          <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                     <Image resizeMode='stretch' style={{width:25,height:25,marginRight:20}} source={require('../../img/icon/Return_icon.png')} />
          </TouchableNativeFeedback>  
        ),
        headerRight: (
            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={()=>alert("点击了")}>
                     <Image resizeMode='stretch' style={{width:25,height:25,marginRight:20}} source={require('../../img/index/search.png')} />
            </TouchableNativeFeedback>   
        ),
        
        headerStyle: {backgroundColor: '#fa6f57'}
    })

    _renderItem = item => {
        let index = item.index
        let title = item.item.title
        return (
          <TouchableOpacity
            key={index}
            style={[{alignItems: 'center', justifyContent: 'center', width: 100, height: 44}, this.state.selectedRootCate === index ? {backgroundColor: 'white', borderLeftWidth: 3, borderLeftColor: '#fa6f57'} : {backgroundColor: '#F5F5F5'}]}
            onPress={() => {
              setTimeout(() => {
                (CateData.data.length - index) * 45 > height - 65 ? this._flatList.scrollToOffset({animated: true, offset: index * 45}) : null
                this._sectionList.scrollToLocation({itemIndex: 0, sectionIndex: 0, animated: true, viewOffset: 20})
              }, 100)
              this.setState({selectedRootCate: index})
            }}
          >
            <Text style={{fontSize: 13, color: this.state.selectedRootCate === index ? '#fa6f57' : '#333'}}>{title}</Text>
          </TouchableOpacity>
        )
      }

      renderRootCate() {
        let data = []
        CateData.data.map((item, index) => {
          data.push({key: index, title: item.firstCateName})
        })
        return (
          <View style={{backgroundColor: '#F5F5F5'}}>
            <FlatList
              ref={flatList => this._flatList = flatList}
              data={data}
              ListHeaderComponent={() => (<View/>)}
              ListFooterComponent={() => (<View/>)}
              ItemSeparatorComponent={() => <View style={{height:1, backgroundColor:'#F5F5F5'}}/>}
              renderItem={this._renderItem}
              onEndReachedThreshold={20}
              showsVerticalScrollIndicator={false}
              >
            </FlatList>
          </View>
        )
      }

      sectionComp(item) {
        return (
          <View style={{justifyContent: 'center'}}>
            <Text style={{color: 'gray', marginBottom: 8}}>{item.section.key}</Text>
          </View>
        )
      }

      renderCell(item, sectionIndex, index) {
        return (
          <TouchableOpacity
            key={index}
            style={{height: 130, width:95, marginBottom: 8, marginRight: 10, alignItems: 'center'}}
            onPress={() => this.goDetail(item.headerimg,item.price,item.name,item.detailimg)}
          >
            <Image style={{width: 100, height: 115}} source={{uri:item.itemImg}}/>
            <Text style={{color: '#333', fontSize: 13}}>{item.title}</Text>
          </TouchableOpacity>
        )
      }

      renderItem(item) {
        let sectionIndex = item.section.data.sectionId
        let data = item.section.data
        return item.index === 0 ?
          <View key={item.index} style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {data.map((cell, index) => this.renderCell(cell, sectionIndex, index))}
          </View> : null
      }

      renderItemCate() {
        let tempArr = CateData.data[this.state.selectedRootCate].secondCateItems.map((item, index) => {
          let tempObj = {}
          tempObj.key = item.secondCateName
          tempObj.data = item.items
          tempObj.data.sectionId = index
          return tempObj
        })
        return (
          <View style={{flex: 1, backgroundColor: 'white', marginLeft: 10, marginTop: 8}}>
            <SectionList
              ref={(ref) => this._sectionList = ref}
              renderSectionHeader={this.sectionComp}
              renderItem={(data) => this.renderItem(data)}
              sections={tempArr}
              ItemSeparatorComponent={() => <View/>}
              ListHeaderComponent={() => <View/>}
              ListFooterComponent={() => <View/>}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => 'key' + index + item}
            />
          </View>
        )
      }

      renderCategory() {
        return (
          <View style={{flexDirection: 'row', flex: 1, backgroundColor: 'white'}}>
            {this.renderRootCate()}
            {this.renderItemCate()}
          </View>
        )
      }
      //跳转到商品详情
    goDetail(headerimg,price,name,detailimg) {
      this.props.navigation.navigate('Goods', {
          goodsheader: headerimg,
          goodsprice:price,
          goodsname:name,
          goodsdetail:detailimg
      });
      }
    render() {
        return (
            <View style={styles.container}>
                {this.renderCategory()}
            </View>
        )
    }
}
const  styles = StyleSheet.create({
    container:{
        flex:1
    },
    titlecolor:{
        color:'white',
        lineHeight:35,

    }
})

export default  Classification