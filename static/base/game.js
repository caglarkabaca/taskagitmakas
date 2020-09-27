var wait = ms => new Promise((r, j)=>setTimeout(r, ms))

function result(code, player){
    if(player == 1){
        window.open('../del/' + code);
    }
}

function for_loop(code, player){

    fetch("http://127.0.0.1:8000/read")
    .then(res => res.json())
    .then((out) => {

        out = out['rooms']

        console.log(out)

        console.log(code)

        var p1_secim = out[code]["p1_secim"]
        var p2_secim = out[code]["p2_secim"]

        if (p1_secim != 31 || p2_secim != 31){ // game finito
            /*
            0 taş              
            1 kağıt
            2 makas
    
            0 beats 2
            1 beats 0
            2 beats 1
    
            */
    
            if(p1_secim == "0" && p2_secim == "2"){ // p1 wins
                if(player == 1){
                    document.getElementById("maindiv").innerHTML = '<div class="col-md-6"><center><img src="../static/base/img/tas.png" alt="Tas"></center></div><div class="col-md-6"><center><img src="../static/base/img/makas.png" alt="Tas"></center></div>';
                    document.getElementById("h1text").innerText = "You Win !! ";
                    result(code,player)
                }
                else{
                    document.getElementById("maindiv").innerHTML = '<div class="col-md-6"><center><img src="../static/base/img/makas.png" alt="Tas"></center></div><div class="col-md-6"><center><img src="../static/base/img/tas.png" alt="Tas"></center></div>';
                    document.getElementById("h1text").innerText = "You Lose !! ";
                    result(code,player)
                }
            }
            if(p1_secim == "2" && p2_secim == "0"){ // p2 wins
                if(player == 2){
                    document.getElementById("maindiv").innerHTML = '<div class="col-md-6"><center><img src="../static/base/img/makas.png" alt="Tas"></center></div><div class="col-md-6"><center><img src="../static/base/img/tas.png" alt="Tas"></center></div>';
                    document.getElementById("h1text").innerText = "You Win !! ";
                    result(code,player)
                }
                else{
                    document.getElementById("maindiv").innerHTML = '<div class="col-md-6"><center><img src="../static/base/img/tas.png" alt="Tas"></center></div><div class="col-md-6"><center><img src="../static/base/img/makas.png" alt="Tas"></center></div>';
                    document.getElementById("h1text").innerText = "You Lose !! ";
                    result(code,player)
                }
            }
    
            if(p1_secim == 1 && p2_secim == "0"){ // p1
                if(player == 1){
                    document.getElementById("maindiv").innerHTML = '<div class="col-md-6"><center><img src="../static/base/img/kagit.png" alt="Tas"></center></div><div class="col-md-6"><center><img src="../static/base/img/tas.png" alt="Tas"></center></div>';
                    document.getElementById("h1text").innerText = "You Win !! "
                    result(code,player)
                }
                else{
                    document.getElementById("maindiv").innerHTML = '<div class="col-md-6"><center><img src="../static/base/img/tas.png" alt="Tas"></center></div><div class="col-md-6"><center><img src="../static/base/img/kagit.png" alt="Tas"></center></div>';
                    document.getElementById("h1text").innerText = "You Lose !! ";
                    result(code,player)
                }
            }
            if(p1_secim == "0" && p2_secim == "1"){ // p2
                if(player == 2){
                    document.getElementById("maindiv").innerHTML = '<div class="col-md-6"><center><img src="../static/base/img/tas.png" alt="Tas"></center></div><div class="col-md-6"><center><img src="../static/base/img/kagit.png" alt="Tas"></center></div>';
                    document.getElementById("h1text").innerText = "You Win !! ";
                    result(code,player)
                }
                else{
                    document.getElementById("maindiv").innerHTML = '<div class="col-md-6"><center><img src="../static/base/img/kagit.png" alt="Tas"></center></div><div class="col-md-6"><center><img src="../static/base/img/tas.png" alt="Tas"></center></div>';
                    document.getElementById("h1text").innerText = "You Lose !! ";
                    result(code,player)
                }
            }
    
            if(p1_secim == "2" && p2_secim == "1"){ // p1
                if(player == 1){
                    document.getElementById("maindiv").innerHTML = '<div class="col-md-6"><center><img src="../static/base/img/makas.png" alt="Tas"></center></div><div class="col-md-6"><center><img src="../static/base/img/kagit.png" alt="Tas"></center></div>';
                    document.getElementById("h1text").innerText = "You Win !! ";
                    result(code,player)
                }
                else{
                    document.getElementById("maindiv").innerHTML = '<div class="col-md-6"><center><img src="../static/base/img/kagit.png" alt="Tas"></center></div><div class="col-md-6"><center><img src="../static/base/img/makas.png" alt="Tas"></center></div>';
                    document.getElementById("h1text").innerText = "You Lose !! ";
                    result(code,player)
                }
            }
            if(p1_secim == "1" && p2_secim == "2"){ // p2
                if(player == 2){
                    document.getElementById("maindiv").innerHTML = '<div class="col-md-6"><center><img src="../static/base/img/kagit.png" alt="Tas"></center></div><div class="col-md-6"><center><img src="../static/base/img/makas.png" alt="Tas"></center></div>';
                    document.getElementById("h1text").innerText = "You Win !! ";
                    result(code,player)
                }
                else{
                    document.getElementById("maindiv").innerHTML = '<div class="col-md-6"><center><img src="../static/base/img/makas.png" alt="Tas"></center></div><div class="col-md-6"><center><img src="../static/base/img/kagit.png" alt="Tas"></center></div>';
                    document.getElementById("h1text").innerText = "You Lose !! ";
                    result(code,player)
                }
            }
    
            if(p1_secim == p2_secim){ // tie
                if(p1_secim == 0){
                    document.getElementById("maindiv").innerHTML = '<div class="col-md-6"><center><img src="../static/base/img/tas.png" alt="Tas"></center></div><div class="col-md-6"><center><img src="../static/base/img/tas.png" alt="Tas"></center></div>';
                    document.getElementById("h1text").innerText = "TIE !!";
                    result(code,player)
                }
                if(p1_secim == 1){
                    document.getElementById("maindiv").innerHTML = '<div class="col-md-6"><center><img src="../static/base/img/kagit.png" alt="Tas"></center></div><div class="col-md-6"><center><img src="../static/base/img/kagit.png" alt="Tas"></center></div>';
                    document.getElementById("h1text").innerText = "TIE !!";
                    result(code,player)
                }
                if(p1_secim == 2){
                    document.getElementById("maindiv").innerHTML = '<div class="col-md-6"><center><img src="../static/base/img/makas.png" alt="Tas"></center></div><div class="col-md-6"><center><img src="../static/base/img/makas.png" alt="Tas"></center></div>';
                    document.getElementById("h1text").innerText = "TIE !!";
                    result(code,player)
                }
            }
    
        }

    });

}

