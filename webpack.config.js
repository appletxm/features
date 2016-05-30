var path = require('path');

module.exports = {
	entry: {
		main: './src/app/main.js'
		//excel: './src/app/excel/excel.js'
	},
	output: {
		path: path.join(__dirname, './dist/'),
		filename: '[name].js',
		publicPath: './dist/'
	},
	module: {
		loaders: [
			{test: /\.less/, loader: 'style!css!autoprefixer!less?modules'},
			{test: /\.(html|tpl)$/, loader: 'html-loader'},
			{test: /\.js$/, loader: 'babel', exclude: /node_modules/}
		]
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
		extensions: ['', '.js', '.less', '.html']
	},
	devtool: '#source-map'
};
