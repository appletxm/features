import { data } from './pdf-data';
import { PdfUtil as Util } from './pdf-util';

let pdfOperation = {
	util: new Util(data),
	outPut(){
		this.util.outPutPdf();
	}
};

export { pdfOperation };

