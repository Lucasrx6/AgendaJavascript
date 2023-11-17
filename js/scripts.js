// Seleção de elementos
const afazerForm = document.querySelector("#afazer-form")
const afazerInput = document.querySelector("#afazer-input")
const afazerList = document.querySelector("#afazer-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")

// Funções

const aFazer = (text) => {
    const afazer = document.createElement("div");
    afazer.classList.add("afazer");

    const afazerTitulo = document.createElement("h3");
    afazerTitulo.innerText = text;
    afazer.appendChild(afazerTitulo);

    const doneBtn = document.createElement("button");
    doneBtn.Btn.classList.add("finish-afazer");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"</i>';
    afazer.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.Btn.classList.add("edit-afazer");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"</i>';
    afazer.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.Btn.classList.add("remove-afazer");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"</i>';
    afazer.appendChild(deleteBtn);

    afazerList.appendChild(afazer);
}

// Eventos

afazerForm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const inputValue = afazerInput.value

    if(inputValue){
        saveAfazer(inputValue)
    }
})