import React from 'react'

function Price({originalPrice, salePrice}) {
  return (
    <div className="book__price">
    {salePrice ? (
      <>
        <span className="book__price--normal">
          ${originalPrice.toFixed(2)}
        </span>
        ${salePrice}
      </>
    ) : (
      <>${originalPrice}</>
    )}
  </div>
  )
}

export default Price