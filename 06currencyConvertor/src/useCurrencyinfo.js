import {useEffect, useState} from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    const [error, setError] = useState(null)

    useEffect( () => {
        fetch(`https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_EXCHANGE_RATES_API_KEY}/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => {
            if (res.result === 'error') {
                setError(res['error-type']);
            } else {
                setData(res.conversion_rates)
            }
        })
        .catch(() => {
            setError("An error occurred while fetching data.")
        })
    }, [currency])

    return {data, error}
}
export default useCurrencyInfo;



