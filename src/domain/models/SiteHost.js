export default class SiteHost extends Site{

    constructor()
    {
        if (json == null || json == undefined)
            return;

        this.name = json.name
        this.family = json.family
        this.ip = json.ip

        super(this.name, this.family, this.ip)
    }

    get hostName(){
        return this._hostName
    }

    set hostName(value){
        this._hostName = value
    }

}