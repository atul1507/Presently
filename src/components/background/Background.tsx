import DotPattern from "./DotPattern";
import Glow from "./Glow";
import MeshGradient from "./MeshGradient";
import Noise from "./Noise";

export default function Background() {
  return (
    <>
      <MeshGradient />
      <Glow />
      <DotPattern />
      <Noise />
    </>
  );
}