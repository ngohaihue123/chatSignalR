const signalR = require("@aspnet/signalr");

// 	"UserName":"dophutinh", "Password":"12345678", tai khoan nay login co userId=4490, tài khoản login clien

// 	"UserName":"phuctanloi", "Password":"12345678", tai khoan nay id là 3349, dùng tài khoản này đăng nhấp trên web để chat hai máy với nhau

// Link website https://staging.tradeline.vn

let connection = new signalR.HubConnectionBuilder()
    .withUrl("https://stagingchathub.tradeline.vn/chatHub?userId=4490")
    .build();

connection.on("ReceiveMessage", (...arr) => {
    console.log(arr);
});

connection.start()
    .then((res, error) => {
        console.log('ok', res, error);
        connection.send('GetConnectionId');
        connection.send('SendMessageFromApp', '3349', '4490', 'ngo hai hue');
    });