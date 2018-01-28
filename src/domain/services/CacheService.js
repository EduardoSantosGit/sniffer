import cache from 'memory-cache';

export default class CacheService {
  
  static write(key, value) {
    cache.put(key, value, 100);
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