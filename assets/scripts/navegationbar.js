// NAVEGATION LINKS | GENERAL LINKS --------------------------------------

let href_navegationLink_01 = "#inicio"
let href_navegationLink_02 = "#sobre_terabot"
let href_navegationLink_03 = "#produto"
let href_navegationLink_04 = "#beneficios"
let href_navegationLink_05 = "#fluxograma"
let href_navegationLink_06 = "#utilizacao"
let href_navegationLink_07 = "#mecanismo"
let href_navegationLink_08 = "-"
let href_navegationLink_09 = "-"

let href_a_assing = "-"

let text_navegationLink_01 = "Inicio"
let text_navegationLink_02 = "Sobre"
let text_navegationLink_03 = "Produto"
let text_navegationLink_04 = "Valores"
let text_navegationLink_05 = "Visual"
let text_navegationLink_06 = "Portifólio"
let text_navegationLink_07 = "Equipe"
let text_navegationLink_08 = "-"
let text_navegationLink_09 = "-"

let text_a_assing = "-"

// NAVEGATION LINKS | DROPDOWN LINKS -------------------------------------

let href_dropdown_link_01 = "index.html"
let href_dropdown_link_02 = "veterinarian.html"
let href_dropdown_link_03 = "#"
let href_dropdown_link_04 = "#"
let href_dropdown_link_05 = "#"
let href_dropdown_link_06 = "#"
let href_dropdown_link_07 = "#"

let text_dropdown_link_01 = "TeraBot"
let text_dropdown_link_02 = "Veterinário"
let text_dropdown_link_03 = "-"
let text_dropdown_link_04 = "-"
let text_dropdown_link_05 = "-"
let text_dropdown_link_06 = "-"
let text_dropdown_link_07 = "-"

// NAVEGATION LINKS | UTILITIES ------------------------------------------

let sidenavbar_copyright = "TeraCorporation - 2023"
let header_links_banner_promotion = "#"
let geral_a_whatsapp = "#whatsapp"

// NAVEGATION LINKS | GENERAL LINKS DOOM FUNCITONS -----------------------

const navegationLink_01 = document.querySelectorAll(".navegationLink_01");
const navegationLink_02 = document.querySelectorAll(".navegationLink_02");
const navegationLink_03 = document.querySelectorAll(".navegationLink_03");
const navegationLink_04 = document.querySelectorAll(".navegationLink_04");
const navegationLink_05 = document.querySelectorAll(".navegationLink_05");
const navegationLink_06 = document.querySelectorAll(".navegationLink_06");
const navegationLink_07 = document.querySelectorAll(".navegationLink_07");
const navegationLink_08 = document.querySelectorAll(".navegationLink_08");
const navegationLink_09 = document.querySelectorAll(".navegationLink_09");

const a_assing = document.querySelectorAll(".a-assing");

navegationLink_01.forEach(function(link) {
    link.setAttribute("href", href_navegationLink_01 );
    link.innerText = text_navegationLink_01;
});

navegationLink_02.forEach(function(link) {
    link.setAttribute("href", href_navegationLink_02 );
    link.innerText = text_navegationLink_02;
});

navegationLink_03.forEach(function(link) {
    link.setAttribute("href", href_navegationLink_03 );
    link.innerText = text_navegationLink_03;
});

navegationLink_04.forEach(function(link) {
    link.setAttribute("href", href_navegationLink_04 );
    link.innerText =text_navegationLink_04;
});

navegationLink_05.forEach(function(link) {
    link.setAttribute("href", href_navegationLink_05 );
    link.innerText = text_navegationLink_05;
});

navegationLink_06.forEach(function(link) {
    link.setAttribute("href", href_navegationLink_06 );
    link.innerText = text_navegationLink_06;
});

navegationLink_07.forEach(function(link) {
    link.setAttribute("href", href_navegationLink_07 );
    link.innerText = text_navegationLink_07;
});

navegationLink_08.forEach(function(link) {
    link.setAttribute("href", href_navegationLink_08 );
    link.innerText = text_navegationLink_08;
    link.classList.add('d-none')
});

navegationLink_09.forEach(function(link) {
    link.setAttribute("href", href_navegationLink_09 );
    link.innerText = text_navegationLink_09;
    link.classList.add('d-none')
});

