var x = 133;
console.log(x);

x = "ehsan";
console.log(x);

y = parseInt(x);
console.log(y++);

const obj = {
  name: "ehsan",
  age: 27,
  friends: ["amin", "mahdi", "hossien"],
};

console.log(obj["birthday"]);

const friends = obj["freinds"];

const listItems = friends.map((friend) => `mr.${friend}`);

console.log("listItems", listItems);
