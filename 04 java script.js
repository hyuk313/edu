<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 1일차(기본문법처리)</title>
    <!--파빌리온 적용-->
    <link rel="shortcut" href="#" >
</head>
<script>
    /*
    자바스크립트 코드(문법)가 들어갈 자리 
    console.log : 결과 값을 출력하는 문법
    */ 
    console.log("홍길동님 환영합니다");

    var a = "이순신" ; //a변수에 '이순신'이라는 단어를 입력시킴
    console.log(a);

    var b = 1000; //b 변수에 1000 이라는 숫자를 입력시킴
    console.log(b);

    // 문자와 문자를 더해서 사용 가능
    var aa = "2000";
    var bb = "3000";
    var cc = aa + bb;
    console.log(cc);

    // 숫자 입력시에는 "" 또는 ''를 사용하면 계산 불가
    var aa = 2000;
    var bb = 3000;
    var cc = aa + bb;
    console.log(cc);

    var user = "강감찬";
    var msg = "님 환영합니다";
    var print = user + msg;
    console.log(print);
    
    

</script>
<body>
    
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascrpt 2일차(기본문법처리)</title>
    <!-- 파빌리온 적용 -->
    <link rel="shortcut icon" href="#">
</head>
<script>
    //변수(variables) 선언 : 계속적으로 변하는 값 (참고.상수)
    var a;
    var b=1;
    var c="데이터";
    var d=c;
    console.log(b);
    b=10;
    console.log(b);
    var aa,bb,cc,dd; //변수선언방식이며, 변수의 값이 없는 변수명만 선언. 변수선언을 아끼지말고
    bb="홍길동"; //해당 변수에 "홍길동"이란 문자값을 적용
    // +,-,*,/,%(나머지값을 구함) - 연산기호. 연산자
    console.log();
    /* 응용문제 3개의 변수값에 56,32,8이란 숫자가 입력. 해당 변수를 연산해서 결과를 출력
        56과 32를 더하고, 8을 곱해서 최종 결과값 출력
    */
    var f =56;
    var x =32;
    var z =8;
    var r = (f+x)*z;
    console.log(r);

    // 문자와 문자가 결합되는 형식
    // 고객이 로그인 할 때 이름과 등급이 표시되는 형태
    f="이순신";
    x="실버";
    z= f + "님 환영합니다. 회원님의 등급은 : " + x + "입니다";
    console.log(z);
    
    // 나머지 값
    var k=51%2; //50/2의 나머지값. 51/2의 나머지값 0,1로 출력됨. 0일 경우는 짝수, 1일 경우는 홀수
    console.log(k)
</script>
<body>
    
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascrpt 2일차(조건문 if문)</title>
    <link rel="shortcut icon" href="#">
</head>
<script>
    var a = 20;
    var b = 20;
    //if문은 무조건 if 로 시작해야 함
    //else if는 여러번 사용가능
    //else 는 if와 else if를 뺀 나머지 값을 비교할 때 사용
    
    if(a<b) {
        console.log("a값이 작습니다");
        }
    else if (a>b) {
        console.log("b값이 작습니다");
        }
    else if (a==b) {
        console.log("두값이 모두같습니다");
        }
    else { console.log("두값이 같습니다");
        }
    //  응용문제2. 수식연산으로 결과값을 비교하여 어느 값이 큰 값인지 출력하는 문법 제작
        // 1.70*80+16
        // 2.80*40*7
    
    var k1=70*80+16 ;
    var k2=80*40*7 ;
    var k3="두값이 같습니다";

    if(k1>k2)
        {//console.log("k1");
            k3="k1이 큽니다";
        }
    else if(k1<k2)
        {//console.log("k2");
            k3="k2가 큽니다";
        }
    else
        {//console.log("i don know");
            k3=k3;
        }
    console.log(k3);

// 조건문 안의 조건문

var mid="hong";
var mpass="1234";

if(mid=="hong"){        //첫번째 조건문
    if(mpass=="1234"){
        console.log("로그인하였습니다");
    }
    else{
        console.log("비밀번호를 입력하세요");
    }
}
else{
    if(mid==""){

    }
    //비밀번호 오류 횟수 초과의 경우도 사용할 수 있음
    console.log("해당아이디는 가입되지 않은 고객입니다");
}
//응용문제3. 회원이 로그인 할 때, 이메일과 패스워드를 검토하는 프로세서 제작
//회원: hong@nate.com  /  a123456 일 경우는 '로그인되었습니다'
// 그 외에는 '아이디 및 패스워드를 확인하세요'라고 출력되도록 하세요

var id_nm= "hong@nate.com"
var pw_nm= "a123456"
var output= "아이디 및 패스워드를 확인하세요"

    if(id_nm=="hong@nate.com"){
            if(pw_nm=="a123456"){
                console.log("로그인되었습니다");
            }
            else{console.log(output)};
        }
    else {console.log(output)}

    //비교연산자 사용할 경우 : &&는 두개의 값이 모두 일치하는 경우이고   ||는 두개의 값 중에서 한가지라도 일치하는 경우
    if(id_nm=="hong@nate.com"&&pw_nm=="a123456"){
        console.log("로그인되었습니다");
        }
    else {
        console.log(output);
    }


</script>
<body>
    
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>avascript 2일차-반복문</title>
    <link rel="shortcut icon" href="#">
    <!-- 
        [순차반복문]
        for문   while문     do~while문  (속도 저for 중while 고do while)

        [배열]
        for in문   forEach문    Map문   Each문
    -->
</head>
<script>
    //반목문은 무조건 숫자로 이루어져야 작동이 됨
    var f;
    for(f=1;f<10;f++){      //(시작값;종료값;증가++ 또는 감소--)
        console.log(f);
    }
    for(f=5;f<=20;f++){     // = 은 반드시 뒤쪽에 붙여야 함
        console.log(f);
    }
    for(f=10;f>=0;f--){      // 역순으로도 가능함
        console.log(f);
    }
// 응용문제4.숫자 22부터 30까지 출력되는 반복문을 제작
    var  z1;
    for(z1=22;z1<=30;z1++){
        console.log(z1);
    }
// 응용문제5. 50부터 32까지 출력되는 반복문을 제작
    var z2;
    for(z2=50;z2>=32;z2--){
        console.log(z2);
    }

//정수:양의 정수, 음의 정수, 0
// 유리수:0.1   0.2 ...   무리수:log2 2n
// 실수:-1  0   12  1234e
// 실수 >   유리수  >   정수    >   양의정수,   음의정수
//      >   무리수
</script>
<body>
    
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>avascript 2일차-for문+if문</title>
    <!-- 파빌리온 적용 -->
    <link rel="shortcut icon" href="#">
