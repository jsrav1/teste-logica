const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P"
]


module.exports = () => {
  function formatoCerto() {

    const obj = {}
  
    for (var i = 0; i < products.length; i++) {
      const split = products[i].split('-')
      if (obj[split[0]] == undefined) {
        obj[split[0]] = {}
      }
  
      var cor = split[0]
      var tamanho = split[1]
      obj[cor][tamanho] = 0
      // obj[split[0]][split[1]] = 0
    }
  
    for (var i = 0; i < products.length; i++) {
      const split = products[i].split('-')

      var cor = split[0]
      var tamanho = split[1]
      obj[cor][tamanho] += 1
      // obj[split[0]][split[1]] += 1
    }

    return obj
  }
  
  return formatoCerto()
}

