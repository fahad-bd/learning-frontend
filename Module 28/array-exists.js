function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'Give array as input';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}

const friends = ['fahad', 'fahim', 'rakib', 'rana', 'rakibul', 'ramgan'];
const myBigFriend = megaFriend(friends);
console.log(myBigFriend);