'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Send, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { createClient } from "@/lib/supabase/client";

const violenceTypes = [
  "Harassment",
  "Bullying",
  "Threats",
  "Hate Speech",
  "Doxing",
  "Stalking",
  "Impersonation",
  "Sexual Harassment",
  "Other"
];

const helpTypes = [
  "Legal Assistance",
  "Counseling/Therapy",
  "Police Intervention",
  "Platform Support (Content Removal)",
  "Safety Planning",
  "Support Group",
  "Medical Help",
  "Financial Assistance",
  "Housing Support",
  "Technical Security (Account Protection)",
  "Other"
];

const genderOptions = [
  "Woman",
  "Man",
];

export function AnonymousReportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reportId, setReportId] = useState("");
  const { toast } = useToast();
  const supabase = createClient();

  const [formData, setFormData] = useState({
    violenceType: "",
    description: "",
    platform: "",
    severity: "",
    additionalDetails: "",
    helpReceived: "",
    desiredHelpTypes: [] as string[],
    gender: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.rpc('create_anonymous_report', {
        violence_type_in: formData.violenceType,
        description_in: formData.description,
        platform_in: formData.platform,
        severity_in: formData.severity,
        additional_details_in: formData.additionalDetails,
        help_received_in: formData.helpReceived === 'yes',
        desired_help_types_in: formData.desiredHelpTypes,
        gender_in: formData.gender,
      });

      if (error) throw error;


      setReportId(data);
      setIsSubmitted(true);

      toast({
        title: "Report Submitted Successfully",
        description: "Your anonymous report has been received. Thank you for your courage.",
      });
    } catch (error) {
      console.error("Error submitting report:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-700">Report Received</CardTitle>
            <CardDescription>
              Your anonymous report has been successfully submitted
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              Thank you for your courage in sharing your experience. Your report helps us understand and combat cyber violence.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-2">Your Report ID:</p>
              <p className="font-mono text-lg font-semibold">{reportId}</p>
              <p className="text-xs text-gray-400 mt-2">
                Save this ID for your reference. This is the only information that links to your report.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button
                onClick={() => window.location.href = "/"}
                variant="outline"
              >
                Return Home
              </Button>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    violenceType: "",
                    description: "",
                    platform: "",
                    severity: "",
                    additionalDetails: "",
                    helpReceived: "",
                    desiredHelpTypes: [],
                    gender: ""
                  });
                }}
              >
                Submit Another Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Shield className="h-5 w-5 text-blue-600" />
            <Badge variant="secondary">100% Anonymous</Badge>
          </div>
          <CardTitle>Share Your Experience</CardTitle>
          <CardDescription>
            Your identity will remain completely anonymous. No personal information is collected.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="violenceType">Type of Cyber Violence *</Label>
              <Select
                value={formData.violenceType}
                onValueChange={(value) => setFormData(prev => ({ ...prev, violenceType: value }))}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select the type of violence experienced" />
                </SelectTrigger>
                <SelectContent>
                  {violenceTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="platform">Platform/Social Media *</Label>
              <Input
                id="platform"
                placeholder="e.g., Facebook, Twitter, Instagram, etc."
                value={formData.platform}
                onChange={(e) => setFormData(prev => ({ ...prev, platform: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Gender Identity (Optional)</Label>
              <Select
                value={formData.gender}
                onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your gender identity" />
                </SelectTrigger>
                <SelectContent>
                  {genderOptions.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500 mt-1">
                This helps us understand demographic patterns in cyber violence. Your response is anonymous.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="severity">Severity Level *</Label>
              <Select
                value={formData.severity}
                onValueChange={(value) => setFormData(prev => ({ ...prev, severity: value }))}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="How severe was the incident?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low - Uncomfortable but manageable</SelectItem>
                  <SelectItem value="moderate">Moderate - Caused significant distress</SelectItem>
                  <SelectItem value="high">High - Severe emotional impact</SelectItem>
                  <SelectItem value="severe">Severe - Extremely traumatic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description of Incident *</Label>
              <Textarea
                id="description"
                placeholder="Please describe what happened in detail. Be as specific as you feel comfortable sharing."
                className="min-h-[120px]"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalDetails">Additional Details (Optional)</Label>
              <Textarea
                id="additionalDetails"
                placeholder="Any other information you'd like to share, such as duration, frequency, or impact on your life."
                className="min-h-[80px]"
                value={formData.additionalDetails}
                onChange={(e) => setFormData(prev => ({ ...prev, additionalDetails: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="helpReceived">Were you able to get help after the incident? *</Label>
              <Select
                value={formData.helpReceived}
                onValueChange={(value) => setFormData(prev => ({ ...prev, helpReceived: value }))}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Did you receive any help?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes, I got help</SelectItem>
                  <SelectItem value="no">No, I couldn't get help</SelectItem>
                  <SelectItem value="tried">I tried but help wasn't effective</SelectItem>
                  <SelectItem value="not_needed">I didn't need help</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>What type of help would you have liked to receive? (Select all that apply)</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {helpTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={type}
                      checked={formData.desiredHelpTypes.includes(type)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData(prev => ({
                            ...prev,
                            desiredHelpTypes: [...prev.desiredHelpTypes, type]
                          }));
                        } else {
                          setFormData(prev => ({
                            ...prev,
                            desiredHelpTypes: prev.desiredHelpTypes.filter(t => t !== type)
                          }));
                        }
                      }}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <Label htmlFor={type} className="text-sm font-normal text-gray-700">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">Privacy Notice:</p>
                  <ul className="text-xs space-y-1 text-blue-700">
                    <li>• No IP addresses or personal identifiers are stored</li>
                    <li>• Your report is completely anonymous</li>
                    <li>• Information is used for statistical analysis and awareness</li>
                    <li>• Reports may be shared with relevant authorities for prevention efforts</li>
                  </ul>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
              size="lg"
            >
              {isSubmitting ? (
                <>Submitting Report...</>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Submit Anonymous Report
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}