async function wate(ms) {
    await wait(ms)
}

async function choosingOne(choosenOne, player){

    var href = window.location.href
    var code = href.slice(href.length - 6)

    var h1 = ""

    document.getElementById("maindiv").innerHTML = "";

    if(choosenOne == 0 ){ // taş
        document.getElementById("maindiv").innerHTML = '<div class="col-md-12"><center><img src="../static/base/img/tas.png" alt="Tas"></center></div>';
        document.getElementById("h1text").innerText = "You choose TAŞ, waiting other player";
        h1 = "You choose TAŞ, waiting other player";
    }
    if(choosenOne == 1 ){ // kagit
        document.getElementById("maindiv").innerHTML = '<div class="col-md-12"><center><img src="../static/base/img/kagit.png" alt="Tas"></center></div>';
        document.getElementById("h1text").innerText = "You choose KAĞIT, waiting other player";
        h1 = "You choose KAĞIT, waiting other player";
    }
    if(choosenOne == 2 ){ // makas
        document.getElementById("maindiv").innerHTML = '<div class="col-md-12"><center><img src="../static/base/img/makas.png" alt="Tas"></center></div>';
        document.getElementById("h1text").innerText = "You choose MAKAS, waiting other player";
        h1 = "You choose MAKAS, waiting other player";
    }

    window.open('../upd/' + code + '-' + choosenOne.toString() + '-' + player.toString() );

    var result = true

    while(result){
        for_loop(code, player)
        wate(2000)
        await wait(2000)

        if(document.getElementById("h1text").innerText != h1){
            result = false
        }
    }

}


