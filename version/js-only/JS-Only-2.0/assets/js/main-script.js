//Routine subjects data variable decleation
var subPerif = "Computer Periferrls";
var subWebDev = "Web Development";
var subDigiElec = "Principal Of Digital Electornics";
var subBiznes = "Business & Organization";
var subDatCom = "Data Communication";
var subOop = "Object Oriented Programming";
var subDnA = "Data Stucture & Algorithms";



var day;
switch (new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
    break;
    case 2:
        day = "Tuesday";
    break;
    case 3:
        day = "Wednesday";
    break;
    case 4:
        day = "Thursday";
    break;
    case 5:
        day = "Friday";
    break;
    case 6:
        day = "Saturday";
        break;
}
document.getElementById("theDay").innerHTML = "(" + day +")"
document.getElementById("week").innerHTML= day + " Class Rutine is";

if(day == "Sunday"){
    document.getElementById("preOne").innerHTML = subWebDev;
    document.getElementById("preTwo").innerHTML = subDatCom;
    document.getElementById("preThree").innerHTML = subOop;
    document.getElementById("preFour").innerHTML = subBiznes;
    document.getElementById("classOneTime").innerHTML = "11:25 am > 12:45 pm";
    document.getElementById("classTwoTime").innerHTML = "12:45 pm > 10:25 pm";
    document.getElementById("classThreeTime").innerHTML = "01:25 pm > 02:05 pm";
    document.getElementById("forthsub").innerHTML = "4";
}else{
    if(day == "Monday"){
        document.getElementById("preOne").innerHTML = subDigiElec;
        document.getElementById("preTwo").innerHTML = subPerif;
        document.getElementById("preThree").innerHTML = subBiznes;
        document.getElementById("preFour").innerHTML = subDnA;
        document.getElementById("classOneTime").innerHTML = "11:25 am > 12:05 pm";
        document.getElementById("classTwoTime").innerHTML = "12:05 pm > 01:25 pm";
        document.getElementById("classThreeTime").innerHTML = "01:25 pm > 02:05 pm";
        document.getElementById("classFourTime").innerHTML = "02:05 pm > 02:45 pm";
    }else{
        if(day == "Tuesday"){
            document.getElementById("preOne").innerHTML = subDatCom;
            document.getElementById("preTwo").innerHTML = subOop;
            document.getElementById("preThree").innerHTML = subDigiElec;
            document.getElementById("classOneTime").innerHTML = "11:25 am > 12:45 pm";
            document.getElementById("classTwoTime").innerHTML = "12:45 pm > 01:25 pm";
            document.getElementById("classThreeTime").innerHTML = "01:25 pm > 02:45 pm";
        }else{
            if(day == "Wednesday"){
                document.getElementById("preOne").innerHTML = subWebDev;
                document.getElementById("preTwo").innerHTML = subDatCom;
                document.getElementById("preThree").innerHTML = subPerif;
                document.getElementById("classOneTime").innerHTML = "11:25 am > 12:00 pm";
                document.getElementById("classTwoTime").innerHTML = "12:00 pm > 12:40 pm";
                document.getElementById("classThreeTime").innerHTML = "12:40 pm > 01:20 pm";
            }else{
                if(day == "Thursday"){
                    document.getElementById("preOne").innerHTML = subDatCom;
                    document.getElementById("preTwo").innerHTML = subDigiElec;
                    document.getElementById("preThree").innerHTML = subDatCom;
                    document.getElementById("classOneTime").innerHTML = "11:25 am > 12:45 pm";
                    document.getElementById("classTwoTime").innerHTML = "12:45 pm > 01:25 pm";
                    document.getElementById("classThreeTime").innerHTML = "01:25 pm > 02:45 pm";
                }else{
                    if(day == "Friday"){
                        document.getElementById("preOne").innerHTML = "Holiday";
                        document.getElementById("preTwo").innerHTML = "Holiday";
                        document.getElementById("preThree").innerHTML = "Holiday";
                        document.getElementById("preFour").innerHTML = "Holiday";
                        document.getElementById("forthsub").innerHTML = "4";
                        document.getElementById("classOneTime").innerHTML = "Friday";
                        document.getElementById("classTwoTime").innerHTML = "Friday";
                        document.getElementById("classThreeTime").innerHTML = "Friday";
                        document.getElementById("classFourTime").innerHTML = "Friday";

                    }else{
                        if(day == "Saturday"){
                            document.getElementById("preOne").innerHTML = subDigiElec;
                            document.getElementById("preTwo").innerHTML = subOop;
                            document.getElementById("preThree").innerHTML = subDnA;
                            document.getElementById("preFour").innerHTML = subPerif;
                            document.getElementById("classOneTime").innerHTML = "11:25 am > 12:05 pm";
                            document.getElementById("classTwoTime").innerHTML = "12:05 pm > 01:25 pm";
                            document.getElementById("classThreeTime").innerHTML = "01:25 pm > 02:05 pm";
                            document.getElementById("classFourTime").innerHTML = "02:05 pm > 02:45 pm";
                            document.getElementById("forthsub").innerHTML = "4";
                        }else{
                            document.getElementById("week").innerHTML = "There is some error";
                        }
                    }
                }
            }
        }
    }
}