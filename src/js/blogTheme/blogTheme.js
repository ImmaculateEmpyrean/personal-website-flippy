import {isMobile,isTablet,isDesktop} from '../breakpoints.js';

let {commonVariables} = require('./common.js');

let {desktopVariables} = require('./desktopVariables.js');
let {tabletVariables} = require('./tabletVariables.js');
let {mobileVariables} = require('./mobileVariables.js');

/* exported style */
let style = {};
setStyle();
window.addEventListener('resize',setStyle);

function setStyle(){
    if(isMobile())
        style = mobileVariables;
    else if(isTablet())
        style = tabletVariables;
    else if(isDesktop())
        style = desktopVariables;
    else console.log('is not desktop or mobile or tablet and hence style object not set in blogTheme');
}

export function getBlogTheme(){
    return {
        common: {
            primaryColor: commonVariables.color.accentColor,
            primaryColorHover: commonVariables.color.accentColor,
        },
        Button: {
            color: commonVariables.color.accentColor,
            textColor: '#FFF'
        },
        Pagination:{
            itemSize: style.spacing.large,
            itemColorActive: 'white',
            itemFontSize: style.spacing.large
        }
    }
}