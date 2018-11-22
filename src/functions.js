function qs (selectors, context) {
  return (context || document).querySelector(selectors)
}

function qsa (selectors, context) {
  return (context || document).querySelectorAll(selectors)
}

function raf (callback, interval) {
  interval = interval || 1000
  var start, delta

  function tick (timestamp) {
    start = start || timestamp
    delta = timestamp - start

    if (delta > interval || start === timestamp) {
      start = timestamp - delta % interval

      callback()
    }

    window.requestAnimationFrame(tick)
  }

  window.requestAnimationFrame(tick)
}
