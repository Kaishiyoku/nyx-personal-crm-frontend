import React from 'react';
import trans from '../../i18n/trans';
import merge from '../../core/merge';
import setApiToken from '../../authorization/setApiToken';
import post from '../../request/post';
import alert$ from '../../rx/alert$';
import addToastMessage from '../../core/addToastMessage';
import withRouting from '../core/withRouting';
import {Button, Form, Input} from 'antd';

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

            addToastMessage(trans('login.success'));

            this.props.navigate('/dashboard');
        }).catch((error) => {
            alert$.next(error.toString());
        }).finally(() => {
            this.setState((prevState, props) => {
                return merge(prevState, {isLoading: false});
            });
        });
    }

    handleOnFinish = (values) => {
        this.handleSubmit(values);
    };

    handleOnFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        const layout = {
            labelCol: {span: 8},
            wrapperCol: {span: 16},
        };

        const tailLayout = {
            wrapperCol: {offset: 8, span: 16},
        };

        return (
            <Form
                {...layout}
                name="login"
                onFinish={this.handleOnFinish}
                onFinishFailed={this.handleOnFinishFailed}
            >
                <Form.Item
                    label={trans('validation.attributes.email')}
                    name="email"
                    rules={[{message: 'Please input your email address.', required: true}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label={trans('validation.attributes.password')}
                    name="password"
                    rules={[{message: 'Please input your password.', required: true}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={this.state.isLoading}>
                        {trans('login.title')}
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default withRouting(LoginPage);
