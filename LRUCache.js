class LRUCache {
    constructor(size) {
        this.size = size || 3;
        this.cache = new Map();
    }
        
    put(key, val) {
        const hasKey = this.cache.has(key);
        if (hasKey) {
            this.cache.delete(key);
        }
        this.cache.set(key, val);
        if (this.cache.size > this.size) {
            this.cache.delete(this.cache.keys().next().value);
        }

        return true;
    }

    get(key) {
        const hasKey = this.cache.has(key)
        if (hasKey) {
            const val = this.cache.has(key);
            this.cache.delete(key);
            this.cache.set(key, val);
            return val;
        }

        return -1;
    }

    items() {
        return this.cache.entries();
    }
}