var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]

library.sort((a,b) => {
    if(b.libraryID < a.libraryID) return -1;
    if(b.libraryID > a.libraryID) return 1;
    return 0;
});

console.log(library);