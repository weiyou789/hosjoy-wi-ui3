import { Component } from 'react'
import { View } from '@tarojs/components'
import {
    WiInput,
} from 'hosjoy-wi-ui'
import './index.scss'


export default class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
    }

    componentWillMount () { }

    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    handleChange(e){
        console.log(e)
    }


  render () {
      return (
          <View className='index'>
              <WiInput
                  name='value'
                  title='帐号'
                  type='text'
                  placeholder='请输入帐号'
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)}
              />
          </View>
      )
  }
}
