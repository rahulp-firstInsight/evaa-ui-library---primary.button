import React from "react";

interface Props {
  hasIcon: boolean;
  buttonLabel: string;
  hasLabel: boolean;
  state: "disabled" | "clicked" | "hover" | "default";
  withIcon: boolean;
  className: any;
}

export const CustomButton = ({
  hasIcon = true,
  buttonLabel = "Book Appointment",
  hasLabel = true,
  state,
  withIcon,
  className,
}: Props): JSX.Element => {
  const getButtonClasses = () => {
    let baseClasses = "btn d-inline-flex align-items-center gap-3 px-4 py-2 rounded-2 text-white fw-medium position-relative";
    
    switch (state) {
      case "default":
        return `${baseClasses} btn-primary`;
      case "hover":
        return `${baseClasses} btn-primary opacity-75`;
      case "clicked":
        return `${baseClasses} btn-primary opacity-50`;
      case "disabled":
        return `${baseClasses} btn-secondary disabled`;
      default:
        return `${baseClasses} btn-primary`;
    }
  };

  const getButtonStyle = () => {
    const baseStyle: React.CSSProperties = {
      backgroundColor: state === "disabled" ? "#8d8a8b" : "#ec407a",
      border: "none",
      height: "49px",
      fontFamily: '"Wix Madefor Display", Helvetica',
      fontSize: "17px",
      lineHeight: "17px",
      whiteSpace: "nowrap",
    };

    if (state === "hover") {
      baseStyle.background = "linear-gradient(0deg, rgba(255, 255, 255, 0.47) 0%, rgba(255, 255, 255, 0.47) 100%), linear-gradient(0deg, rgba(236, 64, 122, 1) 0%, rgba(236, 64, 122, 1) 100%)";
    } else if (state === "clicked") {
      baseStyle.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.47) 0%, rgba(0, 0, 0, 0.47) 100%), linear-gradient(0deg, rgba(236, 64, 122, 1) 0%, rgba(236, 64, 122, 1) 100%)";
    }

    return baseStyle;
  };

  return (
    <button
      className={`${getButtonClasses()} ${className}`}
      style={getButtonStyle()}
      disabled={state === "disabled"}
    >
      {hasLabel && (
        <span className="text-white">
          {buttonLabel}
        </span>
      )}

      {withIcon && hasIcon && (
        <img
          className="ms-2"
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
          style={{
            height: "27.83px",
            width: "27.8px"
          }}
        />
      )}
    </button>
  );
};
