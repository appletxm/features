class ExcelUtil{
	constructor(template, data, sheetName){
		this.data = data;
		this.template = template;
		this.sheetName = sheetName;
	};

	generatorHtml(){
		var girdHtml = [];

		girdHtml.push('<table>');
		girdHtml.push('<caption>this is my excel output test just for webkit </caption>');
		girdHtml.push('<thead>');
		for(let key in this.data[0]){
			girdHtml.push('<th>' + key + '</th>');
		}
		girdHtml.push('</thead>');

		girdHtml.push('<tbody>');
		this.data.forEach((item) => {
			girdHtml.push('<tr>');
			girdHtml.push('<td>' + item['name'] + '</td>');
			girdHtml.push('<td>' + item['age'] + '</td>');
			girdHtml.push('<td>' + item['location'] + '</td>');
			girdHtml.push('</tr>');
		});
		girdHtml.push('</tbody>');
		girdHtml.push('</table>');

		return girdHtml.join('');
	};

	getOutPutHtml(template){
		var uri = 'data:application/vnd.ms-excel;base64,';

		template = window.btoa(unescape(encodeURIComponent(template)));
		window.location.href = uri + template;
	};

	generateExcelFile(gridHtml){
		var template = this.template;
		template = template.replace('{{worksheet}}', this.sheetName);
		template = template.replace('{{table}}', gridHtml);

		return template;
	};

	outPutExcel(){
		var gridHtml = this.generatorHtml();
		var template = this.generateExcelFile(gridHtml);
		this.getOutPutHtml(template);
	};
};

export{ ExcelUtil };
