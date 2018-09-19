class CookieManager{
    constructor(hour){
         this.hour = hour
    }
    set(name,value){
        let exp = new Date();
        exp.setTime(exp.getTime() + this.hour*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    }
    get(name){
        let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
    delete(name){
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval=this.get(name);
        if(cval!=null)
            document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }
}
export default new CookieManager(0.5);