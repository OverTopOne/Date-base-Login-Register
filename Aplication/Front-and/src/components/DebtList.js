import React from 'react';


function DebList({ debts }) {
    return (

        <ul className="list-group">
            {debts.map((debt, index) => (
                <li key={index} className="list-group-item">
                    {debt.name} - R${debt.amount} - Vencimento: {debt.dueDate}

                </li>
            ))}
        </ul>
    );
}


export default DebList;