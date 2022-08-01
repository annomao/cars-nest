import React from 'react'

function BaseForm(props) {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="font-medium self-center text-xl sm:text-2xl uppercase text-cBlue">{props.title}</div>
          <div className="mt-10">
            {props.children}
          </div>
          <div className="flex justify-center items-center mt-6">
            <a href="#" target="_blank" className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
              <span>
                <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </span>
              <span className="ml-2">{props.check}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default BaseForm