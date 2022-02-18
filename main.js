var expression_round_1_player_1 = ["2s^2  +  7s  -  3  +  7s^2  +  10","-3  +  m  -  2n  -  9n  -  3m","2c  -  8  +  6  -  c","-5v  +  6  +  2  +  2 v","- x  -  4  -  (-4) x"];
var expression_round_1_player_2 = ["–10  –  a  +  5a  +  6  +  -5  +  5a","3  +  3w  +  2w^2  +  5w  +  2  –  10w^2","9a^2  +  3a  –  5  +  10a^2  +  3","3p  +  9t  –  2p  +  2  –  3p","10x – 8x + 2 + 10"];
var expression_round_2_player_1 = ["3a + 7 + 2(3 + a)","3(m – 5) + m","2s + 10 – 7s – 8 + 3s – 7","8c – 4 – 2c + 5","–4 + 7z + 3 – 2z"];
var expression_round_2_player_2 = ["15 + 4(5y – 10)","2d + 17 – 3 – 2d + 4d","12n – 8 – 2n + 10 – 4","8(2k + 1 + 3k)","4(2b + 2) – 3 "];
var expression_round_3_player_1 = ["–10 b  –  2  –  8 b","–10 t  –  7  –  (–5) t","3 w  +  9 w","3 n  +  (–2) n","1  –  2 p  +  3  –  6 p"];
var expression_round_3_player_2 = ["8 a  –  7 a  +  7  +  10 a","– c  –  (–5) c","–8s  –  4  – 4  –  3 s","–2  +  3 k  –  6 k  +  9  +  k","	6 k  +  5 k  +  9  +  2 k"];

function generate(){
    document.getElementById("Question_1_player_1").innerHTML='Qusetion 1 - '+expression_round_1_player_1[0];
    document.getElementById("Question_2_player_1").innerHTML='Qusetion 2 - '+expression_round_1_player_1[1];
    document.getElementById("Question_3_player_1").innerHTML='Qusetion 3 - '+expression_round_1_player_1[2];
    document.getElementById("Question_4_player_1").innerHTML='Qusetion 4 - '+expression_round_1_player_1[3];
    document.getElementById("Question_5_player_1").innerHTML='Qusetion 5 - '+expression_round_1_player_1[4];

    document.getElementById("Question_1_player_2").innerHTML='Question 1 -'+expression_round_1_player_2[0];
    document.getElementById("Question_2_player_2").innerHTML='Question 2 -'+expression_round_1_player_2[1];
    document.getElementById("Question_3_player_2").innerHTML='Question 3 -'+expression_round_1_player_2[2];
    document.getElementById("Question_4_player_2").innerHTML='Question 4 -'+expression_round_1_player_2[3];
    document.getElementById("Question_5_player_2").innerHTML='Question 5 -'+expression_round_1_player_2[4];

    document.getElementById("Generator").style.display="none";
    document.getElementById("div").innerHTML='<button type="button" id="new_generator" onclick="generate_new()" class="btn btn-success">Next question</button>';
}

function generate_new(){
    document.getElementById("Question_1_player_1").innerHTML='Qusetion 1 - '+expression_round_2_player_1[0];
    document.getElementById("Question_2_player_1").innerHTML='Qusetion 2 - '+expression_round_2_player_1[1];
    document.getElementById("Question_3_player_1").innerHTML='Qusetion 3 - '+expression_round_2_player_1[2];
    document.getElementById("Question_4_player_1").innerHTML='Qusetion 4 - '+expression_round_2_player_1[3];
    document.getElementById("Question_5_player_1").innerHTML='Qusetion 5 - '+expression_round_2_player_1[4];

    document.getElementById("Question_1_player_2").innerHTML='Question 1 -'+expression_round_2_player_2[0];
    document.getElementById("Question_2_player_2").innerHTML='Question 2 -'+expression_round_2_player_2[1];
    document.getElementById("Question_3_player_2").innerHTML='Question 3 -'+expression_round_2_player_2[2];
    document.getElementById("Question_4_player_2").innerHTML='Question 4 -'+expression_round_2_player_2[3];
    document.getElementById("Question_5_player_2").innerHTML='Question 5 -'+expression_round_2_player_2[4];

    document.getElementById("new_generator").style.display="none";
    document.getElementById("div").innerHTML='<button type="button" id="new_generator_2" onclick="generate_new_2()" class="btn btn-success">Next question</button>';
}

function generate_new_2(){
    document.getElementById("Question_1_player_1").innerHTML='Qusetion 1 - '+expression_round_3_player_1[0];
    document.getElementById("Question_2_player_1").innerHTML='Qusetion 2 - '+expression_round_3_player_1[1];
    document.getElementById("Question_3_player_1").innerHTML='Qusetion 3 - '+expression_round_3_player_1[2];
    document.getElementById("Question_4_player_1").innerHTML='Qusetion 4 - '+expression_round_3_player_1[3];
    document.getElementById("Question_5_player_1").innerHTML='Qusetion 5 - '+expression_round_3_player_1[4];

    document.getElementById("Question_1_player_2").innerHTML='Question 1 -'+expression_round_3_player_2[0];
    document.getElementById("Question_2_player_2").innerHTML='Question 2 -'+expression_round_3_player_2[1];
    document.getElementById("Question_3_player_2").innerHTML='Question 3 -'+expression_round_3_player_2[2];
    document.getElementById("Question_4_player_2").innerHTML='Question 4 -'+expression_round_3_player_2[3];
    document.getElementById("Question_5_player_2").innerHTML='Question 5 -'+expression_round_3_player_2[4];
}