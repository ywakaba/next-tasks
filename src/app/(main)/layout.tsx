import SideMenu from "@/components/SideMenu/SideMenu";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen">
      <SideMenu />
      {/* <div className='bg-indigo-300'>サイドメニュー</div> */}
      <main className='bg-slate-50 flex-1 overflow-auto'>{children}</main>
    </div>
  )
}

export default MainLayout