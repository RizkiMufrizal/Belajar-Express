const NodeCache = require("node-cache");
const cache = new NodeCache();

module.exports = {
    cache: cache,
    isExis: (parameter) => {
        const cacheValue = cache.get(parameter);
        if (typeof cacheValue === "undefined" || cacheValue === undefined) {
            return false;
        }
        return true;
    }
};
