import { Cta } from "@/components/home/Cta";
import { AboutHero } from "@/components/about/AboutHero";
import { Mission } from "@/components/about/Mission";
import { Team } from "@/components/about/Team";
import { getPublicTeamMembers } from "./actions";

export const runtime = 'edge';

export default async function AboutPage() {
  let members = [];

  try {
    members = await getPublicTeamMembers();
  } catch (error) {
    console.error('Failed to fetch team members:', error);
    // Continue with empty array if fetch fails
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <main className="flex-1">
        <AboutHero />
        <Mission />
        <Team members={members} />
        <Cta />
      </main>
    </div>
  );
}
