import React, { FC } from "react";
import {
  createInstance,
  OptimizelyFeature,
  OptimizelyProvider,
} from "@optimizely/react-sdk";
import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";
import GlobalStyle from "./GlobalStyle";

const optimizely = createInstance({
  sdkKey: process.env.REACT_APP_OPTIMIZELY_SDK_KEY || "3V4PkkZ8SmkbKVAn6Ry1B",
});

export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
};

const App: FC = () => {
  if (!localStorage.getItem("userID")) {
    const generateUserID = `user-${getRandomInt(10000)}`;
    localStorage.setItem("userID", generateUserID);
  }
  const userID: string = localStorage.getItem("userID") as string;
  return (
    <div>
      <GlobalStyle />
      <div>
        <h1>Hello World!</h1>
        <OptimizelyProvider
          optimizely={optimizely}
          user={{
            id: userID,
          }}
        >
          <OptimizelyFeature feature="hello_world">
            {(enabled) => (enabled ? <FeatureOne /> : <FeatureTwo />)}
          </OptimizelyFeature>
        </OptimizelyProvider>
      </div>
    </div>
  );
};

export default App;
