export type TMarvelPublicTypes = 'characters';

// TODO: Improve project to receive all kind of data
// export type TMarvelPublicTypes =
//   | 'characters'
//   | 'comics'
//   | 'creators'
//   | 'events'
//   | 'series'
//   | 'stories';

export type TGeneralCallback = (arg?: any) => any;

export type TGeneralCallThatReturnsAnObject = (
  arg?: any,
) => {
  [key: string]: any;
};

export type TMarvelPublicResult = {
  id: number;
  comics: any;
  description: string;
  events: any;
  modified: string;
  name?: string;
  resourceURI: string;
  series: any;
  stories: any;
  title?: string;
  thumbnail: { path: string; extension: string };
  urls: { type: string; url: string }[];
};
