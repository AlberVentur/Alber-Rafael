import React from "react";
import { Composition } from "remotion";
import { AlexShort } from "./videos/alejandro/Alex";
import { TOTAL, FPS } from "./videos/alejandro/story";
import { ZanzibarShort } from "./videos/zanzibar/Zanzibar";
import { TOTAL as Z_TOTAL, FPS as Z_FPS } from "./videos/zanzibar/story";
import { EmuShort } from "./videos/emu/Emu";
import { TOTAL as E_TOTAL, FPS as E_FPS } from "./videos/emu/story";
// Registra cada short nuevo aquí, con su propio id.
export const Root: React.FC = () => (
  <>
    <Composition id="Alejandro" component={AlexShort} durationInFrames={TOTAL} fps={FPS} width={1080} height={1920} />
    <Composition id="Zanzibar" component={ZanzibarShort} durationInFrames={Z_TOTAL} fps={Z_FPS} width={1080} height={1920} />
    <Composition id="Emu" component={EmuShort} durationInFrames={E_TOTAL} fps={E_FPS} width={1920} height={1080} />
  </>
);