a_assing.forEach(function(link) {
    link.setAttribute("href", href_a_assing );
    link.innerText = text_a_assing;
});

// NAVEGATION SIDE BAR | TEXT DESCRIPTION --------------------------------

const navsidebar_text_copy = document.getElementById('navsidebar-text-copy').innerText = sidenavbar_copyright

// HEADER BANNER PROMOTION -----------------------------------------------

const link_banner_promotion = document.getElementById('link-banner-promotion')
link_banner_promotion.href = header_links_banner_promotion

const header_banner_promotion = document.getElementById('header-banner-promotion')
const button_close_banner_promotion = document.getElementById('close-banner-promotion')
button_close_banner_promotion.addEventListener('click', closeModalBannerPromotion)

function closeModalBannerPromotion(){
    header_banner_promotion.classList.remove('active')
}

function openModalBannerPromotion(){
    header_banner_promotion.classList.add('active')
}

// setTimeout(openModalBannerPromotion, 4000) || function banner promotion

// NAVEGATION HEADER | FUNCTION SCROLL -----------------------------------

const main_navegation_header = document.getElementById('main-navegation-bar')

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    
    if (scrollPosition > 30) {
        main_navegation_header.classList.add('active')
    } else {
        main_navegation_header.classList.remove('active')
    }
});

// NAVEGATION SIDE BAR | OPEN AND CLSOE ---------------------------------- 

const sideNavBar = document.getElementById('container-sidenavbar')
const button_closeNavSideBar = document.getElementById('close-sidenavbar')
const button_openNavSideBar = document.getElementById('button-open-sidenavbar')

sideNavBar.addEventListener('click', removeActiveNavegationSideBar)
button_closeNavSideBar.addEventListener('click', removeActiveNavegationSideBar)

button_openNavSideBar.addEventListener('click', activeNavegationSideBar)

function activeNavegationSideBar(){
    sideNavBar.classList.add('active')
}

function removeActiveNavegationSideBar(){
    sideNavBar.classList.remove('active')
}

// OR PLANS | TABLE PPRICINGS --------------------------------------------

const button_pricing_01 = document.getElementById('button-pricing-1')
const button_pricing_02 = document.getElementById('button-pricing-2')
const button_pricing_03 = document.getElementById('button-pricing-3')
const button_pricing_04 = document.getElementById('button-pricing-4')

button_pricing_01.addEventListener('click', tablePricing01)
button_pricing_02.addEventListener('click', tablePricing02)
button_pricing_03.addEventListener('click', tablePricing03)
button_pricing_04.addEventListener('click', tablePricing04)

button_pricing_03.classList.add('d-none')
button_pricing_04.classList.add('d-none')

// LIST TEXT VARIABLE PRICINGS ------------------------------ //

const title_pricing_01 = document.getElementById('title-pricing-01')
const subtitle_pricing_01 = document.getElementById('subtitle-pricing-01')
const benefits_pricing_01 = document.getElementById('benefits-pricing-01')
const value_pricing_01 = document.getElementById('value-pricing-01')

const title_pricing_02 = document.getElementById('title-pricing-02')
const subtitle_pricing_02 = document.getElementById('subtitle-pricing-02')
const benefits_pricing_02 = document.getElementById('benefits-pricing-02')
const value_pricing_02 = document.getElementById('value-pricing-02')

const title_pricing_03 = document.getElementById('title-pricing-03')
const subtitle_pricing_03 = document.getElementById('subtitle-pricing-03')
const benefits_pricing_03 = document.getElementById('benefits-pricing-03')
const value_pricing_03 = document.getElementById('value-pricing-03')

// PRICE LIST 01 -------------------------------------------- //

