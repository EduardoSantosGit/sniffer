import cache from 'memory-cache';

export default class CacheService {
  
  static write(key, value, timeout = 90 * 60, timeoutCallback) {
   
    cache.put(key, value, timeout * 1000, timeoutCallback);
  }

  static read(key) {
    const ret = cache.get(key);
    if (ret === null) {
    } 
    return ret;
  }

  static delete(key) {
    return cache.del(key);
  }

  static info() {
    return {
      size: cache.size(),
      memorySize: cache.memsize(),
    };
  }
}