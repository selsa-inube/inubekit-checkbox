import { inube } from "@inubekit/foundations";

const tokens = {
  border: {
    color: {
      active: inube.palette.neutral.N80,
      indeterminate: inube.palette.neutralAlpha.N0A,
      checked: inube.palette.neutralAlpha.N0A,
      invalid: inube.palette.red.R400,
      disabled: inube.palette.neutral.N40,
    },
  },
  background: {
    color: {
      active: inube.palette.neutral.N0,
      indeterminate: inube.palette.blue.B400,
      checked: inube.palette.blue.B400,
      invalid: inube.palette.blue.B400,
      disabled: inube.palette.neutral.N20,
    },
  },
  vector: {
    color: {
      indeterminate: inube.palette.neutral.N0,
      checked: inube.palette.neutral.N0,
      invalid: inube.palette.neutral.N0,
      disabled: inube.palette.neutral.N60,
    },
  },
  outline: {
    color: {
      hover: inube.palette.blue.B300,
    },
  },
};

export { tokens };
