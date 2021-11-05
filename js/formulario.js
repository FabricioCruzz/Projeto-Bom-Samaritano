let inputNames = [
    'nomeCompleto',
    'dataNasc',
    'sexo',
    'telefone1',
    'telefone2',
    'rua',
    'numero',
    'bairro',
    'complemento',
    'qtdMoradores',
    'qtdCriancas',
    'idadeCriancas',
    'qtdTrabalhadores',
    'rendaMedia',
    'necessidades'
]

function start(){
    const btn = document.getElementById('button')
    btn.onclick = captureDataForm
}

const captureDataForm = event =>{
    let dadosForm = []
    let i = 0
    inputNames.forEach(inputName => {
        let input = document.querySelector(`input[name="${inputName}"`)
        
        if(input.type == "radio"){
            input = document.querySelector(`input[name="${inputName}"]:checked`).value
        }
        else {
            input = input.value
        }     
        dadosForm[i] = input
        i++
    })

    dadosForm[i] = document.getElementsByName('observacao')[0].value

    console.log(JSON.stringify(dadosForm))

    event.preventDefault()
}

start()