module.exports = function toReadable (number) {
  if(number == 0){
    return 'zero';
  }
  let single = ['one', 'two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen',]
  let tens = ['ten', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety',];
  let result ='';
  if (number < 20){
    result += single[number - 1];
  } else if(number < 100){
    if(number % 10 != 0){
      result += `${tens[Math.floor(number / 10) - 1]} ${single[number % 10 - 1]}`;
    } else {
      result +=`${tens[Math.floor(number / 10) - 1]}`;
    }
  } else{
    if(number % 100 == 0){
      result += `${single[number / 100 - 1]} hundred`;
    } else{
      if(number % 10 == 0){
        result += `${single[Math.floor(number / 100) - 1]} hundred ${tens[(number % 100) / 10 - 1]}`;
      } else {
        if( number / 10 % 10 > 2){
          result += `${single[Math.floor(number / 100) - 1]} hundred ${tens[Math.floor((number % 100) / 10 - 1)]} ${single[Math.floor((number % 100) % 10 - 1)]}`;
        } else{
          result += `${single[Math.floor(number / 100) - 1]} hundred ${single[Math.floor(number % 100 - 1)]}`;//Math.floor((number % 100) % 10 - 1)
        }
      }
    }
  }
  //let result = number < 20 ? single[number - 1] : ( number < 100 ? (number % 10 != 0 ? `${tens[Math.floor(number / 10) - 1]} ${single[number % 10 - 1]}` : `${tens[Math.floor(number / 10) - 1]}`) : (number % 100 == 0) ? `${single[number / 100 - 1]} hundred` : (number % 10 == 0) ? `${single[Math.floor(number / 100) - 1]} hundred ${tens[(number % 100) / 10 - 1]}` : `${single[Math.floor(number / 100) - 1]} hundred ${tens[Math.floor((number % 100) / 10 - 1)]} ${single[Math.floor((number % 100) % 10 - 1)]}`);
  return result;
}