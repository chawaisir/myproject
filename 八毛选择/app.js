var bamao;

document.querySelector(".btn").addEventListener("click", function(){

    var bamao = Math.floor(Math.random()*24)+ 1;
    document.querySelector('.bamao').src = 'bamao-' + bamao + ".png";
    }
)