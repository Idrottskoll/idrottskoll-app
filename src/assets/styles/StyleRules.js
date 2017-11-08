import React from 'react-native';
import Dimensions from 'Dimensions';

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1;

// We set our base font size value
const base_unit = 14;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function
function em(value) {
    return unit * value;
}

// Then we set our styles with the help of the em() function
export default (Style = {
    // GENERAL
    DEVICE_WIDTH: x,
    DEVICE_HEIGHT: y,
    RATIO_X: ratioX,
    RATIO_Y: ratioY,
    UNIT: em(1),
    PADDING: em(1),
    MARGIN: em(0.65),

    // CARD
    CARD_WIDTH: x - em(1.25) * 2,
    CARD_HEIGHT: (x - em(1.25) * 2) * (3 / 5),
    CARD_PADDING_X: em(1),
    CARD_PADDING_Y: em(3),

    // FONT
    FONT_SIZE_SMALLER: em(0.8),
    FONT_SIZE_SMALL: em(0.9),
    FONT_SIZE: em(1),
    FONT_SIZE_MEDIUM: em(1.25),
    FONT_SIZE_TITLE: em(1.5),

    // colors
    MAIN_BACKGROUND_COLOR: '#EFEFF4',
    CARD_BACKGROUND_COLOR: '#FFFFFF',
    BUTTON_TEXT_COLOR: '#FFFFFF',
    TEXT_COLOR: '#000000',
    MAIN_SHADOW_COLOR: '#000000',
    BLUE_COLOR: '#26435A',
    GREEN_COLOR: '#80C38F',
    BLUE_GRADIENT_COLOR: '#4E7893',
    GREEN_GRADIENT_COLOR: '#9BCAA5',
    ORANGE_COLOR: '#F5A623',
    RED_COLOR: '#D0021B'
});
