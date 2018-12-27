

        const getTruthyList = (list) => {

            let listArray = Array.from(list.entries());
            let truthyList = listArray.filter( item => item[1] === true )
            let str = "";

            truthyList.forEach(
            item => {
                str = str + item[0] + ", "}
            )

            return str;

        }

        export default getTruthyList;