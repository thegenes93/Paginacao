
$(document).ready(
    function () {
        let t = 0;
        let cont = 0;
        for(let i=0;i<=localStorage.length/5;i++){
        let teste = parseFloat(localStorage.getItem("qtd" + i))
        if(teste){
           
            cont = cont + teste
            console.log(cont)
        }
        }
        document.getElementById("total").innerHTML += cont
    }

)

