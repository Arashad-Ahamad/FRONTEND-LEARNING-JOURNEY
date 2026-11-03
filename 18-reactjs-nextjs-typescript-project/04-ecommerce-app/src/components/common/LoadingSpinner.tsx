export default function LoadingSpinner() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto size-12 animate-spin rounded-full border-4 border-muted border-t-primary" />
        <p className="mt-4 text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
