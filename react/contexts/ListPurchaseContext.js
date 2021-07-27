import
React,
{
    createContext,
    useState,
    useCallback,
  useEffect,
  } from "react";


  import AsyncStorage from '@react-native-async-storage/async-storage';


  export const ListPurchaseContext = createContext();




  export default function ListPurchaseProvider({ children }) {

    const getPurchases = () => {
        const purchases = AsyncStorage.getItem('purchases');
        return purchases;
    };
    const [purchases, setPurchases] = useState([]);
    useEffect(() => {
      getPurchases().then(data => {
        setPurchases(data || [])
      })
    }, [])
    

  const addPurchase = useCallback(
    async (item) => {
     setPurchases([...purchases, item]);
     AsyncStorage.setItem('purchases', JSON.stringify([...purchases, item]));
    },
    [purchases]
  );

  const deletePurchase = useCallback(
    async (item) => {
      setPurchases(purchases.filter((purchase) => purchase.id !== item.id));
      AsyncStorage.setItem('purchases', JSON.stringify([...purchases, item]));
    },
    [purchases]
  );

  const editPurchase = useCallback(
    async (item) => {
      setPurchases(purchases.map((purchase) => (purchase.id !== item.id ? _it : item)));
      AsyncStorage.set("list", JSON.stringify([...purchases, item]))
    },
    [purchases]
  );


  return (
    <ListPurchaseContext.Provider
      value={{
        purchases,
        addPurchase,
        deletePurchase,
        editPurchase
      }}
    >
      {children}
    </ListPurchaseContext.Provider>
  );

  }

