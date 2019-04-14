import { autobind } from "core-decorators";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import { PublicClientState } from "../../../state/PublicClientState";
import { RootState } from "../../../state/RootState";

function addhttp(url) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = "http://" + url;
    }
    return url;
}

interface IPublicPodcastHeaderProps { publicClientState?: PublicClientState; }

@inject("publicClientState")
@observer
export default class Header extends React.Component<IPublicPodcastHeaderProps, {}> {
    public render() {

        const facebook = this.props.publicClientState.podcast.contactFacebook;
        const twitter = this.props.publicClientState.podcast.contactTwitter;

        const about = this.props.publicClientState.podcast.about;
        const contactMessage = this.props.publicClientState.podcast.contactMessage;

        return (
            <Menu stackable style={{
                padding: 10,
            }} borderless>
                <Menu.Item>
                    <Link style={{ color: "black" }} to="/">Home</Link>
                </Menu.Item>
                {!!about ?
                    <Menu.Item>
                        <Link style={{ color: "black" }} to="/about">About</Link>
                    </Menu.Item>
                    :
                    null
                }
                {!!contactMessage ?
                    <Menu.Item>
                        <Link style={{ color: "black" }} to="/contact">Contact</Link>
                    </Menu.Item>
                    :
                    null
                }
                <Menu.Menu position="right">
                    <Menu.Item>
                        {twitter ?
                            <a href={addhttp(twitter)} target="_blank">
                                <Icon color="black" name="twitter" size="large" />
                            </a>
                            :
                            null
                        }
                        {facebook ?
                            <a href={addhttp(facebook)} target="_blank">
                                <Icon color="black" name="facebook" size="large" />
                            </a>
                            :
                            null
                        }
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}