function tablePricing01(){
    button_pricing_01.classList.add('active')
    button_pricing_02.classList.remove('active')
    button_pricing_03.classList.remove('active')
    button_pricing_04.classList.remove('active')

    //------------------------------------------------------------//

    title_pricing_01.innerText = ''
    subtitle_pricing_01.innerHTML = 'Plano White'
    benefits_pricing_01.innerHTML ="plano de 5 usuários <br> <strong>+</strong>500 conversas <br> <strong>+</strong>1 canal oficial <br>"
    value_pricing_01.innerHTML = "<span>R$</span> 469 <span>,90</span>"
    value_pricing_01.classList.remove('consult-value')

    title_pricing_02.innerText = ''
    subtitle_pricing_02.innerHTML = 'Planao Grey'
    benefits_pricing_02.innerHTML ="plano de 10 usuários <br> <strong>+</strong>1000 converas <br> <strong>+</strong> 1 canal oficial <br> <strong>+</strong>1 canal não oficial"
    value_pricing_02.innerHTML = "<span>R$</span> 799 <span>,90</span>"
    value_pricing_02.classList.remove('consult-value')

    title_pricing_03.innerText = ''
    subtitle_pricing_03.innerHTML = 'Plano Black'
    benefits_pricing_03.innerHTML ="plano de 30 usuários <br> <strong>+</strong>2000 converas <br> <strong>+</strong> 1 canal oficial <br> <strong>+</strong>1 canal não oficial"
    value_pricing_03.innerHTML = "<span>R$</span> 1.790 <span>,90</span>"
    value_pricing_03.classList.remove('consult-value')
}

tablePricing01()

// PRICE LIST 02 -------------------------------------------- //

function tablePricing02(){
    button_pricing_01.classList.remove('active')
    button_pricing_02.classList.add('active')
    button_pricing_03.classList.remove('active')
    button_pricing_04.classList.remove('active')

    //------------------------------------------------------------//

    title_pricing_01.innerText = ''
    subtitle_pricing_01.innerHTML = 'Enterprise'
    benefits_pricing_01.innerHTML ="plano de 50 usuários <br> <strong>+</strong>5000 converas <br> <strong>+</strong> 1 canal oficial <br> <strong>+</strong>2 canal não oficial"
    value_pricing_01.innerHTML = "consulte"
    value_pricing_01.classList.add('consult-value')

    title_pricing_02.innerText = ''
    subtitle_pricing_02.innerHTML = 'Security I'
    benefits_pricing_02.innerHTML ="plano de 50 usuários <br> <strong>+</strong>5000 converas <br> <strong>+</strong> 1 canal oficial <br> <strong>+</strong>2 canal não oficial <br> <strong>+</strong>10 câmeras"
    value_pricing_02.innerHTML = "consulte"
    value_pricing_02.classList.add('consult-value')

    title_pricing_03.innerText = ''
    subtitle_pricing_03.innerHTML = 'Security II'
    benefits_pricing_03.innerHTML ="plano de 50 usuários <br> <strong>+</strong>5000 converas <br> <strong>+</strong> 1 canal oficial <br> <strong>+</strong>2 canal não oficial <br> <strong>+</strong>20 câmeras"
    value_pricing_03.innerHTML = "consulte"
    value_pricing_03.classList.add('consult-value')
}

// PRICE LIST 03 -------------------------------------------- //

function tablePricing03(){
    button_pricing_01.classList.remove('active')
    button_pricing_02.classList.remove('active')
    button_pricing_03.classList.add('active')
    button_pricing_04.classList.remove('active')

    //------------------------------------------------------------//

    title_pricing_01.innerText = 'plano 1 + telefonia'
    subtitle_pricing_01.innerHTML = '400 <br> mega'
    benefits_pricing_01.innerHTML ="<strong>+</strong>Beneficios telefonia <br> <strong>+</strong>Benficios 02 <br> <strong>+</strong>Benficios 03 <br> <strong>+</strong>Benficios 04 <br> <strong>+</strong>Benficios 05"
    value_pricing_01.innerHTML = "<span>R$</span> 199 <span>,99</span>"

    title_pricing_02.innerText = 'plano 1 + telefonia'
    subtitle_pricing_02.innerHTML = '400 <br> mega'
    benefits_pricing_02.innerHTML ="<strong>+</strong>Beneficios telefonia <br> <strong>+</strong>Benficios 02 <br> <strong>+</strong>Benficios 03 <br> <strong>+</strong>Benficios 04 <br> <strong>+</strong>Benficios 05"
    value_pricing_02.innerHTML = "<span>R$</span> 199 <span>,99</span>"

    title_pricing_03.innerText = 'plano 1 + telefonia'
    subtitle_pricing_03.innerHTML = '400 <br> mega'
    benefits_pricing_03.innerHTML ="<strong>+</strong>Beneficios telefonia <br> <strong>+</strong>Benficios 02 <br> <strong>+</strong>Benficios 03 <br> <strong>+</strong>Benficios 04 <br> <strong>+</strong>Benficios 05"
    value_pricing_03.innerHTML = "<span>R$</span> 199 <span>,99</span>"
}

