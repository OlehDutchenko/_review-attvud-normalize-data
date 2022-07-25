import { normalizeToArray, normalizeToData } from "./main";

describe("handleData", () => {
  it("Should return currect result", () => {
    const data = {
      uk: { id: 1, text: "Привіт!" },
      en: { id: 2, text: "Hello!" },
      fr: { id: 3, text: "Salut!" },
    };
    expect(normalizeToArray(data)).toStrictEqual([
      { lang: "en", id: 2, text: "Hello!" },
      { lang: "uk", id: 1, text: "Привіт!" },
      { lang: "fr", id: 3, text: "Salut!" },
    ]);
  });

  it("Should work with nullable fields", () => {
    const data = {
      uk: { id: 1, text: "Привіт!" },
      en: null,
      fr: undefined,
    };
    expect(normalizeToArray(data)).toStrictEqual([
      { lang: "uk", id: 1, text: "Привіт!" },
    ]);
  });

  it("Should work with different languages", () => {
    const data = {
      uk: { id: 1, text: "Привіт!" },
      ru: { id: 4, text: "Привет!" },
      en: { id: 2, text: "Hello!" },
      jp: { id: 5, text: "こんにちは!" },
      fr: { id: 3, text: "Salut!" },
    };
    expect(normalizeToArray(data)).toStrictEqual([
      { lang: "en", id: 2, text: "Hello!" },
      { lang: "uk", id: 1, text: "Привіт!" },
      { lang: "fr", id: 3, text: "Salut!" },
    ]);
  });

  it("Should be able to flip result", () => {
    const data = [{ lang: "en", id: 2, text: "Hello!" }];
    expect(normalizeToData(data)).toStrictEqual({
      uk: null,
      en: { id: 2, text: "Hello!" },
      fr: null,
    });
  });
});
