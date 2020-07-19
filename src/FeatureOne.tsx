import React, { FC, ReactElement } from "react";

const FeatureOne: FC = (): ReactElement => {
  return (
    <div>
      <h2>
        <span role="img" aria-label="emoji-unicorn">
          🦄
        </span>
        &nbsp; Feature One&nbsp;
        <span role="img" aria-label="emoji-unicorn">
          🦄
        </span>
      </h2>
    </div>
  );
};

export default FeatureOne;
