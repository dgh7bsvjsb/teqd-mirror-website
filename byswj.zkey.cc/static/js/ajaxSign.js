//SHA1 加密
(function () {
    function encodeUTF8(s) {
        var i, r = [],
            c, x;
        for (i = 0; i < s.length; i++)
            if ((c = s.charCodeAt(i)) < 0x80) r.push(c);
            else if (c < 0x800) r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F));
        else {
            if ((x = c ^ 0xD800) >> 10 == 0) //对四字节UTF-16转换为Unicode
                c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000,
                r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F));
            else r.push(0xE0 + (c >> 12 & 0xF));
            r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
        };
        return r;
    };


    // 字符串加密成 hex 字符串
    function sha1(s) {
        var data = new Uint8Array(encodeUTF8(s))
        var i, j, t;
        var l = ((data.length + 8) >>> 6 << 4) + 16,
            s = new Uint8Array(l << 2);
        s.set(new Uint8Array(data.buffer)), s = new Uint32Array(s.buffer);
        for (t = new DataView(s.buffer), i = 0; i < l; i++) s[i] = t.getUint32(i << 2);
        s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8);
        s[l - 1] = data.length << 3;
        var w = [],
            f = [
                function () {
                    return m[1] & m[2] | ~m[1] & m[3];
                },
                function () {
                    return m[1] ^ m[2] ^ m[3];
                },
                function () {
                    return m[1] & m[2] | m[1] & m[3] | m[2] & m[3];
                },
                function () {
                    return m[1] ^ m[2] ^ m[3];
                }
            ],
            rol = function (n, c) {
                return n << c | n >>> (32 - c);
            },
            k = [1518500249, 1859775393, -1894007588, -899497514],
            m = [1732584193, -271733879, null, null, -1009589776];
        m[2] = ~m[0], m[3] = ~m[1];
        for (i = 0; i < s.length; i += 16) {
            var o = m.slice(0);
            for (j = 0; j < 80; j++)
                w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1),
                t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0,
                m[1] = rol(m[1], 30), m.pop(), m.unshift(t);
            for (j = 0; j < 5; j++) m[j] = m[j] + o[j] | 0;
        };
        t = new DataView(new Uint32Array(m).buffer);
        for (var i = 0; i < 5; i++) m[i] = t.getUint32(i << 2);

        var hex = Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function (e) {
            return (e < 16 ? "0" : "") + e.toString(16);
        }).join("");

        return hex;
    };


    jQuery(function ($) {
        var _ajax = $.ajax;
        $.ajax = function (opt) {
            var _error = opt && opt.error || function (a, b, c) {};
            var _success = opt && opt.success || function (a, b, c) {};
            var _headers = opt && opt.headers || {};


            var signObj = signUtil(opt.method == 'get' ? getQuery(opt.url) : opt.data);
            if (signObj) {
                for (var key in signObj) {
                    _headers[key] = signObj[key];
                }
            }

            if (opt) {
                opt.headers = _headers;
            }
            var _opt = $.extend(opt, {
                success: function (data) {
                    _success(data);
                },
                error: function (xhr, status, error) {
                    _error(xhr, status, error);
                }
            });
            return _ajax(_opt);
        };
    });

    function getQuery(url) {
        if (!url || url.indexOf("?") == '-1') {
            return;
        }
        var search = url.slice(url.indexOf('?') + 1).split("&");
        var query = {};
        for(var i = 0; i < search.length; i++){
            var item = search[i];
            var temp = item.split('=');
            if (temp.length == 2) {
                query[temp[0] || ''] = temp[1];
            } else {
                query[''] = temp[0];
            }
        }
        return query;
    }


    function signUtil(data) {
        var timestamp = new Date().valueOf();
        var nonceStr = dateAndRandomString(10);
        var signStr = getSignStr(data);
        if (signStr) {
            signStr = signStr + '&' + 'timestamp=' + timestamp + '&nonceStr=' + nonceStr;
        } else {
            signStr = 'timestamp=' + timestamp + '&nonceStr=' + nonceStr;
        }
        signStr = sha1(signStr);
        return {
            timestamp: timestamp,
            nonceStr: nonceStr,
            signature: signStr
        };

    }

    function getSignStr(data) {
        var args;
        if (data) {
            try {
                if (typeof data == 'object') {
                    data = JSON.stringify(data);
                }
                if (typeof data == 'string') {
                    if (data.indexOf('{') == 0) {
                        args = JSON.parse(data);
                    } else if (data.indexOf('[') == 0) {
                        args = {
                            "": JSON.parse(data)
                        };
                    } else {
                        args = {
                            "": data
                        };
                    }
                }
            } catch (err) {
                args = {
                    "": data
                };
            }
        }
        var attr = [];
        if (args) {
            var keys = Object.keys(args);
            keys.sort();
            if (keys.length > 1) {
                //按字符排序后将第一个变量放入最后一个
                var firstKey = keys.shift();
                keys.push(firstKey);
            }
            for (var i = 0; i < keys.length; i++) {
                var val = args[keys[i]];
                if (typeof val == 'object') { //如果是object类型，需要转json字符串处理，否则可能和后端不一致导致验签失败
                    if (keys[i]) {
                        val = getSignStr(val);
                        if (val.indexOf('=') == 0) {
                            val = val.replace('=', '');
                        }
                    } else {
                        val = JSON.stringify(val);
                    }
                }
                attr.push(keys[i] + '=' + val)
            }
        }
        var signStr = '';
        if (attr.length > 0) {
            signStr = attr.join('&');
        }
        return signStr;
    }

    function randomString(len) {
        len = len || 5;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }

    function randomNumBoth(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range); //四舍五入
        return num;
    }

    // 带时间戳随机字符串
    function dateAndRandomString(len) {
        return new Date().valueOf() + randomString(len);
    }
})()