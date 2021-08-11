let nam =document.querySelector('.name')
let age =document.querySelector('.age')
let date =document.querySelector('.date')
let btn = document.querySelector('.btn')
let table = document.querySelector('.tab')




nam.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        date.focus();
    }
})
date.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        age.focus();
    }
})

age.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        btn.focus();
    }
})





btn.addEventListener("click",()=>{
    let tr = document.createElement('tr')
    table.appendChild(tr)
    let tdname =document.createElement('td')
    let tdage =document.createElement('td')
    let tddate =document.createElement('td')
    let trmv = document.createElement('td')
    let rmv = document.createElement('button')
    tdname.textContent =`${nam.value}`
    tdage.textContent =`${age.value} $`
    tddate.textContent =`${date.value}`
    rmv.textContent='x'
    tr.appendChild(tdname)
    tr.appendChild(tddate)
    tr.appendChild(tdage)
    tr.appendChild(trmv).appendChild(rmv)
    rmv.addEventListener('click',()=>{
        table.removeChild(tr)
    })


    date.value = age.value =nam.value = ""
})
