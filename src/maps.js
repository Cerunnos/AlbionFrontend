// const maps={
//   original: (this.props.x<17 && this.props.y>10) || (this.props.x>5 && this.props.y<3)
// }

function maps(name,x,y){
  if(name==="classic"){
    return (x<17 && y>10) || (x>5 && y<3)
  }
  else if(name==="empty"){
    return (false)
  }
  else if (name==="eight"){
    return (
    (x>18 && y>12 && x<24 && y<18) ||
    (x>18 && y>4 && x<24 && y<10) ||
    (x>26 && y>4 && x<32 && y<10) ||
    (x>26 && y>12 && x<32 && y<18)) ||
    (x>11 && y>4 && x<16 && y<18) ||
    (x>34 && y>4 && x<39 && y<18) ||
    (x>11 && y>=0 && x<39 && y<3) ||
    (x>11 && y>19 && x<39)
  }
  else if (name==="hulk"){
    return (
      (!(51>x && x>2 && 3>y && y>0)) &&
      (!(51>x && x>2 && 22>y && y>19)) &&
      (!(53>x && x>50 && 22>y && y>0)) &&
      (!(3>x && x>0 && 22>y && y>0)) &&
      (!(3>x && x>0 && 22>y && y>0))
    )
  }
  else if (name==="columns"){
    return (
      (x%2 && y%2)
    )
  }
}

export default maps
