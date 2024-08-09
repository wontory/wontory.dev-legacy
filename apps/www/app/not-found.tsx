export default function NotFound() {
  return (
    <div className="flex flex-col gap-8">
      <div className="font-semibold text-2xl text-primary">Wontory</div>
      <div className="flex flex-col gap-4">
        <span className="font-medium text-muted-foreground/70 text-xl">
          404 Error
        </span>
        <h1 className="font-medium text-4xl">Page not found</h1>
        <span className="font-light text-muted-foreground">
          The page you are looking for could not be found.
        </span>
      </div>
    </div>
  )
}
