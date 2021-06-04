/* 
    Reconstrução do tratamento do texto 
    Aqui vamos ter as funçoes:
        Removepunctuation: Remove toda, e qualquer pontuação que tenha no texto, permitindo somente letras e numeros.
        separation: remove espaços duplos ou triplos em uma string.
        connectors: retorna o texto sem os conectores contidos em uma lista seleta
        ignoreword: Função para ignorar palavras que estão na caixa de texto
        wordCounter: Retorna duas string, uma com as palavras não repetidas, outra com a quantidade de vezes que essas palavras se repetiram.
        randomColor: Função para criar cores randomicas.
        getTitle: Pega o titulo recebido do campo.
        setWorld: retorna um array com as palavras.
        settxtContFinal: Retorna um array com a quantidade de repetições
*/

//Variaveis Globais
let worldContFinal = [] //variavel onde vai estar o array da quantidade de repetiçoes das palavras
let worldNoRepet = [] //variavel onde vai estar o aray dos resultados finais
let colorsRandom = [] //Resultado de todas as random colors gerado.
let title = "" //Titulo do grafico.
const getTitle = (t) => {title = t}


const randomColor = () => {
    let r = Math.floor(Math.random() * 255) ; //gera um valor para o R do RGB
    let g = Math.floor(Math.random() * 255) ; //gera um valor para o g do RGB
    let b = Math.floor(Math.random() * 255) ; //gera um valor para o b do RGB
    return `rgba(${r},${g},${b}, 0.5)` //retorna o RGB com os numeros aleatorios, criando assim uma cor aleatoria
}

const Removepunctuation = (txt) => {
        /*  Primeiramente deixa todas as letras maiusculas usando o  "toUpperCase()" para que evite erros.
        Apos isso faz o replaceAll onde mantem todas as letras de A ate Z removendo qualquer pontuação.*/
        let resultado = txt.toUpperCase().replace(/[^A-Za-z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑz_ ]/gi, " ") 
        return resultado
}

const separation = (txt) => {
        /*  Ultiliza o trim para remover todos os espaços a mais no começo e no final
            Utiliza o replaceAll para remover todos os espaços duplos ou triplos colocando apenas um espaço.*/
        let resultado = txt.trim().replaceAll(/( )+/g,' ')
        return resultado;
}

