const REDPANDA = document.getElementById("REDPANDA");
    const section_all = document.getElementsByClassName("section");

    const header_container = document.getElementById("header_container");
        const btn_menu = document.getElementById("btn_menu");
        const nav_container = document.getElementById("nav_container");
            const btn_topic = [];
                    btn_topic[0] = document.getElementById("btn_topic_1");
                    btn_topic[1] = document.getElementById("btn_topic_2");
                    const btn_index = document.getElementById("btn_index");
        const Fullscreen = document.getElementById("Fullscreen");

        const div_opacity = document.getElementsByClassName("div_opacity");
        const btn_into = document.getElementsByClassName("btn_into");
        const btn_next = document.getElementsByClassName("btn_next");
        const btn_text = document.getElementsByClassName("btn_text");
        const btn_h2 = document.getElementsByClassName("btn_h2");

        const section = [];
            section[0] = document.getElementById("section_1");
            section[1] = document.getElementById("section_2");
            const section_index = document.getElementById("section_index");
    
    const footer_id = document.getElementById("footer_id");

/* S1 */
const sect1_access = document.getElementsByClassName("sect1_access");
    const sect1_accessed = document.getElementById("sect1_accessed");
        const btn_sect1_esc = document.getElementsByClassName("btn_sect1_esc");
        const btn_sect1 = document.getElementsByClassName("btn_sect1");
            const OW1 = document.getElementsByClassName("OW1");
        const figure_sect1 = document.getElementsByClassName("figure_sect1");
            const S1_RSW_HIDE = document.getElementById("S1_RSW_HIDE");
/* S2 */
const sect2_art = document.getElementsByClassName("sect2_art");
    const btn_sect2_OW3 = document.getElementsByClassName("btn_sect2_OW3");
    const OW3_Element = document.getElementsByClassName("OW3_Element");
    const OW3_btn_remove = document.getElementById("OW3_btn_remove");

    const btn_sect2 = document.getElementsByClassName("btn_sect2");
    const sect2_div = document.getElementsByClassName("sect2_div");
        const btn_sect2_back = document.getElementsByClassName("btn_sect2_back");
        const btn_showCtg = document.getElementsByClassName("btn_showCtg");

    const sect2_flex_grid = document.getElementById("sect2_flex_grid");
    const S2_h3_Content = document.getElementsByClassName("S2_h3_Content");

/* Quiz Stuff | S1 */
const btn_Qz1Submit = document.getElementById("btn_Qz1Submit");
const Qz1_ScoreBox = document.getElementById("Qz1_ScoreBox");
    const S1_Qz1_FB = document.getElementsByClassName("S1_Qz1_FB");

/* Game Stuff | S2 */
const S2_GM = document.getElementById("S2_GM");
    const S2_GMSRT = document.getElementById("S2_GMSRT");
    const S2_GM_restart = document.getElementById("S2_GM_restart");
    const S2_GM_exit = document.getElementById("S2_GM_exit");
    const Aud_S2_GM_Start = new Audio("audio/transitional-swipe-211688.mp3");
    const Aud_S2_GM_GOOD = [];
    for (let i = 0; i < 6; i++) {Aud_S2_GM_GOOD[i] = new Audio("audio/wine-cork-pop-352295.mp3");}
    const Aud_S2_GM_BAD = [];
    for (let i = 0; i < 3; i++) {Aud_S2_GM_BAD[i] = new Audio("audio/luggage-drop-1-47660.mp3");}

    const S2_GMETY = document.getElementsByClassName("S2_GMETY");
    const S2_GMBTN_HOLDER = document.getElementsByClassName("S2_GMBTN_HOLDER");
    const S2_GM_score = document.getElementById("S2_GM_score");
    const S2_GM_livesAmt = document.getElementById("S2_GM_livesAmt");
    const hide = document.getElementsByClassName("hide");
