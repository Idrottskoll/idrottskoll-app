import React from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';
import MainStyles from '../../assets/styles/MainStyles';
import StyleRules from '../../assets/styles/StyleRules';
import Header from '../../components/Header/Header';
import DefaultCard from '../../components/Cards/DefaultCard';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }

    _onRefresh() {
        this.setState({ refreshing: true });
        // this.fetchData().then(() => {
        this.setState({ refreshing: false });
        // });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={MainStyles.VIEW_CONTAINER}>
                <Header />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            tintColor={StyleRules.BLUE_COLOR}
                            title="Uppdaterar"
                            titleColor={StyleRules.BLUE_COLOR}
                        />
                    }
                >
                    <DefaultCard title="hej hej" />
                </ScrollView>
            </View>
        );
    }
}
