import api from '@/api'
import { Res } from './components/Res'
import { Product, ProductId } from '@/redux/features/types'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: {
    id: ProductId
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const id = params.id
  const product = await api.get(id)

  const previousImage = (await parent).openGraph?.images || []

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: `${product?.productName} - ZSupermarket`,
    description: product?.productDescription,
    openGraph: {
      images: [
        {
          url: product?.imageUrl,
          width: 800,
          height: 600,
          alt: product?.productName,
        },
        ...previousImage,
      ],
    },
  }
}

export async function generateStaticParams() {
  const product = await api.list()

  return product.map((product) => ({
    id: product.id?.toString(),
  }))
}

export default function ProductPage({ params: { id } }: { params: { id: ProductId } }) {
  return <Res id={id} />
}
