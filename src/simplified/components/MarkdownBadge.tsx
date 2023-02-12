import React from 'react'
import { iMarkdownBadge } from '../../models';

export function MarkdownBadge(props: iMarkdownBadge) {

    const [markDownData, setMarkDownData] = React.useState<string>(``);

    const fetchSvgFromMarkdownUrl = async () => {
        let data = await fetch(props.markDownBadgeUrl!)
        setMarkDownData(await data.text());
    }

    React.useEffect(() => {
        if (props.markDownBadgeUrl && props.markDownBadgeUrl.length > 0) {
            fetchSvgFromMarkdownUrl();
        }
    }, []);

    return (<a
        // uk-tooltip={props.experience}
        href={props.url}
        target="_blank"
        rel="noopener noreferrer">
        {props.markDownBadgeUrl && <img
            loading='lazy'
            alt={props.alt}
            src={`data:image/svg+xml;utf8,${encodeURIComponent(markDownData)}`} />}</a>)
}