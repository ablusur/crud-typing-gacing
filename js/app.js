// crud start

let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
let update = document.querySelector(".update");
let data = [];
let id;

btn.addEventListener("click",()=>{
    if (input.value){
        data.push(input.value);
        todo();
      input.value = "";
    }
});

update.addEventListener("click",()=>{
    data[id] = input.value;
    todo();
});

function todo(){
    list.innerHTML = "";
    data.map(
        (item)=>
        (list.innerHTML += `<li>${item}<button class="delete">delete</button> <button class="edit">edit</button></li>`)
    );
    let deletearr = document.querySelectorAll(".delete")
    let deleteItem = Array.from(deletearr);
    let editNod = doucment.querySelectorAll(".edit");
    let editSingle = Array.from(editNod);
    deleteItem.map((itemd, index)=>{
        itemd.addEventListener("click",() => {
            data.splice(index, 1);
            todo();
        });
    });

    editSingle.map((iteme, index)=>{
        iteme.addEventListener("click",()=>{
            input.value = data[index];
            id = index;
        });
    });
}

// ==============crud end=================