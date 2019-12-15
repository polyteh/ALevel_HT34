//18. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
let str = "я учу javascript!";
alert(str.substr(2, 3) + str.substr(5, 11));
alert(str.substring(2, 5) + str.substring(5, str.length - 1));
alert(str.slice(2, 5) + str.slice(5, str.length-1));
