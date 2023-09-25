import React, { memo } from "react";
//memo wraps the component you're trying to export and checks for changes in the components props. it only rerendrs when there are changes in the props.
//It helps with performance issues because you don't ewant to rerender a component unless you have to
interface SearchProps {
  onChange: (text: string) => void;
}

//memo checks the onChange prop value which happens to be a function.
//if the prop changes then the search component will rerender

function Search({ onChange }: SearchProps) {
  console.log("Search rendered!");

  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default memo(Search);
