import Link from "next/link";
import Image from "next/image";
const Logo = () => {
    return (
        <Link href="/">
            <Image
                src="/logo_light.svg"
                width={40}
                height={40}
                alt="logo"
                priority
            />
        </Link>
    );
};

export default Logo;
