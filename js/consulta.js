import { Bd } from './services/Bd.js'
let bd = new Bd()

function carregaListaDespesas(despesas = Array(), filtro = false) {
  if (despesas.length == 0 && filtro == false) {
    despesas = bd.recuperarTodosRegistros()
  }

  let listaDespesas = document.getElementById("listaDespesas")
  listaDespesas.innerHTML = ''

  despesas.forEach(function(d) {
    let linha = listaDespesas.insertRow()

    linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
    switch (d.tipo) {
      case '1': d.tipo = 'Alimentação'; break
      case '2': d.tipo = 'Educação'; break
      case '3': d.tipo = 'Lazer'; break
      case '4': d.tipo = 'Saúde'; break
      case '5': d.tipo = 'Transporte'; break
      case '6': d.tipo = 'Mensal'; break
    }
    linha.insertCell(1).innerHTML = d.tipo
    linha.insertCell(2).innerHTML = d.descricao
    linha.insertCell(3).innerHTML = d.valor
    let btn = document.createElement('button')
    btn.className = 'btn btn-danger btn-sm'
    btn.innerHTML = '<i class="fas fa-trash-alt"></i>'
    btn.onclick = function () {
      let id = d.id
      bd.remover(id)
      window.location.reload()
    }

    let celulaAcao = linha.insertCell(4)
    celulaAcao.appendChild(btn)
  })
}

function pesquisarDespesa() {
  let ano = document.getElementById("ano").value
  let mes = document.getElementById("mes").value
  let dia = document.getElementById("dia").value
  let tipo = document.getElementById("tipo").value
  let descricao = document.getElementById("descricao").value
  let valor = document.getElementById("valor").value
  let despesa = {
    ano, mes, dia, tipo, descricao, valor
  }
  let despesas = bd.pesquisar(despesa)
  carregaListaDespesas(despesas, true)
}
window.pesquisarDespesa = pesquisarDespesa
window.onload = () => carregaListaDespesas()
