import { useRef, useState } from "react";

function HookRef() {
  // state
  const [form, setForm] = useState({ data: "", result: "" });

  //useRef
  const inputRef = useRef(null);

  const handleChange = (e) => {
    // e.target.value // handleChange의 값
    const copy = { ...form, data: e.target.value };
    setForm(copy);
    console.log(copy);
  };

  const handleClick = () => {
    // ref의 current속성에 태그를 넣어준다
    console.log(inputRef.current); // 태그
    console.log(inputRef.current.value); // 태그 값
    setForm({ data: "", result: inputRef.current.value }); // data는 초기화, input값의 value 를 result로 체인지

    inputRef.current.focus(); // 인푸태그에 포커스
  };
  return (
    <div>
      <h3>useRef(특정태그 이름달기)</h3>
      <input
        type="text"
        onChange={handleChange}
        value={form.data}
        ref={inputRef}
      />
      <button type="button" onClick={handleClick}>
        확인하기
      </button>
      {form.result}
    </div>
  );
}

export default HookRef;
