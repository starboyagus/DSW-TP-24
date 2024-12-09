import './mptest.css';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from "axios";
import { useState } from 'react';


const Product = ()=>{
    const [preferenceId, setPreferenceId] = useState<string | null>(null);
initMercadoPago("APP_USR-03fdd897-d911-496d-8c09-61802b128fa3",{
    locale: "es-AR",
});
    
const createPreference = async () => {
    try {
        const response = await axios.post("http://localhost:3000/create_preference", {
        title: "Tip",
        quantity: 1,
        price: 100,
        productId: 2,
    });
        
    const { id } = response.data;
    return id;
    } catch (error) {
        console.log(error);
    }
};

const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
        setPreferenceId(id);
    }
};

return (
    <div className="modal-">
        <div className="modal-">
            <button className="close-">X</button>
            <div className="modal-">
                <h2>Deposit Options</h2>
                <div className="tips">
                    <button onClick={() => handleBuy()} className="tip">$1000</button>
                    <button className="tip">$2000</button>
                    <button className="tip">$5000</button>
                    <button className="tip">$10.000</button>
                    <button className="tip">$25.000</button>
                    {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />}
                </div>
            </div>
        </div>
    </div>
);
};

export default Product;