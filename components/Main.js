import React from "react";

export default function Main(props) {
  const { children } = props;
  return <main className="flex-1 flex flex-col  p-4 sm:p-8 ">{children}</main>;
}

// import React from "react";

// const Main = (props) => {
//   const { children } = props;
//   return <main>{children}</main>;
// };

// export default Main;
