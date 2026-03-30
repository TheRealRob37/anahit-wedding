import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="bg-beige-100">
      {/* ─── Photo block ─────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">

        {/* B&W sepia photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80')",
            filter: 'grayscale(100%) sepia(15%) brightness(0.85)',
          }}
        />

        {/* subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/55" />

        {/* ── Names — top center ── */}
        <div className="absolute top-10 inset-x-0 flex flex-col items-center z-10 px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-display font-light text-white uppercase tracking-[0.25em] text-5xl sm:text-7xl md:text-8xl leading-none">
              ՎԱՀԱՆ
            </p>
            <p className="font-script text-white/70 text-4xl sm:text-5xl leading-none my-2">
              &
            </p>
            <p className="font-display font-light text-white uppercase tracking-[0.25em] text-5xl sm:text-7xl md:text-8xl leading-none">
              ԱՆԱՀԻՏ
            </p>
          </motion.div>
        </div>

        {/* ── Quote — bottom left ── */}
        <motion.div
          className="absolute bottom-20 left-6 sm:left-10 z-10 max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
        >
          <p className="font-serif italic text-white/70 text-sm leading-relaxed">
            ...և երկուսը կդառնան մեկ մարմին
          </p>
        </motion.div>

        {/* ── Torn paper edge ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20" style={{ lineHeight: 0 }}>
          <svg
            viewBox="0 0 1440 64"
            preserveAspectRatio="none"
            className="w-full block"
            style={{ height: '56px' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
                M0,64 L0,44
                L6,52 L11,36 L17,50 L22,30 L29,48 L34,20 L41,42 L46,28 L53,46
                L58,18 L65,40 L70,24 L77,50 L82,16 L89,44 L94,10 L101,38 L106,26
                L113,48 L118,14 L125,40 L130,8 L137,36 L142,22 L149,46 L154,18
                L161,42 L166,28 L173,52 L178,12 L185,38 L190,22 L197,48 L202,10
                L209,36 L214,24 L221,50 L226,14 L233,40 L238,26 L245,52 L250,18
                L257,44 L262,8 L269,34 L274,20 L281,48 L286,12 L293,38 L298,24
                L305,50 L310,14 L317,42 L322,28 L329,54 L334,12 L341,36 L346,22
                L353,48 L358,10 L365,38 L370,24 L377,50 L382,16 L389,42 L394,28
                L401,52 L406,14 L413,40 L418,22 L425,46 L430,12 L437,36 L442,20
                L449,48 L454,10 L461,38 L466,26 L473,52 L478,14 L485,40 L490,24
                L497,50 L502,16 L509,44 L514,8 L521,36 L526,22 L533,50 L538,12
                L545,40 L550,28 L557,54 L562,14 L569,38 L574,24 L581,50 L586,16
                L593,42 L598,28 L605,52 L610,14 L617,40 L622,22 L629,46 L634,10
                L641,38 L646,24 L653,50 L658,16 L665,44 L670,8 L677,36 L682,22
                L689,48 L694,12 L701,40 L706,26 L713,52 L718,14 L725,38 L730,20
                L737,46 L742,10 L749,36 L754,24 L761,52 L766,12 L773,40 L778,26
                L785,50 L790,16 L797,42 L802,28 L809,54 L814,12 L821,38 L826,22
                L833,48 L838,10 L845,36 L850,24 L857,50 L862,14 L869,42 L874,28
                L881,52 L886,16 L893,40 L898,22 L905,46 L910,12 L917,38 L922,24
                L929,50 L934,14 L941,44 L946,8 L953,36 L958,22 L965,48 L970,12
                L977,40 L982,26 L989,54 L994,14 L1001,38 L1006,24 L1013,50 L1018,16
                L1025,42 L1030,28 L1037,52 L1042,14 L1049,38 L1054,20 L1061,46
                L1066,12 L1073,40 L1078,26 L1085,52 L1090,14 L1097,38 L1102,24
                L1109,50 L1114,16 L1121,44 L1126,8 L1133,36 L1138,22 L1145,48
                L1150,12 L1157,40 L1162,26 L1169,52 L1174,14 L1181,38 L1186,22
                L1193,46 L1198,10 L1205,38 L1210,24 L1217,50 L1222,16 L1229,44
                L1234,8 L1241,36 L1246,22 L1253,50 L1258,12 L1265,40 L1270,26
                L1277,52 L1282,14 L1289,38 L1294,24 L1301,48 L1306,12 L1313,40
                L1318,26 L1325,52 L1330,16 L1337,42 L1342,28 L1349,54 L1354,14
                L1361,38 L1366,22 L1373,48 L1378,12 L1385,38 L1390,24 L1397,50
                L1402,18 L1409,42 L1414,28 L1421,50 L1426,20 L1432,44 L1437,30 L1440,38
                L1440,64 Z
              "
              fill="#f4ede0"
            />
          </svg>
        </div>

      </section>
    </div>
  )
}
