import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Button } from '@tarojs/components'
import {
    WiList,
    WiListItem
} from 'hosjoy-wi-ui'

import './index.scss'

export default class Index extends Component {
    constructor(props){
        super(props)
        this.jumpLink.bind(this)
    }

    componentWillMount () {
    }

    componentDidMount () {
        /*Taro.showShareMenu({
         withShareTicket: true,
         menus: ['shareAppMessage', 'shareTimeline']
         })*/
    }


    /*onShareAppMessage(e){
     console.log(1,e)
     }

     onShareTimeline(e){
     return {
     title:'测试设置一下标题111'
     }
     }*/


    jumpLink(url){
        Taro.navigateTo({
            url:`/pages/${url}/index`
        })
    }

    getContact(e){
        console.log(e)
    }

    render () {
        return (
            <View className='index'>
                <WiList>
                    <WiListItem onClick={()=>this.jumpLink('button')} title="button" />
                    <WiListItem onClick={()=>this.jumpLink('countdown')} title="countdown" />
                    <WiListItem onClick={()=>this.jumpLink('drawer')} title="drawer" />
                    <WiListItem onClick={()=>this.jumpLink('floatLayout')} title="floatLayout" />
                    <WiListItem onClick={()=>this.jumpLink('indexes')} title="indexes" />
                    <WiListItem onClick={()=>this.jumpLink('inputNumber')} title="inputNumber" />
                    <WiListItem onClick={()=>this.jumpLink('progress')} title="progress" />
                    <WiListItem onClick={()=>this.jumpLink('tabs')} title="tabs" />
                    <WiListItem onClick={()=>this.jumpLink('actionSheet')} title="actionSheet" />
                    <WiListItem onClick={()=>this.jumpLink('imagePicker')} title="imagePicker" />
                    <WiListItem onClick={()=>this.jumpLink('modal')} title="modal" />
                    <WiListItem onClick={()=>this.jumpLink('picker')} title="picker" />
                    <WiListItem onClick={()=>this.jumpLink('searchBar')} title="searchBar" />
                    <WiListItem onClick={()=>this.jumpLink('input')} title="input" />
                    <WiListItem onClick={()=>this.jumpLink('textarea')} title="textarea" />
                    <WiListItem onClick={()=>this.jumpLink('swipeAction')} title="swipeAction" />
                </WiList>

                <Button className="btn" showMessageCard openType='contact' onContact='this.getContact.bind(this)'>联系客服</Button>
            </View>
        )
    }
}



/*import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!11</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle={true}>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle={true}>来</AtButton>
      </View>
    )
  }
}*/
