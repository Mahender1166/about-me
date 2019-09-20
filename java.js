function calc() {
    var Enter1 = parseFloat(document.getElementById("va").value);
    var Enter2 = parseFloat(document.getElementById("vb").value);

    var total= Enter1*Enter2;
   
    
         
    document.getElementById("grandAmount").innerHTML = total;    
}
document.querySelector('#cal').addEventListener('click',calc);