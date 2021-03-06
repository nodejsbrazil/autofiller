const { runtime, storage } = chrome
runtime.onInstalled.addListener(onInstalled)

function onInstalled () {
  getSync(['fields', 'fieldsets']).then(results => {
    if (!results.fields || !results.fieldsets) return chrome.runtime.openOptionsPage()
  })
}

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
