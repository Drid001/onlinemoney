interface AdSlotProps {
  slot: "header-banner" | "post-top" | "post-bottom" | "sidebar"
  className?: string
}

export default function AdSlot({ slot, className = "" }: AdSlotProps) {
  // In a real implementation, you would integrate with Google AdSense or other ad providers
  const adConfig = {
    "header-banner": { width: "728px", height: "90px", text: "Header Banner Ad" },
    "post-top": { width: "100%", height: "250px", text: "Post Top Ad" },
    "post-bottom": { width: "100%", height: "250px", text: "Post Bottom Ad" },
    sidebar: { width: "300px", height: "250px", text: "Sidebar Ad" },
  }

  const config = adConfig[slot]

  return (
    <div
      className={`bg-muted border-2 border-dashed border-muted-foreground/20 flex items-center justify-center text-muted-foreground my-4 ${className}`}
      style={{ width: config.width, height: config.height, maxWidth: "100%" }}
    >
      <div className="text-center">
        <p className="text-sm font-medium">{config.text}</p>
        <p className="text-xs">Advertisement Space</p>
      </div>
    </div>
  )
}
