
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    image: "https://placehold.co/400x400",
    hint: "professional headshot male",
    bio: "Visionary leader with a passion for technology and a drive to help businesses succeed.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Brenda Smith",
    role: "Lead Developer",
    image: "https://placehold.co/400x400",
    hint: "professional headshot female",
    bio: "Expert coder and problem-solver, turning complex challenges into elegant software solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Chris Johnson",
    role: "Cybersecurity Expert",
    image: "https://placehold.co/400x400",
    hint: "professional headshot security",
    bio: "Dedicated to protecting digital assets and staying ahead of emerging cyber threats.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Diana Garcia",
    role: "UI/UX Designer",
    image: "https://placehold.co/400x400",
    hint: "professional headshot designer",
    bio: "Crafting intuitive and beautiful user experiences that delight and engage.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

export function Team() {
  return (
    <section id="team" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet Our Experts
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            We are a team of dedicated professionals committed to delivering excellence and innovation.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-56">
                    <Image
                        src={member.image}
                        alt={`Headshot of ${member.name}`}
                        data-ai-hint={member.hint}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
                <div className="mt-4 flex justify-center gap-4">
                  <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                    <Twitter size={20} />
                  </Link>
                  <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                    <Linkedin size={20} />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

    