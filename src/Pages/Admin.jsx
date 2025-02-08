import './Admin.css';

function Admin() {
    return (
        <div className='Admin page'>
            <h2> This is for Coupons And Products</h2>
            <div className='parent'>
                <div className="prods">
                    <h5> Manage Products</h5>
                    <div>
                        <label className='form-label'> Title </label>
                        <input type="text" className='form-control'></input>
                    </div>
                    <div>
                        <label className='form-label'> Price </label>
                        <input type="number" className='form-control'></input>
                    </div>
                    <div>
                        <label className='form-label'> image </label>
                        <input type="text" className='form-control'></input>
                    </div>
                    <div>
                        <label className='form-label'> Category</label>
                        <input type="text" className='form-control'></input>
                    </div>
                    <div className='controls'>
                        <button className='btn btn-dark'> Save product </button>
                    </div>
                
                </div>
                <div className='cpns'>
                    <h5> Coupons</h5>
                    <div>
                        <label className='form-label'> Code </label>
                        <input type="text" className='form-control'></input>
                    </div>
                    <div>
                        <label className='form-label'> Discount</label>
                        <input type="number" className='form-control'></input>
                    </div>
                    <div className='controls'>
                        <button className='btn btn-dark'> Save Coupons </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Admin;