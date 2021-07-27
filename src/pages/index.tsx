import { FunctionComponent, useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";

const donate = () => {
  const [amount, setAmount] = useState(10);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const addPaypalScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=AU8XWHf1G4BWUrZbS3XigRh90MeUdKsC9c7CgwN7LTiqLVW8UxKGJYgmCb64lDHowY2pYGWtVgp-HSmB`;
      script.async = true;

      script.onload = () => setScriptLoaded(true);

      document.body.appendChild(script);
    };
    addPaypalScript();
  }, []);

  const data = [
    {
      name: "book 1",
      price: 12,
    },
    {
      name: "book 2",
      price: 15,
    },
    {
      name: "book 3",
      price: 25,
    },
    {
      name: "book 4",
      price: 25,
    },
    {
      name: "book 5",
      price: 14,
    },
    {
      name: "book 6",
      price: 23,
    },
    {
      name: "book 7",
      price: 11,
    },
    {
      name: "book 8",
      price: 32,
    },
    {
      name: "book 9",
      price: 0.5,
    },
    {
      name: "book 10",
      price: 1,
    },
  ];

  const listItems = data.map((item, index) => (
    <div key={index} className="grid place-items-center">
      <div className="flex flex-col items-center px-4 py-6 mx-auto space-y-4 rounded-md md:w-10/12 bg-gray-dark">
        <h1>{item.name}</h1>
        <div className="flex space-x-10">
          <p className="textBlock-subtitle">${item.price}</p>
        </div>
        {scriptLoaded ? (
          <PayPalButton
            amount={item.price}
            onSuccess={(details, data) => {
              //save the transaction
              // console.log(details);
            }}
          />
        ) : (
          <span>Loading...</span>
        )}{" "}
      </div>
    </div>
  ));

  return (
    <>
      <div className="flex flex-col items-center px-4 py-6 mx-auto space-y-4 rounded-md md:w-10/12">
        <h1 className="text-5xl textBlock-title">Libros</h1>
      </div>
      <div className="grid h-full gap-2 p-6 lg:px-24 md:grid-cols-2">
        {listItems}
      </div>
    </>
  );
};

export default donate;
