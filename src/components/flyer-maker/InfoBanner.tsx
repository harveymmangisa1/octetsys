
import { Card, CardContent } from "@/components/ui/card"
import { Info } from "lucide-react"

export function InfoBanner() {
  return (
    <Card className="bg-blue-50 border-blue-200">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Info className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-blue-900">16 Days of Activism Flyer Generator</h3>
            <p className="text-sm text-blue-800/90 mt-1">
              Create a personalized flyer to show your support for the campaign against Gender-Based Violence. 
              Follow the steps to upload a photo, choose a powerful quote, select a theme, and download your flyer to share on social media.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
