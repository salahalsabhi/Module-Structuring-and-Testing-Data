export function repeatStr(string, count) {
  let result = "";
  if (count < 0) {
    throw new Error("wrong input");
  }
  for (let n = 0; n < count; n++) {
    result = result + string;
  }
  return result;
}
