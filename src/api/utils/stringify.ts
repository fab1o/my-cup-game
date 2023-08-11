const rxEscapable =
  /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

const meta: {
  [key: string]: string;
} = {
  '\b': '\\b',
  '\t': '\\t',
  '\n': '\\n',
  '\f': '\\f',
  '\r': '\\r',
  '"': '"',
  '\\': '\\\\',
};

/**
 * @access private
 * @param {String} value
 * @desc Formats strings with quotes and removes special characters.
 * @returns {String}
 */
function parseString(value: string) {
  rxEscapable.lastIndex = 0;

  if (rxEscapable.test(value)) {
    return `"${value.replace(rxEscapable, (a) => {
      const char = meta[a];

      if (typeof char === 'string') {
        return char;
      }

      return `\\u${`0000${a.charCodeAt(0).toString(16)}`.slice(-4)}`;
    })}"`;
  }

  return `"${value}"`;
}

export function stringify(value: any) {
  switch (typeof value) {
    case 'string':
      return parseString(value);

    case 'boolean':
    case 'number':
      return String(value);

    case 'undefined':
      return '';

    case 'object':
      if (value == null) {
        return 'null';
      }

      if (value instanceof String) {
        return parseString(value.valueOf());
      }

      if (value instanceof Number || value instanceof Boolean) {
        return String(value.valueOf());
      }

      if (value instanceof Array) {
        return JSON.stringify(value);
      }

      if (value instanceof Object) {
        return JSON.stringify(value);
      }

      if (value instanceof Date) {
        return value.toJSON();
      }
  }

  return JSON.stringify(value);
}
