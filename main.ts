interface DataField {
  id: number;
  text: string;
}

type Lang = string;

type Data = Record<Lang, DataField | null | undefined>;

interface ResultItem {
  lang: string;
  id: number;
  text: string;
}

// ---------

const order: Lang[] = ['en', 'uk', 'fr'];

export function normalizeToArray(data: Data): ResultItem[] {
  let result: ResultItem[] = [];

  order.forEach((lang) => {
    const item = data[lang];
    if (item != null) {
      result.push({
        ...item,
        lang
      })
    }
  })

  return result;
}

export function normalizeToData(data: ResultItem[]): Data {
  let result: Data = {};
  order.forEach((lang) => {
    result[lang] = null;
  });

  for (let key of data) {
    const { lang, ...rest } = key;
    if (order.includes(lang)) {
      result[lang] = rest;
    }
  }

  return result;
}
