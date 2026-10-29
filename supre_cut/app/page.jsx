import { Home } from "../components/Home";
import { ProgramBand } from "../components/ProgramBand";
import { HomeSections } from "../components/HomeSections";
import { CompositeRods } from "../components/CompositeRods";
import { HardfacingRope } from "../components/HardfacingRope";
import { TinningRods } from "../components/TinningRods";

export default function Page() {
  return (
    <>
      <Home />
      <ProgramBand />
      <HomeSections>
        <CompositeRods />
        <HardfacingRope />
        <TinningRods />
      </HomeSections>
    </>
  );
}
