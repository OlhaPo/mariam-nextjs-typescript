import { Collections } from "@/components/Collections";
import { Locale } from "../../../../i18n.config";

export default function Home({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <>
      <div className="main">
        <h1 className="font-fredoka font-light">
          <span className="text-center block md:inline mb-1 md:mb-0">
            mariam
          </span>{" "}
          crochet jewelry
        </h1>
      </div>
      <Collections lang={params.lang} />
    </>
  );
}
