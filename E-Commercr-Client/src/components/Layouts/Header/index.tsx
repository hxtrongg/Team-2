import CartInfo from "../../CartInfo";
import Navigation from "../../Navigation";
import UserInfo from "../../UserInfo";

const Header = () => {
    console.log('Header render');
    //className={`bg-color ${styles.header}`}
  return (
    <header className="bg-indigo-500  text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-5">
          <div className="text-2xl text-bold">FakeShop</div>
          <Navigation />
          <div className="area_right flex gap-x-3">
            <UserInfo  />
            <CartInfo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
