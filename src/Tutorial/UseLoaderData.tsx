import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

const UseLoaderData: React.FC = () => {
  const dogUrl = useLoaderData() as string | undefined;
  const navigation = useNavigation();
  return (
    <div>
      UseLoaderData
      <p> navState: {navigation.state}</p>
      {navigation.state === "loading" ? (
        <div>Loading...</div>
      ) : (
        <div>
          {" "}
          {dogUrl && (
            <div>
              {/* <span>DogUrl: {dogUrl}</span> */}
              <img className="rounded-md h-40 w-40" src={dogUrl} alt="Dog" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const dataLoader: () => Promise<string> = async () => {
  const res = await fetch("https://random.dog/woof.json");
  const dog = await res.json();

  return dog.url;
};

export default UseLoaderData;
