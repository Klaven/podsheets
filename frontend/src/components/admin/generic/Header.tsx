import { inject, observer } from "mobx-react";
import * as React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import { colors, globalStyles } from "../../../lib/styles";
import { RootState } from "../../../state/RootState";

interface IHeaderProps {
    rootState?: RootState;
}

function renderAuthLink(isAuthenticated: boolean) {
    return isAuthenticated ?
        (<Link to="/logout" style={style.navLink}>Sign Out</Link>) :
        (<Link to="/sign_in" style={style.navLink}>Sign in</Link>);
}

@inject("rootState")
@observer
export default class Header extends React.Component<IHeaderProps, {}> {
    public render() {
        return (
            <Menu borderless style={style.menu} inverted>
                <Menu.Item>
                    <a href="/" style={{paddingTop:"5px"}}><img src="assets/podsheets-logo.png" style={{ height: "58px" }} /></a>
                </Menu.Item>
                <Menu.Menu position="right">
                <Menu.Item>
                    <a href="https://twitter.com/podsheets">
                        <Icon name="twitter" size="large"/>
                    </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="https://medium.com/podsheets-blog" style={style.navLink}>Blog</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="https://podsheets.zendesk.com/hc/en-us/articles/115001276211" style={style.navLink}>Support</a>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/about_us" style={style.navLink}>About</Link>
                    </Menu.Item>
                    <Menu.Item>
                        {renderAuthLink(this.props.rootState.isAuthenticated)}
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

const style = {
    menu: {
        marginBottom: 0,
        background: colors.mainDark,
        borderRadius: 0,
        height: 68,
        paddingRight: 30,
    },
    podsheets: {
        ...globalStyles.linkInvertedLight,
        fontSize: "140%",
    },
    navLink: {
        ...globalStyles.linkInvertedLight,
        fontSize: "120%",
    },
};
