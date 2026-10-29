import { Home } from "../components/Home";
import { ProgramBand } from "../components/ProgramBand";
import { HomeSections } from "../components/HomeSections";
import { CompositeRods } from "../components/CompositeRods";
import { HardfacingRope } from "../components/HardfacingRope";

export default function Page() {
  return (
    <>
      <Home />
      <ProgramBand />
      <HomeSections>
        <CompositeRods />
        <HardfacingRope />
      </HomeSections>
    </>
  );
}
