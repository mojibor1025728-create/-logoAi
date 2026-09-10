const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Logo AI</title>
<style>
body{
  margin:0;
  padding:20px;
  background:#0b1020;
  color:white;
  font-family:Arial;
  text-align:center;
}
.box{
  max-width:500px;
  margin:50px auto;
  background:#151d33;
  padding:30px 20px;
  border-radius:20px;
}
h1{font-size:32px}
input,button{
  width:100%;
  box-sizing:border-box;
  padding:16px;
  margin-top:15px;
  border-radius:12px;
  font-size:18px;
}
input{
  background:#0b1020;
  color:white;
  border:1px solid #555;
}
button{
  border:0;
  background:#287df5;
  color:white;
  font-weight:bold;
}
#app{display:none}
.signal{
  margin:25px 0;
  padding:25px;
  background:#0b1020;
  border-radius:15px;
}
.big{
  font-size:45px;
  font-weight:bold;
  margin:15px;
}
.note{
  color:#aaa;
  font-size:14px;
  line-height:1.5;
  margin-top:20px;
}
</style>
</head>

<body>

<div class="box" id="login">
<h1> Logo AI</h1>
<p>Login করুন</p>

<input id="user" placeholder="Username">
<input id="pass" type="password" placeholder="Password">

<button onclick="login()">LOGIN</button>

<p id="error"></p>

<div class="note">
Demo Username: <b>demo</b><br>
Demo Password: <b>2468</b>
</div>
</div>

<div class="box" id="app">
<h1>🤖 Logo AI</h1>

<div class="signal">
<div>AI SIGNAL</div>
<div class="big" id="signal">WAIT</div>
<div id="time">Ready</div>
</div>

<button onclick="signal()">নতুন AI সিগন্যাল</button>
<button onclick="logout()">LOGOUT</button>

<div class="note">
এটি Demo/শিক্ষামূলক Scanner।
<br>
CALL/PUT/WAIT বাস্তব বাজারের পরবর্তী ক্যান্ডেল নিশ্চিতভাবে পূর্বানুমান করে না।
</div>
</div>

<script>
function login(){
  const u=document.getElementById("user").value;
  const p=document.getElementById("pass").value;

  if(u==="demo" && p==="2468"){
    document.getElementById("login").style.display="none";
    document.getElementById("app").style.display="block";
    signal();
  }else{
    document.getElementById("error").innerText="❌ Username অথবা Password ভুল";
  }
}

function logout(){
  document.getElementById("app").style.display="none";
  document.getElementById("login").style.display="block";
}

function signal(){
  const a=["CALL","PUT","WAIT"];
  const x=a[Math.floor(Math.random()*a.length)];

  document.getElementById("signal").innerText=x;
  document.getElementById("time").innerText=
    "Updated: "+new Date().toLocaleTimeString();
}
</script>

</body>
</html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Logo AI server started on port " + PORT);
});
