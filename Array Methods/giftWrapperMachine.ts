function wrapping(gifts: string[]) {
	let wrappedGifts: string[] = []

	gifts.forEach((gift) => {
		let layers = generateLayers(1)
		let wrappingGift = layers + gift + layers

		wrappingGift = insertNewLine(wrappingGift)
		layers = generateLayers(gift.length + 2)

		const wrappedGift = layers + wrappingGift + layers
		wrappedGifts.push(wrappedGift)
	})

	return wrappedGifts
}

function generateLayers(length: number) {
	return Array.from(new Array(length), () => "*").join("")
}

function insertNewLine(gift: string) {
	const newLine = "\n"

	return newLine + gift + newLine
}

/*************/

const gifts = ["cat", "game", "socks"]
const wrapped = wrapping(gifts)

console.log(wrapped)
