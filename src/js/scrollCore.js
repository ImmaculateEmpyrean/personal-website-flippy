let scrollEvents = [];
let scrollCooldown = 50; //measured in milliseconds
let processScroll = true;

let initialized = false;

window.addEventListener('DOMContentLoaded',function(){
    if(initialized === false){
        window.addEventListener('scroll',function(){
            if(processScroll === true || window.pageYOffset === 0){
                processScroll = false;
                setTimeout(function(){
                    processScroll = true;
                },scrollCooldown)
        
                scrollEvents.forEach(function(event){
                    event();
                })
            }
        });
        initialized = true;
    }
});

export function onScroll(event){
    scrollEvents.push(event);
}