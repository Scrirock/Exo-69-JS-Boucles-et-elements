function addElement(){
    let value =document.getElementById("choix").value;
    document.getElementById("liste-commissions").innerHTML += "<li>"+value+"</li>";
}

function deleteElement(){
    let li = document.getElementsByTagName("li");
    let nbrLi = li.length;
    let lastLi = li[nbrLi-1];
    lastLi.innerHTML = lastLi.remove();
}