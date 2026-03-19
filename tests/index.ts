import validateSchema, { ValidationError } from '../index.js'
import { expect } from 'chai'
import * as fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)


const valid = fs.readFileSync(__dirname + '/invoice.xml'),
      invalid = fs.readFileSync(__dirname + '/invoice.invalid.xml'),
      xsd = fs.readFileSync(__dirname + '/isdoc-invoice-6.0.2.xsd')

describe('Valid File', () => {
  const validation = validateSchema(valid, xsd)
  it('Is Valid', () => expect(validation).to.be.true)
})

describe('Invalid File', () => {
  const validation = validateSchema(invalid, xsd) as ValidationError[],
        errors = [
            `DocumentType': [facet 'enumeration'] The value '9' is not an element of the set {'1', '2', '3', '4', '5', '6', '7'}.\n`,
            `UUID': [facet 'pattern'] The value 'AEC4791C-4BA1-451E-A1DC' is not accepted by the pattern '[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}'.\n`,
        ]

  it('Is Invalid', () => {
    expect(validation).to.be.an('array')
    // noinspection SuspiciousTypeOfGuard
    expect(validation).to.satisfy((errs : ValidationError[]) => errs.every(e => e instanceof Error))
  })

  errors.forEach(e =>
    it (`Error: ${e.replace('{http://isdoc.cz/namespace/2013}', '').split(`': `)[0]} Recognized`, () => expect(validation[0]?.message.includes(e))))
})
