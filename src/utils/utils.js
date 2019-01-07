

        export const getTruthyList = (list) => {
          
            let listArray = Array.from(list.entries());
            let truthyList = listArray.filter( item => item[1] === true )
            return truthyList.join(',');
        }


       export const arrayToMap = (array) => {
            
            let newMap = new Map();

            if(array)
            {
              if (array.length > 0) {
                array.forEach(element => {
                  newMap.set(element, true);
                });
              }
            }
    
            return newMap;
          }
