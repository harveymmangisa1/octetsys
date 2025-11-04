'use client';

import { useState } from 'react';
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import placeholderImages from "@/lib/placeholder-images.json";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

type TeamMember = typeof placeholderImages.about.team[0];

export function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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
            <Dialog key={member.name} onOpenChange={(isOpen) => !isOpen && setSelectedMember(null)}>
              <DialogTrigger asChild>
                <div 
                  className="group text-center cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative h-64 w-64 mx-auto rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={member.src}
                      alt={`Headshot of ${member.name}`}
                      data-ai-hint={member.hint}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </div>
                </div>
              </DialogTrigger>
              {selectedMember && selectedMember.name === member.name && (
                <DialogContent className="sm:max-w-[600px] p-0">
                  <DialogHeader className="p-6 pb-0">
                    <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                        <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden shadow-md flex-shrink-0">
                            <Image
                                src={selectedMember.src}
                                alt={`Headshot of ${selectedMember.name}`}
                                data-ai-hint={selectedMember.hint}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <DialogTitle className="text-2xl font-bold text-slate-900">{selectedMember.name}</DialogTitle>
                            <DialogDescription className="text-blue-600 text-lg font-medium">{selectedMember.role}</DialogDescription>
                            <div className="mt-4 flex gap-4 justify-center sm:justify-start">
                                <Link href={selectedMember.social.twitter} className="text-slate-500 hover:text-slate-900 transition-colors">
                                    <Twitter size={20} />
                                </Link>
                                <Link href={selectedMember.social.linkedin} className="text-slate-500 hover:text-slate-900 transition-colors">
                                    <Linkedin size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                  </DialogHeader>
                  <div className="p-6 pt-4 text-slate-600 font-light">
                    <p>{selectedMember.bio}</p>
                    <p className="mt-4">
                      With over a decade of experience in the tech industry, {selectedMember.name.split(' ')[0]} has been instrumental in shaping Octet Systems' success. Their expertise in {member.role.toLowerCase()} ensures that our clients receive innovative and reliable solutions.
                    </p>
                  </div>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
