window.addEventListener('load', function () {
    let counter = 0;
    setInterval(() => {
        if (counter == 3) {
            clearInterval();
            document.getElementById("loading_start").style.opacity = "0";
            document.getElementById("loading_start").style.zIndex = "-10000";
        }
        else {
            counter += 1;
        }
    }, 1000)
})


let right = document.getElementById('right');
let left = document.getElementById('left');
var time = 0;
var ch = 0;

function next() { 
    if(time == 0){
        // 先執行移動視窗
        con.scrollTop += 690;
        // 設定變數，計算時間
        time += 1;
        // // 進度條的長度變化
        // if(con.scrollTop > 2700 && con.scrollTop < 9600) {
        //     // 體驗生活 按10次
        //     ch += 9.94;
        //     document.getElementById('bar').style.height = ch + "px";
        // }
        // if(con.scrollTop > 9600 && con.scrollTop < 20600){
        //     // 踏嘉循古 按15次
        //     ch += 5.56;
        //     document.getElementById('bar').style.height = ch + "px";
        // }
        // if(con.scrollTop > 20600 && con.scrollTop < 25000){
        //     // 休息再出發 按5次
        //     ch += 18.37;
        //     document.getElementById('bar').style.height = ch + "px";
        // }
        // if(con.scrollTop > 24000){
        //     ch += 0;
        //     document.getElementById('bar').style.height = ch + "px";
        // }
        window.setTimeout(function(){
            time -= 1;
        },1000)
    }
    if(con.scrollTop > 26919){
        alert('已抵達底部!!');
    }
    console.log(ch);
}
function previous() {
    if(time == 0){
        // 先執行移動視窗
        con.scrollTop -= 690;
        // 設定變數，計算時間
        time += 1;
        // // 進度條的長度變化
        // if(con.scrollTop > 2700 && con.scrollTop < 9600) {
        //     // 體驗生活 按10次
        //     ch -= 9.94;
        //     document.getElementById('bar').style.height = ch + "px";
        // }
        // if(con.scrollTop > 9600 && con.scrollTop < 20600){
        //     // 踏嘉循古 按15次
        //     ch -= 5.56;
        //     document.getElementById('bar').style.height = ch + "px";
        // }
        // if(con.scrollTop > 20600 && con.scrollTop < 25000){
        //     // 休息再出發 按5次
        //     ch -= 18.37;
        //     document.getElementById('bar').style.height = ch + "px";
        // }
        window.setTimeout(function(){
            time -= 1;
        },1000)
    }
    if(con.scrollTop == 0){
        alert('已抵達頂部!!');
    }
}
function getScrollPostition(){
    let con = document.getElementById('con');
    // let scrollX = con.scrollLeft;
    let scrollY = con.scrollTop;
    // console.log(scrollX);
    console.log(scrollY);
}
function Jump(b) {
    if(b == 1){
        con.scrollTop += 3450;
    }
    if(b == 2){
        con.scrollTop += 4140;
    }
    if(b == 3){
        con.scrollTop += 4830;
    }
    if(b == 4){
        con.scrollTop += 5520;
    }
    if(b == 5){
        con.scrollTop += 6900;
    }
    if(b == 6){
        con.scrollTop += 10350;
    }
    if(b == 7){
        con.scrollTop += 12420;
    }
    if(b == 8){
        con.scrollTop += 15180;
    }
    if(b == 9){
        con.scrollTop += 20700;
    }
}
function catelog(e){
    if(e == 1){
        con.scrollTop -= 3450;
    }
    if(e == 2){
        con.scrollTop -= 4140;
    }
    if(e == 3){
        con.scrollTop -= 4830;
    }
    if(e == 4){
        con.scrollTop -= 6210;
    }
    if(e == 5){
        con.scrollTop -= 6900;
    }
    if(e == 6){
        con.scrollTop -= 10350;
    }
    if(e == 7){
        con.scrollTop -= 12420;
    }
    if(e == 8){
        con.scrollTop -= 15180;
    }
    if(e == 9){
        con.scrollTop -= 20700;
    }
}


