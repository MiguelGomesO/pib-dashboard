import React from "react";
import PibChart from "../components/PibChart";

const Home = () => {
  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">Gráfico de Evolução do PIB</h1>
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
        <PibChart />
      </div>
    </div>
  )
}

export default Home;
