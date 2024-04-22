async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos');
    const conexaoConvertida = await conexao.json();
    
    console.log(conexaoConvertida);
    return conexaoConvertida;
}

// EXPORTANDO UMA VARIAVEL que tem um OBJETO com a função listaVideos
export const conectaApi = {
    listaVideos
}