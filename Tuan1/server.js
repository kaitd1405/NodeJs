const express = require('express');
const { redirect } = require('express/lib/response');
const server = express()
const port = 3000

server.use(express.json());

const data = [
  {
    id: '3',
    username: 'Hung',
    password: '12345',
    age : 18,
  },
  {
    id: '1',
    username: 'kaitd',
    password: '1235',
    age : 20,
  }
]

server.get("/infor",(req,res) => {
  res.json(data);
});

server.post("/infor",(req,res) => {
  data.push(req.body);
  redirect.send("Success");
});

server.put("/infor/:id", (req,res)=>{
  let user = req.body;
  let { id } = req.params;
  let index = data.findIndex((user) => id == user.id);

  if (index === -1 ) return res.send("No infor");
  
  data[index].username = user.username;
  data[index].password = user.password;
  data[index].age = user.age;

  res.send("success");
});

server.delete("/users/:id", (req,res) => {
  let { id } = req.params;
  let index = data.findIndex((user) => id == user.id);
  if (index === -1 ) return res.send("No infor");
  data.splice(index,1);
  res.send("Xoa thanh cong");
})

