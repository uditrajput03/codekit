export function AlertSuccess({ message }) {
    return (
        <div className="p-4 my-4 text-sm text-green-800 rounded-lg bg-green-100" role="alert">
            <span className="font-medium">Success: </span>{message}
        </div>
    );
}

export function AlertWarning({ message }) {
    return (
        <div className="p-4 my-4 text-sm text-yellow-800 rounded-lg bg-yellow-50" role="alert">
            <span className="font-medium">Warning: </span>{message}
        </div>
    );
}

export function AlertError({ message = "Something went wrong. Please try again later" }) {
    return (
        <div className="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
            <span className="font-medium">Error: </span>{message}
        </div>
    );
}
