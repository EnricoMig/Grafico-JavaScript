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
    try {
        let response = await fetch("/processamento",{
            method:'POST',headers:{
    
                'content-Type':'application/json'
            }
        });
        
    
        if(response.ok){
            let data = await response.json();
            console.log(data);
            variavel = data;
        } else {
            console.log('Erro na requisição:'+response.status)
        }
    } catch (error) {
        console.error('Erro ao processar arquivo:', error)
    }
}

// Chama a função assim que o DOM estiver carregado
document.addEventListener('DOMContentLoaded', adicionarEventoClique);

