function Container({ children }) {
  return (
    <div className="px-8 sm:max-w-2xl md:max-w-5xl lg:max-w-7xl mx-auto">
      {children}
    </div>
  );
}

export default Container;
