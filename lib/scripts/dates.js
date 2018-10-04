function daysBetween(date1, date2) {
  var date1 = new Date(date1);
  var date2 = new Date(date2);
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
