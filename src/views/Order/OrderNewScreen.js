'use strict';

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

import OrderNewVideoCard from '../../components/Cards/OrderNewVideoCard';
import DefaultCard from '../../components/Cards/DefaultCard';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import MainStyles from '../../assets/styles/MainStyles';
import StyleRules from '../../assets/styles/StyleRules';

class OrderNewScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
    * @param obj formProps
    * @return
    */
    handelOrder(formProps) {
        if (
            !formProps.selectPlace ||
            !formProps.selectTime ||
            !formProps.selectDate
        ) {
            return;
        }
        alert('push button');
        // call action creater
        // this.props.signupUser(formProps).then(response => {
        //     if (response.data.token) {
        //         this.props.fetchAuthUserContent('user');
        //         // Truncate the fields
        //         this.props.fields.selectPlace.value = null;
        //         this.props.fields.selectDate.value = null;
        //         this.props.fields.selectTime.value = null;
        //     }
        // });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <View style={[MainStyles.FORM_GROUP, MainStyles.ERROR_BOX]}>
                    <Text style={MainStyles.ERROR_TEXT}>
                        {this.props.errorMessage}
                    </Text>
                </View>
            );
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const {
            handleSubmit,
            fields: { selectPlace, selectDate, selectTime }
        } = this.props;
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    <DefaultCard>
                        <Text style={MainStyles.MAIN_CARD_TITLE}>
                            Lägg ny beställning
                        </Text>
                        <Text>
                            Take a look, his speed, his ferocity, his training.
                            I see the power of belief. I see the League of
                            Shadows resurgent.
                        </Text>
                    </DefaultCard>

                    <DefaultCard>
                        <View style={MainStyles.FORM_GROUP}>
                            <Text style={MainStyles.INPUT_LABEL}>
                                Välj plats:
                            </Text>
                            <TextInput
                                {...selectPlace}
                                style={[MainStyles.FORM_INPUT]}
                                name={'selectPlace'}
                                value={null}
                            />
                            {selectPlace.touched &&
                                selectPlace.error && (
                                    <Text style={MainStyles.ERROR_TEXT}>
                                        {selectPlace.error}
                                    </Text>
                                )}
                        </View>

                        <View style={MainStyles.FORM_GROUP}>
                            <Text style={MainStyles.INPUT_LABEL}>
                                Välj datum:
                            </Text>
                            <TextInput
                                {...selectDate}
                                style={[MainStyles.FORM_INPUT]}
                                name={'selectDate'}
                                value={null}
                            />
                            {selectDate.touched &&
                                selectDate.error && (
                                    <Text style={MainStyles.ERROR_TEXT}>
                                        {selectDate.error}
                                    </Text>
                                )}
                        </View>

                        <View style={MainStyles.FORM_GROUP}>
                            <Text style={MainStyles.INPUT_LABEL}>
                                Välj tid:
                            </Text>
                            <TextInput
                                {...selectTime}
                                style={[MainStyles.FORM_INPUT]}
                                name={'selectTime'}
                                value={null}
                            />
                            {selectTime.touched &&
                                selectTime.error && (
                                    <Text style={MainStyles.ERROR_TEXT}>
                                        {selectTime.error}
                                    </Text>
                                )}
                        </View>

                        {this.renderAlert()}
                    </DefaultCard>

                    <OrderNewVideoCard title="Fyll i formuläret för att lägga till en beställning">
                        <TouchableOpacity
                            style={[
                                styles.BUTTON_WITH_ERRORS,
                                {
                                    backgroundColor:
                                        (selectPlace.touched &&
                                            selectPlace.error) ||
                                        (selectTime.touched &&
                                            selectTime.error) ||
                                        (selectDate.touched && selectDate.error)
                                            ? StyleRules.RED_COLOR
                                            : StyleRules.BLUE_COLOR
                                }
                            ]}
                            onPress={handleSubmit(this.handelOrder.bind(this))}
                        >
                            <Text style={MainStyles.MAIN_BUTTON_TEXT}>
                                Beställ
                            </Text>
                        </TouchableOpacity>
                    </OrderNewVideoCard>
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    BUTTON_WITH_ERRORS: {
        borderRadius: 50,
        marginLeft: StyleRules.MARGIN,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120
    }
});

/**
* @param obj fromProps
* @return bool validSignUp
*/
function validate(formProps) {
    const errors = {};

    if (!formProps.selectPlace) {
        errors.selectPlace = 'Vänligen välj en plats.';
    }

    if (!formProps.selectDate) {
        errors.selectDate = 'Vänligen välj ett datum.';
    }

    if (!formProps.selectTime) {
        errors.selectTime = 'Vänligen välj en tid.';
    }

    return errors;
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        authenticated: state.auth.authenticated
    };
}

export default reduxForm(
    {
        form: 'orderNew',
        fields: ['selectPlace', 'selectDate', 'selectTime'],
        validate
    },
    mapStateToProps,
    actions
)(OrderNewScreen);
