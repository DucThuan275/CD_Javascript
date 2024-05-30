import React from "react";
import { Link } from "react-router-dom";
import Database from "../../../data_fake.json";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

const User = () => {
  const users = Database.Users;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [roles, setRoles] = useState(0);
  const [status, setStatus] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      phone: phone,
      user_name: user_name,
      password: password,
      address: address,
      roles: roles,
      status: status,
    };
    console.log(user);
  };

  return (
    <>
      <main>
        <div className="card mt-5">
          <div className="card-header">
            <div className="row">
              <div className="col-md-6">
                <strong>Quan li danh muc</strong>
              </div>
              <div className="col-md-6 text-end">
                <Link to="/" className="btn btn-sm btn danger">
                  {" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3">
                <form action="" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name">Tên banner</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone">Điện thoại</label>
                    <input
                      type="number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      id="phone"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="user_name">Tên người dùng</label>
                    <input
                      type="text"
                      value={user_name}
                      onChange={(e) => setUserName(e.target.value)}
                      id="user_name"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password">Mật khẩu</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address">Địa chỉ</label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      id="address"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="image">Hình ảnh</label>
                    <input type="file" id="image" className="form-control" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="roles">Chức năng</label>
                    <select

                      className="form-select"
                      id="roles"
                      value={roles}
                      onChange={(e) => setRoles(e.target.value)}
                    >
                      <option value="0">Chọn Chức năng</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="status">Trạng thái</label>
                    <select
                      className="form-select"
                      id="status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="1">Xuất bản</option>
                      <option value="2">Chưa xuất bản</option>
                    </select>
                  </div>

                  <div className="mb-3 text-end">
                    <button type="submit" className="btn btn-success px-5">
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-9">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Tên User</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Địa chỉ</th>
                      <th scope="col">Chức năng</th>
                      <th scope="col">Hình</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users &&
                      users.length > 0 &&
                      users.map((User) => {
                        return (
                          <tr key={User.id}>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>{User.name}</td>
                            <td>{User.email}</td>
                            <td>{User.phone}</td>
                            <td>{User.address}</td>
                            <td>
                              <Link to={"/admin/category/edit/" + User.id}>
                                <FaTrash />
                              </Link>
                            </td>
                            <td>{User.image}</td>
                            <td>{User.status}</td>
                            <td>{User.id}</td>

                            <td>
                              <img src={{}} alt="" />
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default User;