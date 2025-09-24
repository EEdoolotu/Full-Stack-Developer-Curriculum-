let count = 0;

function cc(card) {
  if (card >= 2 || card <=6) {
    count++ ;
  } else if ( card >= 7 || card <=9) {
    return count;
  }else if (card == 10, "J", "Q", "K", "A") {
    count--;
  }else if (count > 0) {
    return count + " Bet";
  } else if (count <= 0) {
    return count + " Hold";

}

console.log(cc(9))
