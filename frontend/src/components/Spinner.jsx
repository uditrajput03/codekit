export default function Spinner({ size = "lg" }) {
    const sizeClasses = {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-12 w-12",
        xl: "h-16 w-16"
    }

    return (
        <div className="flex justify-center items-center min-h-[200px]" role="status" aria-label="Loading">
            <div className={`animate-spin rounded-full border-t-2 border-b-2 border-purple-600 ${sizeClasses[size] || sizeClasses.lg}`}></div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}
