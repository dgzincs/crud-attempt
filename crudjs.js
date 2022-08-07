//@douglas

//This my first try building a CRUD by my self, sorry :(


// Reset Local Storage on page reload

window.addEventListener('load', ()=>{
    localStorage.clear()
    console.log('Storage reset done')
})

// -------------<>-------------

const btnNew = document.querySelector('#newUser')
const closeModal = document.querySelector('#closeModal')
const submit = document.querySelector('#submitBtn')

// -------------<>-------------

btnNew.addEventListener('click', function(){
    console.log("Script Working Test");


    document.querySelector('.modal_div').classList.add('Active')
    document.querySelector('#newUser').classList.add('none')
    document.querySelector('#updateUser').classList.add('none')
    document.querySelector('#removeUser').classList.add('none')
    document.querySelector('#delUser').classList.add('none')
    document.querySelector('#indexInput').classList.add('none')
    document.querySelector('#editBtn').classList.add('none')
    document.querySelector('#submitBtn').classList.remove('none')
})

closeModal.addEventListener('click', function(){
    console.log("Script Working Test");

    document.querySelector('.modal_div').classList.remove('Active')
    document.querySelector('#newUser').classList.remove('none')
    document.querySelector('#updateUser').classList.remove('none')
    document.querySelector('#removeUser').classList.remove('none')
    document.querySelector('#delUser').classList.remove('none')
})

const init = {
    name: '',
    age: '',
    email: '',
    country: ''
}


submit.addEventListener('click', function(){

    let newUser = {
        name: window.document.getElementById('usernameInput').value,
        age: window.document.getElementById('ageInput').value,
        email: window.document.getElementById('emailInput').value,
        country: window.document.getElementById('countryInput').value,
    }

   
    createNewUser(newUser)
    updateTable()

    document.querySelector('.modal_div').classList.remove('Active')
    document.querySelector('#newUser').classList.remove('none')
    document.querySelector('#updateUser').classList.remove('none')
    document.querySelector('#removeUser').classList.remove('none')
    document.querySelector('#delUser').classList.remove('none')
    document.querySelector('#indexInput').classList.remove('none')
})


document.querySelector('#removeUser').addEventListener('click', function(){
    let getIndexDelUser = document.querySelector('#delUser').value ?? null
    deleteUser(getIndexDelUser)
    
   

    
})


document.querySelector('#updateUser').addEventListener('click', function(){
    document.querySelector('.modal_div').classList.add('Active')
    document.querySelector('#newUser').classList.add('none')
    document.querySelector('#updateUser').classList.add('none')
    document.querySelector('#removeUser').classList.add('none')
    document.querySelector('#delUser').classList.add('none')
    document.querySelector('#delUser').classList.add('none')
    document.querySelector('#editBtn').classList.remove('none')
    document.querySelector('#submitBtn').classList.add('none')
})

document.querySelector('#editBtn').addEventListener('click', function(){
    let newUser = {
        name: window.document.getElementById('usernameInput').value,
        age: window.document.getElementById('ageInput').value,
        email: window.document.getElementById('emailInput').value,
        country: window.document.getElementById('countryInput').value,
    }

    let indexEdit = window.document.getElementById('indexInput').value

    updateUser(indexEdit, newUser)
    updateTable()


    document.querySelector('.modal_div').classList.remove('Active')
    document.querySelector('#newUser').classList.remove('none')
    document.querySelector('#updateUser').classList.remove('none')
    document.querySelector('#removeUser').classList.remove('none')
    document.querySelector('#delUser').classList.remove('none')
    document.querySelector('#delUser').classList.remove('none')
    document.querySelector('#indexInput').classList.remove('none')
})


const user_test_1 = {
    name: 'Josevaldo',
    age: '100',
    email: 'name@mail.com',
    country: 'BR'
}
const user_test_2 = {
    name: 'Jubiscleido',
    age: '50',
    email: 'name@mail.com',
    country: 'BR'
}
const user_test_3 = {
    name: 'Perisvaldo',
    age: '25',
    email: 'name@mail.com',
    country: 'BR'
}

const getLocalStorage = () => window.localStorage.getItem('users')
const setLocalStorage = (data) => window.localStorage.setItem('users', JSON.stringify(data))


function updateUser(index, user){
    let userUpdated = readDatabase()
    userUpdated[index] = user

    setLocalStorage(userUpdated)

    console.log(showDatabase());
}



function deleteUser(index){
    let userDeleted = readDatabase()
    userDeleted.splice(index, 1)
    setLocalStorage(userDeleted)

    updateTable()
    console.log(showDatabase())
}


function createNewUser(newUser){
    const user_database =  JSON.parse(getLocalStorage()) ?? []
    user_database.push(newUser)
    setLocalStorage(user_database)
}


var readDatabase = () =>  JSON.parse(getLocalStorage())
var showDatabase = () => console.log(JSON.parse(getLocalStorage()))

createNewUser(user_test_1)
createNewUser(user_test_2)


var createNewRow = (newUser, index) => {
    let newRow = document.createElement('tr')
    newRow.innerHTML = 
    `
        <td>${newUser.name}</td>
        <td>${newUser.age}</td>
        <td>${newUser.email}</td>
        <td>${newUser.country}</td>

    `
    document.querySelector('#table > tbody').appendChild(newRow)
}


const  clearTable = () => {
    let rows = document.querySelectorAll('#table > tbody > tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    let user = readDatabase()
    clearTable()
    user.forEach(createNewRow)
}


const getIndex = (i) => {
    let db = readDatabase()
    db[i] = deleteUser(i)
}

const showRows = () => {
    console.log(tableSize)
}

