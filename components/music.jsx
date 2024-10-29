export default function Music() {
    return <>
        <h3>Music</h3>

        <iframe 
            style={{width: '100%', height:'300px'}}
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1532054728&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe>
        <div 
            style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate, Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}
        >
            <a href="https://soundcloud.com/mrjum" 
                title="MrJum" 
                target="_blank" 
                style={{color: '#cccccc', textDecoration: 'none'}}>MrJum</a> · 
            <a 
                href="https://soundcloud.com/mrjum/sets/flitters-demos" 
                title="Flitters Demos" 
                target="_blank" 
                style={{color: '#cccccc', textDecoration: 'none'}}
            >
                Flitters Demos
            </a>
        </div>


    </>
}

