import React from "react";
import { Composition } from "remotion";
import { SelfTest } from "./selftest/SelfTest";
import { PrimerosGigantes } from "./videos/primeros-gigantes/Video";
import PGTL from "./videos/primeros-gigantes/timeline.json";
// VIDEO-REGISTRY: Claude adds one <Composition> per video below (id = slug in PascalCase, duration from timeline.json).
export const Root: React.FC = () => <>
  <Composition id="SelfTest" component={SelfTest} width={1920} height={1080} fps={30} durationInFrames={120} />
  <Composition id="PrimerosGigantes" component={PrimerosGigantes} width={1920} height={1080} fps={30} durationInFrames={Math.ceil(PGTL.duration * 30)} />
</>;
