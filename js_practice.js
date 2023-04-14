// 첫 번째 컨테이너 (실시간 글자수 카운트)

// HTML의 textarea, 안쪽 span을 연결하고, 텍스트가 입력될 때 안쪽 span의 숫자가 1씩 줄어들도록 해야함.
// 글자수가 10글자 이하로 남았을 때 배경색을 연한 빨강, 0글자 이하로 남았을 때 진한 빨강을 설정해야함. 이 색상은 안쪽 span에도 동일하게 적용해야함.
// 글자 수가 10글자 이상이나 0글자 이상으로 돌아왔을 때 다시 이전 상태로 돌아가도록 설정해야함.

const textareaElement = document.getElementById('user_msg');
const countNumberSpanElement = document.getElementById('count');
let maxLengthProperty = textareaElement.maxLength;

function countNumberFunc(event) {
    let enteredText = event.target.value; //사용자가 입력한 값은 event 객체의 값
    let enteredTextLength = enteredText.length; //사용자가 입력한 값의 길이를 별도 변수에 저장

    let remainLength = maxLengthProperty - enteredTextLength; //남은 입력가능 길이는 textarea에서 남은 최대글자수 속성값 300에서 사용자가 입력한 길이를 뺀 것

    countNumberSpanElement.textContent = remainLength; //안쪽 span의 텍스트가 300에서 줄어들어야 하므로, 이를 남은 길이를 저장한 변수로 할당
    
    if (remainLength === 0) {
        let textareaBackground = textareaElement.classList.add('warning_0');
        textareaElement == textareaBackground;
        countNumberSpanElement.classList.add('warning_0');
    } else if (remainLength <= 10) {
        let textareaBackground10 = textareaElement.classList.add('warning_10');
        textareaElement == textareaBackground10;
        countNumberSpanElement.classList.add('warning_10');
        textareaElement.classList.remove('warning_0');
        countNumberSpanElement.classList.remove('warning_0');
    } else {
        textareaElement.classList.remove('warning_10');
        countNumberSpanElement.classList.remove('warning_10');
    }
}

textareaElement.addEventListener('input', countNumberFunc);

// 두 번째 컨테이너 (단락 지우고 배경색 넣기)

// 우선 두 단락을 연결하고 각각 클릭 이벤트리스너를 추가해야함.
// 두 가지의 함수를 만들어서 구현해야 함.

const deleteParagraphElement = document.getElementById('first_pg');
const backgroundParagraphElement = document.getElementById('second_pg');

const deleteBtnElement = document.getElementById('delete_btn');
const backgroundBtnElement = document.getElementById('background_btn');

function deleteParagraph() {
    deleteParagraphElement.innerHTML = '';
}

function backgroundParagraph() {
    let bgParagraph = backgroundParagraphElement.classList.add('bg');
    backgroundParagraphElement == bgParagraph;
}

deleteBtnElement.addEventListener('click', deleteParagraph);
backgroundBtnElement.addEventListener('click', backgroundParagraph);

