const secret ='super secret'

const honey ='honey'
const peter = ' peter'

//as we know that module is an global object..and
//exports is a property (refer the defination of objects)
// which is a object type ..and also we know that property of object is aacess
//as..objectname.propertyname.


//here we are exporting specific things.(so we decide what to export)
//from this module ..and now they can be accesaible 
//by any module ..by using require object into there module..
module.exports ={honey,peter}
//above ..we are exporting multiple property so.
// we exports as object containing property{honey,peter}