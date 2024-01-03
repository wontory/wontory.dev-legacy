export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container relative max-w-screen-md py-10">{children}</div>
  )
}
