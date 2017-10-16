import React from 'react-native';
import StyleRules from './StyleRules';

export default (Style = {
    VIEW_CONTAINER: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: StyleRules.MAIN_BACKGROUND_COLOR,
    },

    MAIN_CARD: {
        alignItems: 'stretch',
        padding: StyleRules.CARD_PADDING_X,
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        margin: StyleRules.MARGIN,
        shadowColor: StyleRules.MAIN_SHADOW_COLOR,
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 0.5,
            width: 0.5,
        },
        borderRadius: 3,
    },
});
