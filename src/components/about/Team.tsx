'use client';

import { useState } from 'react';
import Image from "next/image";
import { Linkedin, Twitter, Mail, Phone, MapPin, Calendar, Award } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export type TeamMemberProfile = {
  id: string;
  full_name: string;
  role: string;
  avatar_url: string | null;
  bio: string | null;
  social_twitter: string | null;
  social_linkedin: string | null;
  email: string | null;
};

// Helper function to get skills based on role
function getSkillsForRole(role: string): string[] {
  const skillsMap: Record<string, string[]> = {
    'Founder & CEO': ['Leadership', 'Strategy', 'Business Development', 'Innovation', 'Team Building'],
    'Lead Developer': ['Full-Stack Development', 'System Architecture', 'Code Review', 'Mentoring', 'Agile'],
    'Cybersecurity Expert': ['Security Audits', 'Risk Assessment', 'Compliance', 'Incident Response', 'Penetration Testing'],
    'UI/UX Designer': ['User Research', 'Prototyping', 'Visual Design', 'Interaction Design', 'Design Systems']
  };

  // Simple fuzzy matching or default
  for (const key in skillsMap) {
    if (role.includes(key)) return skillsMap[key];
  }

  return ['Problem Solving', 'Communication', 'Teamwork', 'Innovation', 'Project Management'];
}

