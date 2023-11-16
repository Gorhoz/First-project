import { useState } from "react";


function Exercise3  () {
    const [number, setNumber] = useState([]);
    const [data, setData] =useState([]);

    async function fetchData() {
        const response = await fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8");
        const list = await response.json();
        setData(list);
        // console.log(list);
      }


      const handleLoad = (number) => {
        if(number<10 && number.length!==0){
            return fetchData();
        }
      }

    return (
        <div>
            number: {number}
            <div>
                <input type="text" placeholder="Enter Number Here" onChange={(e)=> setNumber(+e.target.value)}></input>   
                <br />           
                <button disabled={number.length===0 || isNaN(number) ||  number>9} onClick={()=> fetchData()}>load1</button>
                <button onClick={()=> handleLoad(number)}>load2</button>
                {data?.map(d=> (<p key={d.name}>{d.name}</p>))}                    
              
            </div>
        </div>
    )
}

export default Exercise3;