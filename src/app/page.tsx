import CardNao from "./components/CardNao";
import CardMeta from "./components/CarMeta";
export default function Home() {
  return (
    <div>
      <h1 className="text-center text-4xl p-6 py-7 font-semibold">
        Programas Nao
      </h1>
      <CardNao />
    </div>
  );
}
