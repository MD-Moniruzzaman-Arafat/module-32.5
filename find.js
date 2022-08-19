const friends = [
    { name: 'arafat', price: 1000 },
    { name: 'arif', price: 5000 },
    { name: 'korim', price: 3000 },
    { name: 'rofiq', price: 5000 }
]
const result = friends.find(friend => friend.price == 5000);
console.log(result)