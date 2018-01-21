import NodeCache from "node-cache"

export default class CacheService {
    
    static cache = new NodeCache( { stdTTL: 100, checkperiod: 120 } );
    
    static write(key, value){
        CacheService.cache.set(key, value)
    }

    static read(key){
       return CacheService.cache.get(key)
    }

    static delete(key){
        return CacheService.cache.del(key)
    }

    static info(){
        return CacheService.cache.getStats();
    }

}