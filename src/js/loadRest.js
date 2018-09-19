class LoadRest{
    constructor(opt){
        this.options = opt;
    }
    load(data){
        if (data){
            this.options.data = data;
        }
        $.ajax(this.options);
    }
}
export default LoadRest;