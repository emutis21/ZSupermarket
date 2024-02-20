import { Product, ProductId, ProductWithId } from './redux/features/types'

async function getProducts() {
  const res = await fetch('http://localhost:8080/products')

  if (!res.ok) {
    throw new Error('Error al obtener los productos')
  }

  return res.json()
}

const api = {
  list: async (): Promise<ProductWithId[]> => {
    const products = await getProducts()

    return products.content
  },

  get: async (id: ProductId): Promise<ProductWithId> => {
    const res = await fetch(`http://localhost:8080/products/${id}`, { cache: 'no-store' })

    return res.json()
  },

  create: async (product: Product): Promise<Product> => {
    const res = await fetch('http://localhost:8080/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
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
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })

    if (!res.ok) {
      throw new Error('Error al actualizar el producto')
    }

    return res.json()
  },

  delete: async (id: ProductId): Promise<void> => {
    const res = await fetch(`http://localhost:8080/products/${id}`, {
      method: 'DELETE'
    })

    if (!res.ok) {
      throw new Error('Error al eliminar el producto')
    }
  }
}

export default api
