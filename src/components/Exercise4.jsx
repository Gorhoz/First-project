import { useState, useEffect } from "react";

function ProductsList () {
    const [products, setProducts] = useState([]);    
    const [loading, setLoading] = useState(false);
    const [searchItem, setSearchItem] = useState('')
    const [filteredProducts, setFilteredProducts] = useState(products)

    function fetchProducts () {
        setLoading(true);

        fetch('https://api.vendoo.ge/api/beta/catalog?url=technics%2Ftelefonebi%2Fmobiluri-telefonebi&sort=popular&sortDir=desc&page=1&limit=20&fbclid=IwAR3uVPpNTCmCuPVjDh3VHAHU-LEakI70hQ4g9Bb_Gg4ehnwEbOTA2bsxd2Q')
        .then(response => response.json())
        .then(data => setProducts(data.products))
        .catch(error => console.error(error))
        .finally(()=> setLoading(false))
    }

    useEffect(()=> {
        fetchProducts()
        
    }, [])

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
    
        const filteredItems = products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        setFilteredProducts(filteredItems);

      };

    return (
        <div>
            {loading && "Products are loading..."}

            <input type="text" placeholder="Product Name" onChange={handleInputChange}></input>
            <br />
            {filteredProducts.map((item, index) => (
            <p key={index}>{item.name}</p>))}
            <br />

        </div>
    )

}

export default ProductsList