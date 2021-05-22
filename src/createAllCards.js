export default function (data, cards, setCards) {
  for(let s = 0; s < data.suits.length; s++) {
    for(let v = 0; v < data.value.length; v++) {
      let card = {
        value: data.value[v],
        suit: data.suits[s]
      }
      setCards([...cards, card]);
    }
  }
}