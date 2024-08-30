import 'server-only'

type Dictionary = {
    [key: string]: () => Promise<Dict>;
};

const dictionaries: Dictionary = {
    "en-US": () => import('./dictionaries/en-US.json').then((module) => module.default),
    "zh-CN": () => import('./dictionaries/zh-CN.json').then((module) => module.default),
    "ja-JP": () => import('./dictionaries/ja-JP.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  const dict = dictionaries[locale];

  return dict();
}

export interface Dict{
    title: string,
    greatMan: {
        latest: string,
        databaseName: string,
        talk: string,
        meeting: string,
        other: string,
        phone: string,
        daily: string,
        visit: string,
        activity: string,
        inspect: string,
        noTalks: string
    },
    talk: {
        source: string,
        interviwer: string,
        attachment: string,
        video: string,
        image: string,
        file: string
    }
}