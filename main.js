'use strict'; // Ativa o modo restrito
// Código para cosumo de API da ViaCEP
// https://viacep.com.br/
 
 
// Limpar consulta do form já realizada
const limparFormulario = () =>{
    document.getElementById('rua').value ='';
    document.getElementById('bairro').value ='';
    document.getElementById('cidade').value ='';
    document.getElementById('estado').value ='';
}
 
// Verificar se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
// Verifica o tamanho CEP
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Função para preencher campos relacionados ao cep
const preencherFotmulario = (endereco) =>{
    document.getElementById("logradouro").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.logradouro;
    document.getElementById("localidade").value = endereco.logradouro;
    document.getElementById("uf").value = endereco.logradouro;
}
