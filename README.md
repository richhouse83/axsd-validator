# Validating XMLs against XSD schema

This package is a drop-in replacement using libxml2-wasm instead of native bindings.

### Why migrate?
- ✅ Works on Node 25+
- ✅ No node-gyp / build tools required
- ✅ Faster installs (no compilation)
- ✅ Same API

### Installation

# If migrating from `@richhouse83/xsd-validator`
```bash
npm uninstall @richhouse83/xsd-validator
npm install axsd-validator
```

# Else

```bash
npm install axsd-validator
```


### Code changes
```diff
- import validateSchema from '@richhouse83/xsd-validator'
+ import validateSchema from 'axsd-validator'
```

Everything else stays the same.

### Installation

```shell
npm i axsd-validator
```

### Usage

```js
import validateSchema from 'axsd-validator'

// returns true for valid documents
validateSchema('<xml...', '<xs:schema...')
// -> true

// returns Error[] for invalid valid documents
validateSchema('<xml...', '<xs:schema...')
// [error, error ... ]

```

NB: There may be differences in the error messages supplied by the validator, the structure should remain consistent though.
