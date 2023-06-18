import { buildLegacyTheme } from "sanity";

const props = {
  "--light-beige": "#F5EFE7",
  "--dark-beige": "#D8C4B6",
  "--neutral-teal": "#4F709C",
  "--dark-blue": "#212A3E",

  "--status-green": "#0F9D58",
  "--status-yellow": "#F4B400",
  "--status-red": "#DB4437",
};

export const myTheme = buildLegacyTheme({
  /* Base Theme Colors */
  "--black": props["--dark-blue"],
  "--white": props["--light-beige"],

  "--gray": "#9BA4B5",
  "--gray-base": "#9BA4B5",

  "--component-bg": props["--dark-blue"],
  "--component-text-color": props["--light-beige"],

  /* Brand */
  "--brand-primary": props["--neutral-teal"],

  /* Default Button */
  "--default-button-color": "#3D3D3D",
  "--default-button-primary-color": props["--neutral-teal"],
  "--default-button-success-color": props["--status-green"],
  "--default-button-warning-color": props["--status-yellow"],
  "--default-button-danger-color": props["--status-red"],

  /* State */
  "--state-info-color": props["--neutral-teal"],
  "--state-success-color": props["--status-green"],
  "--state-warning-color": props["--status-yellow"],
  "--state-danger-color": props["--status-red"],

  /* Navbar */
  "--main-navigation-color": props["--dark-blue"],
  "--main-navigation-color--inverted": props["--light-beige"],

  "--focus-color": props["--neutral-teal"],
});
