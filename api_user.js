const express = require("express");
const app = express();
const port = 3000; // Chọn cổng mà bạn muốn sử dụng

// Dữ liệu mẫu về users
const users = [
  { id: 1, name: "k18", age: 20 },
  { id: 2, name: "k19", age: 22 },
  { id: 3, name: "namk1p", age: 25 },
  { id: 4, name: "k2", age: 14 },
  { id: 5, name: "k22", age: 15 },
  { id: 53, name: "k3", age: 17 },
  { id: 7, name: "k11", age: 13 },
  { id: 99, name: "k10", age: 11 },
  // Thêm nhiều users khác ở đây
];

// API để lấy danh sách users dựa trên các bộ filter
app.get("/users", (req, res) => {
  const { name_search, age_gt, id_sort } = req.query;
  let filteredUsers = users;

  if (name_search) {
    filteredUsers = filteredUsers.filter((user) =>
      user.name.includes(name_search)
    );
  }

  if (age_gt) {
    filteredUsers = filteredUsers.filter((user) => user.age > parseInt(age_gt));
  }

  if (id_sort) {
    filteredUsers = filteredUsers.sort((a, b) => a.id - b.id);
  }

  res.json(filteredUsers);
});

// API để lấy tổng số tuổi của users
app.get("/totalAge", (req, res) => {
  const totalAge = users.reduce((acc, user) => acc + user.age, 0);
  res.json({ totalAge });
});

// API để lấy số lượng users
app.get("/userCount", (req, res) => {
  res.json({ userCount: users.length });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
