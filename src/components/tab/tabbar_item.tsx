import * as React from 'react';
import PropTypes from 'prop-types';
import classNames, { ClassValue } from '../../utils/classnames';
import TabBarIcon from './tabbar_icon';
import TabBarLabel from './tabbar_label';

/**
 *  Tabbar item
 *
 */
interface TabBarItemProps {
  active?: boolean,
  icon?: any,
  label?: string,
  className?: ClassValue,
  onClick?: () => void,
  [key: string]: any
}
export default class TabBarItem extends React.Component<TabBarItemProps> {
    static propTypes = {
        /**
         * indicate currently active
         *
         */
        active: PropTypes.bool,
        /**
         * icon of item
         *
         */
        icon: PropTypes.any,
        /**
         * label of item
         *
         */
        label: PropTypes.string
    };

    static defaultProps = {
      active: false,
      icon: false,
      label: ''
    };

    render() {

        const {children, className, active, icon, label, ...others} = this.props;
        const cls = classNames({
            'weui-tabbar__item': true,
            'weui-bar__item_on': active
        }, className);

        if (icon || label){
            return (
                <div className={cls} {...others}>
                    {icon ? <TabBarIcon>{icon}</TabBarIcon> : false}
                    {label ? <TabBarLabel>{label}</TabBarLabel> : false}
                </div>
            );
        } else {
            return (
                <div className={cls} {...others}>
                    {children}
                </div>
            );
        }
    }
}
