// korrekte Ausdrücke zur zufälligen Ausgabe
var arrayKorrekt = ["1","3","5","1+1","7*8","9-6","4+(2)","8+(0)","7+5-3","3*2+1"];

function getAusdruckKorrekt(){
    document.getElementById("expression").value = arrayKorrekt[Math.floor(Math.random() * arrayKorrekt.length)];
}

// falsche Ausdrücke zur zufälligen Ausgabe
var arrayFalsch = ["(","+","*","22","7-","1++","2+(","3-()","(9/3","4*10","8*5/","3*3+)","0+((1"];

function getAusdruckFalsch(){
    document.getElementById("expression").value = arrayFalsch[Math.floor(Math.random() * arrayFalsch.length)];
}

// Funktion des Reset-Buttons
function reloadThePage(){
    window.location.reload();
}

// Animation im Kellerautomat
$(document).ready(function(){ 
    
  $("#playbutton").click(function(){      
      
      // aktueller Ausdruck
      var expression = document.getElementById("expression").value;
      var expressionArray = Array.from(expression);
      
      // weitere Variablen
      var i = 0;        // Index-Stelle im expressionArray
      var time = 1250;  // Zeitabstand bei der Animation
      var step = 0;     // Anzahl der Schritte
      
      // Startpfeil wird grün angezeigt
      setTimeout(function() { $("#start_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"}); }, time*step);
      step++;
      
      // Startpfeil wieder schwarz, q0-Kreis wird grün angezeigt
      setTimeout(function() { $("#start_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                              $("#q0_kreis").css("fill", "#8dc68d"); }, time*step);
      step++;
      
      // q0-Kreis wieder schwarz, q0q1-Pfeil wird grün angezeigt, Keller erhält gleichzeitig ein $
      setTimeout(function() { $("#q0_kreis").css("fill", "none");
                              $("#q0q1_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                              $("#q0q1_pfeil_text").css("stroke", "#8dc68d");
                              $("#keller_empty").hide();
                              $("#aktueller_keller_inhalt").append("$"); }, time*step);
      step++;   

      
      // q0q1-Pfeil wieder schwarz, q1-Kreis wird grün angezeigt
      setTimeout(function() { $("#q0q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                              $("#q0q1_pfeil_text").css("stroke", "#3D3D3D");
                              $("#q1_kreis").css("fill", "#8dc68d"); }, time*step);
      step++;
      
      // Variablen für die Ausgabe des verarbeiteten Ausdrucks
      var a = expressionArray[0];
      var b = expressionArray[1];
      var c = expressionArray[2];
      var d = expressionArray[3];
      var e = expressionArray[4];
      
      /* ERSTE STELLE IM AUSDRUCK
      wenn erste Stelle des Ausdrucks = Zahl von 0-9, gehe zu q2 */
      if ((expressionArray[i] == "0") || (expressionArray[i] == "1") || (expressionArray[i] == "2") || (expressionArray[i] == "3") || (expressionArray[i] == "4") || (expressionArray[i] == "5") || (expressionArray[i] == "6") || (expressionArray[i] == "7") || (expressionArray[i] == "8") || (expressionArray[i] == "9")) {
      // q1-Kreis wieder schwarz, q1q2-Pfeil wird grün angezeigt, Stelle wurde verarbeitet
      setTimeout(function() { $("#q1_kreis").css("fill", "none");
                              $("#q1q2_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                              $("#q1q2_pfeil_text").css("stroke", "#8dc68d");
                              $("#ausdruck_empty").remove(); 
                              $("#aktueller_ausdruck_inhalt").append(a); }, time*step);
      step++;
      i++;

      // q1q2-Pfeil wieder schwarz, q2-Kreis wird grün angezeigt
      setTimeout(function() { $("#q1q2_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                                  $("#q1q2_pfeil_text").css("stroke", "#3D3D3D");
                                  $("#q2_kreis").css("fill", "#8dc68d"); }, time*step);
      step++;
                
          /* ZWEITE STELLE IM AUSDRUCK
          wenn zweite Stelle im Ausdruck = leer, gehe weiter zu q3 */
          if (expressionArray[i] == null) {
              
              // q2-Kreis wieder schwarz, q2q3-Pfeil wird grün angezeigt, Keller konsumiert $
              setTimeout(function() { $("#q2_kreis").css("fill", "none");
                                      $("#q2q3_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                                      $("#q2q3_pfeil_text").css("stroke", "#8dc68d");
                                      $("#aktueller_keller_inhalt").remove();
                                      $("#keller_empty").show(); }, time*step);
              step++;
              
              // q2q3-Pfeil wieder schwarz, q3-Kreis wird grün angezeigt, Meldung: "Ausdruck ist gültig"
              setTimeout(function() { $("#q2q3_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                                      $("#q2q3_pfeil_text").css("stroke", "#3D3D3D"); 
                                      $("#q3_kreis_aussen").css("fill", "#8dc68d");
                                      $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist gültig");
                                      $("#aktueller_ausdruck_inhalt").css("color", "green"); }, time*step);
              } 
                   
            /* ZWEITE STELLE IM AUSDRUCK
            wenn zweite Stelle = Operator, gehe zurück zu q1 */
            else if ((expressionArray[i] == "+") || (expressionArray[i] == "-") || (expressionArray[i] == "*") || (expressionArray[i] == "/")) {
                
            // q2-Kreis wieder schwarz, q2q1-Pfeil wird grün angezeigt, Keller, Stelle wird verarbeitet
            setTimeout(function() { $("#q2_kreis").css("fill", "none");
                                    $("#q2q1_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                                    $("#q2q1_pfeil_text").css("stroke", "#8dc68d");
                                    $("#aktueller_ausdruck_inhalt").append(b); }, time*step);
            step++;
            i++;
            
            // q2q1-Pfeil wieder schwarz, q1-Kreis wird grün angezeigt
            setTimeout(function() { $("#q2q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                                    $("#q2q1_pfeil_text").css("stroke", "#3D3D3D");
                                    $("#q1_kreis").css("fill", "#8dc68d"); }, time*step);
            step++;
                
                /* DRITTE STELLE IM AUSDRUCK
                wenn dritte Stelle im Ausdruck = leer, dann Ausdruck ungültig */ 
                if (expressionArray[i] == null) { setTimeout(function() { 
                                     $("#q1_kreis").css("fill", "#c68d8d");
                                     $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                                     $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                }
                
                /* DRITTE STELLE IM AUSDRUCK
                wenn dritte Stelle des Ausdrucks = Zahl von 0-9, gehe zu q2 */
                else if ((expressionArray[i] == "0") || (expressionArray[i] == "1") || (expressionArray[i] == "2") || (expressionArray[i] == "3") || (expressionArray[i] == "4") || (expressionArray[i] == "5") || (expressionArray[i] == "6") || (expressionArray[i] == "7") || (expressionArray[i] == "8") || (expressionArray[i] == "9")) {
                    
                // q1-Kreis wieder schwarz, q1q2-Pfeil wird grün angezeigt, Stelle wurde verarbeitet
                setTimeout(function() { $("#q1_kreis").css("fill", "none");
                                        $("#q1q2_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                                        $("#q1q2_pfeil_text").css("stroke", "#8dc68d");
                                        $("#aktueller_ausdruck_inhalt").append(c); }, time*step);
                    
                step++;
                i++;
                    
                // q1q2-Pfeil wieder schwarz, q2-Kreis wird grün angezeigt
                setTimeout(function() { $("#q1q2_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                                        $("#q1q2_pfeil_text").css("stroke", "#3D3D3D");
                                        $("#q2_kreis").css("fill", "#8dc68d"); }, time*step);
                    
                step++;
                
                    /* VIERTE STELLE IM AUSDRUCK
                    wenn vierte Stelle im Ausdruck = leer, gehe weiter zu q3 */
                    if (expressionArray[i] == null) {

                    // q2-Kreis wieder schwarz, q2q3-Pfeil wird grün angezeigt, Keller konsumiert $
                    setTimeout(function() { $("#q2_kreis").css("fill", "none");
                                            $("#q2q3_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                                            $("#q2q3_pfeil_text").css("stroke", "#8dc68d");
                                            $("#aktueller_keller_inhalt").remove();
                                            $("#keller_empty").show(); }, time*step);
                    step++;

                    // q2q3-Pfeil wieder schwarz, q3-Kreis wird grün angezeigt, Meldung: "Ausdruck ist gültig"
                    setTimeout(function() { $("#q2q3_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                                            $("#q2q3_pfeil_text").css("stroke", "#3D3D3D"); 
                                            $("#q3_kreis_aussen").css("fill", "#8dc68d");
                                            $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist gültig");
                                            $("#aktueller_ausdruck_inhalt").css("color", "green"); }, time*step);

                    step++;

                    }
                    
                    /* VIERTE STELLE IM AUSDRUCK
                    wenn vierte Stelle im Ausdruck = Operator, dann gehe zurück zu q1 */
                    else if ((expressionArray[i] == "+") || (expressionArray[i] == "-") || (expressionArray[i] == "*") || (expressionArray[i] == "/")) {
                
                    // q2-Kreis wieder schwarz, q2q1-Pfeil wird grün angezeigt, Keller, Stelle wird verarbeitet
                    setTimeout(function() { $("#q2_kreis").css("fill", "none");
                                            $("#q2q1_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                                            $("#q2q1_pfeil_text").css("stroke", "#8dc68d");
                                            $("#aktueller_ausdruck_inhalt").append(d); }, time*step);
                    step++;
                    i++;

                    // q2q1-Pfeil wieder schwarz, q1-Kreis wird grün angezeigt
                    setTimeout(function() { $("#q2q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                                            $("#q2q1_pfeil_text").css("stroke", "#3D3D3D");
                                            $("#q1_kreis").css("fill", "#8dc68d"); }, time*step);
                    step++;
                        
                        /* FÜNFTE STELLE IM AUSDRUCK
                        wenn fünfte Stelle im Ausdruck = leer, dann Ausdruck ungültig */
                        if (expressionArray[i] == null) { setTimeout(function() { 
                        $("#q1_kreis").css("fill", "#c68d8d");
                        $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                        $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                        }
                        
                        /* FÜNFTE STELLE IM AUSDRUCK
                        wenn fünfte Stelle im Ausdruck = Zahl 0-9, dann gehe zu q2 */
                        else if ((expressionArray[i] == "0") || (expressionArray[i] == "1") || (expressionArray[i] == "2") || (expressionArray[i] == "3") || (expressionArray[i] == "4") || (expressionArray[i] == "5") || (expressionArray[i] == "6") || (expressionArray[i] == "7") || (expressionArray[i] == "8") || (expressionArray[i] == "9")) {
                    
                        // q1-Kreis wieder schwarz, q1q2-Pfeil wird grün angezeigt, Stelle wurde verarbeitet
                        setTimeout(function() { $("#q1_kreis").css("fill", "none");
                        $("#q1q2_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                        $("#q1q2_pfeil_text").css("stroke", "#8dc68d");
                        $("#aktueller_ausdruck_inhalt").append(e); }, time*step);
                    
                        step++;
                        i++;
                    
                        // q1q2-Pfeil wieder schwarz, q2-Kreis wird grün angezeigt
                        setTimeout(function() { $("#q1q2_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                        $("#q1q2_pfeil_text").css("stroke", "#3D3D3D");
                        $("#q2_kreis").css("fill", "#8dc68d"); }, time*step);
                    
                        step++;
                            
                            /* SECHSTE STELLE IM AUSDRUCK
                            wenn sechste Stelle im Ausdruck = leer, gehe weiter zu q3 */
                            if (expressionArray[i] == null) {
                            
                            // q2-Kreis wieder schwarz, q2q3-Pfeil wird grün angezeigt, Keller konsumiert $
                            setTimeout(function() { $("#q2_kreis").css("fill", "none");
                            $("#q2q3_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                            $("#q2q3_pfeil_text").css("stroke", "#8dc68d");
                            $("#aktueller_keller_inhalt").remove();
                            $("#keller_empty").show(); }, time*step);
                            step++;
                            
                            // q2q3-Pfeil wieder schwarz, q3-Kreis wird grün angezeigt, Ausdruck gültig
                            setTimeout(function() { $("#q2q3_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                            $("#q2q3_pfeil_text").css("stroke", "#3D3D3D"); 
                            $("#q3_kreis_aussen").css("fill", "#8dc68d");
                            $("#aktueller_keller_inhalt").append(" → Ausdruck ist gültig");
                            $("#aktueller_ausdruck_inhalt").css("color", "green"); }, time*step);
                            }
                        
                        }
                        
                        /* FÜNFTE STELLE IM AUSDRUCK
                        wenn fünfte Stelle im Ausdruck = öffnende Klammer, mache einen Loop bei q1 */
                        else if (expressionArray[i] == "(") {
              
                        // q1-Kreis wieder schwarz, q1-Pfeil wird grün angezeigt, Stelle wurde verarbeitet
                        setTimeout(function() { $("#q1_kreis").css("fill", "none");
                        $("#q1_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                        $("#q1_pfeil_text").css("stroke", "#8dc68d");
                        $("#aktueller_keller_inhalt").append("(");
                        $("#aktueller_ausdruck_inhalt").append(e); }, time*step);

                        step++;
                        i++;
                            
                            /* SECHSTE STELLE IM AUSDRUCK
                            wenn sechste Stelle im Ausdruck = leer, dann Ausdruck ungültig */ 
                            if (expressionArray[i] == null) { setTimeout(function() {
                            $("#q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                            $("#q1_pfeil_text").css("stroke", "#3D3D3D");
                            $("#q1_kreis").css("fill", "#c68d8d");
                            $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                            $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                            }
                               
                        }
                        
                        /* FÜNFTE STELLE IM AUSDRUCK
                        wenn fünfte Stelle des Ausdrucks = kein Element des Eingabealphabets, schließende Klammer oder Operator, dann Meldung "Ausdruck ungültig" & Ende */
                        else { setTimeout(function() { $("#q1_kreis").css("fill", "#c68d8d");
                                                       $("#aktueller_ausdruck_inhalt").append(e);
                                                       $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                                                       $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                        }
                    
                    }
                    
                    /* VIERTE STELLE IM AUSDRUCK
                    wenn vierte Stelle des Ausdrucks = kein Element des Eingabealphabets, eine Zahl oder 
                    eine Klammer, dann Meldung "Ausdruck ungültig" & Ende */
                    else { setTimeout(function() { $("#q2_kreis").css("fill", "#c68d8d");
                                           $("#aktueller_ausdruck_inhalt").append(d);
                                           $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                                           $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                    }
                    
                }
                
                /* DRITTE STELLE IM AUSDRUCK
                wenn dritte Stelle des Ausdrucks = öffnende Klammer, mache einen Loop bei q1 */
                else if (expressionArray[i] == "(") {
              
                // q1-Kreis wieder schwarz, q1-Pfeil wird grün angezeigt, Stelle wurde verarbeitet
                setTimeout(function() { $("#q1_kreis").css("fill", "none");
                                      $("#q1_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                                      $("#q1_pfeil_text").css("stroke", "#8dc68d");
                                      $("#aktueller_keller_inhalt").append("(");
                                      $("#aktueller_ausdruck_inhalt").append(c); }, time*step);
                step++;
                i++;
                    
                    /* VIERTE STELLE IM AUSDRUCK
                    wenn vierte Stelle des Ausdrucks = leer, dann Ausdruck ungültig */
                    if (expressionArray[i] == null) { setTimeout(function() { 
                                     $("#q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                                     $("#q1_pfeil_text").css("stroke", "#3D3D3D"); 
                                     $("#q1_kreis").css("fill", "#c68d8d");
                                     $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                                     $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                    }
                    
                    /* VIERTE STELLE IM AUSDRUCK
                    wenn vierte Stelle des Ausdrucks = Zahl 0-9, dann gehe zu q2 */
                    else if ((expressionArray[i] == "0") || (expressionArray[i] == "1") || (expressionArray[i] == "2") || (expressionArray[i] == "3") || (expressionArray[i] == "4") || (expressionArray[i] == "5") || (expressionArray[i] == "6") || (expressionArray[i] == "7") || (expressionArray[i] == "8") || (expressionArray[i] == "9")) {
                        
                    // q1-Pfeil wieder schwarz, q1-Kreis wird grün angezeigt
                    setTimeout(function() { $("#q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                                            $("#q1_pfeil_text").css("stroke", "#3D3D3D");
                                            $("#q1_kreis").css("fill", "#8dc68d"); }, time*step);
                    step++;
                        
                    // q1-Kreis wieder schwarz, q1q2-Pfeil wird grün angezeigt, Stelle wurde verarbeitet
                    setTimeout(function() { $("#q1_kreis").css("fill", "none");
                                            $("#q1q2_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                                            $("#q1q2_pfeil_text").css("stroke", "#8dc68d");
                                            $("#aktueller_ausdruck_inhalt").append(d); }, time*step);
                    step++;
                    i++;
                        
                    // q1q2-Pfeil wieder schwarz, q2-Kreis wird grün angezeigt
                    setTimeout(function() { $("#q1q2_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                                            $("#q1q2_pfeil_text").css("stroke", "#3D3D3D");
                                            $("#q2_kreis").css("fill", "#8dc68d"); }, time*step);
                    step++;
                        
                        /* FÜNFTE STELLE IM AUSDRUCK
                        wenn fünfte Stelle des Ausdrucks = leer, dann Ausdruck ungültig */
                        if (expressionArray[i] == null) { setTimeout(function() { 
                        $("#q2_kreis").css("fill", "#c68d8d");
                        $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                        $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                        }
                        
                        /* FÜNFTE STELLE IM AUSDRUCK
                        wenn fünfte Stelle des Ausdrucks = Operator, dann gehe zurück zu q1 */
                        else if ((expressionArray[i] == "+") || (expressionArray[i] == "-") || (expressionArray[i] == "*") || (expressionArray[i] == "/")){
                            
                        // q2-Kreis wieder schwarz, q2q1-Pfeil wird grün angezeigt, Keller, Stelle wird verarbeitet
                        setTimeout(function() { $("#q2_kreis").css("fill", "none");
                        $("#q2q1_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                        $("#q2q1_pfeil_text").css("stroke", "#8dc68d");
                        $("#aktueller_ausdruck_inhalt").append(e); }, time*step);
                        
                        step++;
                        i++;
                        
                        // q2q1-Pfeil wieder schwarz, q1-Kreis wird grün angezeigt
                        setTimeout(function() { $("#q2q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                        $("#q2q1_pfeil_text").css("stroke", "#3D3D3D");
                        $("#q1_kreis").css("fill", "#8dc68d"); }, time*step);
                        step++;
                            
                            /* SECHSTE STELLE IM AUSDRUCK
                            wenn sechste Stelle im Ausdruck = leer, dann Ausdruck ungültig */ 
                            if (expressionArray[i] == null) { setTimeout(function() {
                            $("#q1_kreis").css("fill", "#c68d8d");
                            $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                            $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                            }
                            
                        }
                        
                        /* FÜNFTE STELLE IM AUSDRUCK
                        wenn fünfte Stelle des Ausdrucks = schließende Klammer, dann mache Loop bei q2 */
                        else if (expressionArray[i] == ")") {
                            
                        // q2-Kreis wieder schwarz, q2-Pfeil wird grün angezeigt, Stelle wurde verarbeitet
                        setTimeout(function() { $("#q2_kreis").css("fill", "none");
                        $("#q2_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                        $("#q2_pfeil_text").css("stroke", "#8dc68d");
                        $("#aktueller_keller_inhalt").text("$");
                        $("#aktueller_ausdruck_inhalt").append(e); }, time*step);
                        step++;
                        i++;
                        
                        // q2-Pfeil wieder schwarz, q2-Kreis wird grün angezeigt
                        setTimeout(function() { $("#q2_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                        $("#q2_pfeil_text").css("stroke", "#3D3D3D");
                        $("#q2_kreis").css("fill", "#8dc68d"); }, time*step);
                        step++;
                            
                            /* SECHSTE STELLE IM AUSDRUCK
                            wenn sechste Stelle im Ausdruck = leer, gehe weiter zu q3 */
                            if (expressionArray[i] == null) {
                            
                            // q2-Kreis wieder schwarz, q2q3-Pfeil wird grün angezeigt, Keller konsumiert $
                            setTimeout(function() { $("#q2_kreis").css("fill", "none");
                            $("#q2q3_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                            $("#q2q3_pfeil_text").css("stroke", "#8dc68d");
                            $("#aktueller_keller_inhalt").remove();
                            $("#keller_empty").show(); }, time*step);
                            step++;
                            
                            // q2q3-Pfeil wieder schwarz, q3-Kreis wird grün angezeigt, Meldung: "Ausdruck ist gültig"
                            setTimeout(function() { $("#q2q3_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                            $("#q2q3_pfeil_text").css("stroke", "#3D3D3D"); 
                            $("#q3_kreis_aussen").css("fill", "#8dc68d");
                            $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist gültig");
                            $("#aktueller_ausdruck_inhalt").css("color", "green"); }, time*step);
                            } 
                            
                        }
                        
                        /* FÜNFTE STELLE IM AUSDRUCK
                        wenn fünfte Stelle des Ausdrucks = kein Element des Eingabealphabets, öffnende Klammer oder Zahl, dann Meldung "Ausdruck ungültig" & Ende */
                        else { setTimeout(function() { $("#q2_kreis").css("fill", "#c68d8d");
                                                       $("#aktueller_ausdruck_inhalt").append(e);
                                                       $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                                                       $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                        }
                        
                    }
                    
                    /* VIERTE STELLE IM AUSDRUCK
                    wenn vierte Stelle im Ausdruck = öffnende Klammer, mache einen Loop bei q1 */
                    else if (expressionArray[i] == "(") {
                    
                    // q1-Pfeil wird erneut grün angezeigt, Stelle wurde verarbeitet
                    setTimeout(function() { $("#q1_kreis").css("fill", "none");
                                            $("#q1_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                                            $("#q1_pfeil_text").css("stroke", "#8dc68d");
                                            $("#aktueller_keller_inhalt").append("(");
                                            $("#aktueller_ausdruck_inhalt").append(d); }, time*step);

                    step++;
                    i++; 
                        
                        /* FÜNFTE STELLE IM AUSDRUCK
                        wenn fünfte Stelle im Ausdruck = leer, dann Ausdruck ungültig */
                        if (expressionArray[i] == null) { setTimeout(function() {
                            $("#q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                            $("#q1_pfeil_text").css("stroke", "#3D3D3D");
                            $("#q1_kreis").css("fill", "#c68d8d");
                            $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                            $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                        }
                        
                        /* FÜNFTE STELLE IM AUSDRUCK
                        wenn fünfte Stelle im Ausdruck = Zahl 0-9, dann gehe zu q2 */
                        else if ((expressionArray[i] == "0") || (expressionArray[i] == "1") || (expressionArray[i] == "2") || (expressionArray[i] == "3") || (expressionArray[i] == "4") || (expressionArray[i] == "5") || (expressionArray[i] == "6") || (expressionArray[i] == "7") || (expressionArray[i] == "8") || (expressionArray[i] == "9")) {
                        
                         // q1-Pfeil wieder schwarz, q1-Kreis wird grün angezeigt
                        setTimeout(function() { $("#q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                        $("#q1_pfeil_text").css("stroke", "#3D3D3D");
                        $("#q1_kreis").css("fill", "#8dc68d"); }, time*step);
                        step++;
                    
                        // q1-Kreis wieder schwarz, q1q2-Pfeil wird grün angezeigt, Stelle wurde verarbeitet
                        setTimeout(function() { $("#q1_kreis").css("fill", "none");
                        $("#q1q2_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                        $("#q1q2_pfeil_text").css("stroke", "#8dc68d");
                        $("#aktueller_ausdruck_inhalt").append(e); }, time*step);
                        
                        step++;
                        i++;
                        
                        // q1q2-Pfeil wieder schwarz, q2-Kreis wird grün angezeigt
                        setTimeout(function() { $("#q1q2_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                        $("#q1q2_pfeil_text").css("stroke", "#3D3D3D");
                        $("#q2_kreis").css("fill", "#8dc68d"); }, time*step);
                        
                        step++;
                            
                            /* SECHSTE STELLE IM AUSDRUCK
                            wenn sechste Stelle im Ausdruck = leer, dann Ausdruck ungültig */ 
                            if (expressionArray[i] == null) { setTimeout(function() {
                            $("#q2_kreis").css("fill", "#c68d8d");
                            $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                            $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                            }
                            
                        }
                        
                        /* FÜNFTE STELLE IM AUSDRUCK
                        wenn fünfte Stelle im Ausdruck = öffnende Klammer, mache einen Loop bei q1 */
                        else if (expressionArray[i] == "(") {
              
                        // q1-Kreis wieder schwarz, q1-Pfeil wird grün angezeigt, Stelle wurde verarbeitet
                        setTimeout(function() { $("#q1_kreis").css("fill", "none");
                        $("#q1_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                        $("#q1_pfeil_text").css("stroke", "#8dc68d");
                        $("#aktueller_keller_inhalt").append("(");
                        $("#aktueller_ausdruck_inhalt").append(e); }, time*step);

                        step++;
                        i++;
                            
                            /* SECHSTE STELLE IM AUSDRUCK
                            wenn sechste Stelle im Ausdruck = leer, dann Ausdruck ungültig */ 
                            if (expressionArray[i] == null) { setTimeout(function() {
                            $("#q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                            $("#q1_pfeil_text").css("stroke", "#3D3D3D");
                            $("#q1_kreis").css("fill", "#c68d8d");
                            $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                            $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                            }
                               
                        }
                        
                        /* FÜNFTE STELLE IM AUSDRUCK
                        wenn fünfte Stelle des Ausdrucks = kein Element des Eingabealphabets, schließende Klammer oder Operator, dann Meldung "Ausdruck ungültig" & Ende */
                        else { setTimeout(function() { 
                        $("#q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                        $("#q1_pfeil_text").css("stroke", "#3D3D3D");
                        $("#q1_kreis").css("fill", "#c68d8d");
                        $("#aktueller_ausdruck_inhalt").append(e);
                        $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                        $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                        }
                        
                    }
                    
                    /* VIERTE STELLE IM AUSDRUCK
                    wenn vierte Stelle des Ausdrucks = kein Element des Eingabealphabets, ein Operator oder 
                    eine schließende Klammer, dann Meldung "Ausdruck ungültig" & Ende */
                    else { setTimeout(function() { $("#q1_kreis").css("fill", "#c68d8d");
                                           $("#q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                                           $("#q1_pfeil_text").css("stroke", "#3D3D3D");
                                           $("#aktueller_ausdruck_inhalt").append(d);
                                           $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                                           $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                    }
                    
                }
                
                /* DRITTE STELLE IM AUSDRUCK
                wenn dritte Stelle des Ausdrucks = kein Element des Eingabealphabets, ein Operator oder 
                eine schließende Klammer, dann Meldung "Ausdruck ungültig" & Ende */
                else { setTimeout(function() { $("#q1_kreis").css("fill", "#c68d8d");
                                           $("#aktueller_ausdruck_inhalt").append(c);
                                           $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                                           $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                }
                
            }
          
            /* ZWEITE STELLE IM AUSDRUCK
            wenn zweite Stelle des Ausdrucks = kein Element des Eingabealphabets, eine Zahl oder 
            eine Klammer, dann Meldung "Ausdruck ungültig" & Ende */
            else { setTimeout(function() { $("#q2_kreis").css("fill", "#c68d8d");
                                           $("#aktueller_ausdruck_inhalt").append(b);
                                           $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                                           $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
            }
      }
      
      /* ERSTE STELLE IM AUSDRUCK
      wenn erste Stelle des Ausdrucks = öffnende Klammer, mache einen Loop bei q1 */
      else if (expressionArray[i] == "(") {
              
      // q1-Kreis wieder schwarz, q1-Pfeil wird grün angezeigt, Stelle wurde verarbeitet
      setTimeout(function() { $("#q1_kreis").css("fill", "none");
                              $("#q1_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                              $("#q1_pfeil_text").css("stroke", "#8dc68d");
                              $("#aktueller_keller_inhalt").append("(");
                              $("#ausdruck_empty").remove();  
                              $("#aktueller_ausdruck_inhalt").append(a); }, time*step);
      step++;
      i++;
          

          /* ZWEITE STELLE IM AUSDRUCK
          wenn zweite Stelle im Ausdruck = leer, dann Ausdruck ungültig */ 
          if (expressionArray[i] == null) { setTimeout(function() { $("#ausdruck_empty").remove();
                                     $("#q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                                     $("#q1_pfeil_text").css("stroke", "#3D3D3D"); 
                                     $("#q1_kreis").css("fill", "#c68d8d");
                                     $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                                     $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
          }
          
          /* ZWEITE STELLE IM AUSDRUCK
          wenn zweite Stelle des Ausdrucks = Zahl von 0-9, gehe zu q2 */
          else if ((expressionArray[i] == "0") || (expressionArray[i] == "1") || (expressionArray[i] == "2") || (expressionArray[i] == "3") || (expressionArray[i] == "4") || (expressionArray[i] == "5") || (expressionArray[i] == "6") || (expressionArray[i] == "7") || (expressionArray[i] == "8") || (expressionArray[i] == "9")) {
              
          // q1-Pfeil wieder schwarz, q1-Kreis wird grün angezeigt
          setTimeout(function() { $("#q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                                  $("#q1_pfeil_text").css("stroke", "#3D3D3D");
                                  $("#q1_kreis").css("fill", "#8dc68d"); }, time*step);
                    
          step++;
          
          // q1-Kreis wieder schwarz, q1q2-Pfeil wird grün angezeigt, Stelle wurde verarbeitet
          setTimeout(function() { $("#q1_kreis").css("fill", "none");
                                  $("#q1q2_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                                  $("#q1q2_pfeil_text").css("stroke", "#8dc68d");
                                  $("#aktueller_ausdruck_inhalt").append(b); }, time*step);
          step++;
          i++;

          // q1q2-Pfeil wieder schwarz, q2-Kreis wird grün angezeigt
          setTimeout(function() { $("#q1q2_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                                  $("#q1q2_pfeil_text").css("stroke", "#3D3D3D");
                                  $("#q2_kreis").css("fill", "#8dc68d"); }, time*step);
          step++;
              
              /* DRITTE STELLE IM AUSDRUCK
              wenn dritte Stelle im Ausdruck = leer, dann Ausdruck ungültig */ 
              if (expressionArray[i] == null) { setTimeout(function() { 
                                     $("#q2_kreis").css("fill", "#c68d8d");
                                     $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                                     $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
              }
              
              /* DRITTE STELLE IM AUSDRUCK
              wenn dritte Stelle im Ausdruck = Operator, gehe zurück zu q1 */
              else if ((expressionArray[i] == "+") || (expressionArray[i] == "-") || (expressionArray[i] == "*") || (expressionArray[i] == "/")) {
              
              // q2-Kreis wieder schwarz, q2q1-Pfeil wird grün angezeigt, Keller, Stelle wird verarbeitet
              setTimeout(function() { $("#q2_kreis").css("fill", "none");
                                      $("#q2q1_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                                      $("#q2q1_pfeil_text").css("stroke", "#8dc68d");
                                      $("#aktueller_ausdruck_inhalt").append(c); }, time*step);
              step++;
              i++;
            
              // q2q1-Pfeil wieder schwarz, q1-Kreis wird grün angezeigt
              setTimeout(function() { $("#q2q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                                    $("#q2q1_pfeil_text").css("stroke", "#3D3D3D");
                                    $("#q1_kreis").css("fill", "#8dc68d"); }, time*step);
              step++;
                  
                  /* VIERTE STELLE IM AUSDRUCK
                  wenn vierte Stelle des Ausdrucks = leer, dann Ausdruck ungültig */
                  if (expressionArray[i] == null) { setTimeout(function() { 
                                     $("#q1_kreis").css("fill", "#c68d8d");
                                     $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                                     $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                  }
                  
                  /* VIERTE STELLE IM AUSDRUCK
                  wenn vierte Stelle im Ausdruck = Zahl 0-9, dann gehe zu q2 */
                  else if ((expressionArray[i] == "0") || (expressionArray[i] == "1") || (expressionArray[i] == "2") || (expressionArray[i] == "3") || (expressionArray[i] == "4") || (expressionArray[i] == "5") || (expressionArray[i] == "6") || (expressionArray[i] == "7") || (expressionArray[i] == "8") || (expressionArray[i] == "9")) {
                  
                  // q1-Kreis wieder schwarz, q1q2-Pfeil wird grün angezeigt, Stelle wurde verarbeitet
                  setTimeout(function() { $("#q1_kreis").css("fill", "none");
                                          $("#q1q2_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                                          $("#q1q2_pfeil_text").css("stroke", "#8dc68d");
                                          $("#aktueller_ausdruck_inhalt").append(d); }, time*step);
                    
                  step++;
                  i++;
                    
                  // q1q2-Pfeil wieder schwarz, q2-Kreis wird grün angezeigt
                  setTimeout(function() { $("#q1q2_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                                          $("#q1q2_pfeil_text").css("stroke", "#3D3D3D");
                                          $("#q2_kreis").css("fill", "#8dc68d"); }, time*step);
                    
                  step++;
                      
                      /* FÜNFTE STELLE IM AUSDRUCK
                      wenn fünfte Stelle des Ausdrucks = leer, dann Ausdruck ungültig */
                      if (expressionArray[i] == null) { setTimeout(function() { 
                      $("#q2_kreis").css("fill", "#c68d8d");
                      $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                      $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                      }
                      
                      /* FÜNFTE STELLE IM AUSDRUCK
                      wenn fünfte Stelle des Ausdrucks = Operator, dann gehe zurück zu q1 */
                      else if ((expressionArray[i] == "+") || (expressionArray[i] == "-") || (expressionArray[i] == "*") || (expressionArray[i] == "/")){
                      
                      // q2-Kreis wieder schwarz, q2q1-Pfeil wird grün angezeigt, Keller, Stelle wird verarbeitet
                      setTimeout(function() { $("#q2_kreis").css("fill", "none");
                      $("#q2q1_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                      $("#q2q1_pfeil_text").css("stroke", "#8dc68d");
                      $("#aktueller_ausdruck_inhalt").append(e); }, time*step);
                      
                      step++;
                      i++;
                        
                      // q2q1-Pfeil wieder schwarz, q1-Kreis wird grün angezeigt
                      setTimeout(function() { $("#q2q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                      $("#q2q1_pfeil_text").css("stroke", "#3D3D3D");
                      $("#q1_kreis").css("fill", "#8dc68d"); }, time*step);
                          
                      step++;
                          
                          /* SECHSTE STELLE IM AUSDRUCK
                          wenn sechste Stelle im Ausdruck = leer, dann Ausdruck ungültig */ 
                          if (expressionArray[i] == null) { setTimeout(function() {
                          $("#q1_kreis").css("fill", "#c68d8d");
                          $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                          $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                          }
                          
                      }
                      
                      /* FÜNFTE STELLE IM AUSDRUCK
                        wenn fünfte Stelle des Ausdrucks = schließende Klammer, dann mache Loop bei q2 */
                        else if (expressionArray[i] == ")") {
                            
                        // q2-Kreis wieder schwarz, q2-Pfeil wird grün angezeigt, Stelle wurde verarbeitet
                        setTimeout(function() { $("#q2_kreis").css("fill", "none");
                        $("#q2_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                        $("#q2_pfeil_text").css("stroke", "#8dc68d");
                        $("#aktueller_keller_inhalt").text("$");
                        $("#aktueller_ausdruck_inhalt").append(e); }, time*step);
                        step++;
                        i++;
                        
                        // q2-Pfeil wieder schwarz, q2-Kreis wird grün angezeigt
                        setTimeout(function() { $("#q2_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                        $("#q2_pfeil_text").css("stroke", "#3D3D3D");
                        $("#q2_kreis").css("fill", "#8dc68d"); }, time*step);
                        step++;
                            
                            /* SECHSTE STELLE IM AUSDRUCK
                            wenn sechste Stelle im Ausdruck = leer, gehe weiter zu q3 */
                            if (expressionArray[i] == null) {
                            
                            // q2-Kreis wieder schwarz, q2q3-Pfeil wird grün angezeigt, Keller konsumiert $
                            setTimeout(function() { $("#q2_kreis").css("fill", "none");
                            $("#q2q3_pfeil").css({"stroke": "#8dc68d", "fill": "#8dc68d"});
                            $("#q2q3_pfeil_text").css("stroke", "#8dc68d");
                            $("#aktueller_keller_inhalt").remove();
                            $("#keller_empty").show(); }, time*step);
                            step++;
                            
                            // q2q3-Pfeil wieder schwarz, q3-Kreis wird grün angezeigt, Meldung: "Ausdruck ist gültig"
                            setTimeout(function() { $("#q2q3_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                            $("#q2q3_pfeil_text").css("stroke", "#3D3D3D"); 
                            $("#q3_kreis_aussen").css("fill", "#8dc68d");
                            $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist gültig");
                            $("#aktueller_ausdruck_inhalt").css("color", "green"); }, time*step);
                            } 
                            
                        }
                        
                        /* FÜNFTE STELLE IM AUSDRUCK
                        wenn fünfte Stelle des Ausdrucks = kein Element des Eingabealphabets, öffnende Klammer oder Zahl, dann Meldung "Ausdruck ungültig" & Ende */
                        else { setTimeout(function() { $("#q2_kreis").css("fill", "#c68d8d");
                                                       $("#aktueller_ausdruck_inhalt").append(e);
                                                       $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                                                       $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                        }
                      
                  }
                  
                  /* VIERTE STELLE IM AUSDRUCK
                  wenn vierte Stelle des Ausdrucks = kein Element des Eingabealphabets, ein Operator oder 
                  eine Klammer, dann Meldung "Ausdruck ungültig" & Ende */
                  else { setTimeout(function() { $("#q1_kreis").css("fill", "#c68d8d");
                                           $("#q1_pfeil").css({"stroke": "#3D3D3D", "fill": "#3D3D3D"});
                                           $("#q1_pfeil_text").css("stroke", "#3D3D3D");
                                           $("#aktueller_ausdruck_inhalt").append(d);
                                           $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                                           $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
                  }
                  
              }
              
          }
          
      }
      
      /* ERSTE STELLE IM AUSDRUCK          
      wenn erste Stelle des Ausdrucks = kein Element des Eingabealphabets, ein Operator oder 
      eine sich schließende Klammer, dann Meldung "Ausdruck ungültig" & Ende */
      else { setTimeout(function() { $("#ausdruck_empty").remove();
                                     $("#q1_kreis").css("fill", "#c68d8d");
                                     $("#aktueller_ausdruck_inhalt").append(" → Ausdruck ist ungültig");
                                     $("#aktueller_ausdruck_inhalt").css("color", "red"); }, time*step);
      }
      
  });   // schließende Klammer für click-function
    
});     // schließende Klammer document-ready-function