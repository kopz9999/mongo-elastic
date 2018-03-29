function transform(doc) {
	var usbDevices = doc["data"]["usb_devices"] || [];
	usbDevices.forEach(function(el) {
		var hardwareId = el['hawrdware_id'];
		if(hardwareId.constructor === String)
		{
			el['hawrdware_id'] = {
				value: [hardwareId],
				Count: 1
			};
		}		
	});

    return doc;
}