export function Team({ members = [] }: { members?: TeamMemberProfile[] }) {
  const [selectedMember, setSelectedMember] = useState<TeamMemberProfile | null>(null);

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

        {!members || members.length === 0 ? (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
              <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Team is Growing</h3>
            <p className="text-slate-600 max-w-md mx-auto">
              We're building an exceptional team of professionals. Check back soon to meet our talented members!
            </p>
          </div>
        ) : (
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member) => (
              <Dialog key={member.id} onOpenChange={(isOpen) => !isOpen && setSelectedMember(null)}>
                <DialogTrigger asChild>
                  <div
                    className="group text-center cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
                    onClick={() => setSelectedMember(member)}
                  >
                    <div className="relative h-64 w-64 mx-auto rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-gray-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      {member.avatar_url ? (
                        <Image
                          src={member.avatar_url}
                          alt={`Headshot of ${member.full_name}`}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <span className="text-4xl font-bold">{member.full_name?.charAt(0)}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-medium">View Profile</p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">{member.full_name}</h3>
                      <p className="text-blue-600 font-medium">{member.role}</p>
                    </div>
                  </div>
                </DialogTrigger>
                {selectedMember && selectedMember.id === member.id && (
                  <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-0">
                    <div className="relative">
                      {/* Background gradient header */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>

                      <DialogHeader className="relative p-6 sm:p-8 pb-0">
                        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                          {/* Profile image with enhanced styling */}
                          <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                            <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/80 bg-white">
                              {selectedMember.avatar_url ? (
                                <Image
                                  src={selectedMember.avatar_url}
                                  alt={`Headshot of ${selectedMember.full_name}`}
                                  fill
                                  className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl font-bold">
                                  {selectedMember.full_name?.charAt(0)}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Name and role section */}
                          <div className="flex-1 space-y-3">
                            <DialogTitle className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                              {selectedMember.full_name}
                            </DialogTitle>
                            <DialogDescription className="text-lg sm:text-xl font-medium text-blue-600">
                              {selectedMember.role}
                            </DialogDescription>

                            {/* Social links with improved styling */}
                            <div className="flex gap-3 justify-center sm:justify-start">
                              {selectedMember.social_twitter && (
                                <Link
                                  href={selectedMember.social_twitter}
                                  className="group relative p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-slate-200"
                                  aria-label={`${selectedMember.full_name}'s Twitter`}
                                >
                                  <Twitter size={18} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
                                </Link>
                              )}
                              {selectedMember.social_linkedin && (
                                <Link
                                  href={selectedMember.social_linkedin}
                                  className="group relative p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-slate-200"
                                  aria-label={`${selectedMember.full_name}'s LinkedIn`}
                                >
                                  <Linkedin size={18} className="text-slate-600 group-hover:text-blue-700 transition-colors" />
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </DialogHeader>

                      {/* Content section */}
                      <div className="relative p-6 sm:p-8 pt-4 space-y-6">
                        {/* Bio section */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="h-px bg-gradient-to-r from-blue-600 to-purple-600 flex-1"></div>
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">About</span>
                            <div className="h-px bg-gradient-to-r from-purple-600 to-pink-600 flex-1"></div>
                          </div>
                          <p className="text-slate-700 leading-relaxed text-base font-light">
                            {selectedMember.bio || "No biography available."}
                          </p>
                        </div>

                        <Separator className="opacity-30" />

                        {/* Expertise section */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-blue-600" />
                            <h3 className="text-lg font-semibold text-slate-900">Expertise & Impact</h3>
                          </div>
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                            <p className="text-slate-700 leading-relaxed text-base font-light">
                              With extensive experience in the tech industry, {selectedMember.full_name.split(' ')[0]} has been instrumental in shaping our success. Their expertise in {selectedMember.role.toLowerCase()} ensures that our clients receive innovative and reliable solutions that drive real business value.
                            </p>
                          </div>
                        </div>

                        {/* Skills/Tags section */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-slate-900">Core Competencies</h3>
                          <div className="flex flex-wrap gap-2">
                            {getSkillsForRole(selectedMember.role).map((skill, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="px-3 py-1 text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Contact CTA */}
                        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-1">Get in Touch</h4>
                              <p className="text-sm text-slate-600">Interested in collaborating? Let's connect!</p>
                            </div>
                            <div className="flex gap-2">
                              {selectedMember.email && (
                                <a href={`mailto:${selectedMember.email}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-md hover:shadow-lg inline-flex items-center">
                                  <Mail className="w-4 h-4 inline mr-2" />
                                  Email
                                </a>
                              )}
                              <button className="px-4 py-2 bg-white text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium border border-slate-300">
                                <Calendar className="w-4 h-4 inline mr-2" />
                                Schedule
                              </button>
                            </div>
                          </div>
                        </div>
  }

                        return ['Problem Solving', 'Communication', 'Teamwork', 'Innovation', 'Project Management'];
}

                        export function Team({members = []}: {members ?: TeamMemberProfile[]}) {
  const [selectedMember, setSelectedMember] = useState<TeamMemberProfile | null>(null);

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

                            {!members || members.length === 0 ? (
                              <div className="mt-16 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
                                  <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                  </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Team is Growing</h3>
                                <p className="text-slate-600 max-w-md mx-auto">
                                  We're building an exceptional team of professionals. Check back soon to meet our talented members!
                                </p>
                              </div>
                            ) : (
                              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {members.map((member) => (
                                  <Dialog key={member.id} onOpenChange={(isOpen) => !isOpen && setSelectedMember(null)}>
                                    <DialogTrigger asChild>
                                      <div
                                        className="group text-center cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
                                        onClick={() => setSelectedMember(member)}
                                      >
                                        <div className="relative h-64 w-64 mx-auto rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-gray-100">
                                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                          {member.avatar_url ? (
                                            <Image
                                              src={member.avatar_url}
                                              alt={`Headshot of ${member.full_name}`}
                                              width={400}
                                              height={400}
                                              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                            />
                                          ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                              <span className="text-4xl font-bold">{member.full_name?.charAt(0)}</span>
                                            </div>
                                          )}
                                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <p className="text-white text-sm font-medium">View Profile</p>
                                          </div>
                                        </div>
                                        <div className="mt-6 space-y-2">
                                          <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">{member.full_name}</h3>
                                          <p className="text-blue-600 font-medium">{member.role}</p>
                                        </div>
                                      </div>
                                    </DialogTrigger>
                                    {selectedMember && selectedMember.id === member.id && (
                                      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-0">
                                        <div className="relative">
                                          {/* Background gradient header */}
                                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>

                                          <DialogHeader className="relative p-6 sm:p-8 pb-0">
                                            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                                              {/* Profile image with enhanced styling */}
                                              <div className="relative group">
                                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                                                <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/80 bg-white">
                                                  {selectedMember.avatar_url ? (
                                                    <Image
                                                      src={selectedMember.avatar_url}
                                                      alt={`Headshot of ${selectedMember.full_name}`}
                                                      fill
                                                      className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                  ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl font-bold">
                                                      {selectedMember.full_name?.charAt(0)}
                                                    </div>
                                                  )}
                                                </div>
                                              </div>

                                              {/* Name and role section */}
                                              <div className="flex-1 space-y-3">
                                                <DialogTitle className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                                                  {selectedMember.full_name}
                                                </DialogTitle>
                                                <DialogDescription className="text-lg sm:text-xl font-medium text-blue-600">
                                                  {selectedMember.role}
                                                </DialogDescription>

                                                {/* Social links with improved styling */}
                                                <div className="flex gap-3 justify-center sm:justify-start">
                                                  {selectedMember.social_twitter && (
                                                    <Link
                                                      href={selectedMember.social_twitter}
                                                      className="group relative p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-slate-200"
                                                      aria-label={`${selectedMember.full_name}'s Twitter`}
                                                    >
                                                      <Twitter size={18} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
                                                    </Link>
                                                  )}
                                                  {selectedMember.social_linkedin && (
                                                    <Link
                                                      href={selectedMember.social_linkedin}
                                                      className="group relative p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-slate-200"
                                                      aria-label={`${selectedMember.full_name}'s LinkedIn`}
                                                    >
                                                      <Linkedin size={18} className="text-slate-600 group-hover:text-blue-700 transition-colors" />
                                                    </Link>
                                                  )}
                                                </div>
                                              </div>
                                            </div>
                                          </DialogHeader>

                                          {/* Content section */}
                                          <div className="relative p-6 sm:p-8 pt-4 space-y-6">
                                            {/* Bio section */}
                                            <div className="space-y-4">
                                              <div className="flex items-center gap-2">
                                                <div className="h-px bg-gradient-to-r from-blue-600 to-purple-600 flex-1"></div>
                                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">About</span>
                                                <div className="h-px bg-gradient-to-r from-purple-600 to-pink-600 flex-1"></div>
                                              </div>
                                              <p className="text-slate-700 leading-relaxed text-base font-light">
                                                {selectedMember.bio || "No biography available."}
                                              </p>
                                            </div>

                                            <Separator className="opacity-30" />

                                            {/* Expertise section */}
                                            <div className="space-y-4">
                                              <div className="flex items-center gap-2">
                                                <Award className="w-5 h-5 text-blue-600" />
                                                <h3 className="text-lg font-semibold text-slate-900">Expertise & Impact</h3>
                                              </div>
                                              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                                                <p className="text-slate-700 leading-relaxed text-base font-light">
                                                  With extensive experience in the tech industry, {selectedMember.full_name.split(' ')[0]} has been instrumental in shaping our success. Their expertise in {selectedMember.role.toLowerCase()} ensures that our clients receive innovative and reliable solutions that drive real business value.
                                                </p>
                                              </div>
                                            </div>

                                            {/* Skills/Tags section */}
                                            <div className="space-y-4">
                                              <h3 className="text-lg font-semibold text-slate-900">Core Competencies</h3>
                                              <div className="flex flex-wrap gap-2">
                                                {getSkillsForRole(selectedMember.role).map((skill, index) => (
                                                  <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="px-3 py-1 text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                                                  >
                                                    {skill}
                                                  </Badge>
                                                ))}
                                              </div>
                                            </div>

                                            {/* Contact CTA */}
                                            <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                                              <div className="flex items-center justify-between">
                                                <div>
                                                  <h4 className="font-semibold text-slate-900 mb-1">Get in Touch</h4>
                                                  <p className="text-sm text-slate-600">Interested in collaborating? Let's connect!</p>
                                                </div>
                                                <div className="flex gap-2">
                                                  {selectedMember.email && (
                                                    <a href={`mailto:${selectedMember.email}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-md hover:shadow-lg inline-flex items-center">
                                                      <Mail className="w-4 h-4 inline mr-2" />
                                                      Email
                                                    </a>
                                                  )}
                                                  <button className="px-4 py-2 bg-white text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium border border-slate-300">
                                                    <Calendar className="w-4 h-4 inline mr-2" />
                                                    Schedule
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </DialogContent>
                                    )}
                                  </Dialog>
                                ))}
                              </div>
                            )}
                          </div>
                        </section>
                        );
}
