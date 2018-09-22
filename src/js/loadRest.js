class LoadRest{
    constructor(opt){
        this.options = opt;
        this.ajax = null;
    }
    load(data){
        if (data){
            this.options.data = data;
        }
        this.ajax = $.ajax(this.options);
    }
}
export default LoadRest;