</head>
<script>
    var a;
    for(a=1;a<=10;a++){     //1~10까지 반복을 진행
        if(a==5 ||a==7){    //반복을 진행할 때 지속적으로 조건을 확인
            console.log(a);
        }
    }
    for(a=1;a<=10;a++){
       if(a==5){
            console.log(a);
        }
        else if(a==7){
            console.log(a);
        }
    }
    // 응용문제6.1~30까지의 숫자 중 홀수값만 모두 출력하는 코드를 작성
    var k3;
    for(k3=1;k3<=30;k3++){
        if(k3%2==1){
            console.log(k3);
        }
        else{
            ""
        }
    }
    for(k3=1;k3<=30;k3++){
        if(k3%2==1){
            console.log(k3+"홀수");
        }
        else{
            console.log(k3+"짝수");
    }
    }
    
    // 응용문제7. 다음의 결과값을 확인 후, 그 결과값을 출력할 수 있는 코드를 제작
    // 24 32 40 48 56
    var k4;
    for(k4=3;k4<=7;k4++){
        console.log(k4*8)        ;
    }
    var k5;
    
    for(k5=3;k5<=7;k5++){
        var result=k5*8;  //이게 문법 안에 들어와야 함
        console.log(result);
    }

    var x;
    var j=8;
    var t;
    for(x=1;x<=9;x++){
        t=x*j;
        if(t>=24 && t<=56){
            console.log(t);
        }
    }

</script>
<body>
    
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 2일차-반복문(while문)</title>
    <!-- 파빌리온 적용 -->
    <link rel="shortcut icon" href="#">    
</head>
<script>
    var a=1; //시작값. 변수에 같이 선언
    while(a<=10){ //종료값
        console.log(a); //결과값
        a++;  //이게 위로 가면 결과값이 달라짐. 첫 출력이 2부터 되어버림(증감)
    }

    // 응용문제8. 다음과 같이 결과가 나오게 while문을 사용
    // 15 14 13 12 .....7
    var n=15;
    while(n>=7){
        console.log(n);
        n--;
    }




</script>
<body>
    
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 2일차-do while</title>
    <!-- 파빌리온 미적용 -->
    <link rel ="shortcut icon" href="#">
</head>
<script>
    var a=1; //시작값
    do{
        //console.log(a); //출력값
        a++; //증감
    }while(a<=10);  //종료값

    //응용문제9.다음 결과 값에 맞춰 do-while문으로 코드를 제작
    // 3 6 9 12 15 18 21 24 27
    var a1=1;
    do{
        var a2=a1*3;
        console.log(a2);
        a1++;
    }while(a1<10);

    


</script>
<body>
    
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>java script 2일차-더블반복문-for+if</title>
    <link rel="shortcut icon" href="#">
    <!--파빌리온 미적용-->
</head>
<script>
    var a;
    var b;
    var c;
    for(a=2;a<=9;a++){
        for(b=1;b<=9;b++){
            c=a*b;
            // console.log(a+"*"+b+"="+c);
        }
    }
    // 응용문제10.다음의 결과값이 나오도록 더블반복문을 이용해 작성
    // 2 3 4 5 6 7 8 9 10 
    // 3 4 5 6 7 8 9 10 11
    // 4 5 6 7 8 9 10 11 12
    var a1;
    var b1;
    var c1;
    for(a1=0;a1<=2;a1++){
        for(b1=2;b1<=10;b1++){
            c1=a1+b1;
            // console.log(c1);            
        }
    }

    var a2;
    var b2;
    var c2;
    for(a2=1;a2<=3;a2++){
        for(b2=1;b2<=9;b2++){
            c2=a2+b2;
            // console.log(c2);
        }
    }

    // 2 4 6 8 10
    // 6 12 
    // 4 8 12 16 20
    var a3;
    var b3;
    var c3;
    for(a3=2;a3<=4;a3++){   //2~4
        for(b3=1;b3<=5;b3++){     //1~5
            c3=a3*b3;
            if(c3%2==0){    //수식계산의 결과값이 짝수일때
                // console.log(c3);   // 해당결과값을 출력
            }
            
        }
    }
// 응용문제 11. 구구단 중에서 3단 5단 7단 9단만 출력하는 더블반복문을 작성
    var a4;
    var b4;
    var c4;
    for (a4=2;a4<=9;a4++){
        if(a4%2==1){
           for(b4=1;b4<=9;b4++){
               c4=a4*b4;
               console.log(a4+"*"+b4+"="+c4);
           }
        }
        else{""}
    }



</script>
<body>
    
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>java script 2일차-더블반복문-while+if</title>
    <link rel="shortcut icon" href="#">
    <!--파빌리온 미적용-->
</head>
<script>
    var a=1;
    var c;
    while(a<=3){
        var b=1;        //while 문(do-while도 포함) 작성할 때, 초기값은 큰 반복문 안에 있어야 지속적으로 초기화되면서 적용될 수 있음
        while(b<=3){
            c= a + b;
            // console.log(c);
            b++;
        }
        a++
    }

// 응용문제 12.구구단 5단부터 2단까지 역순으로 출력되는 코드 작성
// 단, 결과는 아래처럼 나오도록 함 (더블while)
//  5*9=45
//  5*8=40
//  ...
//  2*2=4
//  2*1=2
    var x =5;
    var z;
    while(x>=2){
        var y =9;
        while(y>=1){
            z=x*y;
            // console.log(x+"*"+y+"="+z);
            y--;
        }
        x--;
    }
// 응용문제 13. 구구단 2단~9단 중 결과값이 짝수인 구구단만 출력
// while문으로 작성
    var d1=2;
    var d3;
    while(d1<=9){
        var d2=1
        while(d2<=9){
            d3=d1*d2;
            if(d3%2==0){
            //console.log(d1+"*"+d2+"="+d3);
            }
            d2++;
        }
        d1++
    }

    var b1=2; //큰 반복문 초기화
    var b3;   //결과값
    while(b1<=9){  //종료값
        var b2=1;  //작은 반복문 초기화
        while(b2<=9){  //종료값
            b3=b1*b2;  //수식계산파트
            if(b3%2==0){  //수식계산에서 결과값에 대한 짝수인 조건
                console.log(b1+"*"+b2+"="+b3);
            }
            b2++;
        }
        b1++;
    }
</script>
<body></body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>java script 2일차-더블반복문-do-while+if</title>
    <link rel="shortcut icon" href="#">
    <!--파빌리온 미적용-->
</head>
<script>
//응용문제.14 구구단 8단~7단까지의 결과를 출력. 단, 결과는 아래처럼 나오도록
// do-while로 작성할 것
// 8*1=8
// 8*2=16 ...
// 7*1=7
// 7*2=14 ... 7*9=63

var a=8;
var c;
do{
    var b=1 ;
    do{
        c=a*b;
   //     console.log(a+"*"+b+"="+c);
        b++;
    }while(b<=9);
    a--;
}while(a>=7);

//응용문제.15 do while문으로 작성. 홀수값 결과만 출력할 것
//구구단. 4단~7단까지 결과 값 중 홀수 값만 출력할것

var x = 4;
var z  ;
do{
    var y = 1
    do{
        z = x * y;
        if(z%2==1){
            console.log(x+"*"+y+"="+z)
        }
        y++;
    }while(y<=9);

    x++;
}while(x<=7);


</script>
<body>

</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>java script 2일차-반복문 응용</title>
    <link rel="shortcut icon" href="#">
    <!--파빌리온 미적용-->
