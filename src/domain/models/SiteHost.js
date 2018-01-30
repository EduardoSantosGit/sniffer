import Site from './Site'

export default class SiteHost extends Site {

    constructor(json = null)
    {
        if (json == null || json === undefined)
            return;
  
        super({name: json.name, family: json.family, ip : json.ip})

        this.hosts = json.hosts
    }

    get hosts(){
        return this._hosts
    }

    set hosts(value){
        this._hosts = value
    }

    toJSON(){
        return {
            hosts : this.hosts
        }
    }

}