/* ---------------------------------------------------------------------------------------- */
let CurrentPage = "index";
let CWidth;
CWidth = window.innerWidth;
window.addEventListener("resize", function() {CWidth = window.innerWidth; console.log(CWidth); SHOW(CurrentPage);});
/****************/
function HIDE_SECTIONS() {
    HIDE_SECTION1();
    for (let i = 0; i < sect2_div.length; i++) {HIDE_SECTION2(i);}
    S2_GM_STOP();
    for (let onesection of section_all) {onesection.style.display="none";}
    for (let i = 0; i < btn_text.length; i++) {btn_text[i].classList.add("opacity_out");}
    for (let i = 0; i < btn_h2.length; i++) {btn_h2[i].classList.remove("opacity_out");}
    for (let i = 0; i < div_opacity.length; i++) {div_opacity[i].classList.add("opacity_out"); div_opacity[i].classList.remove("opacity_out_50");}
    sect1_accessed.classList.remove("display_grid"); sect1_accessed.classList.add("display_out");
    for (let i = 0; i < OW3_Element.length; i++) {OW3_Element[i].classList.add("opacity_out");}
    for (let i = 0; i < figure_sect1.length; i++) {figure_sect1[i].classList.remove("display_grid"); figure_sect1[i].classList.add("display_out", "opacity_out");}
    for (let i = 0; i < S2_GMETY.length; i++) {S2_GMETY[i].classList.add("opacity_out");}
    for (let i = 0; i < S2_GMETY.length; i++) {S2_GMETY[i].classList.add("S2_GM_H1PC");}
    for (let i = 0; i < btn_showCtg.length; i++) {btn_showCtg[i].classList.remove("animate_Sect2_Ctg_2", "animate_Sect2_Ctg_1");
    }
    btn_sect2_OW3[1].classList.add("display_out");
    OW3_btn_remove.classList.remove("opacity_out");
    // for (let i = 0; i < S1_Qz1_FB.length; i++) {S1_Qz1_FB[i].classList.remove("font_colorRed", "font_colorGreen");}
    console.log(CWidth);
    for (let i = 0; i < sect2_art.length; i++) {
        if (CWidth >= 800) {
            btn_menu.classList.add("display_out");
            for (let i = 0; i < 2; i++) {btn_topic[i].classList.remove("display_out");}
            btn_index.classList.remove("display_out");
            S1_RSW_HIDE.classList.add("display_out");
            for (let i = 0; i < figure_sect1.length; i++) {
                figure_sect1[i].classList.remove("translate_-55Y");
                figure_sect1[i].classList.remove("translate_134X");
            }
            sect2_flex_grid.classList.remove("height_130vw");
        }
        else {
            btn_menu.classList.remove("display_out");
            for (let i = 0; i < 2; i++) {btn_topic[i].classList.add("display_out");}
            btn_index.classList.add("display_out");
            S1_RSW_HIDE.classList.remove("display_out");
            for (let i = 0; i < figure_sect1.length; i++) {
                figure_sect1[i].classList.remove("translate_-135X");
                figure_sect1[i].classList.remove("translate_134X");
                figure_sect1[i].classList.remove("translate_45Y");

            }
            sect2_flex_grid.classList.add("height_130vw");
        }
    }
}
function HIDE_ALL() {
    HIDE_SECTIONS();
    section_index.style.display="none";
}
function SHOW(Sect) {
    HIDE_ALL();
    let onesection = document.getElementById("section_"+Sect);
    console.log(onesection);
    onesection.style.display="grid";
    window.scrollTo(0, 0);
}
function HIDE_SECTION1() {
    sect1_accessed.classList.remove("display_grid");
    for (let i = 0; i < figure_sect1.length; i++) {
        if (CWidth < 800) {
            figure_sect1[i].classList.remove("translate_-55Y");
            figure_sect1[i].classList.remove("translate_45Y");
        }
        else {
            figure_sect1[i].classList.remove("translate_-135X");
            figure_sect1[i].classList.remove("translate_134X");
        }
        figure_sect1[i].classList.add("opacity_out");

        figure_sect1[i].classList.remove("display_grid");
        figure_sect1[i].classList.add("display_out");
    }
}
function HIDE_SECTION2(Sec) {
    sect2_div[Sec].classList.add("opacity_out", "CVis");
    sect2_div[Sec].classList.remove("display_grid");
    for (let i = 0; i < btn_showCtg.length; i++) {btn_showCtg[i].classList.remove("animate_Sect2_Ctg_2", "animate_Sect2_Ctg_1");}

    if (CWidth < 800) {
        S2_h3_Content[Sec].classList.add("align_center", "font_7_5vw");
        S2_h3_Content[Sec].classList.remove("align_end");
        for (let i = 0; i < S2_h3_Content.length; i++) {
            S2_h3_Content[i].classList.add("font_7_5vw");
        }
        for (let i = 0; i < sect2_art.length; i++) {
            sect2_art[i].classList.remove("flex_15Ctg", "flex_40Ctg", "flex_20Ctg");
            sect2_art[i].classList.add("flex_100Ctg");
        }
        for (let i = 0; i < S2_h3_Content.length; i++) {
            S2_h3_Content[i].classList.remove("height_32vw", "font_0_9vw");
            S2_h3_Content[i].classList.remove("height_3vw", "align_end", "font_2vw");
        }
        sect2_art[0].classList.remove("back_pos_0");
        sect2_art[1].classList.remove("back_pos_11X");
        for (let i = 2; i < 5; i++) {
            sect2_art[i].classList.remove("back_pos_51X");
        }
    }
    else {
        sect2_art[0].classList.add("back_pos_0");
        sect2_art[1].classList.add("back_pos_11X");
        for (let i = 2; i < 5; i++) {
            sect2_art[i].classList.add("back_pos_51X");
        }
        for (let i = 0; i < sect2_art.length; i++) {
            sect2_art[i].classList.remove("flex_15Ctg", "flex_40Ctg", "flex_100Ctg");
            sect2_art[i].classList.add("flex_20Ctg");
        }
        for (let i = 0; i < S2_h3_Content.length; i++) {
            S2_h3_Content[i].classList.add("height_32vw", "font_0_9vw");
            S2_h3_Content[i].classList.remove("height_3vw", "align_end", "font_2vw", "font_7_5vw", "align_center");
        }
    }
}
function GET_CURRENT_PAGE(Page) {
    CurrentPage=Page; console.log("CurrentPage: "+CurrentPage);
}
/****************/
function btn_text_SHOW(type) {
    btn_text[type].classList.toggle("opacity_out");
    btn_h2[type].classList.toggle("opacity_out");
    div_opacity[type].classList.toggle("opacity_out_50");
}
/****************/
function ACCESS_SECTION1(Sec) {
    HIDE_SECTION1();
    console.log("Figure: Displayed");
    sect1_accessed.classList.add("display_grid");
    figure_sect1[Sec].classList.remove("opacity_out");
    for (let i = 0; i < figure_sect1.length; i++) {
        figure_sect1[i].classList.add("display_grid");
        figure_sect1[i].classList.remove("display_out");
    }
    if (CWidth < 800) {
        /* Everything Under "Moved" */
        for (let i = 0; i < Sec; i++) {
            figure_sect1[i].classList.add("translate_-55Y");
        }
        /* Everything Above "Moved" */
        for (let i = 8; i > Sec; i--) {
            figure_sect1[i].classList.add("translate_45Y");
        }
    }
    else {
        /* Everything Under "Moved" */
        for (let i = 0; i < Sec; i++) {
            figure_sect1[i].classList.add("translate_-135X");
        }
        /* Everything Above "Moved" */
        for (let i = 8; i > Sec; i--) {
            figure_sect1[i].classList.add("translate_134X");
        }
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
        if (CWidth < 800) {
            if (Moved == 9) {
                count1 = 0;
                Moved = 0;
                for (let i = 8; i > Moved; i--) {
                    figure_sect1[i].classList.add("translate_45Y");
                    figure_sect1[i].classList.remove("translate_-55Y");
                }
                figure_sect1[Moved].classList.remove("translate_-55Y");
                figure_sect1[Moved].classList.remove("translate_45Y");
            }
            else {
                figure_sect1[Moved-1].classList.add("translate_-55Y");
                figure_sect1[Moved].classList.remove("translate_45Y");
            }
        }
        else {
            if (Moved == 9) {
                count1 = 0;
                Moved = 0;
                for (let i = 8; i > Moved; i--) {
                    figure_sect1[i].classList.add("translate_134X");
                    figure_sect1[i].classList.remove("translate_-135X");
                }
                figure_sect1[Moved].classList.remove("translate_-135X");
                figure_sect1[Moved].classList.remove("translate_134X");
            }
            else {
                figure_sect1[Moved-1].classList.add("translate_-135X");
                figure_sect1[Moved].classList.remove("translate_134X");
            }
        }
        STACK_OPACITY(Moved);
        OW1_STRING(Moved);
    }
    function MOVE_A_STACKDOWN(Moved) {
        if (CWidth < 800) {
            if (Moved == -1) {
                count1 = 8;
                Moved = 8;
                for (let i = 0; i < Moved; i++) {
                    figure_sect1[i].classList.remove("translate_45Y");
                    figure_sect1[i].classList.add("translate_-55Y");
                }
                figure_sect1[Moved].classList.remove("translate_-55Y");
                figure_sect1[Moved].classList.remove("translate_45Y");
            }
            else {
                figure_sect1[Moved].classList.remove("translate_-55Y");
                figure_sect1[Moved+1].classList.add("translate_45Y");
            }
        }
        else {
            if (Moved == -1) {
                count1 = 8;
                Moved = 8;
                for (let i = 0; i < Moved; i++) {
                    figure_sect1[i].classList.remove("translate_134X");
                    figure_sect1[i].classList.add("translate_-135X");
                }
                figure_sect1[Moved].classList.remove("translate_-135X");
                figure_sect1[Moved].classList.remove("translate_134X");
            }
            else {
                figure_sect1[Moved].classList.remove("translate_-135X");
                figure_sect1[Moved+1].classList.add("translate_134X");
            }
        }
        STACK_OPACITY(Moved);
        OW1_STRING(Moved);
    }
/****************/
function ACCESS_SECTION2(Sec) {
    sect2_div[Sec].classList.add("display_grid");
    sect2_div[Sec].classList.remove("opacity_out", "CVis");
    S2_h3_Content[Sec].classList.remove("align_center");
    S2_h3_Content[Sec].classList.add("align_end");
    for (let i = 0; i < btn_showCtg.length; i++) {btn_showCtg[i].classList.remove("animate_Sect2_Ctg_2", "animate_Sect2_Ctg_1");}
    btn_showCtg[Sec].innerHTML = '%'; // To ensure that OW2_CTG() works correctly
    if (CWidth >= 800) {
        sect2_art[Sec].classList.remove("flex_15Ctg", "flex_20Ctg");
        sect2_art[Sec].classList.add("flex_40Ctg");
       
        for (let i = 0; i < Sec; i++) {
            sect2_art[i].classList.add("flex_15Ctg");
            sect2_art[i].classList.remove("flex_20Ctg", "flex_40Ctg");

            sect2_div[i].classList.add("opacity_out", "CVis");
            sect2_div[i].classList.remove("display_grid");
        }
        for (let i = sect2_div.length-1; i > Sec; i--) {
            sect2_art[i].classList.add("flex_15Ctg");
            sect2_art[i].classList.remove("flex_20Ctg", "flex_40Ctg");
            
            sect2_div[i].classList.add("opacity_out", "CVis");
            sect2_div[i].classList.remove("display_grid");
        }
        for (let i = 0; i < Sec; i++) {
            S2_h3_Content[i].classList.add("font_0_9vw");
            S2_h3_Content[i].classList.remove("font_2vw");
        }
        for (let i = S2_h3_Content.length-1; i > Sec; i--) {
            S2_h3_Content[i].classList.add("font_0_9vw");
            S2_h3_Content[i].classList.remove("font_2vw");
        }
        S2_h3_Content[Sec].classList.remove("height_32vw", "font_0_9vw");
        S2_h3_Content[Sec].classList.add("height_3vw", "font_2vw");
    }
    else {
        S2_h3_Content[Sec].classList.remove("align_center");
    }
}
    function OW3_pDetails(clue) {
        btn_sect2_OW3[1].classList.remove("display_out");
        OW3_btn_remove.classList.add("opacity_out");
        for (let i = 0; i < OW3_Element.length; i++) {OW3_Element[i].classList.add("opacity_out");}
        setTimeout(function() {OW3_Element[count2].classList.remove("opacity_out");}, 250);
        if (count2 == OW3_Element.length-1 && clue == 0) {count2 = -1;}
    }
    function OW2_CTG(Sec) {
        let OW2_ARRAY = ["95", "<1", "<1", "<1", "<1"];
        let inner = btn_showCtg[Sec].innerHTML;
        console.log(inner);
        if (inner != '%') {
            btn_showCtg[Sec].classList.remove("animate_Sect2_Ctg_2");
            btn_showCtg[Sec].classList.add("animate_Sect2_Ctg_1");
            setTimeout(function() {btn_showCtg[Sec].innerHTML = '%';}, 450);
        }
        else if (inner == '%') {
            btn_showCtg[Sec].classList.add("animate_Sect2_Ctg_2");
            btn_showCtg[Sec].classList.remove("animate_Sect2_Ctg_1");
            setTimeout(function() {btn_showCtg[Sec].innerHTML = OW2_ARRAY[Sec];}, 450);
        }
    }
/****************/
function S1_Qz1_CHECK_ANS() {
    let S1_Qz1_score = 0;
    let S1_Ans1_1 = document.querySelector("input[name='Q1']:checked").value;
    let S1_Ans2_1 = document.querySelector("input[name='Q2']:checked").value;
    let S1_Ans3_1 = document.querySelector("input[name='Q3']:checked").value;
    if (S1_Ans1_1=="Ringtails") {
        S1_Qz1_score++;
        S1_Qz1_FB[0].classList.remove("font_colorRed"); 
        S1_Qz1_FB[0].classList.add("font_colorGreen");
    }
    else {
        S1_Qz1_FB[0].classList.add("font_colorRed"); 
        S1_Qz1_FB[0].classList.remove("font_colorGreen");
    }
    if (S1_Ans2_1=='2') {
        S1_Qz1_score++;
        S1_Qz1_FB[1].classList.remove("font_colorRed"); 
        S1_Qz1_FB[1].classList.add("font_colorGreen");
    }
    else {
        S1_Qz1_FB[1].classList.add("font_colorRed"); 
        S1_Qz1_FB[1].classList.remove("font_colorGreen");
    }
    if (S1_Ans3_1=="Himalayas") {
        S1_Qz1_score++;
        S1_Qz1_FB[2].classList.remove("font_colorRed"); 
        S1_Qz1_FB[2].classList.add("font_colorGreen");
    }
    else {
        S1_Qz1_FB[2].classList.add("font_colorRed"); 
        S1_Qz1_FB[2].classList.remove("font_colorGreen");
    }
    Qz1_ScoreBox.innerHTML = `You Scored ${S1_Qz1_score} / 3`;
}
/****************/
let S2_ID, GM_score, GM_lives, GM2_AUD1_G = 0, GM2_AUD2_B = 0;
function S2_GM_DIET() {
    GM_lives = 3; GM_score = 0;
    for (let i = 0; i < sect2_div.length; i++) {HIDE_SECTION2(i);}
    for (let i = 0; i < hide.length; i++) {hide[i].classList.add("display_out");}
    Aud_S2_GM_Start.play();
    scrollTo(0, 0);
    WD_FULLSCREEN();
    S2_GM.classList.add("pos_sticky_bottom");
    REDPANDA.style.overflow = "hidden";
    Fullscreen.classList.add("display_out");
    footer_id.classList.add("display_out");
    if (CWidth < 800) {S2_GM_exit.classList.add("S2_GM_H1", "S2_GM_Font5vw");}
    else {S2_GM_exit.classList.add("S2_GM_Font1_5vw");}
    setTimeout(
        function() {
            btn_menu.classList.add("display_out");
            nav_container.classList.add("display_out");
            header_container.classList.add("opacity_out"); 
            S2_GMBTN_HOLDER[0].classList.add("display_out");
            S2_GMSRT.classList.add("display_out");
            S2_GMBTN_HOLDER[2].classList.remove("display_out");
            S2_GM_score.innerHTML = "SCORE "+GM_score;
            S2_GM_livesAmt.innerHTML = GM_lives;
            
        }, 230);
    for (let i = 0; i < S2_GMETY.length; i++) {
        S2_GMETY[i].style.top = -20+"vh";
        S2_GMETY[i].style.left = -20+"vw";
        S2_GMETY[i].classList.remove("display_out");
    }
    
    S2_ID = setInterval(function() {
        S2_GM_MECH(); 
    }, 3700);
}
    function S2_GM_MECH() {
        let Batch = 0; Batch = S2_GM_BATCH(6, 4);
        let Wall = Math.round(Math.random() * 3) + 1;
        let EtyC = [Batch];
        let newpos = 0;
        let Elements = [S2_GMETY.length];
        for (let i = 0; i < S2_GMETY.length; i++) {
            S2_GMETY[i].classList.add("opacity_out");
            S2_GMETY[i].classList.remove("animate_S2_GMETY_SPIN1");
        }
        
        for (let i = 0; i < S2_GMETY.length; i++) {
            Elements[i] = Math.round(Math.random() * (S2_GMETY.length-1));
            for (let j = 0; j < S2_GMETY.length; j++) {
                if (Elements[i] == Elements[j] && (i != j)) {
                    i--; 
                } 
            }
        }
        // for (let i = 0; i < S2_GMETY.length; i++) {console.log("Elements: "+Elements[i]);}
        for (let i = 0; i < Batch; i++) {EtyC[i] = Elements[i];}
        // for (let i = 0; i < Batch; i++) {console.log("EtyC: "+EtyC[i]);}
        /* Position Spawn */
        switch(Wall) {
            case 3: 
            case 4: 
                for (let i = 0; i < Batch; i++) {
                    if (Wall == 3) { /* Left */
                        S2_GMETY[EtyC[i]].style.left = -33+"vw";
                    }
                    else { /* Right */
                        S2_GMETY[EtyC[i]].style.left = 115+"vw";
                    } 
                    S2_GMETY[EtyC[i]].style.top = S2_GM_POS(98, -8)+"vh";
                }
                break;
            default:
                for (let i = 0; i < Batch; i++) {
                    if (Wall == 1) { /* Top */
                        S2_GMETY[EtyC[i]].style.top = -25+"vh";
                    }
                    else { /* Bottom */
                        S2_GMETY[EtyC[i]].style.top = 115+"vh";
                    } 
                    S2_GMETY[EtyC[i]].style.left = S2_GM_POS(79, 0)+"vw";
                }
            break;
        }
        for (let i = 0; i < S2_GMETY.length; i++) {S2_GMETY[i].classList.remove("opacity_out", "S2_GMETY_TRANS1", "S2_GMETY_TRANS2", "S2_GMETY_TRANS3", "S2_GMETY_TRANS4", "display_out", "animate_S2_GMETY_SPIN1");}
        /* Position Reallocation, randomize another position on the other side: R1: left: 21vw to 58vw, R2: 23vh to 67vh */
        do {
            let choice = Math.round(Math.random() * 3) + 1;
            let Speed = Math.round(Math.random() * 3) + 1;

            if (choice == 4 && Wall != 4) { // Right
                S2_GMETY[EtyC[newpos]].style.left = 115+"vw";
                if (CWidth < 800) {S2_GMETY[EtyC[newpos]].style.top = S2_GM_POS(67, 23) + "vh";}
                else {S2_GMETY[EtyC[newpos]].style.top = S2_GM_POS(55, 18) + "vh";}
                S2_GMETY[EtyC[newpos]].classList.add("S2_GMETY_TRANS"+Speed);
                newpos++;
            }
            else if (choice == 3 && Wall != 3) { // Left
                S2_GMETY[EtyC[newpos]].style.left = -33+"vw";
                if (CWidth < 800) {S2_GMETY[EtyC[newpos]].style.top = S2_GM_POS(67, 23) + "vh";}
                else {S2_GMETY[EtyC[newpos]].style.top = S2_GM_POS(55, 18) + "vh";}
                S2_GMETY[EtyC[newpos]].classList.add("S2_GMETY_TRANS"+Speed);
                newpos++;
            }
            else if (choice == 2 && Wall != 2) { // Bottom
                S2_GMETY[EtyC[newpos]].style.top = 115+"vh";
                if (CWidth < 800) {S2_GMETY[EtyC[newpos]].style.left = S2_GM_POS(58, 21) + "vw";}
                else {S2_GMETY[EtyC[newpos]].style.left = S2_GM_POS(72, 14) + "vw";}
                S2_GMETY[EtyC[newpos]].classList.add("S2_GMETY_TRANS"+Speed);
                newpos++;
            }
            else if (choice == 1 && Wall != 1) { // Top
                S2_GMETY[EtyC[newpos]].style.top = -25+"vh";
                if (CWidth < 800) {S2_GMETY[EtyC[newpos]].style.left = S2_GM_POS(58, 21) + "vw";}
                else {S2_GMETY[EtyC[newpos]].style.left = S2_GM_POS(72, 14) + "vw";}
                S2_GMETY[EtyC[newpos]].classList.add("S2_GMETY_TRANS"+Speed);
                newpos++;
            }
        } while (newpos < Batch);
        /* Score */
        for (let i = 0; i < Batch; i++) {
            S2_GMETY[EtyC[i]].classList.add("animate_S2_GMETY_SPIN1");
        }
    }
        function S2_GM_BATCH(Max, Min) {return Math.round(Math.random() * (Max-Min)) + Min;}
        function S2_GM_POS(Max, Min) {return Math.random() * (Max - Min) + Min;}
        function S2_GM_GET_TYPE(Type, Num) {
            S2_GMETY[Num].classList.add("display_out");
            switch(Type) {
                case "BB": GM_score += 500;
                    break;
                case "EGG": GM_score += 500;
                    break;
                case "BMBO": GM_score += 500;
                    break;
                case "LYCHEE": GM_score += 500;
                    break;
                case "ACORN": GM_score += 500;
                    break;
                case "COCO": GM_lives -= 1;
                    Aud_S2_GM_BAD[GM2_AUD2_B].play(); GM2_AUD2_B++; GM2_AUD2_B %= 2;
                    break;
                default:
                    break;
            }
            if (Type != "COCO") {Aud_S2_GM_GOOD[GM2_AUD1_G].play(); GM2_AUD1_G++; GM2_AUD1_G %= 5;}
            // console.log("S2_GM_score: "+GM_score);
            S2_GM_score.innerHTML = "SCORE "+GM_score;
            S2_GM_livesAmt.innerHTML = GM_lives;
            S2_GM_END_Condition();
        }
        function S2_GM_END_Condition() {
            if (GM_lives <= 0) {
                clearInterval(S2_ID);
                S2_GMBTN_HOLDER[1].classList.remove("display_out");
                if (CWidth < 800) {
                    S2_GMBTN_HOLDER[2].classList.add("S2_GM_H2"); 
                    S2_GM_exit.classList.remove("S2_GM_H1", "S2_GM_Font5vw"); S2_GM_exit.classList.add("S2_GM_Font7vw", "S2_GM_H0");
                }
                else {
                    S2_GMBTN_HOLDER[2].classList.add("S2_GM_H3", "S2_GM_H4");
                    S2_GM_exit.classList.remove("S2_GM_H1", "S2_GM_Font1_5vw"); S2_GM_exit.classList.add("S2_GM_Font1_9vw");
                }
                

                for (let i = 0; i < S2_GMETY.length; i++) {S2_GMETY[i].classList.add("display_out");}
                for (let i = 0; i < S2_GMETY.length; i++) {S2_GMETY[i].classList.remove("S2_GMETY_TRANS1", "S2_GMETY_TRANS2", "S2_GMETY_TRANS3", "S2_GMETY_TRANS4", "animate_S2_GMETY_SPIN1", "S2_GM_Font1_9vw"); S2_GMETY[i].classList.add("opacity_out");}
            }
        }
    function S2_GM_RESET() {
        S2_GMBTN_HOLDER[1].classList.add("display_out");

        S2_GMBTN_HOLDER[2].classList.add("display_out"); S2_GMBTN_HOLDER[2].classList.remove("S2_GM_H2", "S2_GM_H3", "S2_GM_H4"); 
        S2_GM_exit.classList.remove("S2_GM_H2", "S2_GM_Font7vw", "S2_GM_H0", "S2_GM_H1", "S2_GM_Font5vw");

        S2_GM_exit.classList.remove("S2_GM_H2", "S2_GM_Font7vw", "S2_GM_Font1_9vw");
    }
    function S2_GM_STOP() {
        clearInterval(S2_ID);
        /* Elements outside the game */
        S2_GM.classList.remove("pos_sticky_bottom");
        REDPANDA.style.overflow = "unset";
        Fullscreen.classList.remove("display_out");
        footer_id.classList.remove("display_out");
        for (let i = 0; i < hide.length; i++) {hide[i].classList.remove("display_out");}
        if (CWidth < 800) {btn_menu.classList.remove("display_out");}
        nav_container.classList.remove("display_out");
        header_container.classList.remove("opacity_out");
        /* Elements insidde the game */
        S2_GMBTN_HOLDER[0].classList.remove("display_out");
        S2_GMSRT.classList.remove("display_out");

        S2_GMBTN_HOLDER[1].classList.add("display_out");

        S2_GMBTN_HOLDER[2].classList.add("display_out"); S2_GMBTN_HOLDER[2].classList.remove("S2_GM_H2", "S2_GM_H3", "S2_GM_H4"); 
        S2_GM_exit.classList.remove("S2_GM_H0", "S2_GM_H2", "S2_GM_Font7vw", "S2_GM_H1", "S2_GM_Font5vw", "S2_GM_Font1_9vw");

        for (let i = 0; i < S2_GMETY.length; i++) {S2_GMETY[i].classList.add("display_out"); S2_GMETY[i].classList.remove("S2_GMETY_TRANS1", "S2_GMETY_TRANS2", "S2_GMETY_TRANS3", "S2_GMETY_TRANS4", "animate_S2_GMETY_SPIN1");}
        S2_GM_livesAmt.innerHTML = "";
        S2_GM_score.innerHTML = "SCORE";
    }
/****************/
let Type = false;
function WD_FULLSCREEN() {
    if (Type) {
        if (document.exitFullscreen) {document.exitFullscreen();}
        else if (document.mozCancelFullScreen) {document.mozCancelFullScreen();} 
        else if (document.webkitExitFullscreen) {document.webkitExitFullscreen();}
        else if (document.msExitFullscreen) {document.msExitFullscreen();}
        Type = false;
    }
    else if (!Type) {
        if (document.documentElement.requestFullscreen) {document.documentElement.requestFullscreen();}
        else if (document.documentElement.mozRequestFullScreen) {document.documentElement.mozRequestFullScreen();}
        else if (document.documentElement.webkitRequestFullscreen) {document.documentElement.webkitRequestFullscreen();}
        else if (document.documentElement.msRequestFullscreen) {document.documentElement.msRequestFullscreen();}
        Type = true;
    }
}
/* ---------------------------------------------------------------------------------------- */
btn_menu.addEventListener("click", function () {
    for (let i = 0; i < 2; i++) {
        btn_topic[i].classList.toggle("display_out");
    }
    btn_index.classList.toggle("display_out");
    console.log("Navigation Options | Display");
});
Fullscreen.addEventListener("click", function() {WD_FULLSCREEN();});

btn_topic[0].addEventListener("click", function() {SHOW(1); GET_CURRENT_PAGE(1);});
btn_topic[1].addEventListener("click", function() {SHOW(2); GET_CURRENT_PAGE(2);});
btn_index.addEventListener("click", function() {SHOW("index"); GET_CURRENT_PAGE("index");});

btn_into[0].addEventListener("click", function() {SHOW(1); GET_CURRENT_PAGE(1);});
btn_into[1].addEventListener("click", function() {SHOW(2); GET_CURRENT_PAGE(2);});

btn_next[0].addEventListener("click", function() {btn_text_SHOW(0);});
btn_next[1].addEventListener("click", function() {btn_text_SHOW(1);});

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
    count1--;
    console.log("Count1: "+count1);
    MOVE_A_STACKDOWN(count1);
});
btn_sect1[1].addEventListener("click", function() {
    count1++;
    console.log("Count1: "+count1);
    MOVE_A_STACKUP(count1);
});
for (let i = 0; i < btn_sect1_esc.length; i++) {
    btn_sect1_esc[i].addEventListener("click", HIDE_SECTION1);
}

