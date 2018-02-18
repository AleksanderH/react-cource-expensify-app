const book = {
    titlee: 'Ego is empty',
    author: 'me',
    publisher: {
        name: 'Pinguin'
    }
}

const { name: publisherName = 'Anonymous'} = book.publisher;

console.log(publisherName);
