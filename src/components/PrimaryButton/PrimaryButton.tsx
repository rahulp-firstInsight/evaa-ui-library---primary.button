import React from "react";
import "./style.scss";

interface Props {
  hasIcon: boolean;
  buttonLabel: string;
  hasLabel: boolean;
  state: "disabled" | "clicked" | "hover" | "default";
  withIcon: boolean;
  className: any;
}

export const PrimaryButton = ({
  hasIcon = true,
  buttonLabel = "Roboto",
  hasLabel = true,
  state,
  withIcon,
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={`primary-button ${state} with-icon-${withIcon} ${className}`}
    >
      {hasLabel && <div className="text-wrapper">Book Appointment</div>}

      {withIcon && (
        <>
          <>
            {hasIcon && (
              <img
                className="icon-arrows"
                alt="Icon arrows"
                src={
                  state === "clicked"
                    ? "https://c.animaapp.com/hmzEG9xb/img/icon-arrows-5.svg"
                    : state === "hover"
                      ? "https://c.animaapp.com/hmzEG9xb/img/icon-arrows-6.svg"
                      : state === "disabled"
                        ? "https://c.animaapp.com/hmzEG9xb/img/icon-arrows-7.svg"
                        : "https://c.animaapp.com/hmzEG9xb/img/icon-arrows-4.svg"
                }
              />
            )}
          </>
        </>
      )}
    </div>
  );
};
