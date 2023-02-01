export const getLen = (arr:any[]) => {
	testTyping(11111)
	return arr ? arr.length : 0
}

function testTyping(a:number) {
	console.log(a)
}