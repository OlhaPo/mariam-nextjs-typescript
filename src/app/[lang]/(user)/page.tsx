import { Collections } from "@/components/collections";
import { Locale } from "../../../../i18n.config";

export default function Home({ params }: { params: { lang: Locale } }) {
  return (
    <>
      <div className="main">
        <h1 className="font-fredoka font-light text-4xl md:text-5xl relative -top-10 md:top-0">
          <span className="text-center block md:inline mb-1 md:mb-0 ">
            mariam{" "}
          </span>
          crochet jewelry
        </h1>
      </div>
      <Collections lang={params.lang} />
    </>
  );
}
