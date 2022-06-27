// JSON
// tài khoản 1
var user = {
  username: "705102020",
  fullname: "Bùi Đức Thắng",
  password: "123",
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
    alert("vui long nhap username password");
  } else if (user.username == data.username && user.password == data.password) {
    alert("dang nhap thanh cong");
    window.location.href = "trangchu.html";
  } else {
    alert("dang nhap that bai");
  }
}

// thay đổi tên đăng nhập
