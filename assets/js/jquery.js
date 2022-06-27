// JSON
// tài khoản 1
username = '705102020';
email = 'buiducthang652@gmail.com';
password = '123';
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

// thay đổi tên đăng nhập
