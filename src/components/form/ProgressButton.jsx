import React from 'react';
import {Button, CircularProgress} from 'react-md';
import PropTypes from 'prop-types';
import noop from '../../core/noop';

class ProgressButton extends React.Component {
    static propTypes = {
        disabled: PropTypes.bool,
        isLoading: PropTypes.bool,
        onClick: PropTypes.func,
    };

    static defaultProps = {
        disabled: false,
        isLoading: false,
        onClick: noop,
    };

    renderChildren() {
        const {isLoading, children} = this.props;

        return isLoading ? (
            <div className="flex">
                <CircularProgress id="progress-submit-button" className="loading-button-progress"/>
                {children}
            </div>
        ) : children;
    }

    render() {
        const {disabled, onClick, isLoading, ...otherProps} = this.props;

        return (
            <Button disabled={disabled || isLoading} onClick={onClick} {...otherProps}>
                {this.renderChildren()}
            </Button>
        );
    }
}

export default ProgressButton;
