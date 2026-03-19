# Validating XMLs against XSD schema

NB: Originally a  fork of [node-xsd-validator](https://github.com/deltazero-cz/node-xsd-validator), this has now been migrated to use [libxml2-wasm](https://github.com/jameslan/libxml2-wasm), as it is still being maintained, as well as updated the structure for later Node versions.

Tool for simple validation of XML documents against a XSD schema. Using [libxml2-wasm](https://github.com/jameslan/libxml2-wasm).

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

### Requirements

Make sure you have met the requirements for [node-gyp](https://github.com/TooTallNate/node-gyp#installation). You DO NOT need to manually install node-gyp; it comes bundled with node.
