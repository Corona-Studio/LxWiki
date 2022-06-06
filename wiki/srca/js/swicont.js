window.onload=function loadchkr(){
    if(localStorage.theme == 'dark'){
        switcher(0)
    }else{
        switcher(1)
    }
}

function switcher(a){
    var bodyloc = document.getElementById("bd");
    if(a==0){
        bodyloc.classList.add("dark");
    }else{
        bodyloc.classList.remove("dark");
    }
}