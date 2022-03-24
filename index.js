function testJS() {
	for (var i = 0; i < sampleSize; i += 4) {
		var x0 = -2.5 + (3.5 * testData.data[i]);
		var y0 = testData.data[i + 1], x = 0, y = 0, xt = 0, c = 0;

		for (var n = 0; n < sampleIterations; n++) {
			if (x * x + y * y >= 2 * 2) break;

			xt = x * x - y * y + x0;
			y = 2 * x * y + y0;
			x = xt;
			c++;
		}

		var col = c / sampleIterations;

		testData.data[i + 2] = col;
	}
}
