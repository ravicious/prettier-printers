// What if we want to add more keys here?
const foo = { bar: 'baz', ping: 'pong' }

// Hmm, should we really mix syntaxes here?
function fuzzy(buzzy) {
  return () =>
    // DELETEME: I guess we can use arrow functions all the way down here.
    buzzy.map(el => {
      return el + 'sth'
    })
}

// Let's add a good color.
const colors = ['white', 'black', 'red', 'green', 'blue', 'yellow', 'magenta', 'carmine', 'crimson']
