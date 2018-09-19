import cookieManager from './cookie-manager';
class BaseResouse{
    constructor(options){
        $.ajaxSetup({
            headers:{
                "x-token":cookieManager.get('x-token')
            }
        })
        this.url = options.url;
        this.GET = "GET";
        this.POST = "POST";
        this.PUT =  "PUT";
        this.DELETE = "DELETE";
    }
    get(opt){
        let that = this;
        $.ajax({
            url:this.url,
            type:this.GET,
            data: opt.arg,
            success:function (data) {
                that.checkLogin(data);
                opt.success(data);
            }
        })
    }
    post(opt){
        let that = this;
        $.ajax({
            url:this.url,
            type:this.POST,
            data: opt.arg,
            success:function (data) {
                that.checkLogin(data);
                opt.success(data);
            }
        })
    }
    put(opt){
        let that = this;
        $.ajax({
            url:this.url,
            type:this.PUT,
            data: opt.arg,
            success:function (data) {
                that.checkLogin(data);
                opt.success(data);
            }
        })
    }
    delete(opt){
        let that = this;
        $.ajax({
            url:this.url,
            type:this.POST,
            data: opt.arg,
            success:function (data) {
                that.checkLogin(data);
                opt.success(data);
            }
        })
    }
    checkLogin(data){
        if (data.status === 102){
            location.replace("http://localhost:8081");
        }
        console.log(data);
    }
}

export default BaseResouse;