btn_sect2[0].addEventListener("click", function() {ACCESS_SECTION2(0);});
btn_sect2[1].addEventListener("click", function() {ACCESS_SECTION2(1);});
btn_sect2[2].addEventListener("click", function() {ACCESS_SECTION2(2);});
btn_sect2[3].addEventListener("click", function() {ACCESS_SECTION2(3);});
btn_sect2[4].addEventListener("click", function() {ACCESS_SECTION2(4);});

btn_sect2_back[0].addEventListener("click", function() {HIDE_SECTION2(0);});
btn_sect2_back[1].addEventListener("click", function() {HIDE_SECTION2(1);});
btn_sect2_back[2].addEventListener("click", function() {HIDE_SECTION2(2);});
btn_sect2_back[3].addEventListener("click", function() {HIDE_SECTION2(3);});
btn_sect2_back[4].addEventListener("click", function() {HIDE_SECTION2(4);});

btn_showCtg[0].addEventListener("click", function() {OW2_CTG(0);});
btn_showCtg[1].addEventListener("click", function() {OW2_CTG(1);});
btn_showCtg[2].addEventListener("click", function() {OW2_CTG(2);});
btn_showCtg[3].addEventListener("click", function() {OW2_CTG(3);});
btn_showCtg[4].addEventListener("click", function() {OW2_CTG(4);});

