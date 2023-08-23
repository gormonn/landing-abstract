import {PageProps} from "gatsby";
import React, {FC} from "react";
import {sections} from "app/sections";
import {Menu} from "shared/ui/menu";
import 'app/index.scss';

const IndexPage:FC<PageProps> = () => {
    return <div style={{ width: '100%', height: '100%', background: '#253237' }}>
        <Menu sections={sections}/>
        {sections.map(((sec) => <sec.Component key={sec.href} id={sec.href}/>))}
    </div>
}

export default IndexPage;
