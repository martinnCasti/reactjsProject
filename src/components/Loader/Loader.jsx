import React from "react";
import { RaceBy } from "@uiball/loaders";

function Loader() {
  return (
    <div className="text-center">
      <RaceBy size={120} lineWeight={10} speed={1.5} color="black" />;
    </div>
  );
}

export default Loader;
