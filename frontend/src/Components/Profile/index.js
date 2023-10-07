import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Provider from "./Provider";
import InputForm from "../Auth/InputForm";
import countries from "./countries.json";

export default function ProfilePage() {
  const [phone, setPhone] = useState("");

  const [checkedProvider, setCheckedProvider] = useState(null);
  const toggleProvider = (provider) => () => {
    if (provider === checkedProvider) {
      setCheckedProvider(null);
    } else {
      setCheckedProvider(provider);
    }
  };
  return (
    <div className="flex flex-col bg-dominant py-8 px-14">
      <h1 className="text-xl font-normal mb-4">Choose your provider</h1>
      <div className="flex space-x-6 border">
        {providers.map((provider) => (
          <Provider
            key={provider.name}
            {...provider}
            toggleProvider={toggleProvider}
            isChecked={provider.name === checkedProvider}
          />
        ))}
      </div>
      <h1 className="text-xl font-normal mb-4 mt-12">
        Add your general informations
      </h1>
      <form className="flex flex-col space-y-12">
        <div className="flex space-x-12">
          <div className="flex flex-col flex-1 space-y-4">
            <div className="space-y-2">
              <h3>First Name</h3>
              <InputForm placeholder="First Name" />
            </div>
            <div className="space-y-2">
              <h3>Last Name</h3>
              <InputForm placeholder="Last Name" />
            </div>
            <div className="space-y-2">
              <h3>Email</h3>
              <InputForm placeholder="First Name" />
            </div>
            <div className="space-y-2">
              <h3>Email</h3>
              <select className="select select-bordered bg-white border-gray-300 w-full focus:outline-none">
                <option selected>Normal Apple</option>
                <option>Normal Orange</option>
                <option>Normal Tomato</option>
              </select>
            </div>
            <div className="space-y-2 w-full outline-none">
              <h3>Phone Number</h3>
              <PhoneInput
                country={"dz"}
                enableSearch={true}
                value={phone}
                inputStyle={{ width: "100%" }}
                containerStyle={{ width: "100%", outline: "none" }}
                onChange={(phone) => setPhone(phone)}
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 space-y-4">
            <div className="space-y-2">
              <h3>Credit Card</h3>
              <InputForm placeholder="YYYY YYYY YYYY YYYY" />
            </div>
            <div className="space-y-2">
              <h3>Secret Code</h3>
              <InputForm placeholder="Secret Code" />
            </div>
            <div className="space-y-2">
              <h3>Job type</h3>
              <select className="select select-bordered bg-white border-gray-300 w-full focus:outline-none">
                <option selected>Maçon</option>
                <option>Maçon</option>
                <option>Maçon</option>
              </select>
            </div>
            <div className="space-y-2">
              <h3>Country</h3>
              <select className="select select-bordered bg-white border-gray-300 w-full focus:outline-none">
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.country}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="space-x-8 flex items-center justify-center">
          <button className="btn w-1/3 btn-outline btn-primary">Cancel</button>
          <button className="btn w-1/3 btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}

const providers = [
  {
    name: "Mastercard",
    image: require("../Images/Processor/Mastercardprovider.png"),
  },
  {
    name: "Skrill",
    image: require("../Images/Processor/Skrillprovider.png"),
  },
  {
    name: "Stripe",
    image: require("../Images/Processor/Stripeprovider.png"),
  },
  {
    name: "USDT",
    image: require("../Images/Processor/USDTprovider.png"),
  },
  {
    name: "Visa",
    image: require("../Images/Processor/Visaprovider.png"),
  },
];
