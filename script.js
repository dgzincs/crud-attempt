'use strict'

const btnNew = document.querySelector('#newUser')
const closeModal = document.querySelector('#closeModal')
const submit = document.querySelector('#submitBtn')

const getUsername = document.querySelector('#usernameInput').value
const getEmail = document.querySelector('#emailInput').value
const tableSize = document.querySelector('#table > tbody').rows.length
const idIterator = localStorage.length ?? 0

console.log(`Tamanho da tabela : ${idIterator}`);





// const userTest = {
//     username: 'Non',
//     email: 'Non',
//     cpf: 'Non',
//     id: 0
// }

// const user1 = {
//     username: 'Pedro',
//     email: 'Pedro@mail.to',
//     cpf: '123.456.789-00',
//     id: 1
// }
// const user2 = {
//     username: 'Joao',
//     email: 'Joao@mail.to',
//     cpf: '123.456.789-00',
//     id: 2
// }
// const user3 = {
//     username: 'Douglas',
//     email: 'Douglas@mail.to',
//     cpf: '123.456.789-00',
//     id: 3
// }

// const user4 = {
//     username: 'Beatriz',
//     email: 'Beatriz@mail.to',
//     cpf: '123.456.789-00',
//     id: 4
// }

btnNew.addEventListener('click', function(){
    console.log("Script Working Test");
    document.querySelector('.modal_div').classList.add('Active')

    document.querySelector('#newUser').classList.add('none')
})

closeModal.addEventListener('click', function(){
    console.log("Script Working Test");
    document.querySelector('.modal_div').classList.remove('Active')

    document.querySelector('#newUser').classList.remove('none')
})


function clearInput(){
    document.querySelector('#usernameInput').value = ''
    document.querySelector('#emailInput').value = ''
    document.querySelector('#cpfInput').value = ''
}


submit.addEventListener('click', function(){

    let user = {
        username: window.document.getElementById('usernameInput').value,
        email: window.document.getElementById('emailInput').value,
        cpf: window.document.getElementById('cpfInput').value,
        id: 0,
    }
    create(user)
    update()

    // clearInput()  
    document.querySelector('.modal_div').classList.remove('Active')
    document.querySelector('#newUser').classList.remove('none')
})

const database = []

// database.push(userTest)
// se der erro tira o 'data" dos parametros hausahsuauhsauh
const getLocal = (data) =>localStorage.getItem('user', data)
const setLocal = (data) => localStorage.setItem('user', data)



function create(user){
    readDatabase()
    if(user != undefined){
    database.push(user)
    setLocal(JSON.stringify(database))
    update(user)
} else{
        console.log('Invalido')
    }
    console.log(database);
}



function readDatabase (){
    console.log(database)
}
function readDatabaseForEach(){
    database.forEach(e => {
        console.log(e)

    }
)}



function update(index){
   database[index] = readDatabase()
    deleteRow()
    database.forEach(newRow)

}



function deleteUser(index){
    database.pop(index)
    update(index)
}

function onLoad(){
    let db = readDatabase()

}

function newRow(user, index){
    let addRow = document.createElement('tr')
    addRow.innerHTML = `
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.cpf}</td>
        <td>${user.id}</td>
        <td class="btn-group-vertical">
                            <button class="btn rounded btn-danger" title="Remove" id="remove-${index}">
                                X
                            </button>
                            <button class="btn rounded btn-primary" title="Edit" id="edit-${index}">
                                E
                            </button>
                        </td>
    `
    document.querySelector('#table>tbody').appendChild(addRow)
}


function deleteRow(index){
    let rows = document.querySelectorAll('#table > tbody > tr')
    rows.forEach(index => {index.parentNode.removeChild(index)})
}


// Criar funçao para deletar e editar as linhas