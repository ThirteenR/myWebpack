import $ from 'jquery'

window.$ = $
window.jQuery = $
require('../css/login.css');
import Load from './loadRest';
import cookieManager from './cookie-manager';

let ajax = new Load({
    url: "http://localhost:8080/login",
    type: "POST",
    async: false,
    success: function (data) {
        statusList[data.status] && statusList[data.status](data);
    }
});
$("button").click(function () {
    let data = $("form").serialize();
    let token = cookieManager.get("x-token");
    console.log(token)
    $.ajaxSetup({
        headers:{
            "x-token":token
        }
    });
    ajax.load(data);
});
let statusList = {
    101: function (data) {
        alert(data.message)
    },
    102: function (data) {
        alert(data.message)
    },
    201: function (data) {
        alert(data.message)
    },
    202: function (data) {
        alert(data.message)
    },
    200:function (data) {
        cookieManager.set("x-token", data.data);
        location.replace("http://localhost:8081/main.html");
    }
}