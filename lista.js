function add(){
    var item = document.getElementById("text-value").value;
    var btn = document.getElementById("limpar");
    var ul = document.querySelector(".list");
    
            
    btn.addEventListener("click", function(){
        ul.innerHTML = "";
    })

    if(item == '') {
        alert("Por favor, insira um item!");
    }else{
        var li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML += item;
    }

    li.addEventListener("click", function(){
        var resposta = confirm("Excluir item?")
        console.log(resposta)

        if(resposta == true){
            li.style.display = "none"
        }
    })
}



