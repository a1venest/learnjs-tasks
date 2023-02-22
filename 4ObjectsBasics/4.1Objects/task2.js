 let testObject = {
     //  name,
 };

 function isEmpty(object) {
     for (let key in object) {
         return false;
     }
     return true;
 }
 alert(isEmpty(testObject));