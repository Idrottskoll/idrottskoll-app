'use strict';

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import DefaultCard from '../../components/Cards/DefaultCard';
import MainStyles from '../../assets/styles/MainStyles';
import StyleRules from '../../assets/styles/StyleRules';

class SelectClubAndCourt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clubSelected: false
        };
    }

    selectClub = async clubSelected => {
        if (clubSelected === this.state.clubSelected) {
            const state = await this.setState({ clubSelected: false });
            return;
        } else {
            const state = await this.setState({ clubSelected });
            return;
        }
    };

    render() {
        if (this.props.activeClubs) {
            return (
                <View>
                    <DefaultCard>
                        <Text style={MainStyles.MAIN_CARD_TITLE}>
                            Välj klubb
                        </Text>
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
                                        <Text
                                            style={MainStyles.MAIN_BUTTON_TEXT}
                                        >
                                            {club.name}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            }
                        })}
                    </DefaultCard>

                    {this.state.clubSelected !== false ? (
                        <DefaultCard>
                            <Text style={MainStyles.MAIN_CARD_TITLE}>
                                Välj bana
                            </Text>
                            {this.props.activeClubs.map(club => {
                                if (
                                    club.name === this.state.clubSelected.name
                                ) {
                                    return club.court.map(court => {
                                        if (court.active) {
                                            console.log(court._id);
                                            return (
                                                <TouchableOpacity
                                                    key={court._id}
                                                    style={[
                                                        styles.CONTAINER,
                                                        {
                                                            backgroundColor:
                                                                StyleRules.BLUE_COLOR
                                                        }
                                                    ]}
                                                >
                                                    <Text
                                                        style={
                                                            MainStyles.MAIN_BUTTON_TEXT
                                                        }
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
                    ) : (
                        <View />
                    )}
                </View>
            );
        } else {
            return <View />;
        }
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
        activeCourts: state.auth.activeCourts
    };
};

export default connect(mapStateToProps, actions)(SelectClubAndCourt);
