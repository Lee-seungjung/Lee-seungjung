//줄바꿈 하고싶을 경우 \역슬래시 넣어줘야 에러가 나지 않음!
//한줄 엔터 > \n (역슬래시n)
var name = 'egoing';
var test = 'Dear ' + name + '\n\
\he World Wide Web ' + name + '(abbreviated WWW or the Web) is an information ' + name + ' space where documents a';
console.log(test);

//template literal(템플릿 리터럴)
// `리터럴 표시
// ${변수명} 넣고 엔터 칠 경우에도 에러나지 않고 따옴표와 더하기로 지저분하게 코드를 짜지 않아도 됨!
// ${1+1} 넣으면 숫자 2가 나옴!
var test = `Dear ${name}
he World Wide Web ${name}(abbreviated WWW or the Web) ${1+1}is an information ${name} space where documents a`;
console.log(test);





