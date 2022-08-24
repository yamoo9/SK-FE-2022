const defaultLogoPath = `${process.env.PUBLIC_URL}/assets/logo512.png`;

export const Logo = ({ source = defaultLogoPath, label }) => {
  return <img src={source} className="App-logo" alt={label} />
}