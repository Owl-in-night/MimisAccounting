import {
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";

import { useAuth } from "@/context/authContext";
import IconDark from "../../public/icons/IconDark";
export const description =
  "An AI playground with a sidebar navigation and a main content area. The playground has a header with a settings drawer and a share button. The sidebar has navigation links and a user menu. The main content area shows a form to configure the model and messages.";

export default function Dashboard() {
  const { user, signout, loading } = useAuth();

  const handleSignout = async () => {
    try {
      await signout();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <div className="grid h-screen w-full pl-[53px]">
      <aside className="inset-y fixed hidden md:block left-0 z-20  h-full flex-col ">
        <div className=" p-2">
          <Button variant="outline" size="icon" aria-label="Home">
          <IconDark className="h-10 w-10" />
          </Button>
        </div>
        <nav className="grid gap-1 p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg bg-muted"
                  aria-label="Playground"
                >
                  <SquareTerminal className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Playground
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Models"
                >
                  <Bot className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Models
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="API"
                >
                  <Code2 className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                API
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Documentation"
                >
                  <Book className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Documentation
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Settings"
                >
                  <Settings2 className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Settings
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col gap-1 p-2 items-start">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to={`/Soporte`} className="rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    aria-label="Help"
                  >
                    <LifeBuoy className="size-5" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Help
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* //Account */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="px-2 my-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipContent side="left" sideOffset={5}>
                      Account
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SquareUser className="size-5" />
                    </TooltipTrigger>
                    <TooltipContent side="left" sideOffset={5}>
                      Account
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => handleSignout()}>
                  Logout
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* //End Account */}
        </nav>
      </aside>
      {/* STYLE FOR FORM */}
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 bg-background px-4">
          <h1 className="text-xl font-semibold">Mimis Accounting</h1>
        </header>

        <main className="flex-1 overflow-auto p-4 scrollbar-hidden">
          {" "}
          {/* Clase para ocultar scrollbar */}
          <div className="relative flex-col items-start gap-8">
            {/* Forms para el inventario */}
            <form className="grid w-full items-start gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inventario General */}
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Inventario General
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="fruits">
                      Frutas (Ej: Fresas, Melocotón, Banano)
                    </Label>
                    <Textarea
                      id="fruits"
                      placeholder="Especificar tipo y cantidad"
                      className="min-h-[4rem]"
                    />
                    <Label htmlFor="fruitCost">
                      Costo Total de Frutas (Q.)
                    </Label>
                    <Input
                      id="fruitCost"
                      type="number"
                      placeholder="Ej: 750.00"
                    />
                  </div>
                </fieldset>

                {/* Toppings */}
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Toppings
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="toppings">Toppings</Label>
                    <Textarea
                      id="toppings"
                      placeholder="Especificar toppings"
                      className="min-h-[4rem]"
                    />
                    <Label htmlFor="toppingsCost">
                      Costo Total de Toppings (Q.)
                    </Label>
                    <Input
                      id="toppingsCost"
                      type="number"
                      placeholder="Ej: 1000.00"
                    />
                  </div>
                </fieldset>

                {/* Varios */}
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Varios
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="various">Varios (Ej: Crema, Nutella)</Label>
                    <Textarea
                      id="various"
                      placeholder="Especificar varios productos"
                      className="min-h-[4rem]"
                    />
                    <Label htmlFor="variousCost">
                      Costo Total de Varios (Q.)
                    </Label>
                    <Input
                      id="variousCost"
                      type="number"
                      placeholder="Ej: 500.00"
                    />
                  </div>
                </fieldset>

                {/* Utensilios */}
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Utensilios
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="utensils">Utensilios</Label>
                    <Textarea
                      id="utensils"
                      placeholder="Especificar utensilios"
                      className="min-h-[4rem]"
                    />
                    <Label htmlFor="utensilsCost">
                      Costo Total de Utensilios (Q.)
                    </Label>
                    <Input
                      id="utensilsCost"
                      type="number"
                      placeholder="Ej: 120.00"
                    />
                  </div>
                </fieldset>

                {/* Compras de Despensas */}
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Compras de Despensas
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="supplies">Compras de Despensas</Label>
                    <Textarea
                      id="supplies"
                      placeholder="Especificar despensas"
                      className="min-h-[4rem]"
                    />
                    <Label htmlFor="suppliesCost">
                      Costo Total de Despensas (Q.)
                    </Label>
                    <Input
                      id="suppliesCost"
                      type="number"
                      placeholder="Ej: 200.00"
                    />
                  </div>
                </fieldset>

                {/* Delivery */}
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Servicios de Delivery
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="delivery">Servicios de Delivery</Label>
                    <Textarea
                      id="delivery"
                      placeholder="Especificar servicios"
                      className="min-h-[4rem]"
                    />
                    <Label htmlFor="deliveryCost">
                      Costo Total de Delivery (Q.)
                    </Label>
                    <Input
                      id="deliveryCost"
                      type="number"
                      placeholder="Ej: 300.00"
                    />
                  </div>
                </fieldset>

                {/* Gastos */}
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Gastos
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="expenses">Gastos</Label>
                    <Textarea
                      id="expenses"
                      placeholder="Especificar gastos"
                      className="min-h-[4rem]"
                    />
                    <Label htmlFor="expensesCost">
                      Costo Total de Gastos (Q.)
                    </Label>
                    <Input
                      id="expensesCost"
                      type="number"
                      placeholder="Ej: 250.00"
                    />
                  </div>
                </fieldset>
              </div>
            </form>

            {/* Espacio adicional para evitar superposición con el footer */}
            <div className="mt-8" />
          </div>
        </main>
      </div>

      <style jsx>{`
        .scrollbar-hidden {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* Internet Explorer y Edge */
        }
        .scrollbar-hidden::-webkit-scrollbar {
          display: none; /* Safari y Chrome */
        }
      `}</style>

      {/* END FORM */}
    </div>
  );
}
