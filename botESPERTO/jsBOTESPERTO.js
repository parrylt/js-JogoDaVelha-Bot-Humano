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
   document.getElementById("jogo1").value = "X";
   document.getElementById("jogo1").disabled = true;
   jogadas++;
   pjog();
   ganhou ();
}
function x2 ()
{
   document.getElementById("jogo2").value = "X";
   document.getElementById("jogo2").disabled = true;
   jogadas++;
   pjog();
   ganhou ();
}
function x3 ()
{
   document.getElementById("jogo3").value = "X";
   document.getElementById("jogo3").disabled = true;
   jogadas++;
   pjog();
   ganhou ();
}
function x4 ()
{
   document.getElementById("jogo4").value = "X";
   document.getElementById("jogo4").disabled = true;
   jogadas++;
   pjog();
   ganhou ();
}
function x5 ()
{
   document.getElementById("jogo5").value = "X";
   document.getElementById("jogo5").disabled = true;
   jogadas++;
   pjog();
   ganhou ();
}
function x6 ()
{
   document.getElementById("jogo6").value = "X";
   document.getElementById("jogo6").disabled = true;
   jogadas++;
   pjog();
   ganhou ();
}
function x7 ()
{
   document.getElementById("jogo7").value = "X";
   document.getElementById("jogo7").disabled = true;
   jogadas++;
   pjog();
   ganhou ();
}
function x8 ()
{
   document.getElementById("jogo8").value = "X";
   document.getElementById("jogo8").disabled = true;
   jogadas++;
   pjog();
   ganhou ();
}
function x9 ()
{
   document.getElementById("jogo9").value = "X";
   document.getElementById("jogo9").disabled = true;
   jogadas++;
   pjog();
   ganhou ();
}


