var valorCompra = 25.50;
var meuDinheiro = 109.90;

var saldo = meuDinheiro - valorCompra;

// <, >, <=, >=, ==, != 

if ( valorCompra < meuDinheiro){
    if (saldo > 100){
        console.log("Não comprarei");
    }else if (saldo < 20){
        console.log("comprarei - troco menor que 20.00")
    }else if (saldo == 4){
        console.log("comprarei - troco de 4.00")
    }
}else if (valorCompra == meuDinheiro){
    console.log("comprarei");
}else{
    console.log("nao comprarei");
}