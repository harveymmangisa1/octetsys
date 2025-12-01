import { getTeamMembers } from './actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default async function TeamPage() {
    const { data: members, error } = await getTeamMembers();

    if (error) {
        return (
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Team Members</h1>
                    <p className="text-muted-foreground">
                        View and manage your team.
                    </p>
                </div>
                <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-destructive">Error Loading Team</h3>
                            <p className="text-muted-foreground mb-4">{error}</p>
                            <p className="text-sm text-muted-foreground">
                                This might be because the profiles table hasn&apos;t been created yet. Please run the database migrations.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Team Members</h1>
                <p className="text-muted-foreground">
                    View and manage your team.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {members?.map((member) => (
                    <Card key={member.id}>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={member.avatar_url} alt={member.full_name} />
                                <AvatarFallback>{member.full_name?.substring(0, 2).toUpperCase() || '??'}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <CardTitle className="text-lg">{member.full_name || 'Unknown Name'}</CardTitle>
                                <span className="text-sm text-muted-foreground">{member.role || 'No Role'}</span>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {member.email && (
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <Mail className="mr-2 h-4 w-4" />
                                        {member.email}
                                    </div>
                                )}
                                <div className="flex gap-2 mt-4">
                                    {member.social_twitter && (
                                        <Link href={member.social_twitter} target="_blank" className="text-muted-foreground hover:text-foreground">
                                            <Twitter className="h-4 w-4" />
                                        </Link>
                                    )}
                                    {member.social_linkedin && (
                                        <Link href={member.social_linkedin} target="_blank" className="text-muted-foreground hover:text-foreground">
                                            <Linkedin className="h-4 w-4" />
                                        </Link>
                                    )}
                                </div>
                                {member.bio && (
                                    <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                                        {member.bio}
                                    </p>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}

                {members?.length === 0 && (
                    <div className="col-span-full">
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-12">
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold">No Team Members Yet</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Team members will appear here once they create their profiles.
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Ask your team members to sign up and complete their profiles.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
}
