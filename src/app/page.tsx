"use client";
import { useHomeViewModel } from "@/presentation/viewmodels/HomeVieModel";


export default function HomePage() {
  const { obscureMode,setObscureMode } = useHomeViewModel();

  return (
    <main className="p-8 space-y-12">
      {/* Presentación */}
      <section>
        <h1 className="text-3xl font-bold">Hola, soy Marcelo 👋</h1>
        <p>Desarrollador apasionado por Kotlin, Next.js y la arquitectura limpia.</p>
      </section>
    </main>
  );
}
