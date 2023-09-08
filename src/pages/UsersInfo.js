import axios from "axios";
import React, { useEffect, useState } from "react";

function UsersInfo() {
  const [usersInfo, setUsersInfo] = useState([]);
  const getAllUsersInfo = async () => {
    const { data } = await axios.get("https://chopar-cargo-back.vercel.app/api/users");
    setUsersInfo(data.allUsers);
  };

  const deleteUser = async (id) => {
    await axios.delete(`https://chopar-cargo-back.vercel.app/api/users/${id}`);
    getAllUsersInfo();
  };

  useEffect(() => {
    getAllUsersInfo();
  }, []);

  return (
    <div className="py-5">
      <table className="table table-striped w-100">
        <thead>
          <tr>
            <th>Ism Familiya</th>
            <th>Telefon Raqam</th>
            <th>Email</th>
            <th>Password</th>
            <th>Vaqt</th>
            <th>O'chirish</th>
          </tr>
        </thead>
        <tbody>
          {usersInfo.map((user) => (
            <tr key={user._id}>
              <td>{user.title}</td>
              <td>{user.telnumber}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.date}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user._id)}
                >
                  O'chirish
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersInfo;