</head>
<script>
    //for+while  구구단 2~4단까지 출력
    var sum;
    var a;
    for(a=2;a<=4;a++){
        var b=1;
        while(b<=9){ 
            sum=a*b;
            // console.log(a+"*"+b+"="+sum);
            b++;
        }
    }
    //quiz 1. 구구단 2단~9단까지 결과값 중 30 이상인 결과 값만 출력되도록 코드 작성. 단, while과 do-while를 사용
    
    var rslt ;
    var a = 2;
    do{
        var b = 1;
        while(b<=9){
                rslt=a*b;
                if(rslt>=30){
                    console.log(a+"*"+b+"="+rslt);
                }
                b++;
            }
        a++;
    }while(a<=9);
    
                             
        
    //quiz 2. 아래의 결과값을 확인, 해당 결과값이 나오도록 코드 작성
    //ex. 6 8 10 12     9 12 15 18      12 16 20 24     15 20 25 30 단, 문법은 do-while과 for문을 이용

    var rslt1;
    var a1;
    for(a1=2;a1<=5;a1++){
        var b1=3;
        do{
            rslt1 = a1*b1;
            console.log(a1+"*"+b1+"="+rslt1);
            b1++;
        }while(b1<=6)
    }

</script>
<body></body>
</html>
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 3일차(선택문-switch)</title>
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
</head>
<script>
    var a=4;               //사용자가 선택한 값
    switch(a){             //선택한 값(var)을 대입.switch는 if문보다 속도가 느리다
        case 0:            //switch에서 대입한 값과 case에서 설정된 값을 비교
            console.log("무통장입금");
        break;              //switch와 case가 동일한 경우, break 작동하여 프로세스 종료

        case 1: case 5:
            console.log("신용카드결재");
        break;
        
        case 2:
            console.log("가상계좌결재");
        break;
        
        case 3:
            console.log("휴대폰결재");
        break;

        default:
            console.log("계좌이체");
        break;
    }
    //응용문제 1. 사용자 이름에 따라 등급을 출력해야 함
    // 홍길동 : 실버등급, 이순신 : 골드등급, 유관순 : 실버등급, 강감찬 : 일반회원, 안중근 : 휴면등급

    var a1 ="안중";
    switch(a1){
        case "홍길동": case "유관순":
            console.log("실버등급");
        break;
        case "이순신":
            console.log("골드등급");
        break;        
        case "강감찬":
            console.log("일반회원");
        break;        
        case "안중근":
            console.log("휴면등급");
        break;        
        default: 
            console.log("회원이 아닙니다");
        break;
    }
</script>
<body>
    
</body>
</html>
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 3일차(함수-function)</title>  <!--back-end는 method란 용어를 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
</head>
<script>
    function abc(){     //abc라는 이름을 가진 함수. 함수명을 호출해야지만 작동
        console.log("test");
    }
    abc();              //abc함수명 호출(즉시 실행함수)
    
    function bbb(){     //html에서 호출된 함수가 작동되는 사항
        console.log("버튼클릭 이벤트 핸들링함수 실행");
    }

    function ccc(){
        ddd(); //확장함수 호출
        eee(); //확장함수 호출
    }
    function ddd(){
        console.log("이벤트 핸들링 함수에서 확장함수로 전달");
    }
    function eee(){
        console.log("두번째 확장함수")//두가지 이상 한꺼번에 체크할때, 멀티 호출
    }
</script>
<body>
    <!-- html에서 onclick 속성과 함께 함수명을 호출 -->
    <input type="button" value="click" onclick="bbb()"><br><br>
    <input type="button" value="click2" onclick="ccc()"><br><br>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 3일차(함수-function인수값사용+전역변수,지역변수)</title>  <!--back-end는 method란 용어를 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
</head>
<script>
    //값 전달시 인수의 갯수와 동일하게 보낼 필요는 없으며,
    //많은 양의 텍스트를 전달하는 경우, 데이터 분실이 발생될 수 있음

    function aaa(a1,a2){    //aaa함수에 인수값 2개를 받음
        console.log(a1,"|",a2);
        // console.log(a2);
    }
    var data1 = "홍길동";
    var data2 = "hong@nate.com";
    aaa(data1,data2);       //aaa함수를 호출과 동시에 2개의 데이터를 전송


    //지역변수, 전역변수
    var order = 100;            //모든 함수에서 사용가능한 전역변수
    
    function ccc(){
        var order2 = 200;       //ccc함수에서만 사용하는 지역변수임
        var order = "홍길동";   //전역변수 order와 다르게 작동.지역변수임
        order="홍길동";         //var를 생략하는 경우 전역변수 order를 갖고 와서 새로운 value입력
        console.log(order);
        console.log(order2);
    }
    function ddd(){
        console.log(order);
        console.log(order2);    //error 발생. order2는 지역변수이므로 이 function에서 미작동
    }
    ccc();
    ddd();

</script>
<body>

</body>
</html>
      <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 3일차(html UI와 연결)</title>  <!--back-end는 method란 용어를 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
</head>
<script>
    alert("메시지 출력");       //경고메시지 출력(팝업창 형태의)
    function abc(){
        //document : 현재 페이지
        //getElementById : 해당 페이지에 id 이름을 가진 오브젝트를 가져옴
        var no = document.getElementById("sno");
        //value : 사용자가 입력 또는 선택한 값
        if(no.value==""){
            alert("인증번호를 입력하세요");
        }
        else{
        //location.href : 페이지를 이동할때 사용
            location.href="http://nate.com";
        }
    }

    /* 응용문제2. 사용자id 및 password를 입력해야  nate.com으로 이동하도록 작성
        단, input type은 button으로 활용*/

    function login(){
        // 자료형 : string(문자), number(숫자), boolean(true false), undefined, null 
        var user_id = document.getElementById("user_id");
        var user_pw = document.getElementById("user_pw");
        if(user_id.value==""){
            alert("id를 입력하셔요");
        }
        else if(user_pw.value==""){
            alert("비밀번호를 입력하셔요");
        }
        else{
            location.href="http://nate.com";
        }

        // 자료형 예시. 숫자를 문자로 변환. 문자를 숫자로 변환.
        var a = 100 ;
        var b = 200 ;
        var c = String(a) +String(b) ;
        console.log(c);
    }        
    function chk_tel1(){        //사용자가 3개의 입력값을 하나의 변수로 받아서 처리
        var tel1 = document.getElementById("tel1");
        var tel2 = document.getElementById("tel2");
        var tel3 = document.getElementById("tel3");
        var tel_no = tel1.value + tel2.value + tel3.value ;
        console.log(tel_no);
    }
    function chk_tel2(){        //한가지 입력값을 변수로 받아서 처리
        var tel_all = document.getElementById("tel_all");
        console.log(tel_all);
    }
    


</script>
<body>
    인증번호 입력 : <input type="text" id="sno" value="">
    <input type="button" value="전송" onclick="abc()"><br><br>

<!-- 모든 html 입력부분은 "문자"로 인식함 -->
    사용자 id : <input type="text" id="user_id" value=""><br>
    비밀번호 : <input type="text" id="user_pw" value=""><br>
    <input type="button" id="user_pw" value="확인" onclick="login()"><br><br><br>

    <!-- back-end : 숫자만 전송 요청("-" 제외) -->
    <p>휴대폰 번호 : 
        <input type="text" id="tel1"> - 
        <input type="text" id="tel2"> - 
        <input type="text" id="tel3">
        <input type="button" value="전송" onclick="chk_tel1()">
    </p>
    <p>휴대폰 번호 : <input type="text" id="tel_all">
        <input type="button" value="전송" onclick="chk_tel2()">
    </p>    


