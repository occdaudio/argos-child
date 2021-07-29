import AppFrame from "./components/app-frame";
import StatusBar from "./components/status-bar";

// screen components
import ListRooms from "./pages/list-rooms";
import EnterPassword from "./pages/enter-password";

import _ from "lodash";

import { useMachine } from "@xstate/react";
import argosChildMachine from "./argos-child-machine.js";
import { inspect } from "@xstate/inspect";

if (process.env.NODE_ENV === "development") {
  inspect({
    iframe: false, // open in new window
  });
}

function App() {
  let peer;

  let [state, send] = useMachine(argosChildMachine, {
    devTools:
      process.env.NODE_ENV === "development" && typeof window !== "undefined",
  });

  return (
    <div className="App">
      <AppFrame>
        <StatusBar room={_.get(state, "context.room.name")} />
        <Screen state={state.value} context={state.context} send={send} />
      </AppFrame>
    </div>
  );
}

export default App;

function Screen({ context, state, send }) {
  switch (state) {
    case "list_rooms":
      return <ListRooms send={send} context={context} />;

    case "enter_password":
      return <EnterPassword send={send} context={context} />;
  }
  return <div></div>;
}
