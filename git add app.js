warning: in the working copy of 'index.html', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/app.js b/app.js[m
[1mindex 51f01ba..f0c1fc5 100644[m
[1m--- a/app.js[m
[1m+++ b/app.js[m
[36m@@ -47,7 +47,6 @@[m [mresultado.innerHTML =[m
     `Números sorteados: ${sorteados.join(', ')}` +[m
     '</label>';[m
     function sortear() {[m
[31m-    // código do sorteio...[m
 [m
     const botaoReiniciar =[m
         document.getElementById('btn-reiniciar');[m
[1mdiff --git a/index.html b/index.html[m
[1mindex 68cea7b..9b09636 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -1,6 +1,9 @@[m
 <!DOCTYPE html>[m
 <html lang="pt-br">[m
 [m
[32m+[m
[32m+[m
[32m+[m
 <head>[m
     <meta charset="UTF-8">[m
     <meta name="viewport" content="width=device-width, initial-scale=1.0">[m
[36m@@ -11,6 +14,9 @@[m
     <title>Sorteador de números</title>[m
 </head>[m
 [m
[32m+[m
[32m+[m
[32m+[m
 <body>[m
     <div class="container">[m
         <div class="container__conteudo">[m
[36m@@ -18,37 +24,55 @@[m
                 <div class="container__texto">[m
                     <h1>Sorteador<span class="container__texto-azul"> de números</span></h1>[m
 [m
[32m+[m
[32m+[m
[32m+[m
                     <div class="container__campo">[m
                         <label class="texto__paragrafo">Quantidade de números</label>[m
                         <input class="container__input" id="quantidade" type="number" min="1">[m
                     </div>[m
[31m-                    [m
[32m+[m[41m                   [m
                     <div class="container__campo">[m
                         <label class="texto__paragrafo">Do número</label>[m
                         <input class="container__input" id="de" type="number" min="1">[m
                     </div>[m
[31m-                    [m
[32m+[m[41m                   [m
                     <div class="container__campo">[m
                         <label class="texto__paragrafo">Até o número</label>[m
                         <input class="container__input" id="ate" type="number" min="1">[m
                     </div>[m
                 </div>[m
[31m-                [m
[32m+[m[41m               [m
                 <div class="chute container__botoes">[m
                     <button onclick="sortear()" id="btn-sortear" class="container__botao">Sortear</button>[m
                     <button onclick="reiniciar()" id="btn-reiniciar" class="container__botao-desabilitado" >Reiniciar</button>[m
                 </div>[m
 [m
[32m+[m
[32m+[m
[32m+[m
                 <div class="container__texto" id="resultado">[m
                     <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>[m
                 </div>[m
             </div>[m
 [m
[32m+[m
[32m+[m
[32m+[m
             <img src="./img/ia.png" alt="Uma pessoa com capacete de astronauta" class="container__imagem-pessoa" />[m
         </div>[m
     </div>[m
 [m
[32m+[m
[32m+[m
[32m+[m
     <script src="app.js" defer></script>[m
 </body>[m
 [m
[31m-</html>[m
\ No newline at end of file[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m[32m</html>[m
[41m+[m
[41m+[m
[41m+[m
