import React from 'react';
import {withFormsy} from 'formsy-react';
import {SelectField} from 'react-md';

class SelectInput extends React.Component {
    static defaultProps = {

    };

    constructor(props) {
        super(props);

        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(value) {
        this.props.setValue(value);
    }

    render() {
        const {type, name, label, getValue, items, ...otherProps} = this.props;
        const errorMessage = this.props.getErrorMessage();

        return (
            <SelectField
                id={name}
                label={label}
                placeholder={label}
                menuItems={items}
                position={SelectField.Positions.BELOW}
                onChange={this.changeValue}
                value={getValue() || ''}
                error={errorMessage !== null}
                errorText={errorMessage}
                block={true}
                {...otherProps}
            />
        );
    }
}

export default withFormsy(SelectInput);
