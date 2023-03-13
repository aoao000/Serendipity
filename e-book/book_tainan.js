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
let con = document.getElementById('con');
function next() { 
    if(time == 0){
        ch += -100;
        // 先執行移動視窗
        con.style.transform =  'translatY('+ ch +'vh)';
        // 設定變數，計算時間
        time += 1;
        window.setTimeout(function(){
            time -= 1;
        },1000)
    }
    if(con.scrollTop > 40000){
        alert('已抵達底部!!');
    }
}
function previous() {
    if(time == 0){
        // 先執行移動視窗
        con.scrollTop -= 690;
        // 設定變數，計算時間
        time += 1;
        window.setTimeout(function(){
            time -= 1;
        },1000)
    }
    console.log(ch);
    if(con.scrollTop == 0){
        alert('已抵達頂部!!');
    }
}