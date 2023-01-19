// ! Custom Middleware

export const loggerMiddleware =
  (store: any) => (next: any) => (action: any) => {
    if (!action.type) {
      return next(action);
    }

    console.log("type", action.type);
    console.log("payload", action.payload);
    console.log("currentState", store.getState());

    next(action);

    console.log("next state", store.getState());
  };
