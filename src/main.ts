document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <p>iframe</p>
`
// Broken message use to listen message from another tab
const bc = new BroadcastChannel('AUTH')
bc.onmessage = (event) => {
  if (event.data.from === 'auth.lunas.vn') {
    window.parent.postMessage(event.data, import.meta.env.VITE_LOCAL_STORE_URL)
    window.parent.postMessage(event.data, import.meta.env.VITE_STORE_URL)

    window.parent.postMessage(
      event.data,
      import.meta.env.VITE_LOCAL_PAYMENT_URL
    )
    window.parent.postMessage(event.data, import.meta.env.VITE_PAYMENT_URL)
  }
  if (event.data.from === 'store.lunas.vn') {
    window.parent.postMessage(event.data, import.meta.env.VITE_LOCAL_AUTH_URL)
    window.parent.postMessage(event.data, import.meta.env.VITE_AUTH_URL)

    window.parent.postMessage(
      event.data,
      import.meta.env.VITE_LOCAL_PAYMENT_URL
    )
    window.parent.postMessage(event.data, import.meta.env.VITE_PAYMENT_URL)
  }
  if (event.data.from === 'payment.lunas.vn') {
    window.parent.postMessage(event.data, import.meta.env.VITE_LOCAL_STORE_URL)
    window.parent.postMessage(event.data, import.meta.env.VITE_STORE_URL)

    window.parent.postMessage(event.data, import.meta.env.VITE_LOCAL_AUTH_URL)
    window.parent.postMessage(event.data, import.meta.env.VITE_AUTH_URL)
  }
}

// Use to listen message from iframe
window.addEventListener('message', (event) => {
  const { data, origin } = event
  switch (origin) {
    case import.meta.env.VITE_AUTH_URL: {
      const bc = new BroadcastChannel('AUTH')
      bc.postMessage(data)
      bc.close()
      break
    }
    case import.meta.env.VITE_LOCAL_AUTH_URL: {
      const bc = new BroadcastChannel('AUTH')
      bc.postMessage(data)
      bc.close()
      break
    }

    case import.meta.env.VITE_STORE_URL: {
      const bc = new BroadcastChannel('AUTH')
      bc.postMessage(data)
      bc.close()
      break
    }

    case import.meta.env.VITE_LOCAL_STORE_URL: {
      const bc = new BroadcastChannel('AUTH')
      bc.postMessage(data)
      bc.close
      break
    }

    case import.meta.env.VITE_PAYMENT_URL: {
      const bc = new BroadcastChannel('AUTH')
      bc.postMessage(data)
      bc.close()
      break
    }

    case import.meta.env.VITE_LOCAL_PAYMENT_URL: {
      const bc = new BroadcastChannel('AUTH')
      bc.postMessage(data)
      bc.close
      break
    }
    default:
      break
  }
})
