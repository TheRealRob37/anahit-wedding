export default function TornEdge({ fill = '#f4ede0' }: { fill?: string }) {
  return (
    <div style={{ lineHeight: 0, display: 'block' }}>
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-8 sm:h-12 block" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,48 L0,28 Q24,8 48,24 Q72,40 96,18 Q120,0 144,22 Q168,42 192,16 Q216,0 240,26 Q264,44 288,14 Q312,0 336,24 Q360,42 384,16 Q408,0 432,28 Q456,46 480,18 Q504,0 528,22 Q552,40 576,12 Q600,0 624,26 Q648,44 672,16 Q696,0 720,24 Q744,42 768,14 Q792,0 816,28 Q840,46 864,18 Q888,0 912,24 Q936,42 960,16 Q984,0 1008,26 Q1032,44 1056,14 Q1080,0 1104,22 Q1128,40 1152,16 Q1176,0 1200,24 Q1224,42 1248,18 Q1272,0 1296,26 Q1320,44 1344,16 Q1368,0 1392,22 Q1416,40 1440,20 L1440,48 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