const connectors = (txt) => {
        // Lista de conectores a serem iginorados na string
        let conectores = [" EM PRIMEIRO LUGAR ", " ANTES DE MAIS NADA ", " ANTES DE TUDO ", " EM PRINCÍPIO ", " PRIMEIRAMENTE ", " ACIMA DE TUDO ", " PRINCIPALMENTE ", " PRIMORDIALMENTE ", " SOBRETUDO ", " A PRIORI ", " A POSTERIORI ", 
                            " PRECIPUAMENTE ", " ENFIM ", " LOGO DEPOIS ", " IMEDIATAMENTE ", " LOGO APÓS ", " A PRINCÍPIO ", " NO MOMENTO EM QUE ", " POUCO ANTES ", " POUCO DEPOIS ", " ANTERIORMENTE ", " POSTERIORMENTE ", " EM SEGUIDA ", 
                            " AFINAL ", " POR FIM ", " DA MESMA FORMA", " CADA VEZ QUE ", " AO MESMO TEMPO ", " DO MESMO MODO ", " DE ACORDO COM", " TANTO QUANTO ", " NÃO APENAS ", " POR OUTRO LADO", " QUEM SABE ", " SEM DÚVIDA ", 
                            " DE REPENTE ", " OU SEJA ", " ISTO É ", " POR EXEMPLO ", " COM O FIM DE ", " A FIM DE ", " COMO PROPÓSITO ",  " COM A FINALIDADE DE ", " COM O INTUITO DE ", " EM RESUMO ", " DESSA FORMA ", " DESSA MANEIRA ", 
                            " DESSE MODO ", " EM RESUMO ", " POSTO QUE ", " NO ENTANTO ", " EM CONTRAPARTIDA ", " APESAR DE ", " MESMO QUE ", " POR QUE ", " PORQUE ", " PORQUÊ ", " POR QUÊ", " POIS ", " POR MAIS ", " POR MENOS ", " DE ", 
                            " DA ", " DÁ ", " DO ", " E ", " A ", " É ", " O ", " ENTÃO ", " SÓ ", " SE ", " COM ", " EM ", " Á ", " ÁS ", " POR ", " PELA ", " QUE ", " OS ", " AS ", " OU ", " QUE ", " PARA ", " ESSE ", " AQUELE ", " AO ", 
                            " NO ", " NA ", " SÃO ", " FOI ", " FIZERAM ", " SE ", " ESTE", " COMO ", " NA ", " NO ", " PODE ", " DOS ", " ESTÁ ", " SEJA ", " DAS ", " DOS ", " DES ", " LO ", " ASSIM ", " DIZER ", " AFINAL ", " SEUS ", 
                            " SUAS ", " ESSES ", " ESSAS ", " NO ", " NA ", "SÃO ", " DÁ ", " DÓS ", " LÓ ", " LÁS ", " LÓS ", " LIS ", " DÁ ", " DÁS ", " DÓS ", " DÊS ", " DUS ", " SEJAM ", " SERÁ ", " DESSES ", " DESSE ", " DESSA ", 
                            " INICIA ", " O ", " A ", " AS ", " OS ", " TAL ", " MODO "]
        let resultado = txt; //resultado recebe o texto por padrão.
        //Repetição for, para repetir a quantiudade de conectores que tem.
        conectores.forEach((i) =>{  
            /*  Ele pega o resultado, que por padrão contem o txt,  e procura se nele existe o primeiro conector
                subistiruindo-o por um espaço, apos isso reescreve o resultado com a nova string.*/
            resultado = resultado.toUpperCase().replaceAll(i," ") 
        })
        return resultado;
}
const ignoreWord = (txt, ig) => {
    let resultado = txt;
    let listig = ig.split("; ")
    listig.forEach((w)=>{
        // console.log(" "+w+" ")
        resultado = resultado.toUpperCase().replaceAll(" "+w.toUpperCase()+" "," ") 
    })
    // console.log(resultado)
    return resultado;
}

const wordCounter = (txt, ignorelist, swichChoose) => {
        //tratamento geral do texto
        ignoreWord(txt, ignorelist)
        let resultado = connectors(separation(ignoreWord(Removepunctuation(txt), ignorelist))) //Texto sendo tratado pelas funções
        let world = resultado.split(" ") //Onde o texto e separado em substring de palavras
        worldContFinal = [] //zera o contador antes de recontar(Bug recorrente de continuar armazendo resultados anteriores)
        worldNoRepet = [ ...new Set( world ) ] //cria um novo array retirando todas as palavras repetidas.
        // console.log(swichChoose)
        if(!swichChoose){ //Caso falso, ira analisar como numero inteiro.
            worldNoRepet.forEach((w, i) => { //cria uma loop for com as palavras não repetidas.
                worldContFinal[i] = world.filter((x) => x === w).length  //Olha para as palavras repetidas, e para as palavras gerais da frase, e conta quantas vezes cada palavra se repete.
            });
        }else{ //caso verdadero, ira analisar em porcentagem.
            worldNoRepet.forEach((w, i) => { //cria uma loop for com as palavras não repetidas.
                worldContFinal[i] = ((world.filter((x) => x === w).length / world.length)*100).toFixed(2)  //Olha para as palavras repetidas, e para as palavras gerais da frase, e conta quantas vezes cada palavra se repete.
                console.log(worldContFinal[i])
            });
        }
        worldNoRepet.forEach((c, j)=>{ //repete o numero de palavras para criar uma cor randomica para cada uma
            colorsRandom[j] = randomColor() //cria uma cor aleatoria para cada palavra encontrada
        })
}
//Pega o titulo e coloca em uma variavel global


//retorna os valores da variavel
function setWorld(){ return worldNoRepet } 
function setTitle(){ return title}
function setCont(){ return worldContFinal }
function setcolors(){ return colorsRandom }

export {
    wordCounter,
    getTitle,
    randomColor,
    setWorld,
    setTitle,
    setCont,
    setcolors
}