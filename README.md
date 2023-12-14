# tataku-processor-intl_segmenter 

The processor module for tataku.vim.

This split the sentence by [`Intl.Segmenter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter).

## Contents 

- [tataku-processor-intl_segmenter-dependencies](tataku-processor-intl_segmenter-dependencies)
- [tataku-processor-intl_segmenter-options](tataku-processor-intl_segmenter-options)
- [tataku-processor-intl_segmenter-samples](tataku-processor-intl_segmenter-samples)

## Dependencies 

This plugin needs:

- [denops.vim](https://github.com/vim-denops/denops.vim)
- [tataku.vim](https://github.com/Omochice/tataku.vim)

## Options 

This module has some options.

- `locale` 

  Target locale string. (required)
  See: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter#locales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter#locales)
- `granularity` 

  How granularly should the input be split.
  See: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter#granularity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter#granularity)
  default: `sentence`

## Samples 

```vim
let g:tataku_recipes = #{
  \   sample: #{
  \     collector: #{
  \       name: 'intl_segmenter',
  \       options: #{
  \         locales: 'en',
  \         granularity: 'sentence',
  \       },
  \     }
  \   }
  \ }
```

