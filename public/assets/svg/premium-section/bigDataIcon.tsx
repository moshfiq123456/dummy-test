import * as React from "react"
import { SVGProps } from "react"
const BigDataIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <path
            fill="#00BB98"
            d="M8.25 21a2.25 2.25 0 0 0 2.25-2.25c.007-.075.007-.15 0-.225l4.185-4.185h.69l2.415 2.415v.12a2.25 2.25 0 0 0 4.5 0v-.12l5.46-5.505A2.25 2.25 0 1 0 25.5 9c-.007.075-.007.15 0 .225l-5.415 5.415h-.24L17.25 12a2.25 2.25 0 0 0-4.5 0l-4.5 4.5a2.25 2.25 0 0 0 0 4.5Zm20.25 6H3V1.5a1.5 1.5 0 0 0-3 0v27A1.5 1.5 0 0 0 1.5 30h27a1.5 1.5 0 1 0 0-3Z"
        />
    </svg>
)
export default BigDataIcon