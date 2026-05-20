const paths = [
  // 1: Gentle concave arc
  "M0,0 H1440 V20 Q720,120 0,20 Z",
  // 2: Asymmetric wave, deeper left
  "M0,0 H1440 V30 C1080,110 360,10 0,50 Z",
  // 3: Smooth S-curve
  "M0,0 H1440 V50 C1080,10 360,110 0,30 Z",
  // 4: Wide shallow arc
  "M0,0 H1440 V10 Q720,80 0,10 Z",
  // 5: Double wave
  "M0,0 H1440 V20 C1200,90 960,10 720,60 S240,10 0,40 Z",
  // 6: Asymmetric right-heavy
  "M0,0 H1440 V50 C1080,10 360,100 0,20 Z",
  // 7: Steep left gentle right
  "M0,0 H1440 V15 C1080,25 480,110 0,70 Z",
  // 8: Organic compound curve
  "M0,0 H1440 V35 C1200,90 800,15 480,65 S160,45 0,25 Z",
  // 9: Gentle tilt wave
  "M0,0 H1440 V10 Q1080,90 720,45 Q360,0 0,45 Z",
  // 10: Deep concave
  "M0,0 H1440 V5 Q720,115 0,5 Z",
];

interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  variant: number;
}

export default function WaveDivider({
  topColor,
  bottomColor,
  variant,
}: WaveDividerProps) {
  const d = paths[(variant - 1) % paths.length];

  return (
    <div style={{ backgroundColor: bottomColor }}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-[40px] sm:h-[60px] lg:h-[80px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={d} fill={topColor} />
      </svg>
    </div>
  );
}
