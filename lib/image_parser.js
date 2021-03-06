this.imageParser = {};
(function(exports) {
	exports.getFreqsForX = function(xVal, maxY, getImageData) {
		var ret = [];
		for (var i = 0; i < maxY; i++) {
			ret.push(getImageData(xVal, i, 1, 1).val);
		}
		return ret;
	};

	exports.getFreqs = function(maxX, maxY, getImageData) {
		var ret = [];
		for (var i = 0; i < maxX; i++) {
			ret.push(exports.getFreqsForX(i, maxY, getImageData));
		}
		return ret;
	};
}(this.imageParser));