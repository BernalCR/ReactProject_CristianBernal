import {useState} from "react";

const UseCount = (stock) => {

    const [count, setCount] = useState(0)

    const addProduct = () =>{
        if(count < stock){
            setCount(count + 1 )
        }
    }

    const removeProduct = () =>{
        if(count > 0){
            setCount(count - 1 )
        }
    }

    return {addProduct, removeProduct, count}
}

export default UseCount;
