import { useState } from 'react';
import './Admin.css';

function Admin() {
    const [allCoupons, setAllCoupons] = useState([]);
    const [coupon, setCoupon] = useState({
        code: "",
        discount: ""
    });

    const [product, setProduct] = useState({
        title: "",
        price: "",
        image: "",
        category: "",

    });

    function handleProduct(e) {
        const text = e.target.value;
        const name = e.target.name;

        let copy = { ...product };
        copy[name] = text;
        setProduct(copy);

    }

    function saveCoupon() {
        console.log(coupon);

        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    function handleCoupon(e) {
        const text = e.target.value;
        const name = e.target.name;
        console.log("text Changed", text, name);

        let copy = { ...coupon };
        copy[name] = Text;
        setCoupon(copy);
    }

    function saveProduct() {
        console.log(product)
    }


    return (
        <div className='Admin page'>
            <h2> This is for Coupons And Products</h2>
            <div className='parent'>
                <div className="prods">
                    <h5> Manage Products</h5>
                    <div>
                        <label className='form-label'> Title </label>
                        <input type="text" className='form-control' onBlur={handleProduct} name="title"></input>
                    </div>
                    <div>
                        <label className='form-label'> Price </label>
                        <input type="number" className='form-control' onBlur={handleProduct} name="price"></input>
                    </div>
                    <div>
                        <label className='form-label'> image </label>
                        <input type="text" className='form-control' onBlur={handleProduct} name="image"></input>
                    </div>
                    <div>
                        <label className='form-label'> Category</label>
                        <input type="text" className='form-control' onBlur={handleProduct} name="category"></input>
                    </div>
                    <div className='controls'>
                        <button className='btn btn-dark' onClick={saveProduct}> Save product </button>
                    </div>

                </div>
                <div className='cpns'>
                    <h5> Coupons</h5>
                    <div>
                        <label className='form-label'> Code </label>
                        <input type="text" className='form-control' onBlur={handleCoupon} name="code"></input>
                    </div>
                    <div>
                        <label className='form-label'> Discount</label>
                        <input type="number" className='form-control' onBlur={handleCoupon} name="discount"></input>
                    </div>
                    <div className='controls'>
                        <button className='btn btn-dark' onClick={saveCoupon}> Save Coupons </button>
                    </div>
                    {allCoupons.map(cp => <li>{cp.code} - {cp.discount}</li>)};
                </div>
            </div>
        </div>
    );
}
export default Admin;