var gradD02 = new Date('2021-02-04T12:00:00Z').getTime();
var day;
var temp = document.getElementById("temp");
var clock = document.getElementById("clock");
var dDay = document.getElementById("dDay");
var recMoveSchool = document.getElementById("moveSchool");
var recActivity = document.getElementById("activity");
var recSchool;
var recAct;

play = setInterval(function(){

    var d = new Date();
    var now = d.getTime();
    var distance = gradD02 - now;
    
    var distD = Math.floor(distance/(1000*60*60*24));
    var distH = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    var distM = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
    var distS = Math.floor((distance % (1000 * 60)) / 1000);

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
        temp.innerHTML = 4.0 + d.getHours()/10 + "℃";
        clock.innerHTML = d.getFullYear() +"."+ (d.getMonth()+1)+"."+(d.getDate())+"("+ day +")"+" "+d.getHours()+"시 "+d.getMinutes()+"분 기준";
    }

    function dateUpdate(){
        dDay.innerHTML = distD + "일 "+ distH +"시간 <br>"+distM+"분 "+distS+"초 <br> 남음";
        if(isNaN(distD))
        {
            dDay.innerHTML = "어이쿠 불러오는데 실패해버렸네요";
        }
    }

    tempUpdate();
    dateUpdate();
    
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
        recAct="공부를 하는 것보다는 평가원장에게 로비하는 것이 나은 전략일 수도 있어요 :)";
        break;
    case 2:
        recAct="딱 적당한 수온이네요! 들어갑시다~! :)";
        break;
}

recMoveSchool.innerHTML = "당신의 전학 추천 학교는 <span style='font-size:25px;font-weight:bold;'>'"+ recSchool +"'</span> 입니다!";
recActivity.innerHTML = recAct;