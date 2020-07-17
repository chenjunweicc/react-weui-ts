import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Swiper from '../swiper';
class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: this.props.defaultIndex
        };
    }
    handleClick(func) {
        return (e) => {
            if (func)
                func(e, this.state.currentIndex);
        };
    }
    renderImages(imgs) {
        return (React.createElement("div", { className: "weui-gallery__img" },
            React.createElement(Swiper, { indicators: false, defaultIndex: this.props.defaultIndex, onChange: (next) => this.setState({ currentIndex: next }) }, imgs.map((img, i) => {
                const imgStyle = {
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center'
                };
                return (React.createElement("span", { key: i, style: imgStyle }));
            }))));
    }
    renderOprs() {
        if (Array.isArray(this.props.children)) {
            return this.props.children.map((child, i) => {
                return React.cloneElement((child), {
                    key: i,
                    onClick: this.handleClick(child.props.onClick)
                });
            });
        }
        else {
            if (this.props.children) {
                return React.cloneElement(this.props.children, {
                    onClick: this.handleClick(this.props.children.props.onClick)
                });
            }
            else {
                return false;
            }
        }
    }
    render() {
        const { children, className, show, src, defaultIndex, ...others } = this.props;
        const cls = classNames({
            'weui-gallery': true,
            [className]: className
        });
        if (!show)
            return false;
        return (React.createElement("div", Object.assign({ className: cls, style: { display: show ? 'block' : 'none' } }, others),
            Array.isArray(src) ? this.renderImages(src)
                : React.createElement("span", { className: "weui-gallery__img", style: { backgroundImage: `url(${src})` } }),
            React.createElement("div", { className: "weui-gallery__opr" }, this.renderOprs())));
    }
}
Gallery.propTypes = {
    /**
     * indicate whather the component is display
     *
     */
    show: PropTypes.bool,
    /**
     * image source, string for single element, array for multiple element
     *
     */
    src: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    /**
     * indicate whather the component is display
     *
     */
    defaultIndex: PropTypes.number,
};
Gallery.defaultProps = {
    show: undefined,
    src: '',
    defaultIndex: 0
};
export default Gallery;
