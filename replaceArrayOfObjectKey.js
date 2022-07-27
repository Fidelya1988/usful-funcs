/**
 *
 * @param {[{}]} arrayOfObjects
 * @param {string[]} newKeys
 * @returns
 */

export const replaceArrayOfObjectKeys = (arrayOfObjects, newKeys) =>
  arrayOfObjects.map((item) => {
    const changedObject = {};
    newKeys.forEach((column, index) => {
      changedObject[column] = Object.values(item)[index];
    });
    return changedObject;
  });
