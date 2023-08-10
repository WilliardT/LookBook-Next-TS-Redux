import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={270}
        height={370}
        viewBox="0 0 270 370"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="10" cy="5" r="2" />
        <rect x="44" y="32" rx="10" ry="10" width="153" height="195" />
        <rect x="98" y="281" rx="0" ry="0" width="6" height="7" />
        <rect x="29" y="257" rx="0" ry="0" width="180" height="31" />
        <rect x="22" y="406" rx="0" ry="0" width="68" height="29" />
        <rect x="126" y="402" rx="10" ry="10" width="106" height="43" />
        <rect x="76" y="300" rx="0" ry="0" width="88" height="18" />
        <rect x="33" y="333" rx="0" ry="0" width="166" height="22" />
    </ContentLoader>
)

export default Skeleton

