var calssNowHour;
calssNowHour = new Date().getHours();

var classNowMin;
classNowMin = new Date().getMinutes();

var classDay;
switch (new Date().getDay()){
    case 0:
        classDay = "0w"
    break;
    case 1:
        classDay = "1w";
    break;
    case 2:
        classDay = "2w";
    break;
    case 3:
        classDay = "3w";
    break;
    case 4:
        classDay = "4w";
    break;
    case 5:
        classDay = "5w";
    break;
    case 6:
        classDay = "6w";
    break;
}
var classNow = calssNowHour + "h" + classNowMin +"m"+ classDay;
if("20h50m3w" == classNow){
    document.getElementById("classNow").innerText = "Ore bap clss suru";
}else{
    if("20h51m3w" == classNow){
        document.getElementById("classNow").innerHTML ="bafo class cole";
    }
}
