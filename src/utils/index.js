// toastify

import { toast } from "react-toastify";

export const notify = (msg, type) => {
    const options = {
      position: 'top-right',
      hideProgressBar: false,
    };
    type ? toast[type](msg, options) : toast(msg, options);
  };