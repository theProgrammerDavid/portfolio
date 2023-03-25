import React from 'react'
import { ThemeContext } from '../../context';
import { isMobile } from '../../mobile';
import { iContext } from '../../models';
import { getTheme, THEMES } from '../../theme';
import { BlogItem, MySection } from '../components'
import { XMLParser } from 'fast-xml-parser'

export function Blgos() {
    const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;
    const [blogData, setBlogData] = React.useState<Array<any>>([]);

    async function loadBlogDataFromRSS() {
        const result = await fetch("https://blog.davidvelho.tech/index.xml");
        const data = await result.text();

        const parser = new XMLParser();
        setBlogData(parser.parse(data).rss.channel.item);
    }

    React.useEffect(() => {
        loadBlogDataFromRSS();
    }, [])

    return (
        <MySection
            id="blogs"
            height={'150vh'}
            className="uk-section section"
            backgroundColor={getTheme(currentTheme)}
        >
            <div >
                <h1 className="uk-heading-xlarge"
                    style={{
                        textAlign: 'center',
                        color: THEMES.BG_HEADING,
                        fontWeight: 'lighter'
                    }}
                >Blogs</h1>
                <div className="uk-margin"
                    style={{
                        display: 'flex',
                        flexDirection: isMobile() ? "column" : "row",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {
                        blogData.map((i, index) => (<BlogItem
                            open={true}
                            key={i.guid}
                            title={i.title}
                            url={i.link}
                            pubDate={i.pubDate}
                        />))
                    }
                </div>
            </div>
        </MySection>
    )
}
