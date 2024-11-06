let variavel;

// Adicionando evento de clique ao botão
function adicionarEventoClique() {
   const submitBTN = document.getElementById('submit')

   submitBTN.addEventListener('click',function(){
        const filePath = document.getElementById('filePath').value.trim()


        if(filePath){
            console.log(`Caminho do arquivo: ${filePath}`)
            envioPath(filePath);
        } else {
            console.log(`Por favor, Insira um caminho Válido!`)
        }
   });
}

async function processarArquivo(filePath) {
    let response = await fetch(/*Endpoint servlet*/"",{
        body: x
    }).then(x => x.json()).then(y =>{
        y =>{
            variavel = y;
    }})
}

// Chama a função assim que o DOM estiver carregado
document.addEventListener('DOMContentLoaded', adicionarEventoClique);

