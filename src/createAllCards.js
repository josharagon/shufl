export default function (data) {
  let cardArr = [];
  let id = 1;
  for(let s = 0; s < data.suits.length; s++) {
    for(let v = 0; v < data.value.length; v++) {
      let card = {
        id: id,
        value: data.value[v],
        suit: data.suits[s],
        color: data.colors[data.suits[s]]
      }
      cardArr.push(card);
      id++;
    }
  }
  return cardArr
}