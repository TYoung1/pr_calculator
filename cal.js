     // 클래스 선언
     class Calculator {
        clear(){
            // ac 버튼 사용함수 값초기화 
            this.displayContent="";
            this.displayElement.value=0;
        }
        compute(){
            // equals 버튼 사용함수  eval함수로 문자로 입력받은 식을 계산 
            this.displayContent = eval(this.displayContent
            .replace('\u00D7','*').replace('\u00F7','/'));
            //  곱하기와 나누기의 경우  '*', '/' 로 연산이 되기떄문에 replace 사용해 변경
        }
        constructor(displayElement) { 
            this.displayElement = displayElement;
            this.displayContent = "";
        }    

        appendNumber(number) {
            // 숫자 버튼 사용함수 숫자추가
            this.displayContent += number;
    
        }  
        appendOperator(operator){
            // 연산자 버튼 연산자 추가 
            this.displayContent+=operator;

        }
        updateDisplay() {
            // 비활성화한 input의 value에 입력
            this.displayElement.value = this.displayContent;
    
        }
    
    }
    
     
    // 해당요소 불러와서 선언
    const buttons = document.querySelectorAll('button');
    const displayElement = document.querySelector('input');
    //  객체 생성
    const calculator = new Calculator(displayElement);
    
     
    // 함수안에 각원소 차례대로 넣기
    // ()=>{} 에로우 함수  함수명 따로 없을떄 간략하게 사용  
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // break시 탈출
            switch (button.dataset.type) {
                case 'operator':
                    // 타입 operator 일경우 계산식 추가 ,표기함수 
                    calculator.appendOperator(button.innerText);
                    calculator.updateDisplay();
                    break;
    
                case 'ac':
                    // ac 일경우 초기화함수
                    calculator.clear();
                    break;
    
                case 'equals':
                    // equals 일경우 계산,표기함수
                    calculator.compute();
                    calculator.updateDisplay();
                    break;
    
                default:
                    // 나머지 숫자버튼 숫자추가,표기함수
                    calculator.appendNumber(button.innerText);
                    calculator.updateDisplay();
                    break;
            }
        })      
    })