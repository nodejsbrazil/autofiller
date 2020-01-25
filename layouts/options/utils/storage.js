const { storage, runtime } = chrome

function getSync (keys) {
  return new Promise((resolve, reject) => {
    return storage.sync.get(keys, (objects) => {
      if (runtime.lastError) return reject(runtime.lastError)
      return resolve(objects)
    })
  })
}

function setSync (object) {
  return new Promise((resolve, reject) => {
    return storage.sync.set(object, (objects) => {
      if (runtime.lastError) return reject(runtime.lastError)
      return resolve(objects)
    })
  })
}
