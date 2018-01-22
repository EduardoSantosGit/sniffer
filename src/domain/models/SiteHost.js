import Site from './Site'

export default class SiteHost extends Site{

    constructor(json = null)
    {
        if (json == null || json == undefined)
            return;
  
        super({name: json.name, family: json.family, ip : json.ip})

        this.hostName = json.hostName
    }

    get hostName(){
        return this._hostName
    }

    set hostName(value){
        this._hostName = value
    }

}