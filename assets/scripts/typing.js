let listTyping=["Software Engineer.","UI UX Engineer."," Software Developer."];
let i=0;
let j=0

setInterval(function () {
    let aniPath=listTyping[i].substring(0,j);
    $("#typing").text(aniPath);
    j++
    if (j>listTyping[i].length){
        j=0;
        i++;
    }
    if (i==listTyping.length){
        i=0;
    }
},190)