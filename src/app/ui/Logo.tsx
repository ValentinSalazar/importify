
interface Props {
    alto: number,
    ancho: number,
}

export default function Logo({ alto, ancho }:Props) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" height={alto} width={ancho} viewBox="0 0 479 714" fill="none">
        <path d="M202.79 557.02L156.42 603.39L182.3 629.14C196.64 643.42 196.7 666.83 182.43 681.18L172.29 691.37C158.01 705.71 134.6 705.77 120.25 691.5L33.1701 604.84L37.0601 600.96L143.42 494.6L202.79 557.02Z" fill="white"/>
        <path d="M146.2 713.84C133.27 713.84 121.14 708.85 112.02 699.77L16.6401 604.86L135.42 486.1L210.92 565.4L172.94 603.38L190.53 620.88C209.47 639.73 209.54 670.48 190.7 689.42L180.56 699.61C171.46 708.76 159.3 713.81 146.33 713.84C146.28 713.84 146.24 713.84 146.2 713.84ZM49.6901 604.83L128.48 683.23C133.19 687.92 139.48 690.5 146.2 690.5C146.22 690.5 146.24 690.5 146.26 690.5C153 690.48 159.3 687.87 164.01 683.14L174.15 672.95C183.92 663.13 183.88 647.19 174.06 637.41L139.89 603.41L186.49 556.81L143.2 511.3L49.6901 604.83Z" fill="white"/>
        <path d="M247.72 390.29L316.8 321.21L322.04 315.9C341.58 294.04 350.83 268.23 350.83 236.61C350.83 168.36 295.5 113.03 227.25 113.03C159 113.03 103.67 168.36 103.67 236.61C103.67 274.04 126.15 314.09 151.27 338.32C152.56 339.47 153.82 340.66 155.04 341.88L226.45 411.23L227.64 412.37L287.06 473.9L313.56 500.92L368.1 555.46L393.85 529.58C408.13 515.24 431.54 515.18 445.89 529.45L456.08 539.59C470.42 553.87 470.48 577.28 456.21 591.63L369.55 678.71L365.67 674.82L226.22 536.22L61.5401 363.15C59.1501 360.64 56.9301 357.98 54.8901 355.18L50.3101 348.89C20.7901 310.83 10.9601 272.54 12.8901 220.84C16.9801 111.23 101.85 20.9101 211.21 12.4401C338.04 2.61005 443.99 102.61 443.99 227.36C443.99 277.1 434.79 312.41 406.5 348.89L402.62 353.9C398.57 359.13 394.22 364.13 389.59 368.87L308.6 451.83L247.72 390.29Z" fill="white"/>
        <path d="M369.56 695.26L357.41 683.08L217.76 544.28L53.0701 371.21C50.3501 368.35 47.7801 365.28 45.4501 362.07L40.9701 355.92C11.0101 317.24 -0.879927 276.7 1.22007 220.43C5.56007 104.14 95.4401 9.73004 210.3 0.830045C274.49 -4.14996 335.72 17.07 382.72 60.56C429.07 103.46 455.65 164.26 455.65 227.38C455.65 282.2 444.08 319.49 415.71 356.06L411.84 361.06C407.52 366.63 402.85 372.01 397.94 377.04L315.09 458.8L239.77 382.46L313.53 307.93C331.02 288.27 339.16 265.61 339.16 236.62C339.16 174.91 288.96 124.71 227.25 124.71C165.54 124.71 115.34 174.91 115.34 236.62C115.34 271.66 137.35 308.62 159.22 329.79C160.58 331.02 161.93 332.29 163.23 333.58L236.03 404.28L295.45 465.81L321.89 492.76L368.09 538.96L385.6 521.37C394.7 512.22 406.86 507.17 419.83 507.14C419.87 507.14 419.91 507.14 419.95 507.14C432.88 507.14 445.01 512.13 454.13 521.21L464.32 531.35C473.47 540.45 478.52 552.61 478.55 565.58C478.58 578.55 473.59 590.74 464.48 599.88L369.56 695.26ZM234.55 528.08L369.52 662.22L447.94 583.42C452.65 578.69 455.23 572.37 455.21 565.63C455.19 558.89 452.58 552.59 447.85 547.88L437.66 537.74C432.95 533.05 426.66 530.47 419.94 530.47C419.92 530.47 419.9 530.47 419.88 530.47C413.14 530.49 406.84 533.1 402.13 537.83L368.13 572L305.31 509.19L278.73 482.09L219.4 420.65L218.37 419.67L146.78 350.15C145.72 349.09 144.61 348.04 143.48 347.03L143.15 346.73C119.56 323.96 92.0001 281.46 92.0001 236.62C92.0001 162.05 152.67 101.37 227.25 101.37C301.83 101.37 362.5 162.04 362.5 236.62C362.5 271.3 352.11 299.78 330.75 323.68L330.36 324.1L325.12 329.41L264.19 390.34L308.56 435.2L381.25 360.74C385.54 356.35 389.63 351.65 393.4 346.78L397.27 341.78C422.49 309.26 432.32 277.19 432.32 227.39C432.32 170.75 408.46 116.19 366.87 77.69C324.7 38.66 269.74 19.64 212.1 24.1C109.07 32.09 28.4401 116.87 24.5401 221.31C22.6301 272.39 32.7701 307.29 59.5201 341.77L59.7301 342.05L64.3101 348.34C66.0401 350.72 67.9501 353.01 69.9801 355.13L234.55 528.08Z" fill="white"/>
        </svg>
    )
}