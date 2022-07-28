/**
 *
 * @param {string} file csv
 * @param {string} fileName
 * @param {string} type
 */

export const downloadCSVFile = (file, fileName) => {
  const blob = new Blob([file], {type: "text/csv"});

  const href = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = href;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
