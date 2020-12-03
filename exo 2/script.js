let add = document.getElementById("add");
let del = document.getElementById("del");

add.addEventListener("click", function (){
    let value =document.getElementById("choix").value;
    let li = document.createElement("li");
    li.innerHTML = value;
    document.getElementById("liste-commissions").append(li);
})

del.addEventListener("click", function (){
    let li = document.getElementsByTagName("li");
    let nbrLi = li.length;
    if (nbrLi > 0){
        let lastLi = li[nbrLi-1];
        lastLi.innerHTML = lastLi.remove();
    }
})