import React from "react";

function Index0101() {
  const a = 3;
  const b = 10;
  const c = 1.5;
  const d = "Hello world";

  return (
    <div>
      <div id="lesson-title">자료형 - 숫자</div>
      <div id="lesson-content">
        <div className="title">정수 저장</div>
        <div>a = {a}</div>

        <div className="title">실수 저장</div>
        <div>c = {c}</div>

        <div className="title">사칙연산</div>
        <div>a + b = {a + b}</div>
        <div>a - b = {a - b}</div>
        <div>a * b = {a * b}</div>
        <div>b / a = {b / a} </div>
        <div>b % a = {b % a} (나머지 연산)</div>
      </div>

      <div>문자문자{d}</div>
    </div>
  );
}

export default Index0101;
