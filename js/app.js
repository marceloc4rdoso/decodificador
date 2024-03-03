function criptografa() {
    const chave = 13;
    const mensagem = document.getElementById("texto_entrada").value.toLowerCase();
    let novoTexto = '';
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

    for (const letra of mensagem) {
        let novaLetra = letra;
        const letraIndiceAlfabeto = alfabeto.indexOf(letra);
        if (letraIndiceAlfabeto >= 0) {
            novaLetra = alfabeto.charAt((letraIndiceAlfabeto + chave) % 26);
            novoTexto += novaLetra;
        }
    }

    document.getElementById("texto_saida").value = novoTexto;
    document.getElementById("texto_entrada").value = ''; // Limpa o texto original do campo de entrada
    //return novoTexto
}

function descriptografa() {
    const chave = 13;
    const textoCriptografado = document.getElementById("texto_saida").value.toLowerCase();
    let textoDescriptografado = '';
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

    for (const letra of textoCriptografado) {
        const letraIndiceAlfabeto = alfabeto.indexOf(letra);
        if (letraIndiceAlfabeto >= 0) {
            const novaLetraIndice = (letraIndiceAlfabeto - chave + 26) % 26;
            const novaLetra = alfabeto.charAt(novaLetraIndice);
            textoDescriptografado += novaLetra;
        } else {
            // Se não for uma letra do alfabeto, mantenha a mesma letra no texto descriptografado
            textoDescriptografado += letra;
        }
    }

    document.getElementById("texto_entrada").value = textoDescriptografado;
    document.getElementById("texto_saida").value = ''; // Limpa o texto criptografado
    console.log(textoDescriptografado)
}

function copiarTexto() {
    const textoProcessado = document.getElementById("texto_saida").value;
    navigator.clipboard.writeText(textoProcessado)
        .then(() => alert("Texto copiado com sucesso!"));
}

//Manipulação de elementos na tela

const btnTriggerOff = document.getElementById("cripto");
const btnTriggerOn = document.getElementById("descripto");

btnTriggerOff.addEventListener("click", ocultarConteudo);
function ocultarConteudo() {

    let imgboneco = document.getElementById("imgboneco");
    let textoalerta = document.getElementById("texto-alerta");
            if (imgboneco.style.display === "none" & textoalerta.style.display === "none") {
                imgboneco.style.display = "block";
                textoalerta.style.display = "block";
            } else {
                imgboneco.style.display = "none";
                textoalerta.style.display = "none";
            }    
}
// Envio de cifras por e-mail e whastapp

function meioEnvio() {
    const meioDeEnvio = document.getElementById("meio-envio").value;
    if(typeof(meioDeEnvio) === 'number' & meioDeEnvio < 10) {
      envioWhatsapp();
    } else if(typeof(meioDeEnvio) !== 'number') {
      alert("Insira um número válido ")
    }
  }


function envioWhatsapp(){
    
    const meioDeEnvio = document.getElementById("meio-envio").value;
    const numeroWhatsapp = document.getElementById("btn-whatsapp").value;
    const mensagem = document.getElementById("texto_saida").value;
                      
    if(numeroWhatsapp != "" & mensagem !=""){
        
        //window.open("https://wa.me/55"+ meioDeEnvio +"?text="+ mensagem + " \n " + "Link para decodificar a mensagem: https://marceloc4rdoso.github.io/decodificador/");
        window.open("https://wa.me/55"+ meioDeEnvio +"?text="+ mensagem);
        window.open("https://wa.me/55"+ meioDeEnvio +"?text="+ window.setTimeout("Time",13000) + "Copie essa mensagem cifrada acima e descodifique nesse link: https://marceloc4rdoso.github.io/decodificador/");
    } else{
        alert("Para enviar um texto criptografado insira um texto para criptogragar e depois um número de Whatsapp")
    }
    console.log(numeroWhatsapp)
    console.log(mensagem)

}


