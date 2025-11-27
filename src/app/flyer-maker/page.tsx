
import { FlyerMaker } from "@/components/flyer-maker/FlyerMaker";
import { FlyerProvider } from "@/lib/hooks/useFlyerState";

export default function FlyerMakerPage() {
  return (
    <FlyerProvider>
        <div className="flex flex-col min-h-dvh bg-slate-50">
            <main className="flex-1">
                <FlyerMaker />
            </main>
        </div>
    </FlyerProvider>
  );
}
