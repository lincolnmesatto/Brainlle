var height = 6; //num de tentativas
var width = 5; //tamanho da palavra/colunas

var t = 0;

var row = 0; //tentativa corrente
var col = 0; //letra/coluna da tentativa
var gameOver = false;
var gameWin = false;

var scoreboard = [0, 0, 0, 0, 0, 0, 0, 0];

var wordList = ["sagaz","ameba","caule","âmago","negro","êxito","mexer","termo","senso","nobre","algoz","afeto","plena","ética","mútua","tênue","sutil","vigor","aquém","fazer","porém","audaz","sanar","seção","assim","inato","cerne","ideia","fosse","desde","poder","moral","torpe","muito","honra","justo","fútil","gozar","anexo","razão","etnia","quiçá","sobre","ícone","sonho","tange","égide","lapso","mútuo","expor","amigo","haver","hábil","casal","tempo","seara","pesar","ávido","então","dengo","posse","boçal","genro","coser","ardil","corja","causa","dizer","prole","pária","detém","tenaz","dever","saber","digno","óbice","crivo","graça","ápice","ânsia","ânimo","brado","orgia","ceder","comum","gleba","sendo","temor","assaz","culto","atroz","mundo","pauta","censo","fugaz","ainda","cozer","denso","valha","neném","vício","forte","estar","vulgo","revés","pudor","regra","dogma","louco","criar","banal","impor","round","saúde","tenro","jeito","pífio","desse","atrás","ordem","apraz","pedir","mercê","clava","reaça","usura","viril","prosa","juízo","servo","feliz","sábio","homem","coisa","ontem","manso","presa","xibiu","falar","forma","cunho","devir","fluir","afago","meiga","ébrio","platô","mesmo","vendo","sério","limbo","guisa","mágoa","visar","pleno","temer","herói","acaso","cisma","puder","valor","bruma","lugar","posso","êxodo","afins","óbvio","gerar","ímpio","obter","certo","crise","matiz","praxe","senil","havia","vênia","fluxo","enfim","todos","ritmo","tédio","álibi","abrir","união","tomar","garbo","valia","reter","pulha","parvo","visão","falso","fácil","vital","grato","favor","bravo","vivaz","prumo","laico","parco","gênio","olhar","burro","ameno","possa","legal","reles","levar","tecer","óbito","casta","tesão","prime","selar","anelo","fator","ranço","morte","noção","rogar","citar","façam","farsa","sábia","adiar","achar","cabal","noite","coeso","cisão","épico","falta","nicho","ouvir","fardo","força","ativo","viver","sinto","brega","gente","imune","exato","haste","amplo","passo","sonso","lavra","sulco","dúbio","cesta","tendo","sesta","leigo","único","revel","labor","deter","gesto","vemos","calma","árduo","vadia","humor","atuar","feixe","rever","linda","ciúme","pobre","ótica","tende","igual","carma","outro","ponto","toada","hiato","velho","ideal","sonsa","claro","débil","ajuda","vácuo","terno","ambos","remir","varão","cauda","fusão","probo","senão","leito","fonte","marco","jovem","advém","doido","inata","horda","capaz","xeque","terra","tenra","relva","ficar","algum","velar","caçar","série","apoio","farão","líder","anuir","vazio","vimos","rigor","tanto","verso","dorso","coçar","entre","botar","frase","massa","pouco","signo","sente","cruel","prece","moção","coesa","vírus","ambas","morar","fauna","peste","raiva","casto","covil","feito","minha","preso","credo","ciclo","faina","papel","corno","lazer","furor","ímpar","torço","dócil","flora","vetor","brisa","maior","chata","árido","trama","aceso","beata","houve","pegar","blasé","vulto","manha","adeus","setor","liame","breve","banzo","nossa","vasto","birra","senda","salvo","seita","ardor","livro","meses","peixe","morro","visse","pecha","átomo","prado","chuva","antro","reger","comer","prono","plano","sorte","avaro","segue","saiba","ocaso","rezar","pajem","carro","nunca","aliás","saída","ótimo","áureo","anciã","junto","mudar","acima","chulo","séria","serão","sinal","opção","fitar","jazia","fruir","parar","treta","fugir","nação","puxar","bando","andar","grupo","prazo","motim","gerir","leite","norma","tosco","lenda","alude","brava","época","sinhá","rapaz","tenso","parte","campo","exame","avião","ídolo","arcar","psico","reino","tirar","venal","soldo","malta","praga","agora","vilão","quota","anais","corpo","aonde","sumir","índio","virão","risco","logro","antes","praia","preto","traga","fixar","voraz","pompa","exijo","cheio","quase","filho","certa","texto","turba","nódoa","oásis","cópia","solto","turva","alado","apego","caixa","prova","estão","acesa","messe","grave","doído","nível","perda","parva","ligar","verve","conta","apelo","verbo","átrio","tocar","pardo","áurea","lindo","trupe","coito","fenda","livre","dessa","sabia","alçar","opaco","viria","navio","fraco","retém","afora","ficha","jirau","festa","astro","ético","parca","faixa","elite","oxalá","supra","lidar","autor","glosa","mente","tinha","fatos","verba","firme","magia","cioso","fatal","grata","bater","manhã","calda","reses","pique","cousa","junco","privê","deixa","irmão","salve","pagão","macio","molho","douto","abriu","atual","light","bicho","supor","posto","torso","turvo","asilo","ígneo","sexta","extra","órfão","vezes","judeu","sarça","curso","caber","rouca","locus","longe","besta","pisar","porta","drops","rádio","cânon","desta","abuso","ruína","zelar","vídeo","combo","vosso","bioma","ereto","culpa","vinha","finda","paira","menos","agudo","baixo","feudo","facto","bônus","tetra","advir","urgia","nosso","estio","cútis","surja","meigo","traço","sítio","super","gosto","autos","calão","facho","tento","suave","rumor","amena","pilar","cocho","turma","museu","clean","lasso","chama","ações","geral","acolá","louça","optar","pífia","pódio","lápis","local","mosto","boato","medir","hobby","júlia","rubro","crime","pacto","penta","letal","folga","refém","ponha","brabo","drama","poema","páreo","cacho","móvel","aroma","aluno","vigia","cover","mesma","hoste","feroz","vetar","pasmo","peito","fazia","rival","açude","monte","golpe","metiê","ávida","finjo","troça","axila","coral","teste","ecoar","chato","fórum","lição","riste","daqui","piada","plebe","forem","lesse","monge","poeta","artur","verde","clima","carta","súcia","cetro","passa","ébano","escol","tacha","swing","macro","ateia","falha","venha","briga","calmo","roupa","broxa","conto","sarau","viram","busca","cargo","idoso","farta","fruto","tarde","légua","plaga","perco","átimo","aviso","tribo","plumo","berro","chefe","vento","grama","virar","civil","corso","catre","arado","surto","seixo","assar","estro","saldo","traje","bruta","ornar","nuvem","recém","pedra","beijo","manga","deste","fosso","troca","mangá","gíria","única","trato","casar","ímpia","depor","vedar","bença","porte","úteis","deram","arfar","tição","amiga","magna","irado","âmbar","canso","grota","amado","tutor","cifra","silvo","sósia","gabar","bazar","tiver","vazão","pasma","itens","rural","bruto","renda","laudo","pavor","jejum","régio","perto","segar","mídia","bucho","nesse","tchau","pinho","inter","troco","feita","minar","odiar","órgão","vagar","viado","fossa","molde","clero","areia","vadio","lesto","sótão","meche","pomar","aviar","negar","canto","cenho","mamãe","lesão","cinto","largo","rocha","paiol","visto","horto","ileso","bolsa","proto","ruído","pugna","amada","invés","guria","densa","marca","podar","close","morfo","bunda","urdir","vista","jogar","ufano","xucro","vasta","dúbia","mocho","frota","cível","chula","penso","bulir","cheia","úmido","piche","culta","linha","úbere","peita","esgar","varoa","resto","apear","canil","misto","manto","fundo","natal","demão","ágape","monta","tenha","narco","fazes","findo","nessa","barão","campa","santo","gemer","cerca","volta","jazer","chaga","velha","símio","álbum","preço","mover","pólis","logos","retro","ardis","verão","lábia","letra","cosmo","seiva","venho","ferpa","folia","banto","matar","punha","troço","nesta","álamo","etapa","sabor","porca","áudio","ceita","trago","barro","coroa","calça","rente","sigla","axial","louro","final","salva","redor","firma","arroz","limpo","bolso","torna","coevo","tumba","míope","solta","enjoo","queda","lutar","lousa","farol","baixa","dança","fugiu","ousar","folha","mimar","neste","corar","zumbi","veloz","burra","sinta","nácar","obtém","longo","reler","cacto","salmo","macho","forro","penca","vazia","fátuo","calor","vário","justa","farto","bedel","quite","todas","mania","gueto","chave","lucro","repor","puído","calvo","logia","sexto","ultra","custo","subir","passe","refil","urgir","viger","sadio","mimos","versa","valer","harém","hífen","lento","usual","rédea","sócio","cardo","árdua","mouro","bardo"];

