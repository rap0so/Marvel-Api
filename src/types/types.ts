export type TMarvelPublicTypes =
  | 'characters'
  | 'comics'
  | 'creators'
  | 'events'
  | 'series'
  | 'stories';

export type TGeneralCallback = (arg?: any) => any;

export type TGeneralCallThatReturnsAnObject = (
  arg?: any,
) => {
  [key: string]: any;
};
