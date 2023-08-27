import React from "react";
import Showtimes from "./timeslot";

const detail = () => {
  return (
    <>
      <div className="flex flex-col h-max bg-green-100 p-8 rounded shadow-md mt-8">
        <h1>Card Title</h1>
        <hr className="h-px my-2 w-64 mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <h3>
          lorem njcJAKNNCANCNNCNCANnsnjnajx njanjaNSJKNJ XNNJKANSJFNANNANDLJK
          NZN KSNDJKZJCNSJNNJNajnlaAnSNJFNJKFNJKA CNJBDShahfeJNALKjnjk
          sdajlabnlsdankds asvbhjbjhbhjbvgvvln bashiubfb
          vdviabudinsdfHOPIEFJBNRBUARNJAJCDNAS;ASJDJDNJKLA
          VDUNAUDNJDNOIEJFEWJNSDANSVDVSHNFAWJVNIAVDSNAIJICNJNAVUIPARHUIRGHWRIJpNCJKNCASNHEPNJVDNAPSJVDLAVNJKAVLNADNHAVLJN
        </h3>
        <h4 className="mt-16"> Location </h4>
        <h4 className="mt-8 mb-4"> Available Slots </h4>
        <Showtimes />
      </div>
    </>
  );
};

export default detail;
