import $ from 'jquery'
window.$ = $
window.jQuery = $
require('./jquery.easyui.min');
require('../css/first.css');
require('../css/easyui.css');
require('../css/icon.css');
import Users from './users';

let users = new Users({
    url:"http://localhost/myRest/users"
});
users.getLanded();
users.getCurrent({
    success:function (data) {
        $("#userName").text(data.data.userName);
    }
})
users.get({
    success : function(data){
        console.log($("#datagrid"))
           $("#datagrid").datagrid({
               fit:true,
               data:data.data,
               columns:[[
                   {field:'userId',title:'ID',width:100},
                   {field:'userName',title:'用户名',width:100},
                   {field:'userRand',title:'用户等级',width:100}
               ]
                ]
           })
    }

});

