function createDriver(){
  let DriverId = 0
  // return the class
  return class {
    constructor(name){
      this.name = name
      this.id = ++DriverId;
    }
  }
}

function produceDrivingRange(blockRange){
  return function(begin, end){
  const a = parseInt(begin.replace("th", ""))
  const b = parseInt(end.replace("th", ""))
      if (b - a < blockRange){
        let within = blockRange - (b - a)
      return `within range by ${within}`}
      else
        if (b - a > blockRange){
        let out = (b-a) - blockRange
        return `${out} blocks out of range`}
      }
    }

  function produceTipCalculator(percent){
    return function(bill){
      return bill * percent
    }
  }
