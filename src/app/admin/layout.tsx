import { createSupabaseServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  User,
  LogOut,
  Menu,
  LayoutDashboard,
  FileText,
  Users,
  UserCircle,
  AlertTriangle,
  Home,
  Settings,
  TrendingUp
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cookies } from 'next/headers';
import { Badge } from '@/components/ui/badge';

async function handleSignOut() {
  'use server';
  const cookieStore = await cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  await supabase.auth.signOut();
  redirect('/login');
}

async function getUserProfile() {
  const cookieStore = await cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, avatar_url, role')
    .eq('id', user.id)
    .single();

  return { user, profile };
}

const navItems = [
  {
    href: '/admin',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    href: '/admin/analytics',
    label: 'Analytics',
    icon: TrendingUp,
  },
  {
    href: '/admin/posts',
    label: 'Posts',
    icon: FileText,
  },
  {
    href: '/admin/team',
    label: 'Team',
    icon: Users,
  },
  {
    href: '/admin/reports',
    label: 'Reports',
    icon: AlertTriangle,
  },
  {
    href: '/admin/profile',
    label: 'Profile',
    icon: UserCircle,
  },
  {
    href: '/admin/settings',
    label: 'Settings',
    icon: Settings,
  },
];

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              mobile
                ? "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
                : "flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userData = await getUserProfile();

  if (!userData) {
    redirect('/login');
  }

  const { user, profile } = userData;
  const displayName = profile?.full_name || user.email?.split('@')[0] || 'User';
  const userRole = profile?.role || 'Admin';

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {/* Header */}
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 shadow-sm">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] sm:w-[320px]">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Link href="/admin" className="flex items-center gap-2 font-bold text-lg">
                  <LayoutDashboard className="h-5 w-5" />
                  Admin Panel
                </Link>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-2 mt-6">
              <NavLinks mobile />
              <div className="border-t my-4" />
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
              >
                <Home className="h-4 w-4" />
                Back to Website
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Logo & Navigation */}
        <div className="flex items-center gap-6 flex-1">
          <Link
            href="/admin"
            className="hidden md:flex items-center gap-2 text-lg font-bold"
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Admin Panel</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLinks />
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Back to Website */}
          <Link href="/" className="hidden sm:block">
            <Button variant="ghost" size="sm">
              <Home className="mr-2 h-4 w-4" />
              Website
            </Button>
          </Link>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">{displayName}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{displayName}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.email}
                  </p>
                  <Badge variant="secondary" className="w-fit mt-1">
                    {userRole}
                  </Badge>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/admin/profile" className="cursor-pointer">
                  <UserCircle className="mr-2 h-4 w-4" />
                  Profile Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/" className="cursor-pointer">
                  <Home className="mr-2 h-4 w-4" />
                  View Website
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <form action={handleSignOut}>
                <DropdownMenuItem asChild>
                  <button type="submit" className="w-full text-left cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </button>
                </DropdownMenuItem>
              </form>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-4 px-4 md:px-6">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 Octet Systems. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link href="/admin/profile" className="hover:text-foreground transition-colors">
              Settings
            </Link>
            <Link href="/" className="hover:text-foreground transition-colors">
              Website
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
