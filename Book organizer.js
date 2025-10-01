const books = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    authorName: 'Patrick Bet-David and Greg Dinkin',
    releaseYear: 2000,
  },
  {
    title: 'Atomic Habits',
    authorName: 'James Clear',
    releaseYear: 1940,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    authorName: 'Patrick Bet-David',
    releaseYear: 2023,
  },
  {
    title: 'The Embedded Entrepreneur',
    authorName: 'Arvid Kahl',
    releaseYear: 2008,
  },
  {
    title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    authorName: 'Jon Gordon',
    releaseYear: 2015,
  },
  {
    title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    authorName: 'Jeff DeGraff and Staney DeGraff',
    releaseYear: 2011,
  }

]
 function sortByYear (book1, book2) {
   if (book1.releaseYear < book2.releaseYear) {
     return -1;
   } else if (book1.releaseYear > book2.releaseYear) {
     return 1;
   } else {
     return 0;

   }
 }
const filteredBooks = books.filter(book => book.releaseYear > 1950);
filteredBooks.sort(sortByYear);
