const signalR = require("@aspnet/signalr");

// 	"UserName":"dophutinh", "Password":"12345678", tai khoan nay login co userId=4490, tài khoản login clien

// 	"UserName":"phuctanloi", "Password":"12345678", tai khoan nay id là 3349, dùng tài khoản này đăng nhấp trên web để chat hai máy với nhau

// Link website https://staging.tradeline.vn

let connection = new signalR.HubConnectionBuilder()
    .withUrl("https://trackingt.tradeline.vn/chatHub?userId=3349")
    .build();

connection.on("ReceiveMessage", (...arr) => {
    console.log(arr);
});

connection.start()
    .then((res, error) => {
        console.log('ok', res, error);
        connection.send('GetConnectionId');
        for(let i = 0;i < 10; i++) {
            connection.send('SendMessageFromApp', '3383', '3349', 'ngo hai hue');
        }
    });




