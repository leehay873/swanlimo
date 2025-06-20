import React from 'react'

const TableState = () => {
  return (

    <div className="footer_bg py-16 sm:py-18">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-7xl lg:mx-0">
      <h2 className="work_heading text-3xl  sm:text-4xl">How Long Does It Take To 
        <span className='MainColor'>Auto-Transport a Vehicle?</span></h2>
      
        <p className="custom-paragraph">
        The different destinations located under 500–600 miles from a pickup location, will require, on average, 24 hours or 1–2 days for Vehicle Auto Transportation. Places that are 600 miles distant from the pickup location will usually need more time.
        </p>
     
      </div>
    <div className="mx-auto mt-10 max-w-7xl lg:mx-0">
    <table className="min-w-full  shadow-md rounded">
      <thead className="text-white MainBackgroundColor">
        <tr className=''>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            Driving Distance To Or From The Pickup Location (Miles)
          </th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            Tentative Time Of Delivery (Days Or Hours)
          </th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        <tr>
          <td className="border py-3 px-4">0 to 200 miles</td>
          <td className="border py-3 px-4">In 24 hours</td>
        </tr>
        <tr>
          <td className="border py-3 px-4">200 to 600 miles</td>
          <td className="border py-3 px-4">1 - 2 days</td>
        </tr>
        <tr>
          <td className="border py-3 px-4">600 to 1000 miles</td>
          <td className="border py-3 px-4">1 - 2 days</td>
        </tr>
        <tr>
          <td className="border py-3 px-4">1000 to 1500 miles</td>
          <td className="border py-3 px-4">2-3 days</td>
        </tr>
        <tr>
          <td className="border py-3 px-4">1500 to 2000 miles</td>
          <td className="border py-3 px-4">3-4 days</td>
        </tr>
        <tr>
          <td className="border py-3 px-4">2000 or above miles</td>
          <td className="border py-3 px-4">4-5 days</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  </div>
  )
}

export default TableState