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
// Função para verificar o conteúdo do textarea e ocultar elementos
function mostrarConteudo() {

    // refatorar essa função que não está funcionando
    const textarea = document.getElementById('texto_saida');
    const imgBoneco = document.getElementById('imgboneco');
    const textoAlerta = document.getElementById('texto-alerta');

    if (textarea.value.trim() !== '') {
        // Se o textarea não estiver vazio, oculte os elementos
        imgBoneco.style.display = 'none';
        textoAlerta.style.display = 'none';
    } else {
        // Caso contrário, exiba os elementos
        imgBoneco.style.display = 'block'; // ou 'inline' se for uma imagem
        textoAlerta.style.display = 'block'; // ou 'inline' se for um label
    }
}

// Adicione um ouvinte de evento para o evento 'input' (quando o usuário digita algo)
document.getElementById('alertas').addEventListener('input', verificarConteudo);