import Link from "next/link"
import { Columns2, Info, LayoutGrid } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

type NavItem = {
  href: string
  label: string
  icon: LucideIcon
}

const NAV_ITEMS: NavItem[] = [
  { href: "/services", label: "Services", icon: LayoutGrid },
  { href: "/compare", label: "Compare", icon: Columns2 },
  { href: "/about", label: "About Us", icon: Info },
]

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <ul className="flex items-center gap-5 overflow-x-auto sm:gap-8">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center gap-2 text-sm whitespace-nowrap text-gray-700 transition-colors hover:text-gray-900 sm:text-[15px]"
              >
                <Icon className="size-4 text-gray-600" />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Button className="h-11 shrink-0 rounded-lg bg-[#f5b31c] px-6 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-[#e0a112] sm:px-7">
          Book Now
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
