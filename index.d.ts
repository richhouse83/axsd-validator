/**
 * Validation error returned when XML does not conform to the XSD schema.
 * Extends the standard Error class with a message describing the validation failure.
 */
export interface ValidationError extends Error {
  message: string;
}

/**
 * Validates an XML document against an XSD schema.
 * 
 * @param xml - The XML document to validate (string or Buffer)
 * @param schema - The XSD schema to validate against (string or Buffer)
 * @returns `true` if the XML is valid, or an array of ValidationError objects if invalid
 * 
 * @example
 * ```typescript
 * import validateSchema from 'axsd-validator';
 * import fs from 'fs';
 * 
 * const xml = fs.readFileSync('document.xml', 'utf8');
 * const xsd = fs.readFileSync('schema.xsd', 'utf8');
 * 
 * const result = validateSchema(xml, xsd);
 * 
 * if (result === true) {
 *   console.log('Valid!');
 * } else {
 *   result.forEach(error => {
 *     console.error(error.message);
 *   });
 * }
 * ```
 */
declare function validateSchema(
  xml: string | Buffer,
  schema: string | Buffer
): true | ValidationError[];

export default validateSchema;