import React from 'react'

const viewMore = () => {
  return (
    <div>
       <div className="text-right mt-6">
                        <a
                            href="#"
                            className="text-gray-900 inline-flex items-center font-medium"
                        >
                            View More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
    </div>
  )
}

export default viewMore
