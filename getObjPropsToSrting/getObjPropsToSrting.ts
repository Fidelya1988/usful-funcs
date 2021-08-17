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

// You can use this function if you want all property values ​​of an object to be strings. Suitable only for simple objects
