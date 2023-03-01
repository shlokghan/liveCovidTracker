import React, { useEffect,useState } from 'react'
import './covid.css'

function Covid() {
    const [data,setData] = useState([]);

    const getCoviData=async()=>{
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            console.log(res);
            const actualData = await res.json()
            console.log(actualData.statewise[0])
            setData(actualData.statewise[0])
        }catch(err){
            console.log(err);
        }
        
    }

    useEffect(() => {
      getCoviData();
    }, [])
    
  return (
    <>
        <h1>LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>

        <section>
        <ul>
            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'> <span>OUR</span>Country</p>
                        <p className='card__total__card__small'>INDIA </p>
                        <p>Active cases :- {data.active}</p>
                    </div>
                </div>
            </li>

            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'> <span>OUR</span>Country</p>
                        <p className='card__total__card__small'>INDIA </p>
                        <p>confirmed cases:- {data.confirmed}</p>
                    </div>
                </div>
            </li>

            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'> <span>OUR</span>Country</p>
                        <p className='card__total__card__small'>INDIA </p>
                        <p>deaths :- {data.deaths}</p>
                    </div>
                </div>
            </li>

            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'> <span>OUR</span>Country</p>
                        <p className='card__total__card__small'>INDIA </p>
                        <p>total recovered :-{data.recovered}</p>
                    </div>
                </div>
            </li>

            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'> <span>OUR</span>Country</p>
                        <p className='card__total__card__small'>INDIA </p>
                        <p>lastupdatetime :- {data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
        </ul>
        </section>
    </>
  )
}

export default Covid