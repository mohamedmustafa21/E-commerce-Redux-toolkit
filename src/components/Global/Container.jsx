function Container({ children }) {
  return (
    <div className="px-8 sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto">
      {children}
    </div>
  );
}

export default Container;
