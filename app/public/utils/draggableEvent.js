/**
 * dragstart
 */
export function dragstartEvent (dragListEl) {
  dragListEl.addEventListener('dragstart', (event) => {
    const dragData = event.target.getAttribute('data-drag')
    event.dataTransfer.setData('plain', dragData)
    console.log(`drag start... transfer data:[${dragData}]`)
  })
}

/**
 * drag
 */
export function dragEvent (dragListEl) {
  dragListEl.addEventListener('drag', (event) => {})
}

/**
 * dragend
 */
export function dragendEvent (dragListEl) {
  dragListEl.addEventListener('dragend', (event) => {
    const dataList = event.dataTransfer.items
    dataList.clear()
    console.log('dragend')
  })
}

/**
 * dragenter
 */
export function dragenterEvent (dropListEl) {
  dropListEl.addEventListener('dragenter', (event) => {
    console.log('dragenter')
  })
}

/**
 * dragover
 */
export function dragoverEvent (dropListEl) {
  dropListEl.addEventListener('dragover', (event) => {
    event.preventDefault()
  })
}

/**
 * dragleave
 */
export function dragleaveEvent (dropListEl) {
  dropListEl.addEventListener('dragleave', (event) => {
    console.log('dragleave')
  })
}

/**
 * drop
 */
export function dropEvent (dropListEl) {
  dropListEl.addEventListener('drop', (event) => {
    const dataList = event.dataTransfer.items
    for (let i = 0, len = dataList.length; i < len; i++) {
      if (dataList[i].kind === 'string' && dataList[i].type.match('^plain')) {
        console.log(dataList[i])
      }
    }
  })
}
