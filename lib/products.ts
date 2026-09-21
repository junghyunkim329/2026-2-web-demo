export type Product = {
  id: string
  name: string
  description: string
  likes: number
}

const products: Product[] = [
  { id: '1', name: '머그컵', description: '나의 최애 머그컵', likes: 3 },
  { id: '2', name: '행주', description: '대나무 행주 대나무 행주', likes: 3 },
  { id: '3', name: '하트', description: '알라뷰', likes: 4 },
  { id: '4', name: '식탁', description: '식탁은 테이블', likes: 3 },
  { id: '5', name: '컴퓨터', description: '내 콤퓨타는 세계 최강', likes: 999 },
  { id: '6', name: '마우스', description: '찍찍🐁', likes: 3 },
]

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getProducts(): Promise<Product[]> {
  await delay(700)
  return products
}

export async function getProduct(id: string): Promise<Product | undefined> {
  await delay(400)
  return products.find((p) => p.id === id)
}

export async function likeProduct(id: string): Promise<number> {
  await delay(300)
  const product = products.find((p) => p.id === id)
  if (!product) return 0
  product.likes += 1
  return product.likes
}