function pjog(){
      if (jogadas == 2 && document.getElementById("jogo1").value == "X"){
      document.getElementById("jogo5").value = "O";
      document.getElementById("jogo5").disabled = true;
      jogadas++;
     }
     else if (jogadas == 2 && document.getElementById("jogo2").value == "X"){
      document.getElementById("jogo5").value = "O";
      document.getElementById("jogo5").disabled = true;
      jogadas++;
     }
     else if (jogadas == 2 && document.getElementById("jogo3").value == "X"){
      document.getElementById("jogo5").value = "O";
      document.getElementById("jogo5").disabled = true;
      jogadas++;
     }
     else if (jogadas == 2 && document.getElementById("jogo4").value == "X"){
      document.getElementById("jogo5").value = "O";
      document.getElementById("jogo5").disabled = true;
      jogadas++;
     }
     else if (jogadas == 2 && document.getElementById("jogo6").value == "X"){
      document.getElementById("jogo5").value = "O";
      document.getElementById("jogo5").disabled = true;
      jogadas++;
     }
     else if (jogadas == 2 && document.getElementById("jogo7").value == "X"){
      document.getElementById("jogo5").value = "O";
      document.getElementById("jogo5").disabled = true;
      jogadas++;
     }
     else if (jogadas == 2 && document.getElementById("jogo8").value == "X"){
      document.getElementById("jogo5").value = "O";
      document.getElementById("jogo5").disabled = true;
      jogadas++;
     }
     else if (jogadas == 2 && document.getElementById("jogo9").value == "X"){
      document.getElementById("jogo5").value = "O";
      document.getElementById("jogo5").disabled = true;
      jogadas++;
     }
     else if (jogadas == 4 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo2").value == "X"){
      document.getElementById("jogo3").value = "O";
      document.getElementById("jogo3").disabled = true;
      jogadas++;
     }
          //vitorias bot//
          else if (jogadas == 6 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo2").value == "X" && document.getElementById("jogo4").value == "X"){
            document.getElementById("jogo7").value = "O";
            document.getElementById("jogo7").disabled = true;
            jogadas++;
           }
           else if (jogadas == 6 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo2").value == "X" && document.getElementById("jogo6").value == "X"){
            document.getElementById("jogo7").value = "O";
            document.getElementById("jogo7").disabled = true;
            jogadas++;
           }
           else if (jogadas == 6 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo2").value == "X" && document.getElementById("jogo8").value == "X"){
            document.getElementById("jogo7").value = "O";
            document.getElementById("jogo7").disabled = true;
            jogadas++;
           }
           else if (jogadas == 6 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo2").value == "X" && document.getElementById("jogo9").value == "X"){
            document.getElementById("jogo7").value = "O";
            document.getElementById("jogo7").disabled = true;
            jogadas++;
           }
           //jogo continua//
           else if (jogadas == 6 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo2").value == "X" && document.getElementById("jogo7").value == "X"){
            document.getElementById("jogo4").value = "O";
            document.getElementById("jogo4").disabled = true;
            jogadas++;
           }
           //vitórias bot//
           else if (jogadas == 8 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo2").value == "X" && document.getElementById("jogo7").value == "X" && document.getElementById("jogo8").value == "X"){
            document.getElementById("jogo6").value = "O";
            document.getElementById("jogo6").disabled = true;
            jogadas++;
           }
           else if (jogadas == 8 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo2").value == "X" && document.getElementById("jogo7").value == "X" && document.getElementById("jogo9").value == "X"){
            document.getElementById("jogo6").value = "O";
            document.getElementById("jogo6").disabled = true;
            jogadas++;
           }
            //jogo continua//
            else if (jogadas == 8 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo2").value == "X" && document.getElementById("jogo7").value == "X" && document.getElementById("jogo6").value == "X"){
               document.getElementById("jogo9").value = "O";
               document.getElementById("jogo9").disabled = true;
               jogadas++;
              }
         
           
     else if (jogadas == 4 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo4").value == "X"){
      document.getElementById("jogo7").value = "O";
      document.getElementById("jogo7").disabled = true;
      jogadas++;
     }
          //vitorias bot//
          else if (jogadas == 6 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo4").value == "X" && document.getElementById("jogo2").value == "X"){
            document.getElementById("jogo3").value = "O";
            document.getElementById("jogo3").disabled = true;
            jogadas++;
           }
           else if (jogadas == 6 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo4").value == "X" && document.getElementById("jogo6").value == "X"){
            document.getElementById("jogo3").value = "O";
            document.getElementById("jogo3").disabled = true;
            jogadas++;
           }
           else if (jogadas == 6 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo4").value == "X" && document.getElementById("jogo8").value == "X"){
            document.getElementById("jogo3").value = "O";
            document.getElementById("jogo3").disabled = true;
            jogadas++;
           }
           else if (jogadas == 6 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo4").value == "X" && document.getElementById("jogo9").value == "X"){
            document.getElementById("jogo3").value = "O";
            document.getElementById("jogo3").disabled = true;
            jogadas++;
           }
           //jogo continua//
           else if (jogadas == 6 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo4").value == "X" && document.getElementById("jogo3").value == "X"){
            document.getElementById("jogo2").value = "O";
            document.getElementById("jogo2").disabled = true;
            jogadas++;
           }
                      //vitórias bot//
                      else if (jogadas == 8 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo4").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo6").value == "X"){
                        document.getElementById("jogo8").value = "O";
                        document.getElementById("jogo8").disabled = true;
                        jogadas++;
                       }
                       else if (jogadas == 8 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo4").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo9").value == "X"){
                        document.getElementById("jogo8").value = "O";
                        document.getElementById("jogo8").disabled = true;
                        jogadas++;
                       }
                        //jogo continua//
                        else if (jogadas == 8 && document.getElementById("jogo1").value == "X" && document.getElementById("jogo4").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo7").value == "X"){
                           document.getElementById("jogo9").value = "O";
                           document.getElementById("jogo9").disabled = true;
                           jogadas++;
                          }
     else if (jogadas == 4 && document.getElementById("jogo4").value == "X" && document.getElementById("jogo7").value == "X"){
      document.getElementById("jogo1").value = "O";
      document.getElementById("jogo1").disabled = true;
      jogadas++;
     }
               //vitorias bot//
               else if (jogadas == 6 && document.getElementById("jogo4").value == "X" && document.getElementById("jogo7").value == "X" && document.getElementById("jogo2").value == "X"){
                  document.getElementById("jogo9").value = "O";
                  document.getElementById("jogo9").disabled = true;
                  jogadas++;
                 }
                 else if (jogadas == 6 && document.getElementById("jogo4").value == "X" && document.getElementById("jogo7").value == "X" && document.getElementById("jogo3").value == "X"){
                  document.getElementById("jogo9").value = "O";
                  document.getElementById("jogo9").disabled = true;
                  jogadas++;
                 }
                 else if (jogadas == 6 && document.getElementById("jogo4").value == "X" && document.getElementById("jogo7").value == "X" && document.getElementById("jogo6").value == "X"){
                  document.getElementById("jogo9").value = "O";
                  document.getElementById("jogo9").disabled = true;
                  jogadas++;
                 }
                 else if (jogadas == 6 && document.getElementById("jogo4").value == "X" && document.getElementById("jogo7").value == "X" && document.getElementById("jogo8").value == "X"){
                  document.getElementById("jogo9").value = "O";
                  document.getElementById("jogo9").disabled = true;
                  jogadas++;
                 }
                 //jogo continua//
                 else if (jogadas == 6 && document.getElementById("jogo4").value == "X" && document.getElementById("jogo7").value == "X" && document.getElementById("jogo9").value == "X"){
                  document.getElementById("jogo8").value = "O";
                  document.getElementById("jogo8").disabled = true;
                  jogadas++;
                 }
                                       //vitórias bot//
                                       else if (jogadas == 8 && document.getElementById("jogo4").value == "X" && document.getElementById("jogo7").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo3").value == "X"){
                                          document.getElementById("jogo2").value = "O";
                                          document.getElementById("jogo2").disabled = true;
                                          jogadas++;
                                         }
                                         else if (jogadas == 8 && document.getElementById("jogo4").value == "X" && document.getElementById("jogo7").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo6").value == "X"){
                                          document.getElementById("jogo2").value = "O";
                                          document.getElementById("jogo2").disabled = true;
                                          jogadas++;
                                         }
                                          //jogo continua//
                                          else if (jogadas == 8 && document.getElementById("jogo4").value == "X" && document.getElementById("jogo7").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo2").value == "X"){
                                             document.getElementById("jogo3").value = "O";
                                             document.getElementById("jogo3").disabled = true;
                                             jogadas++;
                                            }
     else if (jogadas == 4 && document.getElementById("jogo7").value == "X" && document.getElementById("jogo8").value == "X"){
      document.getElementById("jogo9").value = "O";
      document.getElementById("jogo9").disabled = true;
      jogadas++;
     }
                    //vitorias bot//
                    else if (jogadas == 6 && document.getElementById("jogo7").value == "X" && document.getElementById("jogo8").value == "X" && document.getElementById("jogo1").value == "X"){
                     document.getElementById("jogo3").value = "O";
                     document.getElementById("jogo3").disabled = true;
                     jogadas++;
                    }
                    else if (jogadas == 6 && document.getElementById("jogo7").value == "X" && document.getElementById("jogo8").value == "X" && document.getElementById("jogo2").value == "X"){
                     document.getElementById("jogo3").value = "O";
                     document.getElementById("jogo3").disabled = true;
                     jogadas++;
                    }
                    else if (jogadas == 6 && document.getElementById("jogo7").value == "X" && document.getElementById("jogo8").value == "X" && document.getElementById("jogo4").value == "X"){
                     document.getElementById("jogo3").value = "O";
                     document.getElementById("jogo3").disabled = true;
                     jogadas++;
                    }
                    else if (jogadas == 6 && document.getElementById("jogo7").value == "X" && document.getElementById("jogo8").value == "X" && document.getElementById("jogo6").value == "X"){
                     document.getElementById("jogo3").value = "O";
                     document.getElementById("jogo3").disabled = true;
                     jogadas++;
                    }
                    //jogo continua//
                    else if (jogadas == 6 && document.getElementById("jogo7").value == "X" && document.getElementById("jogo8").value == "X" && document.getElementById("jogo3").value == "X"){
                     document.getElementById("jogo6").value = "O";
                     document.getElementById("jogo6").disabled = true;
                     jogadas++;
                    }
                                                           //vitórias bot//
                                                           else if (jogadas == 8 && document.getElementById("jogo7").value == "X" && document.getElementById("jogo8").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo1").value == "X"){
                                                            document.getElementById("jogo4").value = "O";
                                                            document.getElementById("jogo4").disabled = true;
                                                            jogadas++;
                                                           }
                                                           else if (jogadas == 8 && document.getElementById("jogo7").value == "X" && document.getElementById("jogo8").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo2").value == "X"){
                                                            document.getElementById("jogo4").value = "O";
                                                            document.getElementById("jogo4").disabled = true;
                                                            jogadas++;
                                                           }
                                                            //jogo continua//
                                                            else if (jogadas == 8 && document.getElementById("jogo7").value == "X" && document.getElementById("jogo8").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo4").value == "X"){
                                                               document.getElementById("jogo1").value = "O";
                                                               document.getElementById("jogo1").disabled = true;
                                                               jogadas++;
                                                              }
     else if (jogadas == 4 && document.getElementById("jogo8").value == "X" && document.getElementById("jogo9").value == "X"){
      document.getElementById("jogo7").value = "O";
      document.getElementById("jogo7").disabled = true;
      jogadas++;
     }
                     //vitorias bot//
                     else if (jogadas == 6 && document.getElementById("jogo8").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo1").value == "X"){
                     document.getElementById("jogo3").value = "O";
                     document.getElementById("jogo3").disabled = true;
                     jogadas++;
                     }
                     else if (jogadas == 6 && document.getElementById("jogo8").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo2").value == "X"){
                     document.getElementById("jogo3").value = "O";
                     document.getElementById("jogo3").disabled = true;
                     jogadas++;
                     }
                     else if (jogadas == 6 && document.getElementById("jogo8").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo4").value == "X"){
                     document.getElementById("jogo3").value = "O";
                     document.getElementById("jogo3").disabled = true;
                     jogadas++;
                     }
                     else if (jogadas == 6 && document.getElementById("jogo8").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo6").value == "X"){
                     document.getElementById("jogo3").value = "O";
                     document.getElementById("jogo3").disabled = true;
                     jogadas++;
                     }
                     //jogo continua//
                     else if (jogadas == 6 && document.getElementById("jogo8").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo3").value == "X"){
                     document.getElementById("jogo6").value = "O";
                     document.getElementById("jogo6").disabled = true;
                     jogadas++;
                     }
                                                              //vitórias bot//
                                                              else if (jogadas == 8 && document.getElementById("jogo8").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo1").value == "X"){
                                                               document.getElementById("jogo4").value = "O";
                                                               document.getElementById("jogo4").disabled = true;
                                                               jogadas++;
                                                              }
                                                              else if (jogadas == 8 && document.getElementById("jogo8").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo2").value == "X"){
                                                               document.getElementById("jogo4").value = "O";
                                                               document.getElementById("jogo4").disabled = true;
                                                               jogadas++;
                                                              }
                                                               //jogo continua//
                                                               else if (jogadas == 8 && document.getElementById("jogo8").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo4").value == "X"){
                                                                  document.getElementById("jogo1").value = "O";
                                                                  document.getElementById("jogo1").disabled = true;
                                                                  jogadas++;
                                                                 }
     else if (jogadas == 4 && document.getElementById("jogo6").value == "X" && document.getElementById("jogo9").value == "X"){
      document.getElementById("jogo3").value = "O";
      document.getElementById("jogo3").disabled = true;
      jogadas++;
     }
                     //vitorias bot//
                     else if (jogadas == 6 && document.getElementById("jogo6").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo1").value == "X"){
                        document.getElementById("jogo7").value = "O";
                        document.getElementById("jogo7").disabled = true;
                        jogadas++;
                        }
                        else if (jogadas == 6 && document.getElementById("jogo6").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo2").value == "X"){
                        document.getElementById("jogo7").value = "O";
                        document.getElementById("jogo7").disabled = true;
                        jogadas++;
                        }
                        else if (jogadas == 6 && document.getElementById("jogo6").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo4").value == "X"){
                        document.getElementById("jogo7").value = "O";
                        document.getElementById("jogo7").disabled = true;
                        jogadas++;
                        }
                        else if (jogadas == 6 && document.getElementById("jogo6").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo8").value == "X"){
                        document.getElementById("jogo7").value = "O";
                        document.getElementById("jogo7").disabled = true;
                        jogadas++;
                        }
                        //jogo continua//
                        else if (jogadas == 6 && document.getElementById("jogo6").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo7").value == "X"){
                        document.getElementById("jogo8").value = "O";
                        document.getElementById("jogo8").disabled = true;
                        jogadas++;
                        }

                                                                                      //vitórias bot//
                                                                                      else if (jogadas == 8 && document.getElementById("jogo6").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo7").value == "X" && document.getElementById("jogo1").value == "X"){
                                                                                       document.getElementById("jogo2").value = "O";
                                                                                       document.getElementById("jogo2").disabled = true;
                                                                                       jogadas++;
                                                                                      }
                                                                                      else if (jogadas == 8 && document.getElementById("jogo6").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo7").value == "X" && document.getElementById("jogo4").value == "X"){
                                                                                       document.getElementById("jogo2").value = "O";
                                                                                       document.getElementById("jogo2").disabled = true;
                                                                                       jogadas++;
                                                                                      }
                                                                                       //jogo continua//
                                                                                       else if (jogadas == 8 && document.getElementById("jogo6").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo7").value == "X" && document.getElementById("jogo2").value == "X"){
                                                                                          document.getElementById("jogo1").value = "O";
                                                                                          document.getElementById("jogo1").disabled = true;
                                                                                          jogadas++;
                                                                                         }
     else if (jogadas == 4 && document.getElementById("jogo3").value == "X" && document.getElementById("jogo6").value == "X"){
      document.getElementById("jogo9").value = "O";
      document.getElementById("jogo9").disabled = true;
      jogadas++;
     }
                     //vitorias bot//
                     else if (jogadas == 6 && document.getElementById("jogo3").value == "X" && document.getElementById("jogo6").value == "X" && document.getElementById("jogo2").value == "X"){
                        document.getElementById("jogo1").value = "O";
                        document.getElementById("jogo1").disabled = true;
                        jogadas++;
                        }
                        else if (jogadas == 6 && document.getElementById("jogo3").value == "X" && document.getElementById("jogo6").value == "X" && document.getElementById("jogo4").value == "X"){
                           document.getElementById("jogo1").value = "O";
                           document.getElementById("jogo1").disabled = true;
                           jogadas++;
                           }
                           else if (jogadas == 6 && document.getElementById("jogo3").value == "X" && document.getElementById("jogo6").value == "X" && document.getElementById("jogo7").value == "X"){
                              document.getElementById("jogo1").value = "O";
                              document.getElementById("jogo1").disabled = true;
                              jogadas++;
                              }
                              else if (jogadas == 6 && document.getElementById("jogo3").value == "X" && document.getElementById("jogo6").value == "X" && document.getElementById("jogo8").value == "X"){
                                 document.getElementById("jogo1").value = "O";
                                 document.getElementById("jogo1").disabled = true;
                                 jogadas++;
                                 }
                        //jogo continua//
                        else if (jogadas == 6 && document.getElementById("jogo3").value == "X" && document.getElementById("jogo6").value == "X" && document.getElementById("jogo1").value == "X"){
                        document.getElementById("jogo2").value = "O";
                        document.getElementById("jogo2").disabled = true;
                        jogadas++;
                        }
                        //vitórias bot//
                        else if (jogadas == 8 && document.getElementById("jogo3").value == "X" && document.getElementById("jogo6").value == "X" && document.getElementById("jogo1").value == "X" && document.getElementById("jogo4").value == "X"){
                           document.getElementById("jogo8").value = "O";
                           document.getElementById("jogo8").disabled = true;
                           jogadas++;
                          }
                          else if (jogadas == 8 && document.getElementById("jogo3").value == "X" && document.getElementById("jogo6").value == "X" && document.getElementById("jogo1").value == "X" && document.getElementById("jogo7").value == "X"){
                           document.getElementById("jogo8").value = "O";
                           document.getElementById("jogo8").disabled = true;
                           jogadas++;
                          }
                           //jogo continua//
                           else if (jogadas == 8 && document.getElementById("jogo3").value == "X" && document.getElementById("jogo6").value == "X" && document.getElementById("jogo1").value == "X" && document.getElementById("jogo8").value == "X"){
                              document.getElementById("jogo7").value = "O";
                              document.getElementById("jogo7").disabled = true;
                              jogadas++;
                             }
     else if (jogadas == 4 && document.getElementById("jogo2").value == "X" && document.getElementById("jogo3").value == "X"){
      document.getElementById("jogo1").value = "O";
      document.getElementById("jogo1").disabled = true;
      jogadas++;
     }
                          //vitorias bot//
                          else if (jogadas == 6 && document.getElementById("jogo2").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo4").value == "X"){
                           document.getElementById("jogo9").value = "O";
                           document.getElementById("jogo9").disabled = true;
                           jogadas++;
                           }
                           else if (jogadas == 6 && document.getElementById("jogo2").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo6").value == "X"){
                              document.getElementById("jogo9").value = "O";
                              document.getElementById("jogo9").disabled = true;
                              jogadas++;
                              }
                              else if (jogadas == 6 && document.getElementById("jogo2").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo7").value == "X"){
                                 document.getElementById("jogo9").value = "O";
                                 document.getElementById("jogo9").disabled = true;
                                 jogadas++;
                                 }
                                 else if (jogadas == 6 && document.getElementById("jogo2").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo8").value == "X"){
                                    document.getElementById("jogo9").value = "O";
                                    document.getElementById("jogo9").disabled = true;
                                    jogadas++;
                                    }
                           //jogo continua//
                           else if (jogadas == 6 && document.getElementById("jogo2").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo9").value == "X"){
                           document.getElementById("jogo6").value = "O";
                           document.getElementById("jogo6").disabled = true;
                           jogadas++;
                           }
                         //vitórias bot//
                        else if (jogadas == 8 && document.getElementById("jogo2").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo7").value == "X"){
                           document.getElementById("jogo4").value = "O";
                           document.getElementById("jogo4").disabled = true;
                           jogadas++;
                          }
                          else if (jogadas == 8 && document.getElementById("jogo2").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo8").value == "X"){
                           document.getElementById("jogo4").value = "O";
                           document.getElementById("jogo4").disabled = true;
                           jogadas++;
                          }
                           //jogo continua//
                           else if (jogadas == 8 && document.getElementById("jogo2").value == "X" && document.getElementById("jogo3").value == "X" && document.getElementById("jogo9").value == "X" && document.getElementById("jogo4").value == "X"){
                              document.getElementById("jogo8").value = "O";
                              document.getElementById("jogo8").disabled = true;
                              jogadas++;
                             }
                             if (jogadas == 2 && document.getElementById("jogo5").value === "X") {
                               
                                    alert("O Bot desistiu.");
                                    location.reload();
                               }}





     
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
     alert("O Bot ganhou.");
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