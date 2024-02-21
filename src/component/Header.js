const Header = (props) => {
    return (
        <header>
            <img src="Logo.svg" alt="Little Lemon logo"/>
            {props.children}
        </header>
    )
};

export default Header;