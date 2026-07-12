import Antigravity from "../components/Antigravity";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatIDo from "../components/WhatIDo";
import MyImpact from "../components/MyImpact";
import CtaFooter from "../components/CtaFooter";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      <Header />

      {/* HERO SECTION WRAPPER */}
      <div className="flex-grow min-h-[calc(100vh-120px)] flex flex-col justify-center" style={{ position: "relative", width: "100%" }}>

        {/* Background effect */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Antigravity
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color="#5227FF"
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>

        {/* Foreground content */}
        <div style={{ position: "relative", zIndex: 0 }}>
          <Banner />
        </div>
      </div>

      {/* Added portfolio sections */}
      <WhatIDo />
      <MyImpact />
      <CtaFooter />

      <Footer />
    </div>
  );
}

export default Home;