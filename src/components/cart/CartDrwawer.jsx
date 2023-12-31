import React, { memo } from 'react'
import useCart from '../../hooks/useCart'
import CartDrawerItem from './CartDrawerItem';
//import useMoney from '../../hooks/useMoney';
import { Link } from 'gatsby';

function CartDrwawer() {
    const {cart,toggleCartDrawer,isCartDrawerOpen}=useCart();
  // const subtotalAmount= useMoney({price:cart?.cost?.subtotalAmount?.amount,currencyCode:cart?.cost?.subtotalAmount?.currencyCode})
    const cartItems = cart?.lines?.nodes || [];
  return (
    <>
    {
      isCartDrawerOpen &&  <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
        {/* <!--
          Background backdrop, show/hide based on slide-over state.
      
          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
        --> */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              {/* <!--
                Slide-over panel, show/hide based on slide-over state.
      
                Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                  From: "translate-x-full"
                  To: "translate-x-0"
                Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                  From: "translate-x-0"
                  To: "translate-x-full"
              --> */}
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                      <div className="ml-3 flex h-7 items-center">
                        <button type="button" onClick={()=>toggleCartDrawer(false)} className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Close panel</span>
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
      
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {
                                 cartItems.map((cartItem) => {
                                    return <CartDrawerItem cartItem={cartItem} key={cartItem.id}/>
                                  })
                            }
                        </ul>
                      </div>
                    </div>
                  </div>
      
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      {/* <p>{subtotalAmount?.price}</p> */}
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <button onClick={()=>window.location.href=cart.checkoutUrl} className=" w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</button>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or
                        <Link to='/' type="button" className="  font-medium text-indigo-600 hover:text-indigo-500">
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    </>
    
  
  )
}
export default memo(CartDrwawer)