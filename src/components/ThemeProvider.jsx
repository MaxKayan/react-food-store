import React from "react";

export default function ThemeProvider({ themeData, children }) {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { theme: themeData });
        }
        return child;
      })}
    </>
  );
}

/* <div>
    {React.cloneElement(this.props.children, { loggedIn: this.state.loggedIn })}
</div> */
