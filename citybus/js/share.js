var iosUrl = "https://apps.apple.com/your-app-id"; //ios download link
var aosUrl = "https://play.google.com/store/apps/details?id=your.package.name"; //aos download link
var huaweiUrl = "https://appgallery.huawei.com/app/your-app-id"; //huawei appgallery download link

// Deep link 协议
var deepLinkScheme = "citybusapp://";

function GetRequest() {
  var url = location.search;
  var theRequest = new Object();
  if (url.indexOf("?") > -1) {
    var str = url.substring(url.indexOf("?") + 1);
    var strArr = null;
    if (str.indexOf("&amp;") > -1) {
      strArr = str.split("&amp;");
      if (strArr[strArr.length - 1].indexOf("&") > -1) {
        strArr[strArr.length - 1] = strArr[strArr.length - 1].split("&");
        strArr[strArr.length - 1] = strArr[strArr.length - 1][0];
      }
    } else {
      strArr = str.split("&");
    }
    for (var i = 0; i < strArr.length; i++) {
      theRequest[strArr[i].split("=")[0]] = decodeURIComponent(
        strArr[i].split("=")[1]
      );
    }
  } else {
    if (window.location.href.indexOf("&") > -1) {
      theRequest.code = window.location.href.split("&")[1];
    }
  }

  return theRequest;
}
var Request = new Object();
Request = GetRequest();
console.log(Request);

var is_weixin = (function () {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
})();

$(document).ready(function () {
  // 自动尝试打开应用（如果 URL 中有参数或默认行为）
  // 检查是否有 deeplink 参数，或者是否有 code 参数需要传递给应用
  var urlParams = new URLSearchParams(window.location.search);
  var shouldAutoOpen = urlParams.get("auto") !== "false"; // 默认自动打开，除非明确设置为 false

  if (shouldAutoOpen) {
    var deeplink = deepLinkScheme;
    if (Request.code) {
      deeplink += "?code=" + Request.code;
    }
    // 尝试打开应用，如果未安装则停留在当前页面
    window.location.href = deeplink;
  }

  // iOS 下载按钮
  $(".ios-url").on("click", function (e) {
    e.preventDefault();
    window.location = iosUrl;
  });

  // Android 下载按钮
  $(".aos-url").on("click", function (e) {
    e.preventDefault();
    window.location = aosUrl;
  });

  // 华为应用市场下载按钮
  $(".huawei-url").on("click", function (e) {
    e.preventDefault();
    window.location = huaweiUrl;
  });

  // 微信内打开提醒
  if (is_weixin) {
    $(".wechat-reminder").removeClass("hide");
    $("body").addClass("no-scroll");
  }

  // 根据设备类型隐藏/显示相应按钮
  if (deviceDetection.device == "iPhone") {
    // iPhone 上可以隐藏 Android 和华为按钮，或显示所有按钮让用户选择
  }
});
