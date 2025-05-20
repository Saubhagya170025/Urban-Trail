import "@/app/globals.css" 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <h1>This is for form section</h1>
        {children}
    </>
  )
}

