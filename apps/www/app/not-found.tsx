export default function NotFound() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-primary text-2xl font-semibold">Wontory</div>
      <div className="flex flex-col gap-4">
        <span className="text-muted-foreground/70 text-xl font-medium">
          404 Error
        </span>
        <h1 className="text-4xl font-medium">Page not found</h1>
        <span className="text-muted-foreground font-light">
          The page you are looking for could not be found.
        </span>
      </div>
    </div>
  )
}
