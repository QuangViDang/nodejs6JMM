const express = require("express");
const app = express();
const port = 3001;

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

app.get("/ids", (req, res) => {
  const ids = req.query.ids;
  console.log(ids)
  if (!ids || !Array.isArray(ids)) {
    return res.json({ error: "Invalid or missing IDs" });
  }

  const validUsers = [];
  for (const id of ids) {
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      validUsers.push(user);
    }
  }

  res.json(validUsers);
});

app.listen(port, () => {
  console.log("ID Check API is running on port", port);
});
