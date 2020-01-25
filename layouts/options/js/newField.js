const $ = document.querySelector.bind(document)
const addNewFieldButton = $('#btnAddNewField')
const fields = $('#fields')

window.onload = () => {
  getSync(['fields'])
    .then((results) => {
      if (!results || !results.fields) return
      for (result of results.fields) {
        const field = new Field(result.name, result.value, result.id)
        fields.appendChild(field.render())
      }
    })
    .then(() => {
      const deleteBtns = document.querySelectorAll('.btn-delete')

      for (deleteBtn of deleteBtns) {
        deleteBtn.onclick = performDelete
      }
    })
}

function performDelete ({ target }) {
  const { id } = target.dataset
  getSync(['fields']).then(results => {
    const newFields = results.fields.filter(el => el.id !== parseInt(id))
    setSync({ fields: newFields }).then(() => window.location.reload()).catch(console.error)
  })
}

addNewFieldButton.onclick = () => {
  const newFieldName = $('#intFieldName').value
  const newFieldValue = $('#intFieldValue').value

  // Field is loaded from the page's HTML.
  const newField = new Field(newFieldName, newFieldValue)

  // getSync is loaded from the page's HTML.
  getSync(['fields']).then((results) => {
    const updatedFields = results
    console.log(results)
    if (Object.keys(updatedFields).length <= 0) {
      updatedFields.fields = []
    }
    updatedFields.fields.push(newField)

    // setSync is loaded from the page's HTML.
    setSync(updatedFields)
      .then(() => {
        window.location.reload()
      })
      .catch(console.error)
  })
}
