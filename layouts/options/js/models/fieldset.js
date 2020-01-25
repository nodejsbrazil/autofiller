class Fieldset {
  constructor (name, fields, id) {
    this.id = id || Date.now()
    this.name = name
    this.fields = fields || []
  }

  render () {
    const list = document.createElement('li')
    list.innerText = `Nome: ${this.name} | Valor: ${this.value}`

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Remover'
    deleteBtn.classList.add('btn-delete')
    deleteBtn.setAttribute('data-id', this.id)

    list.appendChild(deleteBtn)
    return list
  }
}

