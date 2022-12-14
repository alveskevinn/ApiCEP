  const cepInput = document.querySelector("#cep");
  const logradouroInput = document.querySelector("#endereco");
  const ufInput = document.querySelector("#estado");
  const bairroInput = document.querySelector('#bairro')
  const cidadeInput = document.querySelector('#cidade')

async function buscaCEP(cep) {
  let buscadorCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  let buscadorCepConvertido = await buscadorCep.json();
  ufInput.value = buscadorCepConvertido.uf
  logradouroInput.value = buscadorCepConvertido.logradouro
  bairroInput.value = buscadorCepConvertido.bairro
  cidadeInput.value = buscadorCepConvertido.localidade
  console.log(buscadorCepConvertido)
  return buscadorCep;
}

