'use strict';

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    DatePickerIOS,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import DefaultCard from '../../components/Cards/DefaultCard';
import MainStyles from '../../assets/styles/MainStyles';
import StyleRules from '../../assets/styles/StyleRules';
import OrderNewVideoCard from '../../components/Cards/OrderNewVideoCard';

// TODO: Add checks alert dialog to confirm order is right
// TODO: fier off post
class SelectClubAndCourt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clubSelected: false,
            courtSelected: false,
            timeSelected: false,
            dateTimePickerVisible: false,
            order: false
        };
    }

    /**
    * @param string string
    * @return string text
    */
    titleToUppercase(string) {
        return string.replace(/\w\S*/g, text => {
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        });
    }

    selectClub = async clubSelected => {
        if (clubSelected === this.state.clubSelected) {
            const stateClub = await this.setState({ clubSelected: false });
            const stateCourt = await this.setState({ courtSelected: false });
        } else {
            const stateClub = await this.setState({ clubSelected });
            const stateCourt = await this.setState({ courtSelected: false });
        }
        return;
    };

    selectCourt = async courtSelected => {
        if (courtSelected === this.state.courtSelected) {
            const stateCourt = await this.setState({ courtSelected: false });
        } else {
            const stateCourt = await this.setState({ courtSelected });
        }
        return;
    };

    selectDateTime = async timeSelected => {
        const stateDateTime = await this.setState({ timeSelected });
    };

    formatTime(dateTime) {
        // TODO: Return date like: YYYY:MM:dd HH:mm:ss
        return dateTime;
    }

    submitNewOrder = async () => {
        const formatedTime = this.formatTime(this.state.timeSelected);
        if (this.props.authenticated) {
            const setOrder = await this.setState({
                order: {
                    email: this.props.data.email,
                    sport: this.state.clubSelected.sport,
                    club: this.state.clubSelected.name,
                    court: this.state.courtSelected.courtNumber,
                    startTime: formatedTime
                }
            });

            Alert.alert(
                'Här är din beställning, vill du lägga din order?',
                `Sport: ${this.state.order.sport}, klubb: ${this.state.order
                    .club}, Bana: ${this.state.order.court}, Start tid: ${this
                    .state.order.startTime}.`,
                [
                    {
                        text: 'Avsluta',
                        style: 'cancel'
                    },
                    {
                        text: 'Beställ',
                        onPress: () =>
                            this.props.orderNewVideo(this.state.order)
                    }
                ],
                { cancelable: false }
            );
        }
    };

    renderClubPicker() {
        return (
            <DefaultCard>
                <Text style={MainStyles.MAIN_CARD_TITLE}>Välj klubb</Text>
                {this.props.activeClubs.map(club => {
                    if (club.active) {
                        return (
                            <TouchableOpacity
                                onPress={() => this.selectClub(club)}
                                key={club._id}
                                style={[
                                    styles.CONTAINER,
                                    {
                                        backgroundColor:
                                            club.name ===
                                            this.state.clubSelected.name
                                                ? StyleRules.GREEN_COLOR
                                                : StyleRules.BLUE_COLOR
                                    }
                                ]}
                            >
                                <Text style={MainStyles.MAIN_BUTTON_TEXT}>
                                    {this.titleToUppercase(club.name)}
                                </Text>
                            </TouchableOpacity>
                        );
                    }
                })}
            </DefaultCard>
        );
    }

    renderCourtPicker() {
        return (
            <DefaultCard>
                <Text style={MainStyles.MAIN_CARD_TITLE}>Välj bana</Text>
                {this.props.activeClubs.map(club => {
                    if (club.name === this.state.clubSelected.name) {
                        return club.court.map(court => {
                            if (court.active) {
                                return (
                                    <TouchableOpacity
                                        onPress={() => this.selectCourt(court)}
                                        key={court._id}
                                        style={[
                                            styles.CONTAINER,
                                            {
                                                backgroundColor:
                                                    court.courtNumber ===
                                                    this.state.courtSelected
                                                        .courtNumber
                                                        ? StyleRules.GREEN_COLOR
                                                        : StyleRules.BLUE_COLOR
                                            }
                                        ]}
                                    >
                                        <Text
                                            style={MainStyles.MAIN_BUTTON_TEXT}
                                        >
                                            {`Bana: ${court.courtNumber}`}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            }
                        });
                    }
                })}
            </DefaultCard>
        );
    }

    renderDateTimePicker() {
        return (
            <DefaultCard>
                <TouchableOpacity
                    onPress={() =>
                        this.setState({
                            dateTimePickerVisible: !this.state
                                .dateTimePickerVisible
                        })}
                    style={[
                        styles.CONTAINER,
                        {
                            backgroundColor: StyleRules.BLUE_COLOR
                        }
                    ]}
                >
                    <Text style={MainStyles.MAIN_BUTTON_TEXT}>
                        {this.state.dateTimePickerVisible
                            ? 'Välj eller ändra tid du vill spela in'
                            : 'Visa vald tid'}
                    </Text>
                </TouchableOpacity>
                {this.state.dateTimePickerVisible ? (
                    <DatePickerIOS
                        minuteInterval={5}
                        date={this.state.timeSelected}
                        mode="datetime"
                        onDateChange={this.selectDateTime}
                    />
                ) : null}
            </DefaultCard>
        );
    }

    renderOrderButton() {
        return (
            <OrderNewVideoCard title="Fyll i formuläret för att lägga till en beställning">
                <TouchableOpacity
                    onPress={() => {
                        this.submitNewOrder();
                    }}
                    style={[
                        MainStyles.MAIN_BUTTON,
                        { marginLeft: StyleRules.MARGIN }
                    ]}
                >
                    <Text style={MainStyles.MAIN_BUTTON_TEXT}>Beställ</Text>
                </TouchableOpacity>
            </OrderNewVideoCard>
        );
    }

    componentWillMount = async () => {
        const stateTime = await this.setState({ timeSelected: new Date() });
    };

    render() {
        return (
            <View>
                {this.renderClubPicker()}
                {this.state.clubSelected !== false ? (
                    this.renderCourtPicker()
                ) : (
                    <View />
                )}

                {this.state.courtSelected ? (
                    this.renderDateTimePicker()
                ) : (
                    <View />
                )}

                {this.state.clubSelected && this.state.courtSelected ? (
                    this.renderOrderButton()
                ) : (
                    <View />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    CONTAINER: {
        borderRadius: 50,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: StyleRules.MARGIN
    }
});

const mapStateToProps = state => {
    return {
        activeClubs: state.auth.activeClubs,
        activeCourts: state.auth.activeCourts,
        data: state.auth.data,
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps, actions)(SelectClubAndCourt);
