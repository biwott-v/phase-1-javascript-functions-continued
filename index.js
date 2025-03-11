// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
function mondayWork(work = "go to the office") {
  return `This Monday, I will ${work}.`;
}
function wrapAdjective(adjective = "*") {
  return function (value = "special") {
    value = `${adjective}${value}${adjective}`;
    return `You are ${value}!`;
  };
}
