class PdfUtil{
	constructor(data){
		this.data = data;
	};

	generatorHtml(){
		var girdHtml = [];

		girdHtml.push('<table>');
		girdHtml.push('<caption>this is my pdf output test just for webkit </caption>');
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
		/*var uri = 'data:application/pdf;base64,';

		template = window.btoa(unescape(encodeURIComponent(template)));
		window.location.href = uri + template;*/

		/*var template = window.btoa(unescape(encodeURIComponent('hellow world ! just test the pdf out put fature.')));
		var uri = 'data:application/pdf;base64,';

		//window.location.href = uri + template;
		window.open(uri + template);*/

		var div = document.createElement('div');
		var body = document.querySelector('body');

		div.innerHTML = template;
		body.appendChild(div);

		var printRes = document.execCommand('print', false);
	};

	outPutPdf(){
		var gridHtml = this.generatorHtml();
		this.getOutPutHtml(gridHtml);
	};
};

export{ PdfUtil };
