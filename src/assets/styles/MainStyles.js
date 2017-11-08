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
        marginTop: StyleRules.MARGIN + StyleRules.MARGIN,
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
        shadowOpacity: 0.3,
        zIndex: 1
    },

    VIDEO_BUTTON: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        borderRadius: 3,
        marginHorizontal: StyleRules.MARGIN,
        marginTop: StyleRules.MARGIN + StyleRules.MARGIN,
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
        marginBottom: StyleRules.MARGIN,
        fontSize: StyleRules.FONT_SIZE_TITLE
    },

    FORM_GROUP: {
        marginBottom: StyleRules.MARGIN
    },

    INPUT_LABEL: {
        color: StyleRules.TEXT_COLOR,
        fontSize: StyleRules.FONT_SIZE_SMALL
    },

    FORM_INPUT: {
        alignItems: 'stretch',
        borderWidth: 0.3,
        borderRadius: 3,
        height: 40,
        lineHeight: 23,
        marginTop: 3,
        paddingHorizontal: StyleRules.MARGIN,
        borderColor: StyleRules.TEXT_COLOR,
        fontSize: StyleRules.FONT_SIZE
    },

    MAIN_BUTTON: {
        borderRadius: 50,
        height: 44,
        backgroundColor: StyleRules.BLUE_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120
    },

    MAIN_BUTTON_TEXT: {
        fontWeight: 'bold',
        color: StyleRules.BUTTON_TEXT_COLOR,
        fontSize: StyleRules.FONT_SIZE
    },

    // Will flex buttons to the right side of the Cards
    FLEX_BUTTON_TO_END: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
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
