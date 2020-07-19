import React, { FC, ReactElement } from "react";

const FeatureTwo: FC = (): ReactElement => {
  return (
    <div>
      <h2>
        <span role="img" aria-label="emoji-party-popper">
          🎉
        </span>
        &nbsp; Feature Two&nbsp;
        <span role="img" aria-label="emoji-party-popper">
          🎉
        </span>
      </h2>
    </div>
  );
};

export default FeatureTwo;
