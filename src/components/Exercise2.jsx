

function Exercise2  () {
const handleChange = (value) => {
    value.length>10?alert("Maximum number of symbols is 10"):""
}

    return (
        <div>
            <div>
                <input type="text" placeholder="name" onChange={(e)=> handleChange(e.target.value)}>
                    
                </input>
            </div>
        </div>
    )
}

export default Exercise2;