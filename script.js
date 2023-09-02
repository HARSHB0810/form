var fname = document.getElementById("first-name").value;
var lname= document.getElementById("last-name").value;
var email = document.getElementById("email").value;
var number= document.getElementById("mob-no").value;
var gender=document.getElementById("gender")
var submit=document.querySelector("button")

submit.addEventListener("click", ()=>{
    gender.checked ? gender="Male": gender="Female";
    localStorage.setItem('Full-name',fname)
    localStorage.setItem('Last-name',lname)
    localStorage.setItem('Email-id',email)
    localStorage.setItem('Gender',gender)
    localStorage.setItem('Mobile-number',number)
})
