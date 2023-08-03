import React from 'react'
import { Card } from 'flowbite-react'

function Home() {
  return (
    <div className="flex flex-col flex-1 p-4 overflow-y-auto">
            {/* First Card */}
            <Card className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-4 p-4">
              <h3 className="text-xl font-semibold mb-2">Card 1</h3>
              <p>This is the content of Card 1.</p>
            </Card>
  
            {/* Second Card */}
            <Card className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-4 p-4">
              <h3 className="text-xl font-semibold mb-2">Card 2</h3>
              <p>This is the content of Card 2.</p>
            </Card>
  
            {/* Third Card */}
            <Card className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-4 p-4">
              <h3 className="text-xl font-semibold mb-2">Card 3</h3>
              <p>This is the content of Card 3.</p>
            </Card>
            <Card className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-4 p-4">
              <h3 className="text-xl font-semibold mb-2">Card 3</h3>
              <p>This is the content of Card 3.</p>
            </Card>
            <Card className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-4 p-4">
              <h3 className="text-xl font-semibold mb-2">Card 3</h3>
              <p>This is the content of Card 3.</p>
            </Card>
            <Card className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-4 p-4">
              <h3 className="text-xl font-semibold mb-2">Card 3</h3>
              <p>This is the content of Card 3.</p>
            </Card>
          </div>
  )
}

export default Home