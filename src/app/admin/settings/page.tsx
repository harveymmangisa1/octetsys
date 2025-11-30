'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Settings, Bell, Shield, Database, Palette } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function SettingsPage() {
    const { toast } = useToast();
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [reportNotifications, setReportNotifications] = useState(true);
    const [autoPublish, setAutoPublish] = useState(false);

    const handleSave = () => {
        toast({
            title: 'Settings saved',
            description: 'Your preferences have been updated successfully.',
        });
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">
                    Manage your admin panel preferences and configurations
                </p>
            </div>

            {/* Notifications */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Bell className="h-5 w-5" />
                        <CardTitle>Notifications</CardTitle>
                    </div>
                    <CardDescription>
                        Configure how you receive notifications
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="email-notifications">Email Notifications</Label>
                            <p className="text-sm text-muted-foreground">
                                Receive email updates about new posts and activity
                            </p>
                        </div>
                        <Switch
                            id="email-notifications"
                            checked={emailNotifications}
                            onCheckedChange={setEmailNotifications}
                        />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="report-notifications">Report Notifications</Label>
                            <p className="text-sm text-muted-foreground">
                                Get notified when new reports are submitted
                            </p>
                        </div>
                        <Switch
                            id="report-notifications"
                            checked={reportNotifications}
                            onCheckedChange={setReportNotifications}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Content Settings */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Settings className="h-5 w-5" />
                        <CardTitle>Content Settings</CardTitle>
                    </div>
                    <CardDescription>
                        Configure default content behavior
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="auto-publish">Auto-publish Posts</Label>
                            <p className="text-sm text-muted-foreground">
                                Automatically publish posts after creation
                            </p>
                        </div>
                        <Switch
                            id="auto-publish"
                            checked={autoPublish}
                            onCheckedChange={setAutoPublish}
                        />
                    </div>

                    <Separator />

                    <div className="space-y-2">
                        <Label htmlFor="default-author">Default Author</Label>
                        <Input
                            id="default-author"
                            placeholder="Enter default author name"
                            defaultValue="Octet Systems"
                        />
                        <p className="text-sm text-muted-foreground">
                            Used when no author is specified
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Security */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        <CardTitle>Security</CardTitle>
                    </div>
                    <CardDescription>
                        Manage security and access settings
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Session Timeout</Label>
                        <p className="text-sm text-muted-foreground">
                            Automatically log out after 30 minutes of inactivity
                        </p>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                        <Label>Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">
                            Managed through your Supabase dashboard
                        </p>
                        <Button variant="outline" size="sm" disabled>
                            Configure in Supabase
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Database */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Database className="h-5 w-5" />
                        <CardTitle>Database</CardTitle>
                    </div>
                    <CardDescription>
                        Database maintenance and utilities
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Storage Usage</Label>
                        <p className="text-sm text-muted-foreground">
                            View and manage your storage in the Supabase dashboard
                        </p>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                        <Label>Backup</Label>
                        <p className="text-sm text-muted-foreground">
                            Regular backups are handled by Supabase automatically
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Appearance */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Palette className="h-5 w-5" />
                        <CardTitle>Appearance</CardTitle>
                    </div>
                    <CardDescription>
                        Customize the look and feel of your admin panel
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Theme</Label>
                        <p className="text-sm text-muted-foreground">
                            Theme preferences are synced with your system settings
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end">
                <Button onClick={handleSave} size="lg">
                    Save Changes
                </Button>
            </div>
        </div>
    );
}
