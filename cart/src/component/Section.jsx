import React from 'react';

function Section({ cart, setCart }) {
  // Function to handle adding items to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to handle removing items from the cart
  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
  };

  // Helper function to check if an item is already in the cart
  const isInCart = (item) => cart.some(cartItem => cartItem.id === item.id);

  const products = [
    { id: 1, name: 'Fancy Product', price: '$40.00 - $80.00' },
    { id: 2, name: 'Special Item', price: '$18.00', sale: true },
    { id: 3, name: 'Sale Item', price: '$25.00', sale: true },
    { id: 4, name: 'Popular Item', price: '$40.00' },
  ];

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map(product => (
            <div className="col mb-5" key={product.id}>
              <div className="card h-100">
                {/* Sale badge */}
                {product.sale && (
                  <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                )}
                {/* Product image */}
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt={product.name} />
                {/* Product details */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name */}
                    <h5 className="fw-bolder">{product.name}</h5>
                    {/* Product price */}
                    {product.price}
                  </div>
                </div>
                {/* Product actions */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {isInCart(product) ? (
                      <button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(product)}>Remove from cart</button>
                    ) : (
                      <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(product)}>Add to cart</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section;
