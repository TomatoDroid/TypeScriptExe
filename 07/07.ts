interface LanguageRankInterface {
  [rank: number]: string;
}

interface LanguageYearInterface {
  [name: string]: number;
}

let LanguageRankMap: LanguageRankInterface = {
  1: "TypeScript",
  2: "JavaScript",
  '3': 'Rust'
};

let LanguageMap: LanguageYearInterface = {
  TypeScript: 2012,
  JavaScript: 1995,
  1: 2
};
