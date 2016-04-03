# The promise of inline-styles with React


## Upsides
- Ability to render components out in every concievable state (styleguides)
- No duplciate rules
- Per-browser, vendor-specfic rules only (no cruft)
- Have base styles on a particular component, then merge in prop styles
- Can do crazy runtime generated styles

## Downsides
- Write code to handle stuff browsers do for you (hover/active/focus styles)
- Lot of boilerplate on the low-level components

## Some good rules
- On low-level components, merge `this.props.style` last, to make sure any styles that are passed in are added
