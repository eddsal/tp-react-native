import {
    createContext,
    useState,
    useCallback,
    useEffect
  } from "react";


  export const ListPurchaseContext = createContext();


  export default function ListPurchaseProvider({ children }) {

    const getPurchases = () => {
        const Purchases = localStorage.getItem('Purchases') || [];
        return Purchases;
    };
    const [ purchases, setPurchases ] = useState(getPurchases);



  const addPurchase = useCallback(
    async (item) => {
     setPurchases([...purchases, item]);
      localStorage.setItem('panier', JSON.stringify(panier));
    },
    [panier]
  );


  }

