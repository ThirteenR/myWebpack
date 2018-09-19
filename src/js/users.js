import BaseResouse from "./BaseResouse";

class Users extends BaseResouse{
    constructor(options){
        super(options);
    }
    getLanded(opt){
        let that = this;
        $.ajax({
            url:this.url+"/landed",
            type:this.GET,
            success:function (data) {
                that.checkLogin(data);
               opt && opt.success && opt.success(data);
            }
        });
    }
    getCurrent(opt){
        let that = this;
        $.ajax({
            url:this.url+"/current",
            type:this.GET,
            success:function (data) {
                that.checkLogin(data);
                opt && opt.success && opt.success(data);
            }
        });
    }
}
export default Users;