let text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae beatae fugiat voluptatem, expedita hic, aut porro minus possimus quidem corrupti mollitia quos quaerat, perferendis ea aperiam blanditiis ipsam laudantium et.`;
function capitalize(string) {
  text = string.split(" ");

  let result = text.map(function (item) {
    return item[0].toUpperCase() + item.slice(1);
  });
  return result.join(" ");
}
let endResult = capitalize(text);
console.log(endResult);

module.exports = capitalize;
