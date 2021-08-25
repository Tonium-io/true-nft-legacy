export default {"abi":{"ABI version":2,"header":["time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"addrOwner","type":"address"},{"name":"codeIndex","type":"cell"},{"name":"metadata","type":"bytes"}],"outputs":[]},{"name":"transferOwnership","inputs":[{"name":"addrTo","type":"address"}],"outputs":[]},{"name":"getInfo","inputs":[],"outputs":[{"name":"addrRoot","type":"address"},{"name":"addrOwner","type":"address"},{"name":"addrData","type":"address"},{"name":"metadata","type":"bytes"}]},{"name":"getOwner","inputs":[],"outputs":[{"name":"addrOwner","type":"address"}]},{"name":"resolveCodeHashIndex","inputs":[{"name":"addrRoot","type":"address"},{"name":"addrOwner","type":"address"}],"outputs":[{"name":"codeHashIndex","type":"uint256"}]},{"name":"resolveIndex","inputs":[{"name":"addrRoot","type":"address"},{"name":"addrData","type":"address"},{"name":"addrOwner","type":"address"}],"outputs":[{"name":"addrIndex","type":"address"}]}],"data":[{"key":1,"name":"_id","type":"uint256"}],"events":[]},"image":"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"}