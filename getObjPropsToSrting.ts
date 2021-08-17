type CurrentObject = Record<
  string | number,
  string | number | boolean | null | undefined
>;
type ResultObject = Record<string, string>;

const getObjPropsToSrting = (currentObject: CurrentObject): ResultObject => {
  let obj = { ...currentObject };
  for (let key in obj) {
    obj[key] = String(obj[key]);
  }

  return obj as ResultObject;
};
