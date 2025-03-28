import {useEffect, useState} from 'react';
 


///     designing of  CUSTOM  HOOK

function useCurrencyInfo(currency) {            // "use" is attach in front of the user-defined hook is a standard practice and it is not necessary
    const [data, setData] = useState({})        //   if no value is coming it will store null
    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        
        .then((res) => res.json())            //   converting the response to json.  can also done by JSON.parse
        .then((res) =>  setData(res [currency]))         // can also access an object using "[]"
        console.log(data);
    }, [currency])                               //  it is dependency array, becoz every currency is changed, we need a Callback
    console.log(data);
    // return [data, setData]    //   in this sitiuation this method is wrong,  unable to call function
    return data
}
export default useCurrencyInfo;



