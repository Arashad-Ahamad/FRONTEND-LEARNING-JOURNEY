let user1:[string, number, boolean]=['Arashad', 10, true]
console.log(user1);

let user2:[number, string, boolean, string] = [9, 'Delhi', false, 'Ghazipur']
user2.push(3)
console.log(user2);

let user3: readonly [number, string, boolean, string] = [9, 'Delhi', false, 'Ghazipur']
// user3.push(3)
console.log(user3);