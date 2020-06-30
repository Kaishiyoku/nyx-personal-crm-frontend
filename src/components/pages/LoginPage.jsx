import React from 'react';
import 'assets/scss/App.scss';
import trans from '../../i18n/trans';
import merge from '../../core/merge';
import {navigate} from '@reach/router';
import Formsy from 'formsy-react';
import {Grid, GridCell} from '@react-md/utils';
import setApiToken from '../../authorization/setApiToken';
import post from '../../request/post';
import alert$ from '../../rx/alert$';
import TextInput from '../form/TextInput';
import ProgressSubmitButton from '../form/ProgressSubmitButton';
import {Form} from '@react-md/form';

class LoginPage extends React.PureComponent {
    state = {
        canSubmit: false,
        isLoading: false,
    };

    enableSubmitButton = () => {
        this.setState({canSubmit: true});
    };

    disableSubmitButton = () => {
        this.setState({canSubmit: false});
    };

    handleSubmit = (model) => {
        this.setState((prevState, props) => {
            return merge(prevState, {isLoading: true});
        }, () => this.sendLoginRequest(model));
    };

    sendLoginRequest(model) {
        post('/login', model).then((response) => {
            setApiToken(response.data.api_token);

            navigate('/about'); // TODO: redirect to real page
        }).catch((error) => {
            alert$.next(error.toString());
        }).finally(() => {
            this.setState((prevState, props) => {
                return merge(prevState, {isLoading: false});
            });
        });
    }

    render() {
        return (
            <Formsy
                onValidSubmit={this.handleSubmit}
                onValid={this.enableSubmitButton}
                onInvalid={this.disableSubmitButton}
                className="form-1-1-1-1"
            >
                <h1>{trans('login.title')}</h1>

                <TextInput
                    label={trans('validation.attributes.email')}
                    name="email"
                    validations="isEmail"
                    validationError="This is not a valid email"
                    required
                />

                <TextInput
                    label={trans('validation.attributes.password')}
                    type="password"
                    name="password"
                    required
                />

                <ProgressSubmitButton disabled={!this.state.canSubmit} isLoading={this.state.isLoading}>
                    {trans('login.title')}
                </ProgressSubmitButton>
            </Formsy>
        );
    }
}

export default LoginPage;
