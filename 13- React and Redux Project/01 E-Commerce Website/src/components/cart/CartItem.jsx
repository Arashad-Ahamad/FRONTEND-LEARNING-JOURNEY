import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../../features/cartSlice';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 border-b py-4">
      <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
      <div className="flex-1">
        <h3 className="font-semibold">{item.title.substring(0, 40)}</h3>
        <p className="text-blue-600 font-bold">${item.price}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
          className="p-1 rounded bg-gray-200 hover:bg-gray-300"
        >
          <FiMinus />
        </button>
        <span className="w-10 text-center">{item.quantity}</span>
        <button
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
          className="p-1 rounded bg-gray-200 hover:bg-gray-300"
        >
          <FiPlus />
        </button>
      </div>
      <div className="w-24 text-center font-bold">${(item.price * item.quantity).toFixed(2)}</div>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-red-500 hover:text-red-700"
      >
        <FiTrash2 size={20} />
      </button>
    </div>
  );
};

export default CartItem;