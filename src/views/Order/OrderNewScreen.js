'use strict';

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Picker,
    DatePickerIOS
} from 'react-native';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

import OrderNewVideoCard from '../../components/Cards/OrderNewVideoCard';
import DefaultCard from '../../components/Cards/DefaultCard';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import MainStyles from '../../assets/styles/MainStyles';
import StyleRules from '../../assets/styles/StyleRules';

// TODO: if state false/true hide show the picker?
// TODO: add button to toggle state?

class OrderNewScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            club: null,
            showPicker: false,
            showDateTimePicker: false,
            date: null
        };
    }

    /**
    * @param obj formProps
    * @return
    */
    handelOrder(formProps) {
        if (
            this.state.club !== null ||
            !formProps.selectTime ||
            !formProps.selectDate
        ) {
            return;
        }
        alert('push button');
    }

    componentWillMount() {
        this.props.getActiveClubs().then(response => {
            console.log(this.props.activeClubs);
        });
        this.setState({ date: new Date(Date.now()) });
    }

    onDateChange = date => {
        return this.setState({ date: date });
    };

    renderTimePicker() {
        return (
            <DatePickerIOS
                date={this.state.date}
                mode="datetime"
                timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                onDateChange={this.onDateChange}
            />
        );
    }

    /**
    * rendr the picker
    */
    renderPicker() {
        const {
            handleSubmit,
            fields: { selectPlace, selectDate, selectTime }
        } = this.props;
        return (
            <View>
                <Text style={MainStyles.INPUT_LABEL}>Välj klubb/plats</Text>
                <TextInput
                    {...selectPlace}
                    style={[MainStyles.FORM_INPUT]}
                    name={'selectPlace'}
                    value={this.state.club}
                />
                <Picker
                    selectedValue={this.state.club}
                    onValueChange={club => this.setState({ club })}
                >
                    {this.props.activeClubs.map(club => (
                        <Picker.Item
                            key={club._id}
                            label={club.name}
                            value={club.name}
                        />
                    ))}
                </Picker>
                {selectPlace.touched &&
                    selectPlace.error && (
                        <Text style={MainStyles.ERROR_TEXT}>
                            {selectPlace.error}
                        </Text>
                    )}
            </View>
        );
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
                            <TouchableOpacity
                                style={[
                                    styles.OPEN_BUTTON,
                                    {
                                        backgroundColor: this.state.showPicker
                                            ? StyleRules.GREEN_COLOR
                                            : StyleRules.BLUE_COLOR
                                    }
                                ]}
                                onPress={() => {
                                    this.setState(previousState => {
                                        return {
                                            showPicker: !previousState.showPicker
                                        };
                                    });
                                }}
                            >
                                <Text style={MainStyles.MAIN_BUTTON_TEXT}>
                                    {this.state.showPicker
                                        ? this.state.club === null
                                          ? 'Välj Klubb'
                                          : `Välj ${this.state.club}`
                                        : this.state.club === null
                                          ? 'Välj klubb/plats'
                                          : `Vald klubb: ${this.state.club}`}
                                </Text>
                            </TouchableOpacity>

                            {this.state.showPicker ? this.renderPicker() : null}
                        </View>

                        <View style={MainStyles.FORM_GROUP}>
                            <TouchableOpacity
                                style={[
                                    styles.OPEN_BUTTON,
                                    {
                                        backgroundColor: this.state
                                            .showDateTimePicker
                                            ? StyleRules.GREEN_COLOR
                                            : StyleRules.BLUE_COLOR
                                    }
                                ]}
                                onPress={() => {
                                    this.setState(previousState => {
                                        return {
                                            showDateTimePicker: !previousState.showDateTimePicker
                                        };
                                    });
                                }}
                            >
                                <Text style={MainStyles.MAIN_BUTTON_TEXT}>
                                    {this.state.showDateTimePicker
                                        ? this.state.date === null
                                          ? 'Välj Tid och datum'
                                          : `Välj ${this.state.date}`
                                        : this.state.date === null
                                          ? 'Välj tid och datum'
                                          : `Vald tid: ${this.state.date}`}
                                </Text>
                            </TouchableOpacity>

                            {this.state.showDateTimePicker
                                ? this.renderTimePicker()
                                : null}
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
    },
    OPEN_BUTTON: {
        borderRadius: 50,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: StyleRules.MARGIN
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
        authenticated: state.auth.authenticated,
        activeClubs: state.auth.activeClubs
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
