import { createSupabaseServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { User, LogOut, Menu, X } from 'lucide-react';
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

async function handleSignOut() {
  'use server';
  const cookieStore = await cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  await supabase.auth.signOut();
  redirect('/login');
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <SheetHeader>
              <SheetTitle>Admin Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-6">
              <Link
                href="/admin"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                Octet Systems Admin
              </Link>
              <div className="flex flex-col gap-2">
                <Link
                  href="/admin/posts"
                  className="text-muted-foreground transition-colors hover:text-foreground py-2"
                >
                  Posts
                </Link>
                <Link
                  href="/admin/team"
                  className="text-muted-foreground transition-colors hover:text-foreground py-2"
                >
                  Team
                </Link>
                <Link
                  href="/admin/profile"
                  className="text-muted-foreground transition-colors hover:text-foreground py-2"
                >
                  Profile
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/admin"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            Octet Systems Admin
          </Link>
          <Link
            href="/admin/posts"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Posts
          </Link>
          <Link
            href="/admin/team"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Team
          </Link>
          <Link
            href="/admin/profile"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Profile
          </Link>
        </nav>

        {/* User Menu */}
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex-1 sm:flex-initial">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <form action={handleSignOut}>
                  <DropdownMenuItem asChild>
                    <button type="submit" className="w-full text-left">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </button>
                  </DropdownMenuItem>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {children}
      </main>
    </div>
  );
}
