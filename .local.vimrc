let g:neoformat_elm_elmformat = {
      \ 'exe': nrun#Which('elm-format'),
      \ 'args': ['--stdin'],
      \ 'stdin': 1,
      \ }

let g:neoformat_enabled_javascript = ['prettier']
let g:neoformat_javascript_prettier = {
      \ 'exe': nrun#Which('prettier'),
      \ 'args': ['--stdin', '--stdin-filepath', '"%:p"', '--trailing-comma=all', '--no-semi', '--single-quote', '--print-width ' . &textwidth],
      \ 'stdin': 1,
      \ }