wordList.forEach(removeAcentos)

function removeAcentos(item, index, arr){
	wordList[index] = item.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function generateWord(){
	word = wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();
	console.log(word);
}

// selecao da palavra e remocao dos acentos e cedilha
var word = wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();

console.log(word);

window.onload = function(){
    intialize();
}


function intialize() {
    // Criacao do board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.src = "img/0_default.png";
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    // Criacao do teclado
    let keyboard = [
        ["Q.png", "W.png", "E.png", "R.png", "T.png", "Y.png", "U.png", "I.png", "O.png", "P.png"],
        ["A.png", "S.png", "D.png", "F.png", "G.png", "H.png", "J.png", "K.png", "L.png", "0_Blank.png"],
        ["0_Enter.png", "Z.png", "X.png", "C.png", "V.png", "B.png", "N.png", "M.png", "0_Delete.png", "0_reset.png"]
    ]    

    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("img");

            let key = currRow[j];
            keyTile.src = "img/"+key;
            if (key == "0_Enter.png") {
                keyTile.id = "Enter";
            }else if (key == "0_Delete.png") {
                keyTile.id = "Backspace";
            }else if(key == "0_reset.png"){
               keyTile.id = "Reset"; 
            }else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key.charAt(0);
            } 

            keyTile.addEventListener("click", processKey);

            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
         document.getElementById("keyboard").appendChild(keyboardRow);
    }
    

	if(t == 0){
	    // chamada do onKeyUp event
	    document.addEventListener("keyup", (e) => {
	        processInput(e);
	    })
	}
}

