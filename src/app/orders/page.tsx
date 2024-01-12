import React from 'react'

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-20">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base odd:bg-red-50'>
            <td className="hidden md:block py-6 px-1">07017840486</td>
            <td className="py-6 px-1">19-10-1996</td>
            <td className="py-6 px-1">VB.96</td>
            <td className="hidden md:block py-6 px-1">Big Burger Menu (9), Veggie Pizza(5), Coca Cola 1Ltr (3)</td>
            <td className="py-6 px-1">On the way (approx. 12min)...</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className="hidden md:block py-6 px-1">07017840486</td>
            <td className="py-6 px-1">19-10-1996</td>
            <td className="py-6 px-1">VB.96</td>
            <td className="hidden md:block py-6 px-1">Big Burger Menu (9), Veggie Pizza(5), Coca Cola 1Ltr (3)</td>
            <td className="py-6 px-1">On the way (approx. 12min)...</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className="hidden md:block py-6 px-1">07017840486</td>
            <td className="py-6 px-1">19-10-1996</td>
            <td className="py-6 px-1">VB.96</td>
            <td className="hidden md:block py-6 px-1">Big Burger Menu (9), Veggie Pizza(5), Coca Cola 1Ltr (3)</td>
            <td className="py-6 px-1">On the way (approx. 12min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage