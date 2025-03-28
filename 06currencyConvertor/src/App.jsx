import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './useCurrencyinfo.js'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertAmount, setConvertAmount] = useState(0)

  //   using hook here
  const currencyInfo = useCurrencyInfo(from)    ///   passing the value from => "form"   bcoz jo currency se convert karna hai wahi denge

  const options = Object.keys(currencyInfo)

  const swap = () => {
    //   swaping value 
    setFrom(to)
    setTo(from)
    setAmount(convertAmount)
    setConvertAmount(amount)
  }
  const convert = () => {
    //    converting value, here * means finding the correct currency(like which is given in "to")
    setConvertAmount(amount*currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()  //  the function we created
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                        //   INPUT OF FROM
                        
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}

                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                        //  SWAP BUTTON
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                        //  OUTPUT OF TO
                    
                            label="To"
                            amount={convertAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisabled
    
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
