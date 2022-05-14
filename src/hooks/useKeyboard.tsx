import { useEffect } from "react"

const useKeyboard = (eventName: keyof WindowEventMap, callback:any) => {
    useEffect(() => {
      window.addEventListener(eventName, callback);  

      return () => {
          window.removeEventListener(eventName, callback);
      }
    })
}

export default useKeyboard;