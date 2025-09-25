import React from "react";
import { CustomButton } from "../../components/PrimaryButton/CustomButton";
import "./style.scss";

export const Box = (): JSX.Element => {
  return (
    <div className="box" data-model-id="310:2090-frame">
      <div className="div">
        <CustomButton
          className="primary-button-instance"
          state="default"
          withIcon={false}
          hasIcon={true}
          hasLabel={true}
          buttonLabel="Book Appointment"
        />
        <CustomButton
          className="primary-button-instance"
          state="clicked"
          withIcon={false}
          hasIcon={true}
          hasLabel={true}
          buttonLabel="Book Appointment"
        />
        <CustomButton
          className="primary-button-instance"
          state="hover"
          withIcon={false}
          hasIcon={true}
          hasLabel={true}
          buttonLabel="Book Appointment"
        />
        <CustomButton
          className="primary-button-instance"
          state="disabled"
          withIcon={false}
          hasIcon={true}
          hasLabel={true}
          buttonLabel="Book Appointment"
        />
        <CustomButton
          className="primary-button-instance"
          state="default"
          withIcon
          hasIcon={true}
          hasLabel={true}
          buttonLabel="Book Appointment"
        />
        <CustomButton
          className="primary-button-instance"
          state="clicked"
          withIcon
          hasIcon={true}
          hasLabel={true}
          buttonLabel="Book Appointment"
        />
        <CustomButton
          className="primary-button-instance"
          state="hover"
          withIcon
          hasIcon={true}
          hasLabel={true}
          buttonLabel="Book Appointment"
        />
        <CustomButton
          className="primary-button-instance"
          state="disabled"
          withIcon
          hasIcon={true}
          hasLabel={true}
          buttonLabel="Book Appointment"
        />
      </div>
    </div>
  );
};
