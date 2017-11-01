
class Driver{
  constructor(name, startDate){
  this.name = name
  this.startDate = new Date(startDate)
}
yearsExperienceFromBeginningOf(year){
const date = new Date(year, 1, 1)
const totalYears = (date - this.startDate)/(365*24*60*60*1000)
return parseInt(totalYears)
}

}
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  avenueToInteger(avenue){
    return eastWest.indexOf(avenue)
  }
  blocksTravelled(){
    const horizontal = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
    const vertical = this.endingLocation.vertical - this.beginningLocation.vertical
    return (horizontal + vertical)
  }
  estimatedTime(peak){
    if(peak){
    return this.blocksTravelled()/2
  } else {
    return this.blocksTravelled()/3
  }
}

}
