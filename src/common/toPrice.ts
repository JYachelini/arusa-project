export const toPrice = (n: number) => {
	return n.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
}
