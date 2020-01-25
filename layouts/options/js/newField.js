const addNewFieldButton = document.getElementById("btnAddNewField")
const fields

addNewFieldButton.onclick = () => {
  const newFieldName = document.getElementById("intFieldName").value
  const newFieldValue = document.getElementById("intFieldValue").value

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
        window.alert("Campo cadastrado com sucesso")
        getSync(['fields']).then(console.log)
      })
      .catch(err => {
        console.log(err)
      })
  })

}