// PRICE LIST 04 -------------------------------------------- //

function tablePricing04(){
    button_pricing_01.classList.remove('active')
    button_pricing_02.classList.remove('active')
    button_pricing_03.classList.remove('active')
    button_pricing_04.classList.add('active')

    //------------------------------------------------------------//

    title_pricing_01.innerText = 'plano 1 + telefonia'
    subtitle_pricing_01.innerHTML = '500 <br> mega'
    benefits_pricing_01.innerHTML ="<strong>+</strong>Beneficios telefonia <br> <strong>+</strong>Benficios 02 <br> <strong>+</strong>Benficios 03 <br> <strong>+</strong>Benficios 04 <br> <strong>+</strong>Benficios 05"
    value_pricing_01.innerHTML = "<span>R$</span> 199 <span>,99</span>"

    title_pricing_02.innerText = 'plano 1 + telefonia'
    subtitle_pricing_02.innerHTML = '500 <br> mega'
    benefits_pricing_02.innerHTML ="<strong>+</strong>Beneficios telefonia <br> <strong>+</strong>Benficios 02 <br> <strong>+</strong>Benficios 03 <br> <strong>+</strong>Benficios 04 <br> <strong>+</strong>Benficios 05"
    value_pricing_02.innerHTML = "<span>R$</span> 199 <span>,99</span>"

    title_pricing_03.innerText = 'plano 1 + telefonia'
    subtitle_pricing_03.innerHTML = '500 <br> mega'
    benefits_pricing_03.innerHTML ="<strong>+</strong>Beneficios telefonia <br> <strong>+</strong>Benficios 02 <br> <strong>+</strong>Benficios 03 <br> <strong>+</strong>Benficios 04 <br> <strong>+</strong>Benficios 05"
    value_pricing_03.innerHTML = "<span>R$</span> 199 <span>,99</span>"
}

// ----------------------------------------------------------------------

const dropdown_link_01 = document.querySelectorAll(".dropdown-link-01");
const dropdown_link_02 = document.querySelectorAll(".dropdown-link-02");
const dropdown_link_03 = document.querySelectorAll(".dropdown-link-03");
const dropdown_link_04 = document.querySelectorAll(".dropdown-link-04");
const dropdown_link_05 = document.querySelectorAll(".dropdown-link-05");
const dropdown_link_06 = document.querySelectorAll(".dropdown-link-06");
const dropdown_link_07 = document.querySelectorAll(".dropdown-link-07");


dropdown_link_01.forEach(function(link) {
    link.setAttribute("href",href_dropdown_link_01 );
    link.innerText = text_dropdown_link_01;
});

dropdown_link_02.forEach(function(link) {
    link.setAttribute("href", href_dropdown_link_02 );
    link.innerText = text_dropdown_link_02;
});

dropdown_link_03.forEach(function(link) {
    link.setAttribute("href", href_dropdown_link_03 );
    link.innerText = text_dropdown_link_03;
});

dropdown_link_04.forEach(function(link) {
    link.setAttribute("href", href_dropdown_link_04 );
    link.innerText = text_dropdown_link_04;
});

dropdown_link_05.forEach(function(link) {
    link.setAttribute("href", href_dropdown_link_05 );
    link.innerText = text_dropdown_link_05;
});

dropdown_link_06.forEach(function(link) {
    link.setAttribute("href", href_dropdown_link_06 );
    link.innerText = text_dropdown_link_06;
    link.classList.add('d-none')
});

dropdown_link_07.forEach(function(link) {
    link.setAttribute("href", href_dropdown_link_07 );
    link.innerText = text_dropdown_link_07;
    link.classList.add('d-none')
});


// LINK A WHATSAPP ------------------------------------------------------

const links_a_whatsapp = document.querySelectorAll('.a-whatsapp')

links_a_whatsapp.forEach(function(link) {
    link.setAttribute("href", geral_a_whatsapp );
});