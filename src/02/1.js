var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = `${string1} ${string2}`; // 백틱(`)으로 문자열 표현, $ 기호를 사용하여 변수를 포함
var product = { name: '도서', price: '4200원' };
var message = `제품 ${product.name}의 가격은 ${product.price}입니다`;
var multiLine = `문자열1
문자열2`; // Enter 를 눌러 줄을 바꾸는 것도 허용하며, 이스케이프 시퀀스를 사용하지 않아도 됨
var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = `곱셈값은 ${value1 * value2}입니다.`; // $ 기호를 사용하여 연산을 포함
var operator2 = `${boolValue ? '참' : '거짓'}입니다.`;
