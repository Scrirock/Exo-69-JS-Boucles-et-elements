function addElement(){
    let value =document.getElementById("choix").value;
    let li = document.createElement("li");
    li.innerHTML = value;
    document.getElementById("liste-commissions").append(li);
}

function deleteElement(){
    let li = document.getElementsByTagName("li");
    let nbrLi = li.length;
    if (nbrLi > 0){
        let lastLi = li[nbrLi-1];
        lastLi.innerHTML = lastLi.remove();
    }
}