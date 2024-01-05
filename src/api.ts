// interface Product {
//   id: ProductId
//   product_name: string
//   product_description: string
//   category: string
//   price: number
//   image_url: string
//   stock_quantity: number
//   bar_code: string
// }

import { Product, ProductId } from './redux/features/types'

async function getProducts() {
  const res = await fetch('http://localhost:8080/products')

  if (!res.ok) {
    throw new Error('Error al obtener los productos')
  }

  return res.json()
}

const api = {
  list: async (): Promise<Product[]> => {
    const products = await getProducts()

    return products.content
  },

  get: async (id: ProductId): Promise<Product> => {
    const res = await fetch(`http://localhost:8080/products/${id}`)

    if (!res.ok) {
      throw new Error('Error al obtener el producto')
    }

    return res.json()
  },

  create: async (product: Product): Promise<Product> => {
    const res = await fetch('http://localhost:8080/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })

    if (!res.ok) {
      throw new Error('Error al crear el producto')
    }

    return res.json()
  },

  update: async (product: Product): Promise<Product> => {
    const res = await fetch('http://localhost:8080/products', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })

    if (!res.ok) {
      throw new Error('Error al actualizar el producto')
    }

    return res.json()
  },

  delete: async (id: ProductId): Promise<void> => {
    const res = await fetch(`http://localhost:8080/products/${id}`, {
      method: 'DELETE',
    })

    if (!res.ok) {
      throw new Error('Error al eliminar el producto')
    }
  },
}

export default api
