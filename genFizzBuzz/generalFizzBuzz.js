function genFizzBuzz (rules, num) {
  // Good luck!
  let resArr=[];
  let html = '';
  for (let i = 0; i < rules.length; i++){
    if (num % rules[i][0] === 0){
      html += rules[i][1];
    }
  }
  if (html = ''){
    return num.toString();
  }else{
    return html;
  }
}