let count2 = -1;
btn_sect2_OW3[0].addEventListener("click", function() {OW3_pDetails(0); count2++;});
btn_sect2_OW3[1].addEventListener("click", 
    function() {
        if (count2 > 0) {count2--;}
        else if (count2 == 0) {count2=OW3_Element.length-1;}
        OW3_pDetails(1); 
    });
/* S1_Qz1 */
btn_Qz1Submit.addEventListener("click", function() {S1_Qz1_CHECK_ANS();});
/* S2_GM */
S2_GMSRT.addEventListener("click", function() {S2_GM_DIET();});
S2_GM_restart.addEventListener("click", function() {S2_GM_RESET(); S2_GM_DIET();});
S2_GM_exit.addEventListener("click", function() {S2_GM_STOP();});
    S2_GMETY[0].addEventListener("touchend", function() {S2_GM_GET_TYPE("BB", 0);});
    S2_GMETY[1].addEventListener("touchend", function() {S2_GM_GET_TYPE("BB", 1);});
    S2_GMETY[2].addEventListener("touchend", function() {S2_GM_GET_TYPE("EGG", 2);});
    S2_GMETY[3].addEventListener("touchend", function() {S2_GM_GET_TYPE("EGG", 3);});
    S2_GMETY[4].addEventListener("touchend", function() {S2_GM_GET_TYPE("BMBO", 4);});
    S2_GMETY[5].addEventListener("touchend", function() {S2_GM_GET_TYPE("BMBO", 5);});
    S2_GMETY[6].addEventListener("touchend", function() {S2_GM_GET_TYPE("LYCHEE", 6);});
    S2_GMETY[7].addEventListener("touchend", function() {S2_GM_GET_TYPE("LYCHEE", 7);});
    S2_GMETY[8].addEventListener("touchend", function() {S2_GM_GET_TYPE("ACORN", 8);});
    S2_GMETY[9].addEventListener("touchend", function() {S2_GM_GET_TYPE("ACORN", 9);});
    S2_GMETY[10].addEventListener("touchend", function() {S2_GM_GET_TYPE("COCO", 10);});
    S2_GMETY[11].addEventListener("touchend", function() {S2_GM_GET_TYPE("COCO", 11);});
    S2_GMETY[12].addEventListener("touchend", function() {S2_GM_GET_TYPE("COCO", 12);});

    S2_GMETY[0].addEventListener("mousedown", function() {S2_GM_GET_TYPE("BB", 0);});
    S2_GMETY[1].addEventListener("mousedown", function() {S2_GM_GET_TYPE("BB", 1);});
    S2_GMETY[2].addEventListener("mousedown", function() {S2_GM_GET_TYPE("EGG", 2);});
    S2_GMETY[3].addEventListener("mousedown", function() {S2_GM_GET_TYPE("EGG", 3);});
    S2_GMETY[4].addEventListener("mousedown", function() {S2_GM_GET_TYPE("BMBO", 4);});
    S2_GMETY[5].addEventListener("mousedown", function() {S2_GM_GET_TYPE("BMBO", 5);});
    S2_GMETY[6].addEventListener("mousedown", function() {S2_GM_GET_TYPE("LYCHEE", 6);});
    S2_GMETY[7].addEventListener("mousedown", function() {S2_GM_GET_TYPE("LYCHEE", 7);});
    S2_GMETY[8].addEventListener("mousedown", function() {S2_GM_GET_TYPE("ACORN", 8);});
    S2_GMETY[9].addEventListener("mousedown", function() {S2_GM_GET_TYPE("ACORN", 9);});
    S2_GMETY[10].addEventListener("mousedown", function() {S2_GM_GET_TYPE("COCO", 10);});
    S2_GMETY[11].addEventListener("mousedown", function() {S2_GM_GET_TYPE("COCO", 11);});
    S2_GMETY[12].addEventListener("mousedown", function() {S2_GM_GET_TYPE("COCO", 12);});

HIDE_SECTIONS();
