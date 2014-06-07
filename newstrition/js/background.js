var id = 0;

function notify(message) {
  chrome.notifications.create("" + id++, {
    "type": "basic",
    "title": "Notification",
    "message": message,
    "iconUrl": "img/128.png"
  }, function() {});
}

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('app.html', function(win) {
    win.contentWindow.addEventListener('load', function(e) {
      chrome.pushMessaging.getChannelId(true, function(res) {
        chrome.storage.sync.set({'channelId': res.channelId}, function() {
          chrome.runtime.sendMessage({type: 'channelId', data: res.channelId}, function() {
            console.log('sent: ' + res.channelId);
          });
        });
      });
    });
  });
});

chrome.pushMessaging.onMessage.addListener(function(msg) {
  notify(msg.payload);
});
