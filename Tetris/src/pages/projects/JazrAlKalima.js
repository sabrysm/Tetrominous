import React, { useState } from "react";

function JazrAlkalima() {
  const [inputText, setInputText] = useState("");
  const result = appLogic(inputText);
  function handleChange(word) {
    setInputText(word);
  }
  return (
    <div className="Jazr-container">
      <legend>ابحث عن وزن الكلمة</legend>
      <SearchWord handleSearch={handleChange} />
      <ResultContainer result={result} />
    </div>
  );
}

function SearchWord(props) {
  return (
    <div className="Jazr-search">
      <input
        type="text"
        placeholder="اكتب الكلمة ..."
        onChange={(e) => props.handleSearch(e.target.value)}
      />
    </div>
  );
}

function ResultContainer(props) {
  return (
    <>
      <div className="Jazr-result">
        <label>النتيجة: {!props.result ? "...." : props.result}</label>
      </div>
    </>
  );
}

function appLogic(word) {
  let result = word;
  if (result.match(/[a-z]/i) || (result.length < 4 && result.startsWith("ي")))
    return;
  if (result.endsWith("ة") || result.endsWith("ء")) {
    result = result.substring(0, result.length - 1);
  }
  if (result.startsWith("ال") && result.length >= 4) {
    result = result.substring(2);
  }
  if (result.startsWith("مت") && result.length >= 4) {
    result = result.substring(2);
  }
  if (result[1] === "ا" && result.length === 4) {
    result = result.replace(result[1], "");
  }

  //  تفعل أو أفعل أو مفعل

  if (
    (result.startsWith("م") ||
      result[0] === "أ" ||
      result[0] === "ا" ||
      result[0] === "ن" ||
      result[0] === "ت") &&
    result.length === 4
  ) {
    result = result.substring(1);
  }

  // استفعل

  if (
    (result[0] === "ا" ||
      result[0] === "ي" ||
      result[0] === "ن" ||
      result[0] === "ت") &&
    result[1] === "س" &&
    result[2] === "ت" &&
    result.length === 6
  ) {
    result = result.substring(3);
  }

  // استفعال

  if (
    (result[0] === "ا" ||
      result[0] === "ي" ||
      result[0] === "ن" ||
      result[0] === "ت") &&
    result[1] === "س" &&
    result[2] === "ت" &&
    result.length === 7
  ) {
    result = result.substring(3);
    result = result.replace(result[2], "");
  }

  // تفعيل

  if (result[0] === "ت" && result[3] === "ي" && result.length === 5) {
    result = result.replace(result[0], ""); // حذف اول حرف
    result = result.replace(result[2], ""); // حذف الياء
  }

  // افتعل

  if (result[2] === "ت" && result.length === 5) {
    result = result.replace(result[0], "");
    result = result.replace(result[1], "");
  }

  // انفعل

  if (result[1] === "ن" && result.length === 5) {
    result = result.substring(2);
  }

  // مفعول

  if (result[0] === "م" && result[3] === "و" && result.length === 5) {
    result = result.replace(result[0], "");
    result = result.replace(result[2], "");
  }

  // افتعال

  if (
    (result[0] === "ا" ||
      result[0] === "ي" ||
      result[0] === "ن" ||
      result[0] === "ت") &&
    result[2] === "ت" &&
    result.length === 6
  ) {
    result = result.replace(result[0], "");
    result = result.replace(result[1], "");
    result = result.replace(result[2], "");
  }
  if (result.includes("ائ")) {
    result = result.replace("ائ", "ي");
  }
  if (result.length > 3 && result.includes("ا")) {
    result = result.replace("ا", "");
  }

  // فعلل

  if (
    !(
      result.startsWith("ي") ||
      result.startsWith("أ") ||
      result.startsWith("ت") ||
      result.startsWith("ا") ||
      result.startsWith("ن")
    ) &&
    result.length === 4
  ) {
    return result;
  }
  if (
    (result.startsWith("ي") ||
      result.startsWith("أ") ||
      result.startsWith("ت") ||
      result.startsWith("ا") ||
      result.startsWith("ن")) &&
    result.length > 3
  ) {
    result = result.substring(1);
  }
  if (result.match(" ")) return;
  if (result.length > 5) return;
  if (
    result.length === 3 &&
    (result[1] === "ا" || result[1] === "ي" || result[1] === "و")
  ) {
    let firstLetter = result[0];
    let thirdLetter = result[2];
    result =
      "يحتمل " +
      firstLetter +
      "ا" +
      thirdLetter +
      " او " +
      firstLetter +
      "ي" +
      thirdLetter +
      " او " +
      firstLetter +
      "و" +
      thirdLetter;
  }
  return result;
}
export default JazrAlkalima;
