import useSetting from "@/hooks/useSetting";
import {
  ELEMENT_SOLUBILITY,
  ELEMENT_SOLUBILITY_CHEMICAL,
  ELEMENT_SOLUBILITY_DATA,
  SOLUBILITIES,
  SOLUBILITIES_CHEMICAL,
  SOLUBILITY_DATA,
} from "@/lib/constants";
import { cn } from "@/lib/functions";

export default function SolubilityChart() {
  const { t, color } = useSetting();

  return (
    <article className="px-6 py-12 flex flex-col gap-6">
      <h3 className="text-center">{t.titles.solubilityChart}</h3>
      <section className="overflow-auto">
        <section className="mx-auto animate h-[70vh] w-[100rem] xl:w-[140rem]">
          <section className="grid grid-cols-15 sticky top-0 z-10" style={{ backgroundColor: color }}>
            <div className="bg-dark sticky left-0 z-10" />
            {SOLUBILITIES.map((e) => {
              return (
                <p key={e} className="flex flex-col text-left px-4 py-2">
                  {t.solubilities[e]}
                  <span dangerouslySetInnerHTML={{ __html: SOLUBILITIES_CHEMICAL[e] }} />
                </p>
              );
            })}
          </section>

          {ELEMENT_SOLUBILITY.map((e, i) => {
            const el = ELEMENT_SOLUBILITY_DATA[e];
            return (
              <section
                key={e}
                className={cn("grid grid-cols-15 text-center", {
                  "bg-gray-700/20": i % 2 !== 0,
                })}
              >
                <div className="sticky left-0 flex flex-col items-center justify-center h-full px-4 py-2 bg-dark border-y-[1px] border-gray-700/20">
                  {t.elementSolubilities[e]}
                  <span dangerouslySetInnerHTML={{ __html: ELEMENT_SOLUBILITY_CHEMICAL[e] }} />
                </div>

                <p className="px-4 py-2 flex items-center text-left" style={{ color: SOLUBILITY_DATA[el.Ammonium].color }}>
                  {t.solubility[el.Ammonium]}
                </p>
                <p className="px-4 py-2 flex items-center text-left" style={{ color: SOLUBILITY_DATA[el.Lithium].color }}>
                  {t.solubility[el.Lithium]}
                </p>
                <p className="px-4 py-2 flex items-center text-left" style={{ color: SOLUBILITY_DATA[el.Sodium].color }}>
                  {t.solubility[el.Sodium]}
                </p>
                <p className="px-4 py-2 flex items-center text-left" style={{ color: SOLUBILITY_DATA[el.Potassium].color }}>
                  {t.solubility[el.Potassium]}
                </p>
                <p className="px-4 py-2 flex items-center text-left" style={{ color: SOLUBILITY_DATA[el.Magnesium].color }}>
                  {t.solubility[el.Magnesium]}
                </p>
                <p className="px-4 py-2 flex items-center text-left" style={{ color: SOLUBILITY_DATA[el.Calcium].color }}>
                  {t.solubility[el.Calcium]}
                </p>
                <p className="px-4 py-2 flex items-center text-left" style={{ color: SOLUBILITY_DATA[el.Barium].color }}>
                  {t.solubility[el.Barium]}
                </p>
                <p className="px-4 py-2 flex items-center text-left" style={{ color: SOLUBILITY_DATA[el.IronII].color }}>
                  {t.solubility[el.IronII]}
                </p>
                <p className="px-4 py-2 flex items-center text-left" style={{ color: SOLUBILITY_DATA[el.IronIII].color }}>
                  {t.solubility[el.IronIII]}
                </p>
                <p className="px-4 py-2 flex items-center text-left" style={{ color: SOLUBILITY_DATA[el.CopperII].color }}>
                  {t.solubility[el.CopperII]}
                </p>
                <p className="px-4 py-2 flex items-center text-left" style={{ color: SOLUBILITY_DATA[el.Silver].color }}>
                  {t.solubility[el.Silver]}
                </p>
                <p className="px-4 py-2 flex items-center text-left" style={{ color: SOLUBILITY_DATA[el.Zinc].color }}>
                  {t.solubility[el.Zinc]}
                </p>
                <p className="px-4 py-2 flex items-center text-left" style={{ color: SOLUBILITY_DATA[el.LeadII].color }}>
                  {t.solubility[el.LeadII]}
                </p>
                <p className="px-4 py-2 flex items-center text-left" style={{ color: SOLUBILITY_DATA[el.Aluminum].color }}>
                  {t.solubility[el.Aluminum]}
                </p>
              </section>
            );
          })}
        </section>
      </section>
    </article>
  );
}
