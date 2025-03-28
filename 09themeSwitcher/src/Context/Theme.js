 import { createContext, useContext } from "react";

 export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
 })

 export const ThemeProvider = ThemeContext.Provider   //   simpler way for provider


//   custom hook 

export default function useTheme(){
    return useContext(ThemeContext)
}