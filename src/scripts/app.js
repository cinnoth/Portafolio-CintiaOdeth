const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 130);
});

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    menulist.classList.remove('open');
};

var typed = new Typed(".input", {
    strings:["Web Fullstack.", "Web Jr."],
    typeSpeed: 120,
    backSpeed: 70,
    loop: true
})

const btn = document.getElementById('button');

            document.getElementById('form')
                .addEventListener('submit', function (event) {
                    event.preventDefault();

                    btn.value = 'Enviando...';

                    const serviceID = 'default_service';
                    const templateID = 'template_7iejgvp';

                    emailjs.sendForm(serviceID, templateID, this)
                        .then(() => {
                            btn.value = 'Enviar';
                            alert('Mensaje enviado! :)');
                        }, (err) => {
                            btn.value = 'Enviar';
                            alert(JSON.stringify(err));
                        });
                });