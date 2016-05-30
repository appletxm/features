import { sheetName, data } from './excel-data';
import { excelTemplate as template } from './excel-template';
import { ExcelUtil as Util } from './excel-util';

let excelOperation = {
	util: new Util(template, data, sheetName),
	outPut(){
		this.util.outPutExcel();
	}
};

export { excelOperation };

