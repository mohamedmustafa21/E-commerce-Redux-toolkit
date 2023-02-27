import React from 'react'
import moment from 'moment';
import { useState ,useEffect} from 'react';


function DealOfWeek() {
   
        const [days, setDays] = useState(0);
        const [hours, setHours] = useState(0);
        const [minutes, setMinutes] = useState(0);
        const [second, setSecond] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
              const targetDate = moment('3/01/2023 17:30:30');
              const currentDate = moment('2/27/2023  15:20:40');
              const diffDuration = moment.duration(targetDate.diff(currentDate));
              setDays(Math.floor(diffDuration.asDays()));
              setHours(diffDuration.hours());
              setMinutes(diffDuration.minutes());
              setSecond(diffDuration.seconds());

            }, 1000);
        
            return () => clearInterval(interval);
            
          }, []);
      
  return (
    <div className='flex justify-center items-center deals-ofWeek h-96 bg-gradient-to-r from-[#B2F5C0] to-[#9CC77F] w-[full] rounded-md'>
        <div className='bg-white flex justify-center items-center flex-col w-[30%] h-[70%] rounded-[50%]'>
            <h1>Deal Of The Week</h1>
            <div className='flex justify-between'>
                  <div className='flex flex-col justify-center items-center'>
            <h1>{days}</h1>
            <span>Days</span>
           </div>
           <div className='flex flex-col justify-center items-center'>
            <h1>{hours}</h1>
            <span>Hours</span>
           </div>
           <div className='flex flex-col justify-center items-center'>
            <h1>{minutes}</h1>
            <span>Min</span>
           </div>
           <div className='flex flex-col justify-center items-center'>
            <h1>{second}</h1>
            <span>Sec</span>
           </div>
            </div>
         


        </div>
    </div>
  )
}

export default DealOfWeek