function comeca (){
    document.getElementById("jogo1").removeAttribute("hidden");
    document.getElementById("jogo2").removeAttribute("hidden");
    document.getElementById("jogo3").removeAttribute("hidden");
    document.getElementById("jogo4").removeAttribute("hidden");
    document.getElementById("jogo5").removeAttribute("hidden");
    document.getElementById("jogo6").removeAttribute("hidden");
    document.getElementById("jogo7").removeAttribute("hidden");
    document.getElementById("jogo8").removeAttribute("hidden");
    document.getElementById("jogo9").removeAttribute("hidden");
 }

var jogadas = 1;
 
 function x1 ()
 {
    if (jogadas == 1 || jogadas == 3 || jogadas == 5 || jogadas == 7 || jogadas == 9){
    document.getElementById("jogo1").value = "X";
    document.getElementById("jogo1").disabled = true;
    jogadas++;
    ganhou ();
    }
    else if (jogadas == 2 || jogadas == 4 || jogadas == 6 || jogadas == 8){
    document.getElementById("jogo1").value = "O";
    document.getElementById("jogo1").disabled = true;
    jogadas++;
    ganhou ();
    }
 }

 function x2 ()
 {
    if (jogadas == 1 || jogadas == 3 || jogadas == 5 || jogadas == 7 || jogadas == 9){
    document.getElementById("jogo2").value = "X";
    document.getElementById("jogo2").disabled = true;
    jogadas++;
    ganhou ();
    }
    else if (jogadas == 2 || jogadas == 4 || jogadas == 6 || jogadas == 8){
    document.getElementById("jogo2").value = "O";
    document.getElementById("jogo2").disabled = true;
    jogadas++;
    ganhou ();
    }
 }

 function x3 ()
 {
    if (jogadas == 1 || jogadas == 3 || jogadas == 5 || jogadas == 7 || jogadas == 9){
        document.getElementById("jogo3").value = "X";
        document.getElementById("jogo3").disabled = true;
        jogadas++;
        ganhou ();
        }
        else if (jogadas == 2 || jogadas == 4 || jogadas == 6 || jogadas == 8){
        document.getElementById("jogo3").value = "O";
        document.getElementById("jogo3").disabled = true;
        jogadas++;
        ganhou ();
        }
 }

 function x4 ()
 {
    if (jogadas == 1 || jogadas == 3 || jogadas == 5 || jogadas == 7 || jogadas == 9){
        document.getElementById("jogo4").value = "X";
        document.getElementById("jogo4").disabled = true;
        jogadas++;
        ganhou ();
        }
        else if (jogadas == 2 || jogadas == 4 || jogadas == 6 || jogadas == 8){
        document.getElementById("jogo4").value = "O";
        document.getElementById("jogo4").disabled = true;
        jogadas++;
        ganhou ();
        }
 }

 function x5 ()
 {
    if (jogadas == 1 || jogadas == 3 || jogadas == 5 || jogadas == 7 || jogadas == 9){
        document.getElementById("jogo5").value = "X";
        document.getElementById("jogo5").disabled = true;
        jogadas++;
        ganhou ();
        }
        else if (jogadas == 2 || jogadas == 4 || jogadas == 6 || jogadas == 8){
        document.getElementById("jogo5").value = "O";
        document.getElementById("jogo5").disabled = true;
        jogadas++;
        ganhou ();
        }
 }

 function x6 ()
 {
    if (jogadas == 1 || jogadas == 3 || jogadas == 5 || jogadas == 7 || jogadas == 9){
        document.getElementById("jogo6").value = "X";
        document.getElementById("jogo6").disabled = true;
        jogadas++;
        ganhou ();
        }
        else if (jogadas == 2 || jogadas == 4 || jogadas == 6 || jogadas == 8){
        document.getElementById("jogo6").value = "O";
        document.getElementById("jogo6").disabled = true;
        jogadas++;
        ganhou ();
        }
 }

 function x7 ()
 {
    if (jogadas == 1 || jogadas == 3 || jogadas == 5 || jogadas == 7 || jogadas == 9){
    document.getElementById("jogo7").value = "X";
    document.getElementById("jogo7").disabled = true;
    jogadas++;
    ganhou ();
    }
    else if (jogadas == 2 || jogadas == 4 || jogadas == 6 || jogadas == 8){
    document.getElementById("jogo7").value = "O";
    document.getElementById("jogo7").disabled = true;
    jogadas++;
    ganhou ();
    }
 }
 
 function x8 ()
 {
    if (jogadas == 1 || jogadas == 3 || jogadas == 5 || jogadas == 7 || jogadas == 9){
        document.getElementById("jogo8").value = "X";
        document.getElementById("jogo8").disabled = true;
        jogadas++;
        ganhou ();
        }
        else if (jogadas == 2 || jogadas == 4 || jogadas == 6 || jogadas == 8){
        document.getElementById("jogo8").value = "O";
        document.getElementById("jogo8").disabled = true;
        jogadas++;
        ganhou ();
        }
 }

 function x9 ()
 {
    if (jogadas == 1 || jogadas == 3 || jogadas == 5 || jogadas == 7 || jogadas == 9){
    document.getElementById("jogo9").value = "X";
    document.getElementById("jogo9").disabled = true;
    jogadas++;
    ganhou ();
    }
    else if (jogadas == 2 || jogadas == 4 || jogadas == 6 || jogadas == 8){
    document.getElementById("jogo9").value = "O";
    document.getElementById("jogo9").disabled = true;
    jogadas++;
    ganhou ();
    }
 }

 function ganhou (){
    if (
       (document.getElementById("jogo1").value == "X" && document.getElementById("jogo2").value == "X" && document.getElementById("jogo3").value == "X") ||
       (document.getElementById("jogo4").value == "X" && document.getElementById("jogo5").value == "X" && document.getElementById("jogo6").value == "X") ||
       (document.getElementById("jogo7").value == "X" && document.getElementById("jogo8").value == "X" && document.getElementById("jogo9").value == "X") ||
       (document.getElementById("jogo1").value == "X" && document.getElementById("jogo4").value == "X" && document.getElementById("jogo7").value == "X") ||
       (document.getElementById("jogo2").value == "X" && document.getElementById("jogo5").value == "X" && document.getElementById("jogo8").value == "X") ||
       (document.getElementById("jogo3").value == "X" && document.getElementById("jogo6").value == "X" && document.getElementById("jogo9").value == "X") ||
       (document.getElementById("jogo1").value == "X" && document.getElementById("jogo5").value == "X" && document.getElementById("jogo9").value == "X") ||
       (document.getElementById("jogo3").value == "X" && document.getElementById("jogo5").value == "X" && document.getElementById("jogo7").value == "X")
     ) {
       setTimeout(function() {
          alert("Player X ganhou.");
          location.reload();
          return;
        }, 100);
     } else if (
       (document.getElementById("jogo1").value == "O" && document.getElementById("jogo2").value == "O" && document.getElementById("jogo3").value == "O") ||
       (document.getElementById("jogo4").value == "O" && document.getElementById("jogo5").value == "O" && document.getElementById("jogo6").value == "O") ||
       (document.getElementById("jogo7").value == "O" && document.getElementById("jogo8").value == "O" && document.getElementById("jogo9").value == "O") ||
       (document.getElementById("jogo1").value == "O" && document.getElementById("jogo4").value == "O" && document.getElementById("jogo7").value == "O") ||
       (document.getElementById("jogo2").value == "O" && document.getElementById("jogo5").value == "O" && document.getElementById("jogo8").value == "O") ||
       (document.getElementById("jogo3").value == "O" && document.getElementById("jogo6").value == "O" && document.getElementById("jogo9").value == "O") ||
       (document.getElementById("jogo1").value == "O" && document.getElementById("jogo5").value == "O" && document.getElementById("jogo9").value == "O") ||
       (document.getElementById("jogo3").value == "O" && document.getElementById("jogo5").value == "O" && document.getElementById("jogo7").value == "O")
     ) {
       setTimeout(function() {
          alert("Player O ganhou.");
          location.reload();
          return;
        }, 100);
     } else if (
       document.getElementById("jogo1").value &&
       document.getElementById("jogo2").value &&
       document.getElementById("jogo3").value &&
       document.getElementById("jogo4").value &&
       document.getElementById("jogo5").value &&
       document.getElementById("jogo6").value &&
       document.getElementById("jogo7").value &&
       document.getElementById("jogo8").value &&
       document.getElementById("jogo9").value)
     {
       setTimeout(function() {
          alert("Empate");
          location.reload();
          return;
        }, 100);
     }}