import React from 'react'

const Home = () => {
  return (
    <div className='bg-green-100 h-full pt-24 md:pt-16'>

      <div className=" bg-gray-100 min-h-screen">

	      <div className="container p-10 mx-auto">

		      <h1 className="text-4xl font-bold text-gray-700 mb-6">Budget</h1>

		      <div>

			      <h3 className="text-lg font-semibold">YOUR BALANCE:</h3>

			      <p className="text-5xl mb-6">$2,550.53</p>

			      <div className="grid grid-cols-2 bg-white mb-6 border-2 p-6 rounded-md">

				      <div className="flex flex-col items-center">
					      <p className="text-lg font-semibold">INCOME:</p>
					      <p className="text-5xl font-semibold text-green-500"> +$1,045.50</p>
				      </div>

				      <div className="flex flex-col items-center">
					      <p className="text-lg font-semibold">EXPENSES:</p>
					      <p className="text-5xl font-semibold text-red-500"> -$623,50</p>
				      </div>

			      </div>

            <div>

				      <h2 className="text-xl font-semibold text-gray-700 mb-2">Recent transactions</h2>

				      <div className="flex justify-between border-2 p-10 bg-white rounded-md"> 
                <p className="text-md">Invoice for Title: the offer made by client c210171802919vax to contractor FernFL on Wed Oct 26 UTC 2022 Milestone 2 - Milestone 2</p>
					      <div className="flex space-x-4"> <p className="text-lg text-green-500"> + $100.20</p> </div>
				      </div>	

				      <div className="flex justify-between border-2 p-10 bg-white rounded-md">
					      <p className="text-md">Oct 26.2022 Payment | Paid from escrow for invoice 303963062</p>
					      <div className="flex space-x-4"> <p className="text-lg text-red-700">- $20.970</p> </div>
				      </div>

				      <div className="flex justify-between border-2 p-10 bg-white rounded-md">
					      <p className="text-md">Oct 26.2022 Payment | Paid from Mastercard 2444 to escrow for funding request 303963059</p>
					      <div className="flex space-x-4"> <p className="text-lg text-red-700"> - $330.00 </p> </div>
				      </div>

				      <div className="flex justify-between border-2 p-10 bg-white rounded-md">
					      <p className="text-md">Oct 26.2022 Payment | Paid from Mastercard 2444 to escrow for funding request 303963059</p>
					      <div className="flex space-x-4"> <p className="text-lg text-green-500"> + $320.00 </p> </div>
				      </div>

				      <div className="flex justify-between border-2 p-10 bg-white rounded-md">
					      <p className="text-md">Oct 26.2022 Payment | Paid from Mastercard 2444 to escrow for funding request 303963059</p>
					      <div className="flex space-x-4"> <p className="text-lg text-red-700"> - $130.00 </p> </div>
				      </div>

			      </div>


		      </div>

        </div>
      </div>
    </div>
  )
}

export default Home
