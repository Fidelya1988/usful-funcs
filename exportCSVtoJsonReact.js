const csv = require("csvtojson");

/**
 *
 * @param {string} csvFile
 * @callback transformJson
 */
export const csvJSON = (csvFile, callback) => {
  csv({
    noheader: true,
    output: "json",
  })
    .fromString(csvFile)
    .then((csvRows) => {
      const toJson = [];
      csvRows.forEach((aCsvRow, i) => {
        if (i !== 0) {
          const builtObject = {};

          Object.keys(aCsvRow).forEach((aKey) => {
            const valueToAddInBuiltObject = aCsvRow[aKey];
            const keyToAddInBuiltObject = csvRows[0][aKey];
            builtObject[keyToAddInBuiltObject] = valueToAddInBuiltObject;
          });

          toJson.push(builtObject);
        }
      });

      callback(toJson);
    })
    .catch((err) => err);
};
