// for javascript component
const calc = (x,y) => { return x*y }

document.querySelector("#cal").addEventListener('click',(e) =>
{
    e.preventDefault();
    let Enter1 = parseFloat(document.getElementById("va").value);
    localStorage.setItem("a",Enter1);
    let Enter2 = parseFloat(document.getElementById("vb").value);
    localStorage.setItem("b",Enter2);
    let x=localStorage.getItem("a");
    let y=localStorage.getItem("b");
    document.getElementById("grandAmount").innerHTML = `${calc(x,y)}.` ;

})

