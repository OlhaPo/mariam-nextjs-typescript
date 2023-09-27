import { Fredoka } from "next/font/google";
import Collections from "@/components/Collections";
import Contacts from "@/components/Contacts";

export const fredoka = Fredoka({ subsets: ["latin"], weight: ["300", "400"] });

export default function Home() {
  return (
    <>
      <div className="main">
        <h1 className={fredoka.className}>
          <span className="text-center block md:inline mb-1 md:mb-0">
            mariam
          </span>{" "}
          crochet jewelry
        </h1>
      </div>
      <Collections />
      <Contacts />
    </>
  );
}
