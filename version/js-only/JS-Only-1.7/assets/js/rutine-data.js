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

//Day function

if(day == "Sunday"){
    document.getElementById("upweek").innerHTML= "Monday Class Routine is";
}else{
    if(day == "Monday"){
        document.getElementById("upweek").innerHTML = "Tuesday Class Routine is";
    }else{
        if(day == "Tuesday"){
            document.getElementById("upweek").innerHTML = "Wednesday Class Routine is";
        }else{
            if(day == "Wednesday"){
                document.getElementById("upweek").innerHTML = "Thursday Class Routine is";
            }else{
                if(day == "Thursday"){
                    document.getElementById("upweek").innerHTML = "Friday Class Routine is";
                }else{
                    if(day == "Friday"){
                        document.getElementById("upweek").innerHTML = "Saturday Class Routine is";
                    }else{
                        if(day == "Saturday"){
                            document.getElementById("upweek").innerText = "Sunday Class Routine is";
                            }else{
                                document.getElementById("upweek").innerText = "There is some error";
                        }
                    }
                }
            }
        }
    }
}



if(day == "Sunday"){
    document.getElementById("uppreOne").innerHTML = subDigiElec;
    document.getElementById("uppreTwo").innerHTML = subPerif;
    document.getElementById("uppreThree").innerHTML = subBiznes;
    document.getElementById("uppreFour").innerHTML = subDnA;
    document.getElementById("upclassOneTime").innerHTML = "11:25 am > 12:05 pm";
    document.getElementById("upclassTwoTime").innerHTML = "12:05 pm > 01:25 pm";
    document.getElementById("upclassThreeTime").innerHTML = "01:25 pm > 02:05 pm";
    document.getElementById("upclassFourTime").innerHTML = "02:05 pm > 02:45 pm";
    //document.getElementById("preOne").innerHTML = subWebDev;
    //document.getElementById("preTwo").innerHTML = subDatCom;
    //document.getElementById("preThree").innerHTML = subOop;
    //document.getElementById("preFour").innerHTML = subBiznes;
    //document.getElementById("classOneTime").innerHTML = "11:25 am > 12:45 pm";
    //document.getElementById("classTwoTime").innerHTML = "12:45 pm > 10:25 pm";
    //document.getElementById("classThreeTime").innerHTML = "01:25 pm > 02:05 pm";
    //document.getElementById("forthsub").innerHTML = "4";
}else{
    if(day == "Monday"){
        document.getElementById("uppreOne").innerHTML = subDatCom;
        document.getElementById("uppreTwo").innerHTML = subOop;
        document.getElementById("uppreThree").innerHTML = subDigiElec;
        document.getElementById("upclassOneTime").innerHTML = "11:25 am > 12:45 pm";
        document.getElementById("upclassTwoTime").innerHTML = "12:45 pm > 01:25 pm";
        document.getElementById("upclassThreeTime").innerHTML = "01:25 pm > 02:45 pm";
        //document.getElementById("preOne").innerHTML = subDigiElec;
        //document.getElementById("preTwo").innerHTML = subPerif;
        //document.getElementById("preThree").innerHTML = subBiznes;
        //document.getElementById("preFour").innerHTML = subDnA;
       // document.getElementById("classOneTime").innerHTML = "11:25 am > 12:05 pm";
        //document.getElementById("classTwoTime").innerHTML = "12:05 pm > 01:25 pm";
        //document.getElementById("classThreeTime").innerHTML = "01:25 pm > 02:05 pm";
        //document.getElementById("classFourTime").innerHTML = "02:05 pm > 02:45 pm";
    }else{
        if(day == "Tuesday"){
            document.getElementById("uppreOne").innerHTML = subWebDev;
            document.getElementById("uppreTwo").innerHTML = subDatCom;
            document.getElementById("uppreThree").innerHTML = subPerif;
            document.getElementById("upclassOneTime").innerHTML = "11:25 am > 12:00 pm";
            document.getElementById("upclassTwoTime").innerHTML = "12:00 pm > 12:40 pm";
            document.getElementById("upclassThreeTime").innerHTML = "12:40 pm > 01:20 pm";
            //document.getElementById("preOne").innerHTML = subDatCom;
            //document.getElementById("preTwo").innerHTML = subOop;
            //document.getElementById("preThree").innerHTML = subDigiElec;
            //document.getElementById("classOneTime").innerHTML = "11:25 am > 12:45 pm";
            //document.getElementById("classTwoTime").innerHTML = "12:45 pm > 01:25 pm";
            //document.getElementById("classThreeTime").innerHTML = "01:25 pm > 02:45 pm";
        }else{
            if(day == "Wednesday"){
                document.getElementById("uppreOne").innerHTML = subDatCom;
                document.getElementById("uppreTwo").innerHTML = subDigiElec;
                document.getElementById("uppreThree").innerHTML = subDatCom;
                document.getElementById("upclassOneTime").innerHTML = "11:25 am > 12:45 pm";
                document.getElementById("upclassTwoTime").innerHTML = "12:45 pm > 01:25 pm";
                document.getElementById("upclassThreeTime").innerHTML = "01:25 pm > 02:45 pm";
                //document.getElementById("preOne").innerHTML = subWebDev;
                //document.getElementById("preTwo").innerHTML = subDatCom;
                //document.getElementById("preThree").innerHTML = subPerif;
                //document.getElementById("classOneTime").innerHTML = "11:25 am > 12:00 pm";
                //document.getElementById("classTwoTime").innerHTML = "12:00 pm > 12:40 pm";
                //document.getElementById("classThreeTime").innerHTML = "12:40 pm > 01:20 pm";
            }else{
                if(day == "Thursday"){
                    document.getElementById("uppreOne").innerHTML = "Holiday";
                    document.getElementById("uppreTwo").innerHTML = "Holiday";
                    document.getElementById("uppreThree").innerHTML = "Holiday";
                    document.getElementById("uppreFour").innerHTML = "Holiday";
                    document.getElementById("upforthsub").innerHTML = "4";
                    document.getElementById("upclassOneTime").innerHTML = "Friday";
                    document.getElementById("upclassTwoTime").innerHTML = "Friday";
                    document.getElementById("upclassThreeTime").innerHTML = "Friday";
                    document.getElementById("upclassFourTime").innerHTML = "Friday";
                    //document.getElementById("preOne").innerHTML = subDatCom;
                    //document.getElementById("preTwo").innerHTML = subDigiElec;
                    //document.getElementById("preThree").innerHTML = subDatCom;
                    //document.getElementById("classOneTime").innerHTML = "11:25 am > 12:45 pm";
                    //document.getElementById("classTwoTime").innerHTML = "12:45 pm > 01:25 pm";
                    //document.getElementById("classThreeTime").innerHTML = "01:25 pm > 02:45 pm";
                }else{
                    if(day == "Friday"){
                        document.getElementById("uppreOne").innerHTML = subDigiElec;
                        document.getElementById("uppreTwo").innerHTML = subOop;
                        document.getElementById("uppreThree").innerHTML = subDnA;
                        document.getElementById("uppreFour").innerHTML = subPerif;
                        document.getElementById("upclassOneTime").innerHTML = "11:25 am > 12:05 pm";
                        document.getElementById("upclassTwoTime").innerHTML = "12:05 pm > 01:25 pm";
                        document.getElementById("upclassThreeTime").innerHTML = "01:25 pm > 02:05 pm";
                        document.getElementById("upclassFourTime").innerHTML = "02:05 pm > 02:45 pm";
                        document.getElementById("upforthsub").innerHTML = "4";
                        //document.getElementById("preOne").innerHTML = "Holiday";
                        //document.getElementById("preTwo").innerHTML = "Holiday";
                        //document.getElementById("preThree").innerHTML = "Holiday";
                        //document.getElementById("preFour").innerHTML = "Holiday";
                        //document.getElementById("forthsub").innerHTML = "4";
                        //document.getElementById("classOneTime").innerHTML = "Friday";
                        //document.getElementById("classTwoTime").innerHTML = "Friday";
                        //document.getElementById("classThreeTime").innerHTML = "Friday";
                        //document.getElementById("classFourTime").innerHTML = "Friday";

                    }else{
                        if(day == "Saturday"){
                            document.getElementById("uppreOne").innerHTML = subWebDev;
                            document.getElementById("uppreTwo").innerHTML = subDatCom;
                            document.getElementById("uppreThree").innerHTML = subOop;
                            document.getElementById("uppreFour").innerHTML = subBiznes;
                            document.getElementById("upclassOneTime").innerHTML = "11:25 am > 12:45 pm";
                            document.getElementById("upclassTwoTime").innerHTML = "12:45 pm > 10:25 pm";
                            document.getElementById("upclassThreeTime").innerHTML = "01:25 pm > 02:05 pm";
                            document.getElementById("upforthsub").innerHTML = "4";

                            //document.getElementById("preOne").innerHTML = subDigiElec;
                            //document.getElementById("preTwo").innerHTML = subOop;
                            //document.getElementById("preThree").innerHTML = subDnA;
                            //document.getElementById("preFour").innerHTML = subPerif;
                            //document.getElementById("classOneTime").innerHTML = "11:25 am > 12:05 pm";
                            //document.getElementById("classTwoTime").innerHTML = "12:05 pm > 01:25 pm";
                            //document.getElementById("classThreeTime").innerHTML = "01:25 pm > 02:05 pm";
                            //document.getElementById("classFourTime").innerHTML = "02:05 pm > 02:45 pm";
                            //document.getElementById("forthsub").innerHTML = "4";
                        }else{
                            document.getElementById("upweek").innerHTML = "There is some error";
                        }
                    }
                }
            }
        }
    }
}