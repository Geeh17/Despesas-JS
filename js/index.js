import { Despesa } from './models/Despesa.js'
import { Bd } from './services/Bd.js'

let bd = new Bd()

function cadastrarDespesa() {
  let ano = document.getElementById('ano').value
  let mes = document.getElementById('mes').value
  let dia = document.getElementById('dia').value
  let tipo = document.getElementById('tipo').value
  let descricao = document.getElementById('descricao').value
  let valor = document.getElementById('valor').value
  let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

  if (despesa.validarDados()) {
    bd.gravar(despesa)
    alert('Despesa cadastrada com sucesso!')
  } else {
    alert('Preencha todos os campos!')
  }
}

window.cadastrarDespesa = cadastrarDespesa