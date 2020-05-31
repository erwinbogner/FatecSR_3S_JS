//const URL_BASE = "https://wllsistemas.com.br/api/v2/public/pessoa/"
//const URL_BASE = "https://www.wllsistemas.com.br/api/v3/cliente/"
const URL_BASE = "https://wllsistemas.com.br/api/v2/public/pessoa/"
CarregarDados();



botaoCarregar.addEventListener('click',
    CarregarDados
);


function CarregarDados() {
    var str = '';
    resultado.value = '';
    dados1.innerHTML = '';
    fetch(URL_BASE, { method: 'GET' })
        .then(response => response.json())
        .then(json => {
            json.forEach(pessoas =>
                dados1.innerHTML += `
                <tr class="table-striped" id="identificador">
                    <td> ${pessoas.ID}</td>
                    <td>${pessoas.NOME}</td>
                    <td>${pessoas.EMAIL}</td>
                    <td>${pessoas.TIPO}</td>
                    <td><button class="btn btn-primary">Alterar</button>
                    <button class="btn btn-danger" id="excluir${pessoas.ID}" >Excluir</button></td>
                </tr>`
            );

            json.forEach(pessoas => {
                let ident = pessoas.ID
                document.getElementById('excluir'+ ident).addEventListener('click', function () {
                    deletarDados(ident)
                })
                
            })
        });
        
    //dados1.innerHTML = str;
    //console.log(str);
    //dados1.innerHTML = `<tr><td>pessoas.ID</td><td>pessoas.NOME</td><td>pessoas.EMAIL</td><td>pessoas.TIPO</td></tr>`;

}

function deletarDados(ident) {
    fetch(URL_BASE + ident, {method:'DELETE'})
    .then(response => response.json())
    .then(json => alert(json.mensagem))
    
}

//resultado.value += pessoas.ID + '-' + pessoas.NOME + '-' + pessoas.EMAIL + '\n');
//str += "<div id='botao'> <p>" + pessoas.NOME + "</p> " + "</div>");


GravarDado.addEventListener('click', function() {
    let xnome = nome.value
    let xemail = email.value
    let xtipo = tipo.value
    fetch(URL_BASE, {
            method: 'POST',
            body: `nome=${xnome}&email=${xemail}&tipo=${xtipo}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.json())
        //.then(json => console.log(json.mensagem))
        .then(json => resposta.innerHTML = 'Incluido com sucesso . . . ')

    CarregarDados();

});

//`NOME=${xnome}&EMAIL=${xemail}&TIPO=${xtipo}`,
//body: 'NOME=' + xnome + '&EMAIL=' + xemail + '&TIPO=' + xtipo,

// botaoADD.addEventListener('click', () => {
//     fetch(URL_BASE, {
//             method: 'POST',
//             body: `nome=ErwinBogner&email=bonito@bonito.com&tipo=FISICA`,
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         })
//         .then(response => response.json())
//         //.then( json => console.log( json.mensagem))
//         .then(json => resposta.innerHTML = 'Incluido com sucesso')
// });

LimparDado.addEventListener('click', function () {
    if(nome.value != ''){
        nome.value = '';
    }
    if(email.value != ''){
        email.value = '';
    }
    if(tipo.value != ''){
        tipo.value = '';
    }
})
