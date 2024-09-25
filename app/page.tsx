
export default function Home() {
  return (
    <div className="w-full h-screen bg-white text-black items-center justify-center object-center flex "> 
      <main className=" border drop-shadow-lg h-[500px] w-[700px] rounded-3xl flex-row flex ">
        <div className="w-2/4 h-full  items-center flex-col flex border-[10px] rounded-3xl bg-gradient-to-t from-indigo-800 to-indigo-500">
          <h1 className="p-5 text-xl font-bold text-white mt-5">Your Result</h1>
          <div className="h-48 w-48 text-xl text-white rounded-full items-center flex justify-center flex-col bg-gradient-to-t from-indigo-800 to-indigo-500 ">
            <h1 className="text-7xl font-bold">76</h1>
            <p className="text-sm">of 100</p>
          </div>
          <div className="items-center justify-center flex flex-col text-center text-white ">
            <h1 className="text-3xl font-semibold mt-5 mb-5">Great</h1>
            <p className="items-center justify-center flex w-72">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-8">
          <h1 className="text-2xl font-bold mb-7">Summary</h1>
          <div className="flex flex-row justify-between rounded-xl mb-8  p-5 h-14 w-80 items-center bg-red-100">
            <div className="flex flex-row items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#F55"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.25"
                  d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
                />
              </svg>
              <p className="text-red-500 font-bold pl-2">Reaction</p>
            </div>
            <p className="font-bold">
              80 <span className="text-gray-500">/ 100</span>
            </p>
          </div>
          <div className="flex flex-row justify-between rounded-xl mb-8 p-5 h-14 w-80 items-center bg-yellow-100">
            <div className="flex flex-row items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#FFB21E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.25"
                  d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
                />
                <path
                  stroke="#FFB21E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.25"
                  d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
                />
                <path
                  stroke="#FFB21E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.25"
                  d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
                />
              </svg>
              <p className="text-yellow-500 font-bold pl-2">Memory</p>
            </div>
            <p className="font-bold">
            92 <span className="text-gray-500">/ 100</span>
            </p>
          </div>
          <div className="flex flex-row justify-between rounded-xl mb-8 p-5 h-14 w-80 items-center bg-green-100">
            <div className="flex flex-row items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#00BB8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.25"
                  d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
                />
              </svg>
              <p className="text-green-500 font-bold pl-2">Verbal</p>
            </div>
            <p className="font-bold">
            61 <span className="text-gray-500">/ 100</span>
            </p>
          </div>
          <div className="flex flex-row justify-between rounded-xl mb-8 p-5 h-14 w-80 items-center bg-blue-100">
            <div className="flex flex-row items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#1125D6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.25"
                  d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
                />
                <path
                  stroke="#1125D6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.25"
                  d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
                />
              </svg>
              <p className="text-blue-500 font-bold pl-2">Visual</p>
            </div>
            <p className="font-bold">
            72 <span className="text-gray-500">/ 100</span>
            </p>
          </div>
          <p className="flex items-center font-semibold justify-center w-full bg-slate-600 text-white h-[50px] rounded-full cursor-pointer hover:bg-gradient-to-t from-indigo-800 to-indigo-500">
            Continue
          </p>
        </div>
      </main>
    </div>
  );
}
