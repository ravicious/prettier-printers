// Hmm, should we really mix syntaxes here?
function fuzzy(buzzy) {
  return () =>
    // DELETEME: I guess we can use arrow functions all the way down here.
    buzzy.map(el => {
      return el + 'sth'
    })
}

// Let's add a good color.
// For things like arrays and objects, if they fit on one line they can stay
// there, but we can also split them if we like.
//
// However, if they don't fit on one line, prettier always splits them.
const colors = ['white', 'black', 'red', 'green', 'blue', 'yellow', 'carmine']

// What if we want to parse RubyScript and use mungabunga?
const webpackConfig = { work: true, crash: 'please no' }
