const Links = ({links}) => {
    return (
        <>
            {links.map((link) => (
                <div key={link.id}>
                    <h3>{link.title}</h3>
                    <a href="/">{link.link1}</a>
                    <a href="/">{link.link2}</a>
                    <a href="/">{link.link3}</a>
                    <a href="/">{link.link4}</a>
                </div>
            ))}
        </>
    )
}

export default Links
