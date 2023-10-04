import { Collections } from "@/components/Collections";

export default function Home() {
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
      <Collections />
    </>
  );
}
