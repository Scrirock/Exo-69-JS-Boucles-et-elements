function addElement(){
    let value =document.getElementById("choix").value;
    document.getElementById("liste-commissions").innerHTML += "<li>"+value+"</li>";
}