import React from 'react-native';
import StyleRules from './StyleRules';

export default (Style = {
    VIEW_CONTAINER: {
        alignItems: 'stretch',
        backgroundColor: StyleRules.MAIN_BACKGROUND_COLOR,
        flex: 1
    },

    MAIN_CARD: {
        alignItems: 'stretch',
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        borderRadius: 3,
        margin: StyleRules.MARGIN,
        marginTop: StyleRules.MARGIN,
        padding: StyleRules.CARD_PADDING_X,
        shadowColor: StyleRules.MAIN_SHADOW_COLOR,
        shadowOffset: {
            height: 0.5,
            width: 0.5
        },
        shadowOpacity: 0.3
    },

    VIDEO_CARD: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        borderRadius: 3,
        margin: StyleRules.MARGIN,
        shadowColor: StyleRules.MAIN_SHADOW_COLOR,
        flex: 1,
        shadowOffset: {
            height: 0.5,
            width: 0.5
        },
        shadowOpacity: 0.3
    },

    VIDEO_CONTAINER: {
        top: 0,
        flex: 1,
        width: '100%',
        alignSelf: 'stretch'
    },

    MAIN_CARD_TITLE: {
        color: StyleRules.TEXT_COLOR,
        fontWeight: 'bold',
        marginBottom: StyleRules.MARGIN
    },

    FORM_GROUP: {
        marginVertical: StyleRules.MARGIN
    },

    INPUT_LABEL: {
        color: StyleRules.TEXT_COLOR
    },

    AUTH_INPUT: {
        alignItems: 'stretch',
        borderWidth: 1,
        borderRadius: 3,
        height: 40,
        lineHeight: 23,
        marginTop: 3
    },

    AUTH_SUCCESS_INPUT: {
        borderColor: StyleRules.BLUE_GRADIENT_COLOR
    },

    BUTTON_SUCCESS: {
        height: 44,
        display: 'flex',
        alignItems: 'center',
        marginVertical: StyleRules.MARGIN,
        backgroundColor: StyleRules.BLUE_GRADIENT_COLOR,
        borderRadius: 3,
        justifyContent: 'center'
    },

    BUTTON_SUCCESS_TEXT: {
        fontWeight: 'bold',
        color: StyleRules.BUTTON_TEXT_COLOR
    },

    ERROR_BOX: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    ERROR_TEXT: {
        color: StyleRules.RED_COLOR,
        fontSize: StyleRules.FONT_SIZE_SMALLER
    }
});
