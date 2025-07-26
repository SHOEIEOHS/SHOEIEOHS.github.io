const section_all = document.getElementsByClassName("section");
const btn_menu = document.getElementById("btn_menu");
const header_container = document.getElementById("header_container");

const btn_topic = [];
btn_topic[0] = document.getElementById("btn_topic_1");
btn_topic[1] = document.getElementById("btn_topic_2");
btn_topic[2] = document.getElementById("btn_topic_3");
btn_topic[3] = document.getElementById("btn_topic_4");
const btn_index = document.getElementById("btn_index");
const btn_citations = document.getElementById("btn_citations");

const section = [];
section[0] = document.getElementById("section_1");
section[1] = document.getElementById("section_2");
section[2] = document.getElementById("section_3");
section[3] = document.getElementById("section_4");
const section_index = document.getElementById("section_index");
const section_citations = document.getElementById("section_citations");

const btn_into = document.getElementsByClassName("btn_into");
const btn_next = document.getElementsByClassName("btn_next");
const btn_text = document.getElementsByClassName("btn_text");
const btn_h2 = document.getElementsByClassName("btn_h2");
const div_opacity = document.getElementsByClassName("div_opacity");

const sect1_access = document.getElementsByClassName("sect1_access");
const btn_sect1_esc = document.getElementsByClassName("btn_sect1_esc");
const btn_sect1 = document.getElementsByClassName("btn_sect1");
const OW1 = document.getElementsByClassName("OW1");
const figure_sect1 = document.getElementsByClassName("figure_sect1");
const sect1_accessed = document.getElementById("sect1_accessed");

function HIDE_SECTIONS() {
    for (let onesection of section_all) {onesection.style.display="none";}
    for (let i = 0; i < 4; i++) {btn_topic[i].classList.remove("display_in");}
    for (let i = 0; i < btn_text.length; i++) {btn_text[i].classList.add("opacity_out");}
    for (let i = 0; i < btn_h2.length; i++) {btn_h2[i].classList.remove("opacity_out");}
    for (let i = 0; i < div_opacity.length; i++) {div_opacity[i].classList.add("opacity_out"); div_opacity[i].classList.remove("opacity_out_50");}
    sect1_accessed.classList.remove("display_grid"); sect1_accessed.classList.add("display_out");
    for (let i = 0; i < figure_sect1.length; i++) {figure_sect1[i].classList.remove("display_grid"); figure_sect1[i].classList.add("display_out"); figure_sect1[i].classList.add("opacity_out");}
    btn_index.classList.remove("display_in");
    btn_citations.classList.remove("display_in");
}
function HIDE_ALL() {
    HIDE_SECTIONS();
    section_index.style.display="none";
}
function SHOW(Sect) {
    HIDE_ALL();
    btn_index.classList.add("display_out");    
    let onesection = document.getElementById("section_"+Sect);
    console.log(onesection);
    onesection.style.display="grid";
    window.scrollTo(0, 0);
}
function btn_text_SHOW(type) {
    btn_text[type].classList.toggle("opacity_out");
    btn_h2[type].classList.toggle("opacity_out");
    div_opacity[type].classList.toggle("opacity_out_50");
}
function HIDE_SECTION1() {
    sect1_accessed.classList.remove("display_grid");
    for (let i = 0; i < figure_sect1.length; i++) {
        figure_sect1[i].classList.remove("translate_-100");
        figure_sect1[i].classList.remove("translate_100");
        figure_sect1[i].classList.add("opacity_out");

        figure_sect1[i].classList.remove("display_grid");
        figure_sect1[i].classList.add("display_out");
        
    }
}
function ACCESS_SECTION1(Sec) {
    HIDE_SECTION1();
    console.log("Figure: Displayed");
    sect1_accessed.classList.add("display_grid");
    figure_sect1[Sec].classList.remove("opacity_out");
    for (let i = 0; i < figure_sect1.length; i++) {
        figure_sect1[i].classList.add("display_grid");
        figure_sect1[i].classList.remove("display_out");
    }
    /* Everything Under "Moved" */
    for (let i = 0; i < Sec; i++) {
        figure_sect1[i].classList.add("translate_-100");
    }
    /* Everything Above "Moved" */
    for (let i = 8; i > Sec; i--) {
        figure_sect1[i].classList.add("translate_100");
    }
    OW1_STRING(Sec);
}
function STACK_OPACITY(Moved) {
    /* Opacity */
    figure_sect1[Moved].classList.remove("opacity_out");
    /* Everything Under "Moved" */
    for (let i = 0; i < Moved; i++) {
        figure_sect1[i].classList.add("opacity_out");
    }
    /* Everything Above "Moved" */
    for (let i = 8; i > Moved; i--) {
        figure_sect1[i].classList.add("opacity_out");
    }
}
function OW1_STRING(Moved) {
    let OW1_ARRAY = ["Domain", "Kingdom", "Phylum", "Class", "Order", "Suborder", "Family", "Genus", "Species"];
    
    if (Moved == 8) {OW1[1].innerHTML = OW1_ARRAY[0];}
    else {OW1[1].innerHTML = OW1_ARRAY[Moved+1];}

    if (Moved == 0) {OW1[0].innerHTML = OW1_ARRAY[8];}
    else {OW1[0].innerHTML = OW1_ARRAY[Moved-1];}
}
function MOVE_A_STACKUP(Moved) {
    if (Moved == 9) {
        count1 = 0;
        Moved = 0;
        for (let i = 8; i > Moved; i--) {
            figure_sect1[i].classList.add("translate_100");
            figure_sect1[i].classList.remove("translate_-100");
        }
        figure_sect1[Moved].classList.remove("translate_-100");
        figure_sect1[Moved].classList.remove("translate_100");
    }
    else {
        figure_sect1[Moved-1].classList.add("translate_-100");
        figure_sect1[Moved].classList.remove("translate_100");
    }
    STACK_OPACITY(Moved);
    OW1_STRING(Moved);
}
function MOVE_A_STACKDOWN(Moved) {
    if (Moved == -1) {
        count1 = 8;
        Moved = 8;
        for (let i = 0; i < Moved; i++) {
            figure_sect1[i].classList.remove("translate_100");
            figure_sect1[i].classList.add("translate_-100");
        }
        figure_sect1[Moved].classList.remove("translate_-100");
        figure_sect1[Moved].classList.remove("translate_100");
    }
    else {
        figure_sect1[Moved].classList.remove("translate_-100");
        figure_sect1[Moved+1].classList.add("translate_100");
    }
    STACK_OPACITY(Moved);
    OW1_STRING(Moved);
}

