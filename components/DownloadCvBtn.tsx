import React from "react";
import CustomLink from "./CustomLink";

function DownloadCvBtn() {
  return (
     

<CustomLink
className="text-violet-700 dark:text-violet-500"
href={"CV-Valentin EREMIA.pdf"} locale={false} download='CV-Valentin EREMIA.pdf'
aria-label={`Download my CV`}  title={`Download my CV`}>
 
Download my CV {' '}
</CustomLink>
  );
}

export default DownloadCvBtn;
