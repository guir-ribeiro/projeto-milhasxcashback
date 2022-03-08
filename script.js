function calcular(){
    var v = document.querySelector('input#vproduto');
    var vn = Number(v.value);
    var c = document.querySelector('input#pcash');
    var cn = Number(c.value);
    var p = document.querySelector('input#qpontos');
    var pn = Number(p.value);
    var res = document.querySelector('div#resultado');
    var cashback = vn * (cn/100);
    var pontos = (vn * pn / 500) * 20;

    if(cashback > pontos){
        res.innerHTML = 'Compensa mais usando cashback!';
        res.innerHTML += `<p> O valor em cashback seria ${cashback},00.  </p>`
        res.innerHTML += `<p> O valor em milhas seria ${pontos},00. `
        res.innerHTML += `(Levando em conta que seria realizado a transferência com 100% de bonificação e calculando o milheiro a R$ 20,00 reais)</p>`
    }

    else{
        res.innerHTML = 'Compensa mais através dos pontos!';
        res.innerHTML += `<p> O valor em cashback seria R$ ${cashback},00.  </p>`
        res.innerHTML += `<p> O valor em milhas seria R$ ${pontos},00.` 
        res.innerHTML += `(Levando em conta que seria realizado a transferência com 100% de bonificação e calculando o milheiro a R$ 20,00 reais)</p>`
    }
} 