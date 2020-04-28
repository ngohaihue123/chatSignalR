const request = require('request');
const fcmServer = {
    host: 'https://fcm.googleapis.com/fcm/send',
    authKey: 'key=AAAA6oJEqtk:APA91bEPkgUKPAe9RGPih9IXVggIdgOtJpXMs9SMwNffCoOEwg9lXunYCDmRZob-fFoYQ_JYw6RfDfhQtA-4cYbO-JMCit85xfxmOrLh707a4S5Gi5UddAkhQ-_RMhutoCL67oPuzANe'
};
let deviceTokens = ['ft4upBC2ilM:APA91bG6AjHf4QZjCn-G4UhQbAl7LGibRyAKIif5nH7LIPG833WTfOwglSBkUq7ujBFpBrOPmw8DlueUaJ6Q-ayI6quVlAY5qxJMRTymppVzKuD6_zRByZvMUfcW9VRaeMPex9xZW1ly'];


function BuildFCMNotificationItem(deviceTokens, itemType, item, message) {
    return {
        registration_ids: deviceTokens,
        collapse_key: "type_a",
        notification: {
            "title": "Title",
            "body": message,
            "icon": "icon",
            "sound": "default",
        },
        data: {
            "itemType": itemType,
            "item": item
        }
    }
}

function pushNotification ( deviceTokens, itemType, item, message)  {
    let formData = JSON.stringify(BuildFCMNotificationItem(deviceTokens, itemType, item, message));
    request.post({
        url: fcmServer.host, 
        headers: {
        'Authorization': fcmServer.authKey,
        'Content-Type': 'application/json'},
                body: formData
            }, function (err, res, data) {
            });
}
pushNotification(deviceTokens, 'NEW', 'data', 'Thong bao')