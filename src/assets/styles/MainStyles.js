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
        alignItems: 'stretch',
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        borderRadius: 3,
        margin: StyleRules.MARGIN,
        // marginTop: StyleRules.MARGIN,
        shadowColor: StyleRules.MAIN_SHADOW_COLOR,
        shadowOffset: {
            height: 0.5,
            width: 0.5
        },
        shadowOpacity: 0.3
    },

    MAIN_CARD_TITLE: {
        color: StyleRules.TEXT_COLOR,
        fontWeight: 'bold',
        marginBottom: StyleRules.MARGIN
    },

    FORM_GROUP: {
        marginTop: StyleRules.MARGIN
    },

    INPUT_LABEL: {
        color: StyleRules.TEXT_COLOR,
        fontWeight: 'bold'
    },

    AUTH_INPUT: {
        alignItems: 'stretch',
        borderRadius: 3,
        borderWidth: 1,
        height: 44,
        paddingHorizontal: StyleRules.MARGIN,
        marginVertical: 3
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
    },

    IMG: {
        resizeMode: 'cover',
        top: 0,
        flex: 1,
        width: StyleRules.DEVICE_WIDTH,
        height: StyleRules.DEVICE_HEIGHT * 0.4
    }
});
