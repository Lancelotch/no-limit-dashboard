import { Machine } from "xstate";

export default function verifyAccountMachine() {
  return Machine({
    initial: "verifyEmail",
    states: {
      verifyEmail: {
        on: {
          SUBMIT: {
            target: "loadingVerify"
          }
        }
      },
      loadingVerify: {
        invoke: {
          id: "sendEmailLoader",
          src: (ctx, _event) => {
            return (callback, _onEvent) => {
              setTimeout(() => {
                callback({ type: "RESOLVE" });
              }, 1000);
            };
          }
        },
        on: {
          RESOLVE: {
            target: "confirmEmail"
          },
          REJECT: {
            target: "verifyEmail"
          }
        }
      },
      confirmEmail: {
        on: {
          SUBMIT: {
            target: "loadingConfirm"
          }
        }
      },
      loadingConfirm: {
        invoke: {
          id: "confirmEmailLoader",
          src: (ctx, _event) => {
            return (callback, _onEvent) => {
              setTimeout(() => {
                callback({ type: "RESOLVE" });
              }, 1000);
            };
          }
        },
        on: {
          RESOLVE: {
            target: "next"
          },
          REJECT: {
            target: "confirmEmail"
          }
        }
      },
      next: {
        type: "final"
      }
    }
  });
}
