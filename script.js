function calcular(){
    var v = document.querySelector('input#vproduto');
    var vn = Number(v.value);
    var c = document.querySelector('input#pcash');
    var cn = Number(c.value);
    var p = document.querySelector('input#qpontos');
    var pn = Number(p.value);
    var res = document.querySelector('div#resultado');
    var cashback = vn * (cn/100);
    var pontosminimo = (vn * pn / 500) * 19;
    var pontosMaximo = (vn * pn / 500) * 21;


    if(cashback > pontosminimo){
        res.innerHTML = 'Compensa mais usando cashback!';
    }

    else{
        res.innerHTML = 'Compensa mais através dos pontos!';
    }
    res.innerHTML += `<p> O valor em cashback seria R$ ${cashback},00.  </p>`;
    res.innerHTML += `<p> O valor em milhas seria entre R$ ${pontosminimo},00 e R$ ${pontosMaximo},00. `
    res.innerHTML += `(Levando em conta que seria realizado a transferência com 100% de bonificação e calculando o valor do milheiro entre R$ 19,00 e R$ 20,00 reais.)</p>`;
} 