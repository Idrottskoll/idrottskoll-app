import React from 'react';
import { ScrollView, View, TextInput, StyleSheet, Button } from 'react-native';
import * as actions from '../../actions';
import MainStyles from '../../assets/styles/MainStyles';
import Header from '../../components/Header/Header';
import { reduxForm } from 'redux-form';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit({ email, password }) {
        //verify email and password
        this.props.signinUser({ email, password });
    }

    render() {
        const { navigate } = this.props.navigation;
        const { handleSubmit, fields: { email, password } } = this.props;
        return (
            <View style={MainStyles.VIEW_CONTAINER}>
                <Header />
                <ScrollView>
                    <View style={[MainStyles.MAIN_CARD]}>
                        <TextInput
                            style={[styles.input, styles.email]}
                            autoCorrect={false}
                            keyboardType="email-address"
                            placeholder="E-post Adress"
                            returnKeyType="next"
                        />

                        <TextInput
                            style={[styles.input, styles.password]}
                            secureTextEntry={true}
                            autoCorrect={false}
                            placeholder="Lösenord"
                            returnKeyType="send"
                        />
                    </View>
                    <Button
                        onPress={this.handleFormSubmit}
                        title="Logga in"
                        color="#841584"
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {},

    email: {},

    password: {},
});