</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 3일차(html UI와 연결2)</title>  <!--back-end는 method란 용어를 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
</head>
<script>
    function calcs(){
        var no1 = document.getElementById("no1");
        var no2 = document.getElementById("no2");
        var no3 = Number(no1.value) + Number(no2.value);
        alert("총 합계 값 : " + no3 + "   입니다");
    }

</script>
<body>
    첫번째 값 : <input type="text" id="no1"><br>
    두번째 값 : <input type="text" id="no2"><br>
    <input type="button" value="더하기" onclick="calcs()">
</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 3일차(html UI와 연결 응용편)</title>  <!--back-end는 method란 용어를 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
</head>
<script>
    function gugudan(){
        var dan = document.getElementById("dan");
        var a19 ;
        var rslt  ;
        
        // console.log(Number(dan.value)); //숫자 또는 NaN(not a number);
        if(isNaN(Number(dan.value))==true){   //isNaN는 숫자, 문자를 확인하는 문법.구문
            alert("숫자만 사용됩니다");
        }
        else{       //isNaN 이 false일 때 반복문을 적용
            if(dan.value==""){
                alert("뭐든 입력하셔요");        
            }
            else{
                for(a19=1;a19<=9;a19++){
                rslt = Number(dan.value) * a19 ;
                console.log(dan.value + "*" + a19 + "=" + rslt)  ;
                }    
            }
        }
    }
</script>
<body>
    <!-- 숫자를 입력하면 해당 숫자의 구구단을 출력시키기 -->
    구구단을 외자 :
    <input type="text" id="dan">
    <input type="button" value="출력" onclick="gugudan()">

</body>
</html>
      <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 3일차(입력값에 대한 자리수 확인)</title>  <!--back-end는 method란 용어를 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
</head>
<script>
    function no_check(){
        var no = document.getElementById("no");
        if(no.value==""){
            alert("인증번호를 입력하세요");
        }
        else{
            if(no.value.length < 6){        //length는 문자의 갯수.길이를 말함. length에는 number를 사용하면 안됨 Number(no.value.length) 이렇게 하면 에러남
                alert("인증번호는 6자리입니다");
            }
            else{
                if(isNaN(Number(no.value))==true){
                    alert("숫자만 입력하세요");
                }
                else{
                    location.href="http://nate.com";
                }
            }
        }
    }

    var a="123d45";
    console.log(a.length); //length는 문자열에만 인식함
</script>
<body>
    인증번호 6자리 : <input type="text" maxlength="6" id="no">
                    <input type="button" value="인증확인" onclick="no_check()">
</body>
</html>
      <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 3일차(초기값 정보입력 및 발송)</title>  <!--back-end는 function을 method란 용어로 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
</head>
<script>
    function bbb(){
        var no1 = document.getElementById("no1");
        var no2 = document.getElementById("no2");

        location.href="http://hyuk313.dothome.co.kr/js/js_index20.html?nos1="+no1.value+"&nos2="+no2.value;
        
    }
</script>
<body>
    <input type="text" id="no1">
    <input type="text" id="no2">
    <input type="button" value="전송" onclick="bbb()">
</body>
</html>
      <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 3일차(응답데이터 처리)</title>  <!--back-end는 method란 용어를 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
</head>
<script>
    // nos1, nos2 값으로 데이터를 입력파트에서 받는다
    var data = window.location.search;      //URL을 뺀 나머지 URI 값을 가져옴(search)
                                            //[ ]는 배열 기호     
    var nos2 = data.split("&nos2=");        //split"찾을문자열" : 해당문자열을 찾아서 배열화(제일 뒤의 숫자부터 잘라내야 함)
    var ndata2 = nos2[1];

    var nos1 = nos2[0].split("?nos1=");     //split 사용시 모든 배열은 '문자'로 인식. 연산 및 계산시에는 Number로 변환해야 함
    var ndata1 = nos1[1];
    
    var sum = Number(ndata1) + Number(ndata2); 

    console.log(data);
    console.log(nos2);
    console.log(nos2[1]);
    console.log(nos2[0]);
    console.log(nos1[1]);
    console.log(sum);

</script>
<body></body>
</html>
      <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 3일차(location 통신응용편)</title>  <!--back-end는 function을 method란 용어로 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
</head>
<script>
// 아이디 는 biz_id
// 패스워드 는 biz_pw
// 사업자번호 는 biz_no

var data = window.location.search;  //biz_id + biz_pw + biz_no
var split_1 = data.split("&biz_no=");   //사업자번호(biz_no)
var biz_no = split_1[1];
var split_2 = split_1[0].split("&biz_pw=");   //패스워드(biz_pw)
var biz_pw = split_2[1];
var split_3 = split_2[0].split("?biz_id=");   //패스워드(biz_pw)
var biz_id = split_3[1];

function check_data(){
    if(data==""){
        alert("정보를 입력하셔요");
    }    
    else{
        if(biz_no=="2341256789"){
            alert("해당 가입자는 이미 가입되셨습니다");
        }
        else{
            if(biz_no.length<10){
                alert("사업자번호는 모두 10자리입니다");
            }
            else{
                if(isNaN(Number(biz_no)==true)){
                    alert("사업자번호에 숫자만 입력하셔요");
                }
                else{
                    alert("정상 가입되었습니다");
                }
                
            }
        }

        }
    }

console.log("원본데이타"+data);
console.log("사업자id"+biz_id);
console.log("비밀번호"+biz_pw);
console.log("사업자등록번호"+biz_no);

</script>
<body>
   입력된 결과를 확인해보실까요? 
    <input type="button"     value="두둥"   onclick="check_data()">
</body>
</html>
   <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 3일차(location 통신응용편)</title>  <!--back-end는 function을 method란 용어로 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
</head>
<script>
// 아이디 는 biz_id
// 패스워드 는 biz_pw
// 사업자번호 는 biz_no

var data = window.location.search;  //biz_id + biz_pw + biz_no
//console.log(data);

var split_1 = data.split("&biz_no=");   //사업자번호(biz_no)
var biz_no = split_1[1];
// console.log(atob(biz_no)); //atob:btoa에서 인코딩된 값을 base64로 디코딩하는 명령어
// console.log(atob(split_1[1]));

var split_2 = split_1[0].split("&biz_pw=");   //패스워드(biz_pw)
var biz_pw = split_2[1];
//  console.log(atob(biz_pw));
var split_3 = split_2[0].split("?biz_id=");   //패스워드(biz_pw)
var biz_id = split_3[1];

function check_data(){
    if(data==""){
        alert("정보를 입력하셔요");
    }    
    else{
        if(biz_no=="2341256789"){
            alert("해당 가입자는 이미 가입되셨습니다");
        }
        else{
            if(biz_no.length<10){
                alert("사업자번호는 모두 10자리입니다");
            }
            else{
                if(isNaN(Number(biz_no)==true)){
                    alert("사업자번호에 숫자만 입력하셔요");
                }
                else{
                    alert("정상 가입되었습니다");
                }
                
            }
        }

        }
    }

console.log("원본데이타 "+data);
console.log("사업자id   "+biz_id);
console.log("비밀번호   "+biz_pw);
console.log("사업자등록번호 "+biz_no);
console.log("사업자번호암호해독 "+atob(biz_no));


