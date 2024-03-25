"use client"
import React from "react";
// import { MesesDados } from "@/lib/pagamentos";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

interface Fatura {
  _id: string;
  mes: string;
  leitura: number;
  estado: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  consumo?: number;
  valor: number;
}

interface Mes {
  _id: string;
  mes: string;
  faturas: Fatura[];
  createdAt: string;
  __v: number;
}

interface Compan {
  area: any[];
  _id: string;
  nome: string;
  clientes: string[];
  email: string;
  admin: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  mes: Mes[];
}

interface Resultado {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}


export default function App() {
//   const meses = MesesDados()
//   const totalPorMes = meses.compan.mes.map((mes: { faturas: any[]; mes: any; }) => {
//     const valorNaoPago = mes.faturas
//         .filter(fatura => fatura.estado === "Nao pago")
//         .reduce((total, fatura) => total + fatura.valor, 0);

//     const valorPago = mes.faturas
//         .filter(fatura => fatura.estado !== "Nao pago")
//         .reduce((total, fatura) => total + fatura.valor, 0);
    
//     return { 
//         name: mes.mes, 
//         uv: valorNaoPago,
//         pv: valorPago,
//         amt: valorNaoPago + valorPago
//     };
// });
  

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        strokeDasharray="5 5"
      />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="#82ca9d"
        strokeDasharray="3 4 5 2"
      />
    </LineChart>
  );
}
