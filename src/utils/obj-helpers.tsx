


export  const updateObjectInArray = (items:any,itemId:number,objPropName:any,newObjProps:[]) =>{
  return   items.map((u: { [x: string]: number }) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}