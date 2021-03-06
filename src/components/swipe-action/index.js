// import Taro from '@tarojs/taro'
import React from 'react';
import { View, Text,MovableArea, MovableView } from '@tarojs/components';

import PropTypes from 'prop-types';
import classNames from 'classnames';

// import _isNil from 'lodash/isNil';
// import _isEmpty from 'lodash/isEmpty';
// import _inRange from 'lodash/inRange';
// import _isFunction from 'lodash/isFunction';

import WiComponent from '../../common/component';
import WiSwipeActionOptions from './options/index';
import { uuid } from '../../common/utils';

export default class WiSwipeAction extends WiComponent {
    constructor(props) {
        super(props);
        this.handleOpened = (event) => {
            const { onOpened } = this.props;
            if (typeof onOpened === 'function') {
                onOpened(event);
            }
        };
        this.handleClosed = (event) => {
            const { onClosed } = this.props;
            if (typeof onClosed === 'function') {
                onClosed(event);
            }
        };
        this.handleClick = (item, index, event) => {
            const { onClick, autoClose } = this.props;
            if (typeof onClick === 'function') {
                onClick(item, index, event);
            }
            if (autoClose) {
                this._reset(false); // TODO: Check behavior
                this.handleClosed(event);
            }
        };
        this.onTouchEnd = e => {
            if (this.moveX === -this.maxOffsetSize) {
                this._reset(true);
                this.handleOpened(e);
                return;
            }
            if (this.moveX === 0) {
                this._reset(false);
                this.handleClosed(e);
                return;
            }
            if (this.state._isOpened && this.moveX < 0) {
                this._reset(false);
                this.handleClosed(e);
                return;
            }
            if (Math.abs(this.moveX) < this.maxOffsetSize * this.moveRatio) {
                this._reset(false);
                this.handleClosed(e);
            }
            else {
                this._reset(true);
                this.handleOpened(e);
            }
        };
        this.onChange = e => {
            this.moveX = e.detail.x;
        };
        const { isOpened, maxDistance, areaWidth, moveRatio } = props;
        this.maxOffsetSize = maxDistance;
        this.state = {
            componentId: uuid(),
            // eslint-disable-next-line no-extra-boolean-cast
            offsetSize: !!isOpened ? -this.maxOffsetSize : 0,
            _isOpened: !!isOpened,
            needAnimation: false
        };
        this.moveX = this.state.offsetSize;
        this.eleWidth = areaWidth;
        this.moveRatio = moveRatio || 0.5;
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { isOpened } = nextProps;
        const { _isOpened } = this.state;
        if (isOpened !== _isOpened) {
            this.moveX = isOpened ? 0 : this.maxOffsetSize;
            this._reset(!!isOpened); // TODO: Check behavior
        }
    }
    _reset(isOpened) {
        if (isOpened) {
            if (process.env.TARO_ENV === 'jd') {
                this.setState({
                    _isOpened: true,
                    offsetSize: -this.maxOffsetSize + 0.01
                });
            }
            else {
                this.setState({
                    _isOpened: true,
                    offsetSize: -this.maxOffsetSize
                });
            }
        }
        else {
            this.setState({
                offsetSize: this.moveX
            }, () => {
                this.setState({
                    offsetSize: 0,
                    _isOpened: false
                });
            });
        }
    }
    render() {
        const { componentId, offsetSize } = this.state;
        const { options } = this.props;
        const rootClass = classNames('wi-swipe-action', this.props.className);
        return (React.createElement(View, { id: `swipeAction-${componentId}`, className: rootClass, style: {
                width: `${this.eleWidth}px`
            } },
            React.createElement(MovableArea, { className: 'wi-swipe-action__area', style: {
                    width: `${this.eleWidth + this.maxOffsetSize}px`,
                    transform: `translate(-${this.maxOffsetSize}px, 0)`
                } },
                React.createElement(MovableView, { className: 'wi-swipe-action__content', direction: 'horizontal', damping: 50, x: offsetSize, onTouchEnd: this.onTouchEnd, onChange: this.onChange, style: {
                        width: `${this.eleWidth}px`,
                        left: `${this.maxOffsetSize}px`
                    } },
                    this.props.children,
                    Array.isArray(options) && options.length > 0 ? (React.createElement(WiSwipeActionOptions, { options: options, componentId: componentId, customStyle: {
                        transform: `translate(${this.maxOffsetSize}px, 0)`,
                        opacity: 1
                    } }, options.map((item, key) => (React.createElement(View, { key: `${item.text}-${key}`, style: item.style, onClick: (e) => this.handleClick(item, key, e), className: classNames('wi-swipe-action__option', item.className) },
                        React.createElement(Text, { className: 'option__text' }, item.text)))))) : null))));
    }
}

WiSwipeAction.defaultProps = {
    options: [],
    isOpened: false,
    disabled: false,
    autoClose: false,
    maxDistance: 0,
    areaWidth: 0
};

WiSwipeAction.propTypes = {
    isOpened: PropTypes.bool,
    disabled: PropTypes.bool,
    autoClose: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        className: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
            PropTypes.array
        ])
    })),
    onClick: PropTypes.func,
    onOpened: PropTypes.func,
    onClosed: PropTypes.func
};