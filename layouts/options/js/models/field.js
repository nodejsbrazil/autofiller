class Field {
  constructor (name, value) {
    this.name = name;
    this.value = value;
  }

  render () {
    return `
        Nome: ${this.name}
        Value: ${this.value}
      `
  }
}