</script>
<body>
   입력된 결과를 확인해보실까요? 
    <input type="button"     value="두둥"   onclick="check_data()">
</body>
</html>
   <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript 3일차 - Javascript location통신 응용편</title>
    <!-- 파빌리온 적용 -->
    <link rel="shortcut icon" href="#">
</head>
<script>
    function register(){
        var mid = document.getElementById("mid").value;
        var mpass = document.getElementById("mpass").value;
        var mno = document.getElementById("no1").value + 
                  document.getElementById("no2").value +
                  document.getElementById("no3").value;
        
        /* console.log(mid);
        console.log(mpass);
        console.log(mno); */
        
        if(mid.length < 5){
            alert("아이디는 최소 5자 이상 입력되어야 합니다.")
        }
        else{
            if(mpass.length < 4){
            alert("패스워드는 최소 4자 이상 입니다.")
            }
            else{
                if(mno.length < 10){
                    alert("사업자번호는 총 10자리 숫자 입니다.")
                }
                else{
                    if(isNaN(Number(mno))){
                        alert("사업자번호는 숫자만 입력해야 합니다.")
                    }
                    else{
                        //암호화 :btoa=문자, 숫자를 base64암호모듈로 적용
                        var secu1 = btoa(mno);
                        var secu2 = btoa(mpass);                        
                        var secu3 = btoa(mid);                        
                        location.href="./js_index22.html?biz_id="+secu3+"&biz_pw="+secu2+"&biz_no="+secu1;
                        // location.href="./js_index22.html?biz_id="+mid+"&biz_pw="+mpass+"&biz_no="+secu1;
                    }
                }
            }

        }
    }
</script>
<body>
    <input type="text" id="mid" placeholder="생성할 아이디를 입력하세요"><br>
    <input type="password" id="mpass" placeholder="생성할 패스워드를 입력하세요"><br>
    사업자번호 10자리 입력하세요<br>
    <input type="text" id="no1" maxlength="3" placeholder="3자리"> -
    <input type="text" id="no2" maxlength="2" placeholder="2자리"> -
    <input type="text" id="no3" maxlength="5" placeholder="5자리"><br><br>
    <input type="button" value="사업자 회원등록" onclick="register()">

</body>
</html>
      <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 4일차(javascript html 출력)</title>  <!--back-end는 function을 method란 용어로 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
    <script src="./js_index23.js?v=1" defer></script> 
    <!-- script src를 이용하여 ***.js 화일을 로드하여 자바스크립트를 적용.단, 'defer'라는 속성을 사용해야 함 -->
</head>
<body>
    <div id="box">
    
    </div>
    <div id="box2">

    </div>
    <ul id="notice">

    </ul><br><br><br>

    <!-- 간단한 innerHTML로 응용 -->
    휴대폰 번호 입력 : <input type="text">  <input type="button"    value="인증받기"   onclick="abc()">
    <span id="scno"></span> 
    <!-- 인증번호를 입력할 수 있는 ui가 적용 -->
</body>
<!-- <script src="./js_index23.js?v=1"></script>  -->
</html>
// console.log("test");
var box =document.getElementById("box");
box.innerText="박스1";
//innerText : 해당id에 문자를 적용할 때 사용하는 명령어

var box2 = document.getElementById("box2");
box2.innerHTML='<input type="text">';
//innerHTML : 문자 이외의 html 태그를 적용할 때 사용하는 명령어


// html 태그와 해당 데이터 변수를 조합, 출력하는 명령어
var notice_data = "[2023-01-19] 시스템점검으로 결재가 되지 않습니다";
var notice = document.getElementById("notice");
notice.innerHTML = "<li>"+ notice_data+"</li>";

