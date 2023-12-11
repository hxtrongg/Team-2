import create from 'zustand';
import { persist,createJSONStorage } from 'zustand/middleware';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  thumb: string;
}

interface CartStore {
  items: CartItem[]; //Lưu danh sách products
  total: number; //Tổng tiền
  itemCount: number; //Tổng items có trong giỏ
  addItem: (item: CartItem) => void; //phương thức thêm item
  removeItem: (id: string) => void; //phương thức xóa item
  increaseQuantity: (id: string) => void; //tăng số lượng của item
  decreaseQuantity: (id: string) => void; //giảm số lượng của item
}

export const useCartStore = create(
  persist<CartStore>(
    (set) => ({
      items: [],
      total: 0,
      itemCount: 0,
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            // Nếu mặt hàng đã tồn tại, tăng số lượng lên 1
            return {
              ...state,
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
              total: state.total + item.price,
              itemCount: state.itemCount + 1,
            };
          } else {
            // Nếu mặt hàng chưa tồn tại, thêm vào giỏ hàng
            return {
              ...state,
              items: [...state.items, item],
              total: state.total + item.price,
              itemCount: state.itemCount + 1,
            };
          }
        }),
      removeItem: (id) =>
        set((state) => {
          const itemToRemove = state.items.find((item) => item.id === id);
          if (!itemToRemove) return state;

          return {
            items: state.items.filter((item) => item.id !== id),
            total: state.total - itemToRemove.price * itemToRemove.quantity,
            itemCount: state.itemCount - itemToRemove.quantity,
          };
        }),
      increaseQuantity: (id) =>
        set((state) => {
          const item = state.items.find((i) => i.id === id);
          if (!item) return state;

          return {
            ...state,
            items: state.items.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity + 1 } : i
            ),
            total: state.total + item.price,
            itemCount: state.itemCount + 1,
          };
        }),
      decreaseQuantity: (id) =>
        set((state) => {
          const item = state.items.find((i) => i.id === id);
          if (!item || item.quantity <= 0) return state;

          return {
            ...state,
            items: state.items.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            ),
            total: state.total - item.price,
            itemCount: state.itemCount - 1,
          };
        }),
    }),
    {
      name: 'cart-storage', // tên của key trong localStorage
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);