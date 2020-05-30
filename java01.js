const URL_BASE = "https://wllsistemas.com.br/api/v2/public/pessoa/"

GravarDado.addEventListener('click', function() {
    let nome = nome.value
    let email = email.value
    let tipo = tipo.value
    fetch(URL_BASE, {
        method : 'POST',
        body: 'NOME='+ nome+'&EMAIL='+email+'&TIPO='+tipo+'',
        headers:{
            'Content-Type' : 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(json =>console.log(json.mensagem))

})