function abc(){
    var tel=document.getElementById("tel");
    if(tel.value==""){
        alert("휴대폰번호를 입력하셔야 인증번호 받을수 있어요")
    }
    else{ //휴대폰번호 입력 후 해당 innerHTML명령을 이용해서 input 태그를 생성
        var scno = document.getElementById("scno");
        scno.innerHTML="<input type='text' maxlength='6'> 인증번호 6자리 입력";
    }
}
    
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 4일차(javascript 합계구하기(데이터누적)</title>  <!--back-end는 function을 method란 용어로 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
    <script src="./js_index24.js?v=1" defer></script> 
    <!-- script src를 이용하여 ***.js 화일을 로드하여 자바스크립트를 적용.단, 'defer'라는 속성을 사용해야 함 -->
</head>
<style>
    .notice{
        list-style: none;
        margin: 0;
        padding: 0;
        height: 40px;
    }
</style>
<body>
    <ul id="notice" class="notice"></ul>

    <div id="box">테스트 문자입니다</div>
</body>
</html>
      // console.log("test")
var f;
var sum=0;  //=0 이라는 최초 숫자를 지정하는 이유는 숫자, 불린, 문자 등을 확인할 수가 없기 때문임
for(f=1;f<6;f++){
        //데이터값을 누적시키기 위해 누적되는 변수를 꼭 사용해야 적용됨
    sum=sum+f;  //밑에 row와 동일한 표현
    sum+=f;     //위에 row와 동일한 표현
        //sum=sum-f, sum-=f 의 경우 누적 감소량
}
//console.log(sum);

// 응용문제1. 1~10까지의 모든 숫자를 곱해서 최종 합계를 산출.출력

var v;
var by_sum=1;
for(v=1;v<=10;v++){
    by_sum=by_sum*v;
    console.log(by_sum);
}
console.log(by_sum);

var notice =document.getElementById("notice");
var w=0;
var html ="";
while(w<=9){
    html = "<li>"+w+"</li>";    //해당 li태그와 반복문에 사용하는 값을 누적시킴
    notice.innerHTML+= html;    //이렇게도 사용가능(밖으로 빼낼수도 있고)
    w++;
}
notice.innerHTML = html;        //최종 누적데이터를 notice 아이디 오프젝트에 출력

// innerText, innerHTML 은 할당연산자(대입연산자, +=  -=  /=  *=)를 이용해야 데이터가 누적되면서 사용됨
// 대입연산자가 없을 경우 기존에 있었던 데이터는 삭제됨

document.getElementById("box").innerText+="자바스크립트";
      <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 4일차(javascript 합계구하기(데이터누적)</title>  <!--back-end는 function을 method란 용어로 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
    <script src="./js_index25.js?v=1" defer></script> 
    <!-- script src를 이용하여 ***.js 화일을 로드하여 자바스크립트를 적용.단, 'defer'라는 속성을 사용해야 함 -->
</head>
<body>
    <!-- submit, reset은 절대 onclick을 사용안함. form onsumit 속성을 이용, 자바스크립트와 연계하여 작업
        return : return true와 동일. 정상적인 결과가 나올 경우 form이 정상 작동 -->
    <form method="get" action="http://naver.com"    onsubmit="return abc()">
        <input type="text" placeholder="검색어" id="search">
        <input type="submit" value="검색" >  <!--onclick="abc()"-->
    </form>
</body>
</html>
      function abc(){
    // alert("검색하세요");
    // return false;
    var sh = document.getElementById("search");
    if(sh.value==""){
        alert("검색어를 입력하셔요");
        return false;       //실패값을 적용. false가 적용시 form이 작동하지 않음. onsubmit에만 사용됨
    }
    else{   //사용자가 정상 입력할 때 form을 활성화시킴
        return;
        return true;  //두개가 같음
    }
}
      <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 4일차(form+submit 메모기능응용편)</title>  <!--back-end는 function을 method란 용어로 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
    <script src="./js_index26.js?v=1" defer></script> 
    <!-- script src를 이용하여 ***.js 화일을 로드하여 자바스크립트를 적용.단, 'defer'라는 속성을 사용해야 함 -->
</head>
<body>
    댓글내용 :  
    <form method="post" action="http://lovertv.dothome.co.kr/js/memook.php"  onsubmit="return memo()">
        <input type="text" placeholder="댓글을 쓰세요" name="memotext" id="reply">
        <input type="submit" value="등록" >
    </form>
</body>
</html>
      // console.log("ddd");
function memo(){
    var reply = document.getElementById("reply");
    if(reply.value==""){
        alert("댓글을 입력하셔요");
        return false;
    }
    else{
        return ;
        alert("댓글이 등록되었어요")
    }
    
}
// console.log(memo());
      <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 4일차(checkbox + radio)</title> <!--back-end는 function을 method란 용어로 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
    <script src="./js_index27.js?v=1" defer></script>   <!-- script src를 이용하여 ***.js 화일을 로드하여 자바스크립트를 적용.단, 'defer'라는 속성을 사용해야 함 -->
</head>
<body>
    <!-- id로 해당 checked로 구분하여 확인함. 단, value값은 back-end가 요청할 때 필요, 별도의 요청사항이 없을 경우 value값 미사용 -->
    <input type="checkbox" id="agree" value="Y"> 개인정보 보호정책 동의<br><br>
    <input type="button" value="다음페이지" onclick="cks()"><br><br><br>
    
    <!-- radio는 동의함 부분에만 검토를 하면 됨 -->
    <input type="radio" name="data_ck" id="mail_agree" value="y">동의함
    <input type="radio" name="data_ck" checked value="n">미동의함<br><br>
    <input type="button" value="회원가입" onclick="aks()"><br><br><br>

    <!--a 아이디(무통장입금)를 사용자가 선택 후 결제하기를 클릭하는 경우 javascript 조건문으로 확인함-->
    <input type="radio" name="a" id="a" value="bank"> 무통장입금 <br><br>
    <input type="radio" name="a" value="card" checked> 신용카드 <br><br>
    <input type="radio" name="a" value="hp"> 휴대폰결제 <br><br>
    <input type="radio" name="a" value="gift"> 상품권결제 <br><br>
    <input type="radio" name="a" value="vbank"> 가상계좌입금 <br><br>
    <input type="button" value="결제하기" onclick="pay()"> <br><br>
    
    <!--a 아이디(무통장입금)를 사용자가 선택 시 출력되는 div파트-->
    <div id="div_bank" style="display: none;">  
    <input type="text" id="account" value="NH-123-12-12345"><br>
    <input type="text" id="user_name" value=""><br>
    </div>
</body>
</html>
      function cks(){
    var agree= document.getElementById("agree");
    //console.log(agree.checked);  // true 혹은 false를 뱉어냄
    if(agree.checked==false){
        alert("동의한다고 체크해야 진행됩니다");
    }
    else{
        location.href='http://nate.com';
    }
}

function aks(){
    var mail_agree = document.getElementById("mail_agree");
    if(mail_agree.checked==false){
        alert("메일수신 동의하셔요");
    }
    else{
        location.href="http://naver.com";
    }
}

function pay(){
    var a = document.getElementById("a");
    var div_bank =document.getElementById("div_bank"); //무통장 추가 입력 관련 div 
        
    if(a.checked==true){        //무통장을 선택했을 경우
        div_bank.style.display="block"    ; //css에서 display를 'block'으로 변경
        // alert("ddd test");
    }
    else{
        div_bank.style.display="none" ; //css에서 display를 none 으로 변경
    }
}
      <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 4일차(checkbox + radio)</title> <!--back-end는 function을 method란 용어로 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
    <script src="./js_index28.js?v=1" defer></script>   <!-- script src를 이용하여 ***.js 화일을 로드하여 자바스크립트를 적용.단, 'defer'라는 속성을 사용해야 함 -->
</head>
<body>
    <select name = "carrier" id="carrier">
        <option value="">통신사선택</option>
        <option value="SKT">SKT</option>
        <option value="KT">KT</option>
        <option value="LGT">LGT</option>
        <option value="etc">알뜰폰</option> //value가 없을 경우, 텍스트 값을 그대로 가져옴. '통신사선택'이 문제가 됨
    </select>
    <input type="button" value="확인" onclick="tel_check()"> <br><br><br>
    
    <input type="text" id="email_1">@<input type="text" id="email_2" readonly>
    <select id="email_3" onchange="mails()">   <!--onchange는 사용자가 즉각 변경 요청할 때 사용되는 속성-->
        <option value="">이메일선택</option>
        <option value="naver.com">네이버</option>
        <option value="nate.com">네이트</option>
        <option value="google.com">구글</option>
        <option value="my">직접입력</option>
    </select>
    <br><br><br>
    
    <!-- this를 이용하여 사용하는 방식 -->
    <input type="text" id="data1">
    <!-- <select id="data2" onchange="test(data)"> -->
        <!-- <option value="">성별선택</option> -->
        <!-- <option value="M">남</option> -->
        <!-- <option value="F">여</option> -->
    
    <!-- this.value : 사용자가 선택한 option에 value값을 지칭 -->
   
    <select onchange="test(this.value)">  
        <option value="">성별선택</option>
        <option value="M">남</option>
        <option value="F">여</option>
    </select>


</body>
</html>
      function tel_check(){
    var carrier = document.getElementById("carrier");
    if(carrier.value==""){
        alert("통신사를 선택해주셔요");
    }
    else{
        alert("연락처를 입력하셔요");
    }
}

function mails(){
    // email_3에서 선택된 값을 email_2로 전달하는 형태.
    var email_3 =document.getElementById("email_3");
    var email_2 =document.getElementById("email_2");
    if(email_3.value != ""){        //!= 는 같지 않다는 논리연산식
        if(email_3.value=="my"){    //my라는value가 선택되는 경우, 
            email_2.readOnly = false;   //readOnly 속성(true false)
            email_2.focus();            //자동으로 해당부분에 커서가 적용됨
        }
        else{
            email_2.readOnly = true;
            email_2.value = email_3.value;  //email_3에 있는 값을 email_2 아이디 값으로 전달하는 내용
        }
    }
    else{
        email_2.value="";       //email_2에 대한 값 초기화
    }
}
// function test(data){
    // var data1 = document.getElementById("data1");
    // data1.value=data; 
// 
// 
// 
    // }
//    
// }

function test(data){   //this.value값을 data라는 인수값으로 받음
    var data1 = document.getElementById("data1");
    data1.value=data;   //해당 인수값을 data1에 적용
}
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 4일차(팝업창 index30과 연계)</title> <!--back-end는 function을 method란 용어로 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
    <script src="./js_index28.js?v=1" defer></script>   <!-- script src를 이용하여 ***.js 화일을 로드하여 자바스크립트를 적용.단, 'defer'라는 속성을 사용해야 함 -->
</head>
<script>
    function popup(){
        window.open("./js_index30.html","","width=500 height=300");
        //window.open은 신규 브라우저 창을 생성할 때 사용
        //"팝업창주소","","팝업창사이즈 외 스크롤 등 조절"
    }
</script>
<body>
    도로명 주소 : <input type="text" id="addr"  readonly>
    <input type="button" value="주소찾기" onclick="popup()">
</body>
</html>
      <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 4일차(팝업창 index29와 연계)</title> <!--back-end는 function을 method란 용어로 사용함-->
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
    <script src="./js_index28.js?v=1" defer></script>   <!-- script src를 이용하여 ***.js 화일을 로드하여 자바스크립트를 적용.단, 'defer'라는 속성을 사용해야 함 -->
</head>

<body>
    <ul id="address">

    </ul>
</body>

<!-- defer사용시 배열값이 적용되면, inner가 적용 안될수도 음 -->
<script defer>
    var data=["서울시","경기도","인천시","제주도"]; //배열이 있는 경우는 BODY 하단에다가 SCRIPT를 작성해야 함. DEFER가 있던 없던 마찬가지임
    // console.log(data[2])    ; //배열번호를 입력시 콘솔로 해당배열 데이터를 출력
    // console.log(data.length); //배열갯수를 설정해야지 반복문으로 출력가능
    var ea = data.length;
    var f;
    var address = document.getElementById("address"); //html에 해당 아이디를 load
    var html = ""
    for(f=0;f<ea;f++){
        // console.log(data[f]);
        
        
        html+="<li onclick=gopage('"+data[f]+"')>" + data[f]  + "</li>"; //<li></li>태그를 생성하며 onclick 핸들링 속성을 사용하는 형태
    }   // *문자로 인수값을 적용할 경우 "", ''가 있어야 함. 문자는 무조건 따옴표가 없으면 error 발생

        //배열 숫자로 해당함수로 전달
        html+="<li onclick='gopage2("+f+")'>"+data[f]+"</li>";


    
    address.innerHTML=html;  //반복문 결과에 대한 최종 출력

    function gopage(a){  //해당 li를 클릭하는 경우, 부모창(index29)에 값을 전달하는 역할
        var addr=document.getElementById("addr");
        window.opener.addr.value= a;
        self.close();   //자식 창을 자동으로 close
            // alert(a);
    }

    function gopage2(b){
        var addr = document.getElementById("addr");
        window.opener.addr.value = data[b];
        self.close();
    }

</script>
</html>
      <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 5일차(랜덤함수사용법)</title>
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
    <script src="./js_index31.js?v=2" defer></script>   
    <!-- <link rel="stylesheet" href="./js_test1.css?v=1" type="text/css"> -->
</head>
<style></style>
<body>
    <input type="button" value="랜덤버튼" onclick="abc()"><br><br>
    <input type="button" value="당첨확인" onclick="ab()"><br><br>
    <input type="button" value="당첨확인" onclick="abd()"><br><br>
    <input type="button" value="3개뽑기" onclick="aaa()">

</body>
</html>
      // console.log("dfsfdsf")

function abc(){
    var rdm = Math.random()*10;                 //랜덤함수: 기본 소숫점이 포함 *10은 범위.맥스임
    // var c = Math.ceil(Math.random()*10);     // ceil 올림 1~10
    var c = Math.ceil(Number(rdm));
    // var f = Math.floor(Math.random()*10);    // floor 버림 0~9
    var f = Math.floor(Number(rdm));
    // var r = Math.round(Math.random()*10);    // round 반올림 0.5이상 올림 0~10
    var r = Math.round(Number(rdm));

    console.log(rdm);
    console.log(c);
    console.log(f);
    console.log(r);
}

function ab(){
    // 랜덤으로 당첨결과를 출력하는 코드 작성 1~8
    var game = Math.ceil(Math.random()*8);
    switch(game){
        case 1: case 5:
            console.log("10%할인쿠폰당첨");
        break;
        case 6 :
            console.log("무료택배당첨");
        break;
        case 7 :
            console.log("50%할인쿠폰당첨");
        break;
        default:
            console.log("다음기회에");
        break;
    }
}
function abd(){
    var a = Math.ceil(Math.random()*100);
    if(a==10||a==20||a==30){
        alert("50%할인");
    }
    else if(a>80){
        alert("10%할인");
    }
    else if(a==77){
        alert("금 한돈1kg");
    }
    else{
        alert("꽝");
    }
}
function aaa(){
    var w = 1;
    var no;
    while(w<4){
        no=Math.ceil(Math.random()*10000);
        console.log(no);
        w++;
    }
}
      <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 5일차(랜덤함수응용편)</title>
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
    <script src="./js_index32.js?v=3" defer></script>   
    <!-- <link rel="stylesheet" href="./js_test1.css?v=1" type="text/css"> -->
</head>
<style>
    .scview{
        width: 200px;
        height: 80px;
        /* border: 1px solid black; */
        border: none;
        box-sizing: border-box;
        background-image: url("./number/security_back.png");
    }
    .scview>span{
        float:left;
        display: block;  /* width, height가 없으면 필요없음*/
    }
</style>
<body>
    <input type="text" id="sno1" readonly>
    <input type="text" id="sno2" readonly>
    <input type="text" id="sno3" readonly>
    <input type="text" id="sno4" readonly>
    <input type="text" id="sno5" readonly>
    <input type="text" id="sno6" readonly>
    <input type="button" value="로또당첨확인" onclick="lotto()">
    <br><br><br>

    <input type="hidden" id="ori_no" value="">
    <!-- <div id="scview" class="scview"> -->
        <!-- <span id="s0"><img src="./number/no0.png"></span> -->
        <!-- <span id="s1"><img src="./number/no1.png"></span> -->
        <!-- <span id="s2"><img src="./number/no3.png"></span> -->
        <!-- <span id="s3"><img src="./number/no4.png"></span> -->
    <!-- </div> -->
    <div id="scview" class="scview">
        <span id="s0"></span>
        <span id="s1"></span>
        <span id="s2"></span>
        <span id="s3"></span>
    </div>
    보여지는 숫자 4자리 입력 : <input type = "text" id="user_no" maxlength="4">
    <input type="button" value="확인" onclick="check_number()">



</body>
</head>
      function lotto(){
   var w=1;
    do{
        lotto=Math.ceil(Math.random()*46);
        document.getElementById("sno"+w).value=lotto;  //id를 순차적으로 적용. 단, id이름을 순차적으로 미생성시 오류발생
        w++
    }while(w<=6)

}

// document.getElementById("s0").innerHTML="<img src='./number/no8.png'>";
var k=0;
var getid;
var rno;
var sum="";
while(k<=3){
    getid =document.getElementById("s"+k);
    rno = Math.floor(Math.random()*10);
    sum+=string(rno);
    getid.innerHTML="<img src='./number/no"+rno+".png'>";
    k++;
}
document.getElementById("ori_no").value = sum; //hidden값에 해당 숫자를 대입함
function check_number(){
    var ori = document.getElementById("ori_no");
    var user = document.getElementById("user_no");
    if(ori.value==user.value){
        alert("정상적으로 확인되었어요");
    }
    else{
        alert("보안코드를 다시 입력하셔요");
        window.location.reload(); //reload : javascript에서 페이지를 새로고침하는 함수
    }
}
        <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 5일차(노드id로 체크박스핸들링)</title>
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
    <script src="./js_index33.js?v=1" defer></script>   
    <!-- <link rel="stylesheet" href="./js_test1.css?v=1" type="text/css"> -->
</head>
<style>
        
</style>
<body>
    <input type="hidden" id="no" value="0">
    <input type="checkbox" id="all" onclick="allcheck(this.id)">전체선택<br>
    <input type="checkbox" id="sno1" onclick="chk_id(this.id)">상품1<br>
    <input type="checkbox" id="sno2" onclick="chk_id(this.id)">상품2<br>
    <input type="checkbox" id="sno3" onclick="chk_id(this.id)">상품3<br>
    <input type="checkbox" id="sno4" onclick="chk_id(this.id)">상품4<br>
    <input type="checkbox" id="sno5" onclick="chk_id(this.id)">상품5<br>
    <input type="checkbox" id="sno6" onclick="chk_id(this.id)">상품6<br>
    
</body>
</html>
        function chk_id(myid){
    var ck = document.getElementById(myid);
    console.log(ck.checked);
    var no = Number(document.getElementById("no").value);
    if(ck.checked==true){       
        no++;       //1 씩증가하는 방식 3가지 모두 가능
        // no = no+1;
        // no+=1;

    }
    else{
        // 마이너스 1 씩 감소하는 방식
        no--;
    }
    document.getElementById("no").value = no;           //카운팅 : hidden에 +1 씩 카운팅 값을 전달함
    if(document.getElementById("no").value==6){         //hidden값이 6개가 되었을 경우, 전체 선택에 체크가 되고, 
        document.getElementById("all").checked=true;
    }
    else{
        document.getElementById("all").checked=false;   //6미만이 적용되면 전체선택 해제
    }   
}
function allcheck(all){     // 전체선택을 클릭하는 경우, 발생하는 이벤트
    var ea = 6;
    var w = 1;
    var ckall = document.getElementById(all).checked;   //해당체크 유,무 true, false

    while(w<=ea){
        document.getElementById("sno"+w).checked =ckall;
        w++;
    }

    if(ckall==true){            //전체 선택할 경우 아래에 있는 객체의 갯수만큼 hidden 값에 반영
        document.getElementById("no").value = 6;
    }
    else{
        document.getElementById("no").value = 0;
    }

    // if(ckall==true){
        // while(w<=ea){
            // document.getElementById("sno"+w).checked =true;
            // w++;
        // }
    // }
    // else{
        // while(w<=ea){
            // document.getElementById("sno"+w).checked =false;
            // w++;
        // }
    // }
}
        <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 5일차(약관동의 응용부분)</title>
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
    <script src="./js_index34.js?v=1" defer></script>   
    <!-- <link rel="stylesheet" href="./js_ijs_test1.css?v=1" type="text/css"> --> 
</head>
<style>
    body{
        margin: 10px ; padding: 10px ;
    }
    .msg_agree{
        width: 300px;
        height: 100px;
        margin-top: 20px;
        /* margin-right: 20% */
        /* background-color: gray; */
        /* color: white; */
    }
</style>
<body>
    
    <textarea id="msg_agree" class="msg_agree" readonly></textarea>
    
    <div id="view" style="width: 600px; height: 100px;
     border: 1px solid black; overflow-y: auto;"> 
        <!-- overflow-y:auto 세로 스크롤바 생성. div를 넘어서는 부분때문에 -->
    </div>
    


    싸이트(<a href="http://www.nate.com" id="a()"> 네이트</a>)는 <br>
</body>
        var msg_agree = document.getElementById("msg_agree");

var http = new XMLHttpRequest();        //http, https를 통해서 통신할 때 사용되는 함수. 통신의 시작을 일컬음
http.open("get","./agree.txt?v=1",false);   //open("전송방식","화일명 또는 url 주소",false동기화 또는 true비동기화)
http.send();                            //send : 통신에 대한 대기 상황을 일컬음

//텍스트 화일load
msg_agree.value = http.responseText;    //responseText : 응답요청값을 텍스트로 출력(html태그를 직접가져옴. 대신 responseHTML은 사라짐)     response : 배열값으로 받음      responseHTML : html로 코드를 읽어옴 reponseXML : XML을 직접 가져옴

//html 화일load
document.getElementById("view").innerHTML = http.responseText;




//통신 : 200(통신성공)  401(접근권한없음)   402(웹페이지오류.필수메소드없음 get post 없을때)   403(웹페이지 접근권한없음)   404(화일못찾을경우,웹페이지가없을경우)
// 500(서버관련오류)    500() 501() 502() 503() 504()
        body{
    margin 0 ; padding 0 ;
}
.t1{
    width: 800px;   height: 200px;
}
.r1{
    width: 200px;   height: 20px;
    margin-left: auto;
}
.r2{
    width: 50px;   height: 20px;
    margin-left: 10px;
}
.t2{
    width: 800px;   height: 100px;
}
.t3{
    width: 800px;   height: 100px;
}

        <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 5일차(약관동의 응용부분)</title>
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
    <script src="./js_index35.js?v=3" defer></script>   
    <link rel="stylesheet" href="./js_index35.css?v=1" type="text/css"> 
</head>
<body>
    <labela class="lbl1">
    <textarea id="t1" class="t1" readonly></textarea><br>
        <div class="r1">
            <input type="checkbox"  id="r1" onclick="r1()">동의함
            <input type="checkbox"  id="r2" onclick="r2()">동의하지않음
        </div>
    </label><br><br><br>
        
    <div id="t2" class="t2" style=" width: 800px; height: 200px; border: 1px solid black; overflow-y: auto;"></div>
        <div class="r1">
            <input type="checkbox" id="r3" onclick="r3()">동의함
            <input type="checkbox" id="r4" onclick="r4()">동의하지않음
        </div><br><br><br>
        
    <div id="t3" class="t3" style=" width: 800px; height: 200px; border: 1px solid black; overflow-y: auto;"></div>
        <div class="r1">
            <input type="checkbox" id="r5" onclick="r5()" >동의함
            <input type="checkbox" id="r6" onclick="r6()">동의하지않음
        </div><br><br><br>

    <input type="checkbox" id="r7" class="r2" onclick="r7()"> 전체 동의함
    
</body>
</html>
        var t1 = document.getElementById("t1");
var http1 = new XMLHttpRequest();
http1.open("get","./service.txt?v=1",false);
http1.send();
t1.value = http1.responseText;

var t2 = document.getElementById("t2");
var http2 = new XMLHttpRequest();
http2.open("get","./info.txt?v=1",false);
http2.send();
document.getElementById("t2").innerHTML = http2.responseText;

var t3 = document.getElementById("t3");
var http3 = new XMLHttpRequest();
http3.open("get","./avinfo.txt?v=1",false);
http3.send();
document.getElementById("t3").innerHTML = http3.responseText;

function r1(){
    var check_r1 = document.getElementById("r1");
    if(check_r1.checked = true;){
        
    }
    // if(check_r1.checked=true){
        // alert("첵!");
        // console.log(check_r1);
    // }
    // else{
        // alert ("오마이");
    // }
    

    // if(r1().document.getElementById().checked=true){
        // alert("동의했슴돠");
    // }
}
