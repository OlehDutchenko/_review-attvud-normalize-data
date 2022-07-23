interface DataField {
  id: number;
  text: string;
}

type Lang = string;

type Data = Record<Lang, DataField | null>;

type ResulType = Data | ResultItem[];

interface ResultItem {
  lang: string;
  id: number;
  text: string;
}

// ---------
function handleArr(data: Data) {
  let result = [];

  for (let key in data) {
    if (key === "en") result[0] = { lang: key, ...data[key] };
    if (key === "uk") result[1] = { lang: key, ...data[key] };
    if (key === "fr") result[2] = { lang: key, ...data[key] };
  }

  result = result.filter((item) => item.id !== undefined);

  return result;
}

function handleObj(data: ResultItem[]) {
  let result: Data = {};

  for (let key of data) {
    const { lang, ...rest } = key;

    if (lang === "en") result.en = { ...rest };
    if (lang === "uk") result.en = { ...rest };
    if (lang === "fr") result.en = { ...rest };
  }

  if (result.en === undefined) result.en = null;
  if (result.uk === undefined) result.uk = null;
  if (result.fr === undefined) result.fr = null;

  return result;
}

function handleData(data: ResulType) {
  return Array.isArray(data) ? handleObj(data) : handleArr(data);
}

export default handleData;
