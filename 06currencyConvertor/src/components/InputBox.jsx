import React, {useId} from 'react'

function InputBox({
    type,
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions =[],   //    like inr , usd 
    selectCurrency = "USD",   //   default currency
    amountDisabled = false,
    currencyDisabled = false,
    
    className = "",
}) {

    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>      {/*     CSS for injecting user CSS, as it is defined in line number 6.  just like interpolation*/}
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">   {/* {htmlFor}  is used for binding*/}
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(chai) => onAmountChange && onAmountChange(Number(chai.target.value))}   ///    converting it to integer, if it become string

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                <select
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectCurrency}
                onChange={(chai)=> onCurrencyChange && onCurrencyChange(chai.target.value)}
                disabled= {currencyDisabled}
                >
                    {currencyOptions.map((currency) => (  ///   jab bhi loop lagayenge jsx pe "key" pass karni padegi
                    //  means  remember the keys in loops in react(jsx)
                        <option key={currency} value={currency}>
                            {/* {currency} */}
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;





//    javascript events => "(events.value)"   ke andar ke value ko string le leti hai, irrespecitve of it, like it is number or anything