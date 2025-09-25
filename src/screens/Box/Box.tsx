import React from "react";
import { PrimaryButton } from "../../components/PrimaryButton";
import "./style.scss";

export const Box = (): JSX.Element => {
  return (
    <div className="box" data-model-id="310:2090-frame">
      <div className="div">
        <PrimaryButton
          className="primary-button-instance"
          state="default"
          withIcon={false}
        />
        <PrimaryButton
          className="primary-button-instance"
          state="clicked"
          withIcon={false}
        />
        <PrimaryButton
          className="primary-button-instance"
          state="hover"
          withIcon={false}
        />
        <PrimaryButton
          className="primary-button-instance"
          state="disabled"
          withIcon={false}
        />
        <PrimaryButton
          className="primary-button-instance"
          state="default"
          withIcon
        />
        <PrimaryButton
          className="primary-button-instance"
          state="clicked"
          withIcon
        />
        <PrimaryButton
          className="primary-button-instance"
          state="hover"
          withIcon
        />
        <PrimaryButton
          className="primary-button-instance"
          state="disabled"
          withIcon
        />
      </div>
    </div>
  );
};
