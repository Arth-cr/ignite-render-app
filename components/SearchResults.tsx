import { List, ListRowRenderer } from "react-virtualized"

import { ProductItem } from "./ProductItem"

interface SearchResultProps {
  results: Array<{
    id: number
    price: number
    priceFormatted: string
    title: string
  }>
  onAddToWishlist: (id: number) => void
  totalPrice: number
}

export function SearchResult({
  results,
  onAddToWishlist,
  totalPrice,
}: SearchResultProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    )
  }

  return (
    <div>
      <h2>{totalPrice}</h2>
      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
      {/* {results.map(product => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishlist={onAddToWishlist}
          />
        )
      })} */}
    </div>
  )
}
