const Toast = (message: string) => {
  return (
    <div className="toast toast-top toast-center">
      <div className="alert shadow-lg bg-foreground text-background border-0 rounded-sm">
        <span className="mono-label text-xs tracking-[0.15em]">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
