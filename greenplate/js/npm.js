var list = [34, 1, 529, -78, 89.7, 1243, 9999, 123123, 13, -999];
var res = 0;

for (var i = list.length - 1; i >= 0; i--) {
	if (res < list[i]) {
	res = list[i]
}
}



alert(res);



