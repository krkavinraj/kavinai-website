import Image from 'next/image';
import React from 'react';
import app_image from '../../public/app_image.png';

export const PainPoints = () => {
  return (
    <section className='bg-white dark:bg-gray-900 flex justify-center w-full pt-5'>
      <div>
        <h1 className='text-4xl text-center font-bold'>Pain Points</h1>
        <div className="pain_cards flex flex-wrap justify-center mx-auto mt-2">
          <div className="pain_card md:w-1/3 w-full p-4">
            <div className="items bg-blue-100 dark:bg-gray-800 w-full flex p-4 rounded-md">
              <div className="left_item">
                <Image src={app_image} width={200} alt='pain' />
              </div>
              <div className="right_item ml-5">
                <h3 className='text-xl font-bold'>Pain Point 1</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="pain_card md:w-1/3 w-full p-4">
            <div className="items bg-blue-100 dark:bg-gray-800 w-full flex p-4 rounded-md">
              <div className="left_item">
                <Image src={app_image} width={200} alt='pain' />
              </div>
              <div className="right_item ml-5">
                <h3 className='text-xl font-bold'>Pain Point 1</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="pain_card md:w-1/3 w-full p-4">
            <div className="items bg-blue-100 dark:bg-gray-800 w-full flex p-4 rounded-md">
              <div className="left_item">
                <Image src={app_image} width={200} alt='pain' />
              </div>
              <div className="right_item ml-5">
                <h3 className='text-xl font-bold'>Pain Point 1</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
