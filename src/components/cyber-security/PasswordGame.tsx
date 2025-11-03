
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle } from 'lucide-react';

const requirements = [
    { id: 'length', text: 'At least 12 characters', regex: /.{12,}/ },
    { id: 'uppercase', text: 'One uppercase letter', regex: /[A-Z]/ },
    { id: 'number', text: 'One number', regex: /[0-9]/ },
    { id: 'special', text: 'One special character', regex: /[^A-Za-z0-9]/ },
];

export function PasswordGame() {
    const [password, setPassword] = useState('');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [progress, setProgress] = useState(0);

    const checkPassword = () => {
        let passedCount = 0;
        requirements.forEach(req => {
            if (req.regex.test(password)) {
                passedCount++;
            }
        });

        if (passedCount === requirements.length) {
            setScore(score + 10);
            setProgress(progress + 25);
            if (progress + 25 >= 100) {
                setLevel(level + 1);
                setProgress(0);
            }
            setPassword('');
        }
    };

    return (
        <Card className="security-game">
            <CardHeader>
                <CardTitle className="text-center">Password Defender Game</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                    <div>
                        <p className="text-2xl font-bold">{score}</p>
                        <p className="text-sm text-muted-foreground">Security Points</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">{level}</p>
                        <p className="text-sm text-muted-foreground">Level</p>
                    </div>
                </div>
                <div className="mb-6">
                    <Card>
                        <CardContent className="p-6">
                            <p className="font-semibold mb-2">Create a strong password that includes:</p>
                            <ul className="space-y-2">
                                {requirements.map(req => (
                                    <li key={req.id} className={`flex items-center ${req.regex.test(password) ? 'text-green-600' : 'text-red-600'}`}>
                                        {req.regex.test(password) ? <CheckCircle2 className="mr-2 h-5 w-5" /> : <XCircle className="mr-2 h-5 w-5" />}
                                        {req.text}
                                    </li>
                                ))}
                            </ul>
                            <Input 
                                type="text" 
                                placeholder="Create your password..." 
                                className="mt-4"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button onClick={checkPassword} className="w-full mt-4">Check Password</Button>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Progress value={progress} className="mb-2" />
                    <p className="text-sm text-muted-foreground text-center">Learning Progress</p>
                </div>
            </CardContent>
        </Card>
    );
}
