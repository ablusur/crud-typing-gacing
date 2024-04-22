let type = document.querySelector(".type");
let typed = type.innerHTML;
let typedarr = typed.split("");
type.innerHTML = "";
let typing = 0;
 
function typedJs(){
if(typing < typed.length){
    type.innerHTML+= typed.charAt(typing);
    typing++;
    typedarr = typed.split("");
}else{
    typedarr.pop("");
    type.innerHTML = typedarr.join("");
    if(typedarr.length == 0){
        typing = 0;
    }
}
}

setInterval(()=>{
    typedJs()
},100)