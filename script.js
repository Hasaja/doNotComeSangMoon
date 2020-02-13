var gradD02 = new Date('2021-02-04T12:00:00Z').getTime();
var armyD = new Date('2022-08-01T14:30:00Z').getTime();
var day;
var temp = document.getElementById("temp");
var clock = document.getElementById("clock");
var dDay = document.getElementById("dDay");
var recMoveSchool = document.getElementById("moveSchool");
var recActivity = document.getElementById("activity");
var icon = document.getElementById("icon");
var comment = document.getElementById("comment");
var armyDDay = document.getElementById("armyDDay");
var recSchool;
var recAct;
var temptime;
var temparature;

play = setInterval(function(){

    var d = new Date();
    var now = d.getTime();
    var distance = gradD02 - now;
    var distance2 = armyD - now;
    
    var distD = Math.floor(distance/(1000*60*60*24));
    var distH = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    var distM = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
    var distS = Math.floor((distance % (1000 * 60)) / 1000);

    var distD2 = Math.floor(distance2/(1000*60*60*24));
    var distH2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    var distM2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60)); 
    var distS2 = Math.floor((distance2 % (1000 * 60)) / 1000);

    temptime = (d.getHours()*Math.PI/12) - Math.PI*2/3;
    temparature = (1.7*Math.sin(temptime)+5.8).toFixed(1);
    console.log(temptime);
    console.log(temparature);

    switch(d.getDay()){
        case 0:
            day = "일";
            break;
        case 1:
            day = "월";
            break;
        case 2:
            day = "화";
            break;
        case 3:
            day ="수";
            break;
        case 4:
            day ="목";
            break;
        case 5:
            day ="금";
            break;
        case 6:
            day ="토";
            break;
    }
    
    function tempUpdate(){
        temp.innerHTML = temparature + "℃";
        clock.innerHTML = d.getFullYear() +"."+ (d.getMonth()+1)+"."+(d.getDate())+"("+ day +")"+" "+d.getHours()+"시 "+d.getMinutes()+"분 기준";
        if(temparature>6){
            icon.innerHTML = "🌊🏊‍♂️😇";
            comment.innerHTML = "뛰어들기 괜찮은 수온이네요!";
        }
        else {
            icon.innerHTML="🌙❄️🥶";
            comment.innerHTML = "지금은 꽤 추워요! 낮에 도전해보도록 해요^^"
        }
    }

    function dateUpdate(){
        dDay.innerHTML = distD + "일 "+ distH +"시간 <br>"+distM+"분 "+distS+"초 <br> 남음";
    }

    function armyDateUpdate(){
        armyDDay.innerHTML = distD2 + "일 "+ distH2 +"시간 <br>"+distM2+"분 "+distS2+"초 <br> 남음";
    }

    tempUpdate();
    dateUpdate();
    armyDateUpdate();
    
},60);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

var i = getRandomInt(0,9);
var j = getRandomInt(0,2);

switch(i){
    case 0:
        recSchool="양재고";
        break;
    case 1:
        recSchool="반포고";
        break;
    case 2:
        recSchool="현대고";
        break;
    case 3:
        recSchool="세화고";
        break;
    case 4:
        recSchool="서울고";
        break;
    case 5:
        recSchool="서초고";
        break;
    case 6:
        recSchool="서울고";
        break;
    case 7:
        recSchool="양재고";
        break;
    case 8:
        recSchool="서울고";
        break;
    case 9:
        recSchool="현대고";
        break;
}
switch(j){
    case 0:
        recAct="2022학년도 수능을 노리고 지금부터 기하만 공부하는 것도 나쁘지 않은 전략이에요 :)";
        break;
    case 1:
        recAct="공부를 포기하고 학원비를 아껴서 평가원장을 매수해보는건 어떨까요? :)";
        break;
    case 2:
        recAct="우리에겐 아직 700일이 남아있어요! :)";
        break;
}

recMoveSchool.innerHTML = "당신의 전학 추천 학교는 <span style='font-size:25px;font-weight:bold;'>'"+ recSchool +"'</span> 입니다!";
recActivity.innerHTML = recAct;