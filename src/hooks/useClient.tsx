import { useEffect, useState } from "react";


export function useClient() {
  const [isClient , setIsClient] = useState(false)

  useEffect(()=> {
    if(typeof window !== 'undefined'){
      setIsClient(true)
    }
  }, [])

  return isClient
}
