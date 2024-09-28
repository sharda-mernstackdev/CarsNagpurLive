import React from 'react'
import UsedCars from './UsedCars';


function AllCars() {
  return (
    <div className='flex flex-wrap items-center justify-center'>
    {
      (() => {
        const carsArray = [];
        // const items = [1, 2];
        for (let index = 0; index < 20; index++) {
          carsArray.push(<Link to="/cardetails"><UsedCars key={index} /></Link>);
        }
        return carsArray;
      })()
    }
  </div>
  )
}

export default AllCars