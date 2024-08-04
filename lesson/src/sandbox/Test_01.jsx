import React, { useState } from "react";

function Test01() {
  const spaceCode = prompt("스페이스코드를 입력하세요");

  const database = [
    {
      name: "Kim",
      spacecode: "WH001A",
      trackingnumber: [1001, 1002, 1003, 1004],
    },
    {
      name: "Han",
      spacecode: "WH002A",
      trackingnumber: [2001, 2002, 2003, 2004],
    },
    {
      name: "Lee",
      spacecode: "WH003A",
      trackingnumber: [3001, 3002, 3003, 3004],
    },
    {
      name: "Choi",
      spacecode: "WH004A",
      trackingnumber: [4001, 4002, 4003, 4004],
    },
    {
      name: "Hwang",
      spacecode: "WH005A",
      trackingnumber: [5001, 5002, 5003, 5004],
    },
  ];

  let username = false;

  database.map((user) => {
    if (spaceCode === user.spacecode) {
      return (username = user.name);
    }
  });

  return (
    <div>
      <div>
        안녕하세요 {username ? username + "님" : "확인되지않는 USER 입니다."}
      </div>
    </div>
  );
}

export default Test01;
