//--------------------搜索框鼠标光标定位设置模块开始----------------------------
var search = document.querySelector('input');
search.onfocus = function () {
    if (this.placeholder === '华水七十年') {
        this.placeholder = '';
    }
    this.style.color = 'skyblue';
}
search.onblur = function () {
    if (this.placeholder === '') {
        this.placeholder = '华水七十年';
    }
    // this.style.color='#999';
}

//----------------------------搜索框光标定位设置模块结束------------------------------

// var arr=[skyblue,pink,orange,green];
// var btn=document.querySelector('.skin').getElementsByClassName('.sbt1');
// var skin=function(sbt,color){
//     var btn =document.getElementsByClassName('sbt');
//     // console.log(btn);
//     for (var i=0;i<btn.length;i++){

//         btn[i].onclick=function(){
//         return document.body.style.backgroundColor='color';
//         return document.querySelector('nav').style.backgroundColor='color';

//         }
//     }
// }
// skin(sbt1,pink);
//--------------------------------更改页面皮肤模块开始------------------------------------
var btn = document.getElementsByClassName('sbt1');
console.log(btn);
// var n1=document.querySelector('nav');
for (var i = 0; i < btn.length; i++) {

    btn[i].onclick = function () {
        // document.body.style.backgroundColor='pink';
        // document.getElementsByClassName('content').className='cot1';
        // document.body.style.backgroundImage = 'url(' + this.src + ')';
        // var ob=document.getElementsByClassName('content');
        // ob.className='cot1';
        // document.getElementById('c23').style.backgroundImage='url(skin/7.jpg)';
        document.getElementById('ski').className = 'cot1';
        // document.querySelector('nav').style.backgroundColor='pink';

    }
}

var btn = document.getElementsByClassName('sbt2');
// console.log(btn);
for (var i = 0; i < btn.length; i++) {

    btn[i].onclick = function () {
        // document.body.style.backgroundColor='blue';
        document.getElementById('ski').className = 'cot2';
        // document.querySelector('nav').style.backgroundColor='blue';

    }
}
var btn = document.getElementsByClassName('sbt3');
// console.log(btn);
for (var i = 0; i < btn.length; i++) {

    btn[i].onclick = function () {
        // document.body.style.backgroundColor='orange';
        document.getElementById('ski').className = 'cot3';
        // document.querySelector('nav').style.backgroundColor='orange';

    }
}
var btn = document.getElementsByClassName('sbt4');
// console.log(btn);
for (var i = 0; i < btn.length; i++) {

    btn[i].onclick = function () {
        // document.body.style.backgroundColor='green';
        document.getElementById('ski').className = 'cot4';
        // document.querySelector('nav').style.backgroundColor='green';

    }
}
//--------------------------------更改页面皮肤模块结束----------------------------------
//-------------------------------header显示当前时间模块开始------------------------------
var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');
var weeks = document.querySelector('.weeks');
getTime();
setInterval(getTime, 1000);

function getTime() {
    var date = new Date();
    // console.log(date.getDate());
    // var year=date.getFullYear();
    // var month=date.getMonth()+1;
    // var dates=date.getDate();
    var h = date.getHours();
    h = h < 10 ? '0' + h : h;
    hour.innerHTML = h + '\n' + ':';
    var m = date.getMinutes();
    m = m < 10 ? '0' + m : m;
    minute.innerHTML = m + '\n' + ':';
    var s = date.getSeconds();
    s = s < 10 ? '0' + s : s;
    second.innerHTML = s;
    var day = date.getDay();
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    weeks.innerHTML = arr[day];
    // return '今天是：'+year+'年'+'\t'+month+'月'+'\t'+dates+'日'+'\t'+arr[day]+'\t'+h+':'+m+':'+s;           
}
// ---------------------------------header显示当前时间模块结束-----------------------------