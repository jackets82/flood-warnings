import { useState } from "react";
import Card from "../components/Card";

import { floodData } from "../lib/getData";
import { Dialog } from "@headlessui/react";

export async function getStaticProps() {
  const data = await floodData();
  return {
    props: {
      data,
    },
    revalidate: 500,
  };
}

export default function Home({ data }) {
  const [isOpen, setisOpen] = useState(false);
  const [message, setmessage] = useState();

  return (
    <div className="bg-violet-400 flex flex-col inset-0 items-center justify-center text-center px-10 prose max-w-none pb-10">
      <h1 className=" text-5xl font-bold py-5 underline">Flood Warnings</h1>
      <div className="grid lg:grid-cols-3 lg:max-w-2xl md:grid-cols-2 gap-4 grid-cols-1 max-w-lg">
        {data.items.map((warning) => (
          <>
            <Card
              handleClick={() => setisOpen(true)}
              background={
                warning.severityLevel === 1
                  ? "bg-green-500"
                  : warning.severityLevel === 2
                  ? "bg-yellow-500"
                  : warning.severityLevel === 3
                  ? "bg-orange-500"
                  : "bg-red-500"
              }
              location={warning.eaAreaName}
              severity={warning.severityLevel}
              description={warning.description}
              key={warning.floodAreaID}
              message={warning.message}
            >
              {warning.severityLevel}
            </Card>
          </>
        ))}
      </div>
    </div>
  );
}
