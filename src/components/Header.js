const Title = () => {
  return (
    <div className="title">
      <img
        src="https://yt3.ggpht.com/ytc/AMLnZu83V5e5LOfUHjg0SNse1cYBvhx8ejqADk_WQ5D0=s176-c-k-c0x00ffffff-no-rj"
        alt="Food_Villa_Image"
      />
      <h1 key="header1">Food Villa</h1>
    </div>
  );
};

export const Header = () => {
  return (
    <div key="header-key" className="header">
      <Title />
      <ul key="keyul" className="navBar">
        <li key="key1">Home</li>
        <li key="key2">About</li>
        <li key="key3">Contact</li>
        <li key="key4">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
