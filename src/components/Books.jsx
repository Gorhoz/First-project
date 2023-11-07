import Book from "./Book";

const booksList = [
    "https://static.displate.com/857x1200/displate/2019-06-11/b0ce71cefd2d9a14cb18dde8fa26e6f8_1382ba5416e6ab973a0d5294718b94c3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLM6t49oN_Y8dqInbppndZxHt5TQryVF_uCf0HmgoX_-_KdMSqPC1jQt89W-iX_qLXJ4&usqp=CAU",
    "https://i.etsystatic.com/20545894/r/il/1acce4/1977097711/il_fullxfull.1977097711_e1be.jpg"
];


const Books = ( {} ) => {
    return (
        <div>
            {booksList.map(poster => (
                <Book 
                poster={poster}/>
            ))}
        </div>
    )
}

export default Books;