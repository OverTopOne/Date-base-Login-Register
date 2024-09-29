import React from "react";
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';


Chart.register(ArcElement, Tooltip, Legend);

function DebtChart({ debts }) {
    const data = {
        labels: debts.map(debt => debt.name),
        datasets: [
          {
            label: 'Dívidas',
            data: debts.map(debt => debt.amount),
            backgroundColor: ['#FF3684', '#36A2EB', '#FFCE56'],
          },
        ],
    };

    return (
        <div>
            <h2>Média atual</h2>
            <Pie data={data} />
        </div>
    );
}

export default DebtChart;
