

/*! userinfo 1.1.1 [17-06-2015] */ ! function(a, b) {
    "function" == typeof define && define.amd ? define(b) : a.UserInfo = b()
}(this, function() {
    var a = "//api.userinfo.io/userinfos",
        b = function() {
            for (var a = 3, b = document.createElement("div"), c = b.all || []; b.innerHTML = "<!--[if gt IE " + ++a + "]><br><![endif]-->", c[0];);
            return a > 4 ? a : !a
        }();
    return {
        getInfo: function(c, d) {
            var e = 8 === b || 9 === b;
            if (e && window.XDomainRequest) {
                var f = new XDomainRequest;
                f.onerror = function() {
                    d && d({
                        message: "Error with HTTP status code: " + f.status
                    })
                }, f.onload = function() {
                    c && c(JSON.parse(f.responseText))
                }, f.open("GET", a, !0), f.send()
            } else {
                var g;
                g = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), g.onreadystatechange = function() {
                    if (4 == g.readyState)
                        if (200 == g.status) c && c(JSON.parse(g.responseText));
                        else {
                            var a;
                            a = null !== g.responseText && "" !== g.responseText ? JSON.parse(g.responseText) : {
                                message: "Error with HTTP status code: " + g.status
                            }, d && d(a)
                        }
                }, g.open("GET", a, !0), g.setRequestHeader("X-Userinfo-Client-Id", "userinfo-js:1.1.1"), g.send()
            }
        }
    }
});



UserInfo.getInfo(function(data) {
    
    console.log(data.ip_address)
    // the "data" object contains the info
  }, function(err) {
    // the "err" object contains useful information in case of an error
  });




