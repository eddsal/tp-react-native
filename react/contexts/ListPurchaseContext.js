import {
    createContext,
    useState,
    useCallback,
    useEffect
  } from "react";


  export const ListPurchaseContext = createContext();


  export default function ListPurchaseProvider({ children }) {

    const getPurchases = () => {
        const purchases = localStorage.getItem('purchases') || [];
        return purchases;
    };
    const [ purchases, setPurchases ] = useState(getPurchases);



  const addPurchase = useCallback(
    async (item) => {
     setPurchases([...purchases, item]);
      localStorage.setItem('purchases', JSON.stringify([...purchases, item]));
    },
    [purchases]
  );

  const deletePurchase = useCallback(
    async (item) => {
      setPurchases(purchases.filter((purchase) => purchase.id !== item.id));
      localStorage.setItem('purchases', JSON.stringify([...purchases, item]));
    },
    [purchases]
  );

  const editPurchase = useCallback(
    async (item) => {
      setPurchases(purchases.map((purchase) => (purchase.id !== item.id ? _it : item)));
      localStorage.set("list", JSON.stringify([...purchases, item]))
    },
    [purchases]
  );


  return (
    <ListPurchase.Provider
      value={{
        purchases,
        addPurchase,
        deletePurchase,
        editPurchase
      }}
    >
      {children}
    </ListPurchase.Provider>
  );

  }

