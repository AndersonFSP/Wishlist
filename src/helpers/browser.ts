import type { IProduct } from "@/types"

export function getWishlist(): IProduct[] {
  return JSON.parse(localStorage.getItem('wishlist')!) ?? []
}

export function setWishlist(value: IProduct[]) {
  localStorage.setItem('wishlist', JSON.stringify(value))
}