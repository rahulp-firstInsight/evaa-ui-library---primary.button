import React from "react";
import { CustomButton } from "../../components/PrimaryButton/CustomButton";

export const Box = (): JSX.Element => {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div 
        className="border border-primary border-2 rounded p-4"
        style={{
          width: "515px",
          height: "307px",
          borderStyle: "dashed",
          borderColor: "#8a38f5",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div className="row g-2">
          <div className="col-6">
            <CustomButton
              className="mb-2"
              state="default"
              withIcon={false}
              hasIcon={true}
              hasLabel={true}
              buttonLabel="Book Appointment"
            />
          </div>
          <div className="col-6">
            <CustomButton
              className="mb-2"
              state="default"
              withIcon={true}
              hasIcon={true}
              hasLabel={true}
              buttonLabel="Book Appointment"
            />
          </div>
          <div className="col-6">
            <CustomButton
              className="mb-2"
              state="clicked"
              withIcon={false}
              hasIcon={true}
              hasLabel={true}
              buttonLabel="Book Appointment"
            />
          </div>
          <div className="col-6">
            <CustomButton
              className="mb-2"
              state="clicked"
              withIcon={true}
              hasIcon={true}
              hasLabel={true}
              buttonLabel="Book Appointment"
            />
          </div>
          <div className="col-6">
            <CustomButton
              className="mb-2"
              state="hover"
              withIcon={false}
              hasIcon={true}
              hasLabel={true}
              buttonLabel="Book Appointment"
            />
          </div>
          <div className="col-6">
            <CustomButton
              className="mb-2"
              state="hover"
              withIcon={true}
              hasIcon={true}
              hasLabel={true}
              buttonLabel="Book Appointment"
            />
          </div>
          <div className="col-6">
            <CustomButton
              className="mb-2"
              state="disabled"
              withIcon={false}
              hasIcon={true}
              hasLabel={true}
              buttonLabel="Book Appointment"
            />
          </div>
          <div className="col-6">
            <CustomButton
              className="mb-2"
              state="disabled"
              withIcon={true}
              hasIcon={true}
              hasLabel={true}
              buttonLabel="Book Appointment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
