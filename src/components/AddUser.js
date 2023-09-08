import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";

function AddUser() {
  const [title, setTitle] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const month = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentyabr",
    "oktyabr",
    "noyabr",
    "dekabr",
  ];

  const addUser = async (e) => {
    e.preventDefault();
    if (title !== "" && telNumber !== "" && email !== "" && password !== "") {
      await axios.post("https://chopar-cargo-back.vercel.app/api/users/add", {
        title: title,
        telnumber: telNumber,
        email: email,
        password: password,
        date:
          new Date().getDate() +
          "-" +
          month[new Date().getMonth()] +
          " " +
          new Date().getHours() +
          ":" +
          new Date().getMinutes(),
      });
      alert("Xatolik Yuz Berdi Iltimos Yana Bir Bor Urinib Ko'ring");
    } else {
      alert("Iltimos Barcha Inputlarni To'ldiring");
    }
    setTitle("");
    setTelNumber("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Header />
      <form>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Ismingizni Kiriting"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="title">Ism Familiya</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="number"
            className="form-control"
            id="telNumber"
            placeholder="Telefon Raqamingizni Kiriting"
            value={telNumber}
            onChange={(e) => setTelNumber(e.target.value)}
            name="telnumber"
          />
          <label htmlFor="telNumber">Telefon Raqam</label>
        </div>
        <div className="d-flex gap-3">
          <div className="form-floating mb-3 w-50">
            <input
              type="email"
              className="form-control"
              id="load"
              placeholder="Emailingizni kiriting"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            <label htmlFor="load">Emailingizni kiriting</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Parolingizni kiriting"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
            <label htmlFor="password">Email Parolingizni kiriting</label>
          </div>
        </div>
        <button className="btn btn-success mt-3" onClick={addUser}>
          Send
        </button>
      </form>
    </div>
  );
}

export default AddUser;
