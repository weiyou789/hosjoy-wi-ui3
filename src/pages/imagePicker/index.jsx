import { Component } from 'react'
import { View } from '@tarojs/components'
import {
    WiImagePicker,
} from 'hosjoy-wi-ui'
import './index.scss'


export default class Index extends Component {

    componentWillMount () { }

    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    btnClick(){
        console.log('点击事件')
    }


  render () {
      const fileList = [
          {
              url: 'https://timgsa.baidu.com/timg?image',
          },
          {
              url: 'https://timgsa.baidu.com/timg?image',
          },
          {
              url: 'https://timgsa.baidu.com/timg?image',
          }]
      return (
          <View className='index'>
              <WiImagePicker
                  files={fileList}
              />
          </View>
      )
  }
}
