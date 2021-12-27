export let minBreakpoints = {
    forTabletPortraitUp: 600,
    forTabletLandscapeUp: 900,
    forDesktopUp: 1200,
    forBigDesktopUp: 1800 
}

export function isMobile(){
    if(parseInt(window.innerWidth) >= minBreakpoints.forTabletPortraitUp)
        return false;
    else return true;
}

export function isTablet(){
    if(parseInt(window.innerWidth) >= minBreakpoints.forTabletPortraitUp && parseInt(window.innerWidth) < minBreakpoints.forDesktopUp)
        return true;
    else return false;
}

export function isDesktop(){
    if(parseInt(window.innerWidth) >= minBreakpoints.forDesktopUp)
        return true;
    else return false;
}