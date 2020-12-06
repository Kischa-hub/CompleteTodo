import React from "react";
import imgNotFound from "../assets/imgs/notFound.png";

function notFound(props) {
  return (
    <React.Fragment>
      <table>
        <tr>
          <td>
            {" "}
            <h1>Page Not Found</h1>
          </td>
        </tr>
        <tr>
          <img src={imgNotFound} alt="not Found" width="500" height="600" />
        </tr>
      </table>
    </React.Fragment>
  );
}

export default notFound;
