import { Component } from 'react'
import { View } from '@tarojs/components'
import {
    WiTextarea,
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
        const { value } = e.detail
        this.setState({
            value
        })
        console.log(value)
    }


  render () {
      return (
          <View className='index'>
              <WiTextarea
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                  maxLength={200}
                  placeholder='你的问题是...'
              />
          </View>
      )
  }
}
