import React from "react";

const Script = () => {
    return (
      <>
        document.ready(function()
        {document.getElementById("myInput").on("keyup", function () {
          let value = this.value.toLowerCase();
          document.querySelectorAll("#myTable tr").filter(function () {
            this.toggle(this.innerText.toLowerCase().indexOf(value) > -1);
          });
        })}
        ;{"}"});
      </>
    );
  };

export default Script;