import './BalanceModal.css';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from "axios";
import { useState, useEffect } from 'react';

interface BalanceModalProps {
    onClose: () => void;
    setMoney: React.Dispatch<React.SetStateAction<number>>;
    idUser: String;
    balance: number;
    role: string;
}

export const BalanceModal: React.FC<BalanceModalProps> = ({ onClose, setMoney, idUser, balance, role }) => {
    const token = localStorage.getItem('jwt-token');
    
    const Product = ()=>{
        const [preferenceId, setPreferenceId] = useState<string | null>(null);
    initMercadoPago("TEST-dbbfc2d8-cbb9-4a6b-86ad-891ccda92b0b",{
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
    
    function addMoney(adding: number) {
        setMoney(balance + adding);
        patchUser(balance + adding);
    }
    
    function patchUser(newMoney:number) {
        axios.put(`http://localhost:3000/api/v1/users/${idUser}`, {
            token,
            role,
            balance: `${newMoney}`,
        })
    }
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <div className="modal-body">
                    <h2>Deposit Options</h2>
                    <div className="tips">
                        <button onClick={() => handleBuy()} className="tip">$1000</button>
                        <button onClick={() => addMoney(2000)} className="tip">$2000</button>
                        <button onClick={() => addMoney(5000)} className="tip">$5000</button>
                        <button onClick={() => addMoney(10000)} className="tip">$10.000</button>
                        <button onClick={() => addMoney(25000)} className="tip">$25.000</button>
                        {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />}
                    </div>
                </div>
            </div>
        </div>
    );
}};
