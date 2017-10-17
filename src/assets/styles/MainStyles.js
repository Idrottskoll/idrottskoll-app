import React from 'react-native';
import StyleRules from './StyleRules';

export default (Style = {
    VIEW_CONTAINER: {
        alignItems: 'stretch',
        backgroundColor: StyleRules.MAIN_BACKGROUND_COLOR,
        flex: 1,
    },

    MAIN_CARD: {
        alignItems: 'stretch',
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        borderRadius: 3,
        margin: StyleRules.MARGIN,
        padding: StyleRules.CARD_PADDING_X,
        shadowColor: StyleRules.MAIN_SHADOW_COLOR,
        shadowOffset: {
            height: 0.5,
            width: 0.5,
        },
        shadowOpacity: 0.3,
    },

    INPUT_LABEL: {
        color: StyleRules.TEXT_COLOR,
        fontWeight: 'bold',
    },

    ERROR_TEXT: {
        color: StyleRules.RED_COLOR,
        fontWeight: 'bold',
    },

    AUTH_INPUT: {
        alignItems: 'stretch',
        borderColor: StyleRules.BLUE_GRADIENT_COLOR,
        borderRadius: 3,
        borderWidth: 1,
        height: 44,
        marginVertical: StyleRules.MARGIN,
        paddingHorizontal: StyleRules.MARGIN,
    },

    AUTH_ERROR_INPUT: {
        alignItems: 'stretch',
        borderColor: StyleRules.RED_COLOR,
        borderRadius: 3,
        borderWidth: 1,
        height: 44,
        marginVertical: StyleRules.MARGIN,
        paddingHorizontal: StyleRules.MARGIN,
    },

    BUTTON_SUCCESS: {
        height: 44,
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        marginVertical: StyleRules.MARGIN,
        backgroundColor: StyleRules.BLUE_GRADIENT_COLOR,
        borderRadius: 3,
        justifyContent: 'center',
    },
    BUTTON_SUCCESS_TEXT: {
        fontWeight: 'bold',
        color: StyleRules.BUTTON_TEXT_COLOR,
    },
});
