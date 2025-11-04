
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import placeholderImages from "@/lib/placeholder-images.json";

export function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-light text-slate-900 tracking-tight">
            Meet Our 
            <span className="block font-semibold mt-2">Expert Team</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600 font-light">
            We are a group of dedicated professionals committed to delivering excellence and innovation in every project.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {placeholderImages.about.team.map((member) => (
            <div key={member.name} className="group text-center">
                <div className="relative h-64 w-64 mx-auto rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src={member.src}
                        alt={`Headshot of ${member.name}`}
                        data-ai-hint={member.hint}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                    <p className="text-sm text-slate-600 mt-2 font-light">{member.bio}</p>
                    <div className="mt-4 flex justify-center gap-4">
                      <Link href={member.social.twitter} className="text-slate-500 hover:text-slate-900 transition-colors">
                        <Twitter size={20} />
                      </Link>
                      <Link href={member.social.linkedin} className="text-slate-500 hover:text-slate-900 transition-colors">
                        <Linkedin size={20} />
                      </Link>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
