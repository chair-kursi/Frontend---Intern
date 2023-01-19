import React, { Component } from 'react'

export class vkp extends Component {

    constructor() {
        super();
        this.state = {
            contentIndex: 0,
            selectedKey: "0"
        }
    }

    changeSelectedKey = (event) => {
        const key = event.key;
        setSelectedKey(key);
        setContentIndex(+key);
    };



    render() { 
        const topics = ["First topic", "Second topic", "Third topic"];
        const Menu = (
            <TopicMenu
                topics={topics}
                selectedKey={this.state.selectedKey}
                changeSelectedKey={this.changeSelectedKey}
            />
        );

        return (
            <div className="App">
                <NavBar menu={Menu} />
                <Layout>
                    <Layout.Content className="content">
                        {topics[this.state.contentIndex]}
                    </Layout.Content>
                    <SideBar menu={Menu} /> 
                </Layout>
            </div>
        )
    }
}

export default vkp
