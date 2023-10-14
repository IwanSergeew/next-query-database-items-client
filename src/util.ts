export const parseSearchParams = (param: string | string[]) => {
  if (!param?.length) return [];
  return Array.isArray(param) ? param : [param];
};

export const parseSearchParam = (param: string | string[]) => {
  if (!param?.length) return '';
  return Array.isArray(param) ? param.at(0) : param;
};
