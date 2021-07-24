import classNames from 'classnames';
import React from 'react';
import { View } from '@tarojs/components';
export default class WiSwipeActionOptions extends React.Component {
    render() {
        const rootClass = classNames('wi-swipe-action__options', this.props.className);
        return (React.createElement(View, { id: `swipeActionOptions-${this.props.componentId}`, className: rootClass, style: this.props.customStyle }, this.props.children));
    }
}