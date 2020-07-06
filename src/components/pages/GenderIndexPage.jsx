import React from 'react';
import SingleFullWidthGrid from '../core/SingleFullWidthGrid';
import trans from '../../i18n/trans';
import withRouting from '../core/withRouting';
import get from '../../request/get';
import merge from '../../core/merge';

class GenderIndexPage extends React.PureComponent {
    state = {
        genders: [],
    };

    componentDidMount() {
        get('/genders').then((response) => {
            this.setState((prevState, props) => {
                return merge(prevState, {genders: response.data});
            })
        });
    }

    render() {
        return (
            <>
                <h1>{trans('gender.index.title')}</h1>

                {this.state.genders.map((gender) => <div key={gender.name}>{gender.name}</div>)}
            </>
        );
    }
}

export default withRouting(GenderIndexPage);
