function addElement(){
    let value =document.getElementById("choix").value;
    let li = document.createElement("li");
    li.innerHTML = value;
    document.getElementById("liste-commissions").append(li);
}