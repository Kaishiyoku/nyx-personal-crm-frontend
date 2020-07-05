import React from 'react';
import route$ from '../../rx/route$';

const withRouting = (WrappedComponent) => {
    return class extends React.PureComponent {
        componentDidMount() {
            route$.subscribe((to) => {
                this.props.navigate(to);
            });
        }

        render() {
            return <WrappedComponent {...this.props}/>;
        }
    };
};

export default withRouting;
