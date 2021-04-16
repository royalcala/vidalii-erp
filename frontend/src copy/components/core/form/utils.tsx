import util from "util";

export function setValuesFromSelect(array: { label: any, value: any }[]) {
    array.map(data => data.value)
}


export function objectString(o:object){
   return  util.inspect(o).replaceAll("'", '"')
}