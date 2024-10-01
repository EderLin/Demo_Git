var aaa = function() {
	var template = '<div>123</div>';
	return jQuery.tmpl(template, {
		data: data
	});
}

var data = {
	id: 'bbb',
	name: 'lbamount'
};

aaa(data);