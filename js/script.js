//Slider
let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;

function nextImage(){
    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex>=max)
        currentImageIndex=0
    

    images[currentImageIndex].classList.add("selected")
}

function start (){
    setInterval(()=>{
        //troca de imagem
        nextImage()
    },time);
}

window.addEventListener("load", start);

//Modal Form Login
const login_form=document.querySelector(".login_form")
const login_form_agendamento=document.querySelector(".form-agendamento")
const loginFields=document.querySelectorAll(".loginField")
const agendamentoFields=document.querySelectorAll(".agendamentoField")
document.querySelectorAll(".button-access").forEach(bt=>{
	bt.onclick=showLogin
})
document.querySelectorAll(".button-agendar").forEach(bt=>{
	bt.onclick=showAgendamento
})

document.querySelectorAll(".bt_close").forEach(el=>{
	el.onclick=closeLogin
})

document.querySelectorAll(".bt_close-agendamento").forEach(ag=>{
	ag.onclick=closeAgendamento
})

function showLogin(l){
	l.preventDefault()
	login_form.classList.add("show_login")
	cleanLoginFields()
}
function closeLogin(){
	login_form.classList.remove("show_login")
}

function showAgendamento(a){
	a.preventDefault()
	login_form_agendamento.classList.add("show_agendamento")
	cleanLoginFields()
}
function closeAgendamento(){
	login_form_agendamento.classList.remove("show_agendamento")
}

function cleanLoginFields(){
	for(let i=0;i<loginFields.length;i++){
		loginFields[i].value=""
	}
	loginFields[0].focus()
}