function processKey() {
	t++;
    e = { "code" : this.id };
    processInput(e);
}

function processInput(e) {
	if(e.code == "Reset"){
		reset();
	} 

    if (gameOver) return; 

    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (col < width) {
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currTile.innerText == "") {
                currTile.src = "img/"+e.code[3]+".png";
                currTile.alt = e.code[3];
                col += 1;
            }
        }
    }else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -=1;
        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile.src = "img/0_default.png";
        currTile.alt = "";
    }else if (e.code == "Enter") {
        update();
    }

    if (!gameOver && row == height) {
        gameOver = true;
        scoreboard[7] += 1;
        // document.getElementById("answer").innerText = word;
        const a = Array.from(word);
        document.getElementById("answer").innerHTML = "<img src='img/"+a[0]+".png'><img src='img/"+a[1]+".png'><img src='img/"+a[2]+".png'><img src='img/"+a[3]+".png'><img src='img/"+a[4]+".png'>";
    }
}

function update() {
    let guess = "";
    document.getElementById("warning").innerText = "";

    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.alt;
        guess += letter;
    }

    guess = guess.toLowerCase();

    if (!wordList.includes(guess)) {
        document.getElementById("warning").innerText = "Essa palavra não se encontra na lista";
        return;
    }
    
    //processamento do chute
    let correct = 0;

    let letterCount = {}; //monta a frequencia que a letra aparece
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (letterCount[letter]) {
           letterCount[letter] += 1;
        }else {
           letterCount[letter] = 1;
        }
    }

    //checar as letras corrtas
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.alt;

        if (word[c] == letter) {
            currTile.classList.add("correct");

            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");

            correct += 1;
            letterCount[letter] -= 1;
        }

        if (correct == width) {
        	gameWin = true;
            gameOver = true;
            scoreboard[6] += 1;
            scoreboard[row] += 1;
        }
    }

    //checa as letras existentes, mas na posicao errada
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.alt;

        // ignora as letras que foram marcadas como corretas
        if (!currTile.classList.contains("correct")) {
            if (word.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");
                
                let keyTile = document.getElementById("Key" + letter);
                if (keyTile !== null && !keyTile.classList.contains("correct")) {
                    keyTile.classList.add("present");
                }
                letterCount[letter] -= 1;
            }else { // letras que nao estao na palavra
                currTile.classList.add("absent");
                let keyTile = document.getElementById("Key" + letter);
                if(keyTile !== null) keyTile.classList.add("absent")
            }
        }
    }

    row += 1; //comeca uma nova linha
    col = 0; //ajusta a posicao da coluna para a nova linha
}

function reset() {
	document.getElementById("board").innerHTML = "<div></div>";
	document.getElementById("keyboard").innerHTML = "<div><br></div>";
	document.getElementById("answer").innerHTML = "<div></div>";
	intialize();

	if(row != height && !gameWin && row > 0){
		scoreboard[7] += 1;
	}
	console.log(scoreboard);

	row = 0; 
	col = 0;
	generateWord();

	gameOver = false;
	gameWin = false;
}

function abrirModalPlacar(){
	var modalPlacar = document.getElementById("modalPlacar");
	var result = document.getElementById("result");
	var closePlacar = document.getElementById("closePlacar");
    // var close = document.getElementsByClassName("close")[0];

	modalPlacar.style.display = "block";

	result.innerText = "Acertos Totais: "+scoreboard[6]+"\n\r\t 1ª Tentativa:" +scoreboard[0]
                        +"\n\r\t 2ª Tentativa: " +scoreboard[1]
                        +"\n\r\t 3ª Tentativa: " +scoreboard[2]
                        +"\n\r\t 4ª Tentativa: " +scoreboard[3]
                        +"\n\r\t 5ª Tentativa: " +scoreboard[4]
                        +"\n\r\t 6ª Tentativa: " +scoreboard[5]
                        +" \n\r\t Erros: "+scoreboard[7];

    closePlacar.onclick = function() {
      modalPlacar.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modalPlacar) {
        modalPlacar.style.display = "none";
      }
    }
}

function abrirModalInfo(){
	var modalInfo = document.getElementById("modalInfo");
	var close = document.getElementById("closeInfo");
    // var close = document.getElementsByClassName("close")[0];

	modalInfo.style.display = "block";

    close.onclick = function() {
      modalInfo.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modalInfo) {
        modalInfo.style.display = "none";
      }
    }
}
