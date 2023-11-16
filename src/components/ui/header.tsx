import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

const Header = () => {
  return (
    <Card className="flex items-center justify-between rounded border-b-2 border-l-0 border-r-0 border-t-0 border-gray-800 p-8">
      <Button size="icon" variant={"outline"} className="border-gray-800">
        <MenuIcon />
      </Button>

      <h1 className="text-lg">
        <span className="text-purple-900">GOOD</span> Suplementos
      </h1>

      <Button size="icon" variant={"outline"} className="border-gray-800">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
