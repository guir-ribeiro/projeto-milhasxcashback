function calcular(){
    var v = Number((document.querySelector('input#vproduto')).value);
    var c = Number((document.querySelector('input#pcash')).value);
    var p = Number((document.querySelector('input#qpontos')).value);
    var res = document.querySelector('input#botao');
    var cashback = v * c;
    var pontos = (v * p / 500) * 20;

    if(cashback > pontos){
        res.innerHTML = 'Compensa mais usando cashback';
        res.innerHTML += `<p> O valor em cashback seria ${cashback}  </p>`
        res.innerHTML += `<p> O valor em milhas seria ${pontos} (Levando em conta que seria realizado a transfência com 100% de bonificação e calculando o milheiro a 20 reais)</p>`
    }

    else{
        res.innerHTML = 'Compensa mais através dos pontos';
        res.innerHTML += `<p> O valor em cashback seria ${cashback}  </p>`
        res.innerHTML += `<p> O valor em milhas seria ${pontos} (Levando em conta que seria realizado a transfência com 100% de bonificação e calculando o milheiro a 20 reais)</p>`
    }
}