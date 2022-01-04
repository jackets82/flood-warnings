import { useState } from "react";
import Card from "../components/Card";
import MyDialog from "../components/Dialog";
import Header from "../components/Header";

import { floodData } from "../lib/getData";

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
  console.log(data.items);
  const [details, setDetails] = useState(4);
  const [modal, setmodal] = useState(false);
  const [modalMessage, setmodalMessage] = useState("");

  function handleClick(e) {
    setDetails(parseInt(e.target.value));
  }

  return (
    <div className=" flex flex-col inset-0 items-center justify-center text-center px-10 pros max-w-none pb-10">
      <Header handleClick={handleClick} />

      <MyDialog
        ModalOpen={modal}
        modalMessage={modalMessage}
        ModalClose={() => setmodal(false)}
      />
      <div className="grid   lg:max-w-2xl  gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-lg">
        {data.items.map((warning) => {
          return (
            <>
              {warning.severityLevel === details && (
                <Card
                  handleCardClick={() => {
                    setmodalMessage(warning.message), setmodal(true);
                  }}
                  background={
                    warning.severityLevel === 4
                      ? "bg-green-500"
                      : warning.severityLevel === 3
                      ? "bg-yellow-500"
                      : warning.severityLevel === 2
                      ? "bg-orange-500"
                      : "bg-red-500"
                  }
                  location={warning.eaAreaName}
                  severity={warning.severityLevel}
                  description={warning.description}
                  id={warning.floodAreaID}
                  message={warning.message}
                >
                  {warning.severityLevel}
                </Card>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
