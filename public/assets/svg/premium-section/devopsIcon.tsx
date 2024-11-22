import * as React from "react"
import { SVGProps } from "react"
const DevopsIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={29}
        fill="none"
        {...props}
    >
        <path
            fill="#EA4335"
            d="M0 2.578v7.733c0 1.45.796 2.578 1.91 2.578h28.18c.955 0 1.91-1.128 1.91-2.578V2.578C31.84 1.128 31.045 0 29.93 0H1.91C.797 0 0 1.128 0 2.578Zm12.736 5.478V4.833h-1.592v3.223h1.592Zm-7.96 0H7.96V4.833H4.776v3.223Zm23.88 1.61H3.185V3.223h25.473v6.445ZM0 18.69v7.733C0 27.872.796 29 1.91 29h28.18c.955 0 1.91-1.128 1.91-2.578V18.69c0-1.45-.796-2.578-1.91-2.578H1.91C.797 16.111 0 17.24 0 18.69Zm12.736 5.478v-3.223h-1.592v3.223h1.592Zm-7.96 0H7.96v-3.223H4.776v3.223Zm23.88 1.61H3.185v-6.444h25.473v6.445Z"
        />
    </svg>
)
export default DevopsIcon