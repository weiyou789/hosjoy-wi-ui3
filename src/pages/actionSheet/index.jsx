import { Component } from 'react'
import { View } from '@tarojs/components'
import {
    WiActionSheet,
    WiList,
    WiListItem
} from 'hosjoy-wi-ui'
import './index.scss'


export default class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            show:false
        }
    }

    componentWillMount () { }

    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    onCloseTest(){
        console.log('关闭后执行')
    }

    onShow(){
        this.setState({
            show:true
        })
    }

  render () {
      const { show } =  this.state
      return (
          <View className='index'>
              <View onClick={()=>this.onShow()}>弹出</View>
              <WiActionSheet
                  isOpened={show}
                  title='标题'
                  cancelText="取消按钮"
                  onClose={this.onCloseTest.bind(this)}
                  // renderTit={<View className='www'>渲染</View>}
              >
                  <WiList>
                      <WiListItem title="菜单一" />
                      <WiListItem title="菜单二" />
                  </WiList>
              </WiActionSheet>
          </View>
      )
  }
}
