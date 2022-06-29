// JSON
// tài khoản 1
username = "705102020";
email = "buiducthang652@gmail.com";
password = "123";
var user = {
  username: username,
  email: email,
  password: password,
};
var json = JSON.stringify(user);
localStorage.setItem(username, json);

// Login
function login(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if (!user) {
    alert("Nhập tên đăng nhập hoặc mật khẩu!!");
  } else if (username == data.username && password == data.password) {
    window.location.href = "trangchu.html";
  } else {
    alert("Đăng nhập thất bại!!");
  }
}

// Ngày hiện tại
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

var date = new Date();
var current_day = date.getDay();
var day_name = '';
switch (current_day) {
case 0:
    day_name = "Chủ nhật";
    break;
case 1:
    day_name = "Thứ hai";
    break;
case 2:
    day_name = "Thứ ba";
    break;
case 3:
    day_name = "Thứ tư";
    break;
case 4:
    day_name = "Thứ năm";
    break;
case 5:
    day_name = "Thứ sau";
    break;
case 6:
    day_name = "Thứ bảy";
}

document.getElementById("today").innerHTML = dateTime;
document.getElementById("rank").innerHTML = day_name;
