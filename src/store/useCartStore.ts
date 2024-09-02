import { create } from "zustand"; // npm i zustand
import { IProduct } from "../models/IProduct";

type CartState = {
  cartItems: IProduct[];
  addToCart: (item: IProduct) => void;
};

export const useCartStore = create<CartState>()((set) => ({
  cartItems: [],
  addToCart: (product: IProduct) => {
    console.log("To Update Store data You must call set");

    set((state) => {
      console.log("Adding to cart");
      
      return {
        cartItems: [
          ...state.cartItems, // spreading existing cartItems
          product, // adding the new product
        ],
      };
    });
  },
}));
