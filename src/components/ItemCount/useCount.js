import {useState} from "react";

const UseCount = (stock) => {

    const [count, setCount] = useState(0)

    const add = () =>{
        if(count < stock){
            setCount(count + 1 )
        }
    }

    const remove = () =>{
        if(count > 0){
            setCount(count - 1 )
        }
    }

    return {add, remove, count}
}

export default UseCount;
