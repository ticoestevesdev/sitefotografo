var menuMobile = document.getElementById("menu__mobile");

function closeMenu() {   
    menuMobile.classList.remove("animate__slideInDown");
    menuMobile.classList.add("animate__slideOutUp");
    menuMobile.style.top = "-100";
}
function openMenu() {
    menuMobile.style.display = "block";
    menuMobile.classList.remove("animate__slideOutUp");
    menuMobile.classList.add("animate__slideInDown");
    menuMobile.style.top = "0";
}
document.getElementById("show__menu").addEventListener("click", openMenu);

function verify() {
    var nameForm = document.getElementById("name").value;
    var emailForm = document.getElementById("email").value;
    var messageForm = document.getElementById("message").value;
    if(nameForm == ""){
        alert("Digite seu nome.");
    }else if(emailForm == ""){
        alert("Digite seu email.");
    }else if(emailForm.indexOf("@")==-1 || emailForm.indexOf(".")==-1 ){
        alert("Digite um e-mail válido.");
    }else if(messageForm == ""){
        alert("Digite sua mensagem.");
    }else{
        alert(`Olá ` + nameForm + ` o formulário funciona com sucesso!
        
                Quer o seu site?
                Entre em contato: 

                ticoestevescontato@gmail.com`);
    }
}
document.getElementById("submit").addEventListener("click", verify);

var contactForm = document.getElementById("form");

function closeForm() {
    contactForm.classList.remove("animate__slideInDown");
    contactForm.classList.add("animate__slideOutUp");
    contactForm.style.top = "-100";
}
document.getElementById("close").addEventListener("click", closeForm);

function openForm() {
    contactForm.style.display = "block";
    contactForm.classList.remove("animate__slideOutUp");
    contactForm.classList.add("animate__slideInDown");
    contactForm.style.top = "0";
}
document.getElementById("email__camera").addEventListener("click", openForm);

function openModal(idModal) {
    let modal = document.getElementById(idModal);
    modal.showModal();
}

function closeModal(idModal) {
    let modal = document.getElementById(idModal);
    modal.close();
}