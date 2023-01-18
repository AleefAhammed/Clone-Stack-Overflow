import React from 'react'
import './RightSidebar.css'
import Widget from './Widget'
import WidgetTags from './WidgetTags'

const RightSidebar = () => {
    return (
        <aside className='right-sidebar'>
            <Widget />
            <WidgetTags title='Custom Tags'/>
            <WidgetTags title='Watched Tags'/>
        </aside>
    )
}

export default RightSidebar
