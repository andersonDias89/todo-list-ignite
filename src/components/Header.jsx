import Logo from '../assets/logo.png'

export const Header = () => {
    return (
        <header className="w-full bg-primary h-32 flex items-center justify-center">
            <div><img src={Logo} alt="" /></div>
        </header>
    )
}