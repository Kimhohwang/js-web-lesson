import React from "react";

function Index0407() {
  // hint: const age = prompt("당신의 나이는?", "");
  // TODO

  function checkAdult() {
    const age = prompt("당신의 나이는?", "나이를 입력하세요");

    if (age >= 20) {
      alert("성인 입니다");
    } else {
      alert("성인이 아닙니다");
    }
  }

  return (
    <div>
      <div id="lesson-title">함수 - 예제 5: 나이 검사</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>
          `나이 검사` 버튼을 누르면 나이를 입력 받아, 20살 이상이라면
          "성인입니다",
        </div>
        <div>
          그렇지 않다면 "성인이 아닙니다"라고 alert 하도록 함수를 구현하시오.
        </div>

        <div className="title">답</div>
        {/* TODO */}
        <div className="link-button" onClick={() => checkAdult()}>
          나이 검사
        </div>
      </div>
    </div>
  );
}

export default Index0407;
