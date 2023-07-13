import { useEffect, useRef, useState } from "react";

function HookQ() {
  const [form, setForm] = useState({ id: "", pw: "" });

  // inputRef 선언
  const idRef = useRef(null);
  const pwRef = useRef(null);

  const handleChange = (e) => {
    const copy = { ...form, [e.target.name]: e.target.value };
    setForm(copy);
  };

  // useEffect 첫번쨰 마운트에 포커싱
  useEffect(() => {
    idRef.current.focus();
  }, []);

  const handleClick = () => {
    if (form.id === "") {
      alert("아이디는 필수 입니다");
      idRef.current.focus();
      return;
    } else if (form.pw === "") {
      alert("비밀번호는 필수 입니다");
      pwRef.current.focus();

      return;
    }
    alert(`아이디 : ${form.id} 비밀번호 : ${form.pw}`);
  };

  // const inputId = useRef(null);
  // const inputPw = useRef(null);

  // const handleClick = () => {
  //   if (inputId.current.value === "") {
  //     inputId.current.focus();
  //   } else if (inputPw.current.value === "") {
  //     inputPw.current.focus();
  //   }
  //   alert(
  //     `아이디 : ${inputId.current.value} 비밀번호 : ${inputPw.current.value}`
  //   );
  // };
  // useEffect(() => {
  //   inputId.current.focus();
  // }, []);
  return (
    <div>
      <h3>실습</h3>
      <p>로그인 클릭 시 공백이라면 공백인 태그에 포커스를 추가</p>
      <p>로그인 클릭 시 공백이 아니라면 경고창으로 입력 된 id, pw를 출력</p>
      <p>첫번째 마운트 이후에는 id에 자동 포커싱 해주세요</p>
      <input
        type="text"
        name="id"
        onChange={handleChange}
        placeholder="아이디"
        value={form.id}
        ref={idRef}
      ></input>
      <input
        type="text"
        name="pw"
        onChange={handleChange}
        placeholder="비밀번호"
        value={form.pw}
        ref={pwRef}
      ></input>
      <button onClick={handleClick}>로그인</button>
    </div>
  );
}

export default HookQ;
