import { useCartStore } from "../../hooks/useCartStore"
import { Link } from "react-router-dom";
const CartInfo = () => {
  const {itemCount} = useCartStore();
  return (
    <Link to={'/cart'}>
    <span className="bg-white px-2 py2 text-indigo-500 rounded-full">{itemCount}</span>
    </Link>
  )
}

export default CartInfo