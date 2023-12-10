import React from "react";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "@/components/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
                <div className="flex flex-col items-center justify-between h-full py-8">
                    <div className="flex flex-col items-center gap-y-32">
                        <Logo />
                        <Navigation
                            containerStyles="flex flex-col items-center gap-y-6"
                            linkStyles="text-2xl"
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
