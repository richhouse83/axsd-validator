import {
  XmlDocument,
  XsdValidator,
  ParseOptions,
  XmlValidateError,
} from "libxml2-wasm";

export default function validateSchema(
  xml: string | Buffer,
  xsdSchema: string | Buffer,
  xmlParserOptions?: ParseOptions,
  xsdParserOptions?: ParseOptions,
): true | ValidationError[] {
  const parsedXML = XmlDocument.fromString(xml.toString(), xmlParserOptions),
    parsedSchema = XmlDocument.fromString(
      xsdSchema.toString(),
      xsdParserOptions,
    ),
    validator = XsdValidator.fromDoc(parsedSchema);

  // @ts-ignore
  try {
    validator.validate(parsedXML);
  } catch (error) {
    if (error instanceof XmlValidateError) {
      return error.details.map((detail) => new ValidationError(detail.message, detail.line, detail.col));
    }
  }
  return true;
}

export class ValidationError extends Error {
  public line: number | undefined;
  public col: number | undefined;
  constructor (message: string, line: number, col: number) {
    super(message);
    this.line = line;
    this.col = col;
  }
}
