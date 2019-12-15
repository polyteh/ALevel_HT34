//13. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
let str="aaa bbb ccc";
alert(str.substr(0, 4)+str.substr(7));
alert(str.substring(0, 4)+str.substring(7));
alert(str.slice(0,4)+str.slice(7));