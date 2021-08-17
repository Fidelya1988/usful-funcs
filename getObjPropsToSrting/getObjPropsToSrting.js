const getObjPropsToSrting = (currentObject) => {
    let obj = { ...currentObject };
    for (let key in obj) {
      obj[key] = String(obj[key]);
    }
  
    return obj;
  };

//   You can use this function if you want all property values ​​of an object to be strings. Suitable only for simple objects