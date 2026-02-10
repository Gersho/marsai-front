function TopPage({ children }) {
  return (
    <div className="min-h-70 flex flex-col items-center justify-center bg-[url(/src/assets/banner-mobile.png)] md:bg-[url(/src/assets/banner.png)]">
      {children}
    </div>
  );
}
export default TopPage;
