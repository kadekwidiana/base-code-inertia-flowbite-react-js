export default function FetchError({ message }) {
    return (
        <div className="flex flex-col justify-center gap-2 my-10 text-red-600">
            <p className="text-center text-lg">{message}</p>
        </div>
    );
}