btn_menu.addEventListener("click", function () {
    for (let i = 0; i < 4; i++) {
        btn_topic[i].classList.toggle("display_in");
    }
    btn_citations.classList.toggle("display_in");
    btn_index.classList.toggle("display_in");
    console.log("Navigation Options | Display");
});

btn_topic[0].addEventListener("click", function() {SHOW(1);});
btn_topic[1].addEventListener("click", function() {SHOW(2);});
btn_topic[2].addEventListener("click", function() {SHOW(3);});
btn_topic[3].addEventListener("click", function() {SHOW(4);});
btn_index.addEventListener("click", function() {SHOW("index");});
btn_citations.addEventListener("click", function() {SHOW("citation");});

btn_into[0].addEventListener("click", function() {SHOW(1);});
btn_into[1].addEventListener("click", function() {SHOW(2);});
btn_into[2].addEventListener("click", function() {SHOW(3);});
btn_into[3].addEventListener("click", function() {SHOW(4);});
btn_next[0].addEventListener("click", function() {btn_text_SHOW(0);});
btn_next[1].addEventListener("click", function() {btn_text_SHOW(1);});
btn_next[2].addEventListener("click", function() {btn_text_SHOW(2);});
btn_next[3].addEventListener("click", function() {btn_text_SHOW(3);});

let count1;
sect1_access[0].addEventListener("click", function() {ACCESS_SECTION1(0); count1 = 0;});
sect1_access[1].addEventListener("click", function() {ACCESS_SECTION1(1); count1 = 1;});
sect1_access[2].addEventListener("click", function() {ACCESS_SECTION1(2); count1 = 2;});
sect1_access[3].addEventListener("click", function() {ACCESS_SECTION1(3); count1 = 3;});
sect1_access[4].addEventListener("click", function() {ACCESS_SECTION1(4); count1 = 4;});
sect1_access[5].addEventListener("click", function() {ACCESS_SECTION1(5); count1 = 5;});
sect1_access[6].addEventListener("click", function() {ACCESS_SECTION1(6); count1 = 6;});
sect1_access[7].addEventListener("click", function() {ACCESS_SECTION1(7); count1 = 7;});
sect1_access[8].addEventListener("click", function() {ACCESS_SECTION1(8); count1 = 8;});

btn_sect1[0].addEventListener("click", function() {
    count1 -= 1;
    console.log("Count1: "+count1);
    MOVE_A_STACKDOWN(count1);
});
btn_sect1[1].addEventListener("click", function() {
    count1 += 1;
    console.log("Count1: "+count1);
    MOVE_A_STACKUP(count1);
});
for (let i = 0; i < btn_sect1_esc.length; i++) {
    btn_sect1_esc[i].addEventListener("click", HIDE_SECTION1);
}

HIDE_SECTIONS();