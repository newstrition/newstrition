var handlers = {
  channelId: function(data) {
    $('input[name=channelId]').val(data);
  },
  addNotification: function(data) {
    var id = "notification-" + data.id;
    $('.notifications').prepend($("<li id=\"" + id + "\">" + data.message + "</li>"));
  },
  delNotification: function(data) {
    var id = "#notification-" + data.id;
    $('.notifications').remove(id);
  }
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("got: " + request);
  handlers[request.type](request.data);
});

$('.alert').hide();

$('.register-form').submit(function(e) {
  console.log("in submit");
  e.preventDefault();
  if (!$('#username').val() || !$('#password').val() || !$('#channelId').val()) {
        $('.alert .message').text("Please enter all fields");
        $('.alert')
          .removeClass('alert-success alert-warning alert-danger')
          .addClass('alert-warning')
          .show();

  } else {
    $.post(BLAZE_HOST + "/api/chrome/register", $(this).serialize())
      .then(function(res) {
        console.log(arguments);
        $('.alert .message').text("Registered successfully");
        $('.alert')
          .removeClass('alert-success alert-warning alert-danger')
          .addClass('alert-success')
          .show();
      })
      .fail(function(res) {
        console.log(arguments);
        $('.alert .message').text("Login failed");
        $('.alert')
          .removeClass('alert-success alert-warning alert-danger')
          .addClass('alert-danger')
          .show();
      });
  }
});
