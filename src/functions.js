function qs (selectors, context) {
  return (context || document).querySelector(selectors)
}

function qsa (selectors, context) {
  return (context || document).querySelectorAll(selectors)
}
