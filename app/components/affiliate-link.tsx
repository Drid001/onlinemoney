import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AffiliateLinkProps {
  href: string
  text: string
  className?: string
}

export default function AffiliateLink({ href, text, className = "" }: AffiliateLinkProps) {
  return (
    <div className={`p-4 bg-primary/5 border border-primary/20 rounded-lg ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-medium text-primary">AFFILIATE LINK</span>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{text}</p>
      <Button asChild variant="default" size="sm">
        <a href={href} target="_blank" rel="noopener noreferrer nofollow">
          Learn More <ExternalLink className="h-4 w-4 ml-2" />
        </a>
      </Button>
    </div>
  )
}
