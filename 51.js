// =========== Streams =============
// A stream is really just a sequence of data that's broken up into chunks
//BIG WORD ALERT

// chunk: A piece of data veing send through a stream.

// NOTE: Readable or writeable from Nodes Perspective!

var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/impsum.txt');

var writeable = fs.createWriteStream(__dirname + '/impsumcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/impsum.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(writeable);

readable.pipe(gzip).pipe(compressed);

