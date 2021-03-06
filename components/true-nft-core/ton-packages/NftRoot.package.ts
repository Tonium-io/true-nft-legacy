export default {"abi":{"ABI version":2,"header":["time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"codeIndex","type":"cell"},{"name":"codeData","type":"cell"}],"outputs":[]},{"name":"mintNft","inputs":[{"name":"metadata","type":"bytes"}],"outputs":[]},{"name":"deployBasis","inputs":[{"name":"codeIndexBasis","type":"cell"}],"outputs":[]},{"name":"destructBasis","inputs":[],"outputs":[]},{"name":"resolveCodeHashIndex","inputs":[{"name":"addrRoot","type":"address"},{"name":"addrOwner","type":"address"}],"outputs":[{"name":"codeHashIndex","type":"uint256"}]},{"name":"resolveIndex","inputs":[{"name":"addrRoot","type":"address"},{"name":"addrData","type":"address"},{"name":"addrOwner","type":"address"}],"outputs":[{"name":"addrIndex","type":"address"}]},{"name":"resolveCodeHashData","inputs":[],"outputs":[{"name":"codeHashData","type":"uint256"}]},{"name":"resolveData","inputs":[{"name":"addrRoot","type":"address"},{"name":"id","type":"uint256"}],"outputs":[{"name":"addrData","type":"address"}]},{"name":"_totalMinted","inputs":[],"outputs":[{"name":"_totalMinted","type":"uint256"}]}],"data":[{"key":1,"name":"randomKey","type":"uint256"}],"events":[]},"image":"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"}