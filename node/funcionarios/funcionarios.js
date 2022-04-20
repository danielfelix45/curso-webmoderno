const url = 'http://files.cod3r.com.br/curso-js/turmaA.json'
const axios = require('axios')

axios.get(url).then(res => {
    const funcionarios = res.data
    console.log(funcionarios)

    
})