import {PageProps} from "gatsby";
import React, {FC, useRef} from "react";
import 'normalize.css';
import {sections} from "app/sections";
import 'app/style.scss'




const IndexPage:FC<PageProps> = () => {
    return <div style={{ width: '100%', height: '100%', background: '#253237' }}>
        {/*<Navbar sections={sections}/>*/}
        {sections.map(((sec) => <sec.Component key={sec.href} id={sec.href}/>))}
        {/*<Parallax ref={parallax} pages={sections.length}>*/}
        {/*    <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />*/}
        {/*    <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />*/}
        {/*    <ParallaxLayer*/}
        {/*        offset={2.5}*/}
        {/*        speed={-0.4}*/}
        {/*        style={{*/}
        {/*            // backgroundImage: url('stars', true),*/}
        {/*            // backgroundSize: 'cover',*/}
        {/*            backgroundImage: `url(${harold})`,*/}
        {/*            backgroundSize: 'contain',*/}
        {/*        }}*/}
        {/*    />*/}
        {/*    <ParallaxLayer*/}
        {/*        offset={4}*/}
        {/*        speed={0}*/}
        {/*    >*/}
        {/*        <Contacts/>*/}
        {/*    </ParallaxLayer>*/}
        {/*</Parallax>*/}
    </div>
}

export default IndexPage
