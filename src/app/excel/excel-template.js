let excelTemplate = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">\
		<head><!--[if gte mso 9]>\
			<xml>\
			<x:ExcelWorkbook>\
				<x:ExcelWorksheets>\
					<x:ExcelWorksheet>\
						<x:Name>{{worksheet}}</x:Name>\
						<x:WorksheetOptions>\
							<x:DisplayGridlines/>\
						</x:WorksheetOptions>\
					</x:ExcelWorksheet>\
				</x:ExcelWorksheets>\
			</x:ExcelWorkbook>\
			</xml><![endif]-->\
		</head>\
		<body>\
		{{table}}\
		</body>\
</html>';

export{ excelTemplate };